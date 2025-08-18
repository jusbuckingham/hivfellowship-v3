#!/bin/sh
set -e

# Backfill PNG/JPG images to WebP across the repo and update references.
# Usage:
#   DRY_RUN=1 sh scripts/backfill-webp.sh   # preview only
#   sh scripts/backfill-webp.sh             # convert + update + stage

# Ensure required tools exist
if ! command -v cwebp >/dev/null 2>&1; then
  echo "Error: cwebp not found. Install via 'brew install webp' (macOS) or your package manager." >&2
  exit 1
fi
if ! command -v git >/dev/null 2>&1; then
  echo "Error: git not found." >&2
  exit 1
fi

ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
cd "$ROOT"

DRY="${DRY_RUN:-0}"
echo "Backfill WebP (repo-wide): scanning tracked files for PNG/JPG refs… (DRY_RUN=$DRY)"

# sed -i cross-platform helper
sed_inplace () {
  # $1 = pattern; $2 = file
  if sed --version >/dev/null 2>&1; then
    sed -i "$1" "$2"     # GNU
  else
    sed -i '' "$1" "$2"  # macOS/BSD
  fi
}

# Collect tracked code/JSON files that may contain image refs
CODE_FILES=$(git ls-files app components pages data 2>/dev/null || true)

# Extract unique .png/.jpg/.jpeg references as they appear in code
# -I (binary-skip), -h (no filename), -o (only match), -E (ERE)
REFS_TMP="$(mktemp)"
for f in $CODE_FILES; do
  [ -f "$f" ] || continue
  if grep -Iq . "$f"; then
    grep -IhoE '([A-Za-z0-9_./-]+)\.(png|jpg|jpeg|jfif|pjp|pjpeg|tif|tiff|bmp|heic|heif)' "$f" || true
  fi
done | sort -u > "$REFS_TMP"

# Also list all real PNG/JPG files under public/ (even if not referenced)
FILES_TMP="$(mktemp)"
find public -type f \
  \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.jfif" -o -iname "*.pjp" -o -iname "*.pjpeg" \
     -o -iname "*.tif" -o -iname "*.tiff" -o -iname "*.bmp" -o -iname "*.heic" -o -iname "*.heif" \) \
  -not -path "*/node_modules/*" -not -path "*/.git/*" -not -path "*/.next/*" \
  -not -path "*/dist/*" -not -path "*/build/*" \
  > "$FILES_TMP"

convert_one () {
  SRC="$1"  # actual file path on disk
  [ -f "$SRC" ] || return 0

  base_no_ext=${SRC%.*}
  ext=${SRC##*.}
  dst="${base_no_ext}.webp"

  # Skip if WebP already exists and is newer than source
  if [ -f "$dst" ] && [ "$dst" -nt "$SRC" ]; then
    return 0
  fi

  case "$ext" in
    # Skip formats we should not or cannot convert via cwebp here
    webp|WEBP|svg|SVG|ico|ICO|avif|AVIF|gif|GIF|pdf|PDF)
      return 0
      ;;
    # Keep PNG lossless
    png|PNG)
      if [ "$DRY" = "1" ]; then
        echo "would convert (lossless): $SRC -> $dst"
      else
        if ! cwebp -lossless -m 6 "$SRC" -o "$dst" >/dev/null 2>&1; then
          echo "warn: cwebp failed for $SRC; skipping" >&2
          return 0
        fi
      fi
      ;;
    # Everything else lossy at q=80 (jpg/jpeg/jfif/pjp/pjpeg/tiff/tif/bmp/heic/heif, etc.)
    *)
      if [ "$DRY" = "1" ]; then
        echo "would convert (q=80):     $SRC -> $dst"
      else
        if ! cwebp -q 80 -m 6 "$SRC" -o "$dst" >/dev/null 2>&1; then
          echo "warn: cwebp failed for $SRC; skipping" >&2
          return 0
        fi
      fi
      ;;
  esac

  # If conversion didn't produce a destination file, abort deletion
  if [ ! -f "$dst" ]; then
    return 0
  fi

  if [ "$DRY" = "1" ]; then
    echo "would delete original:     $SRC"
  else
    git rm -q --cached -- "$SRC" 2>/dev/null || true
    rm -f -- "$SRC"
    git add -- "$dst"
  fi
}

update_refs () {
  OLD_REF="$1"   # the exact string found in code (could be '/images/..' or 'images/..' or basename)
  NEW_REF="${OLD_REF%.*}.webp"
  OLD_BASE=$(basename "$OLD_REF")
  NEW_BASE="${OLD_BASE%.*}.webp"

  for f in $CODE_FILES; do
    [ -f "$f" ] || continue
    if grep -Iq . "$f"; then
      # Replace exact match of OLD_REF first
      if grep -q "$OLD_REF" "$f"; then
        if [ "$DRY" = "1" ]; then
          echo "would update reference in: $f  ($OLD_REF -> $NEW_REF)"
        else
          sed_inplace "s|$OLD_REF|$NEW_REF|g" "$f"
          git add -- "$f"
        fi
      fi
      # Also replace by basename as a fallback (if basenames are used)
      if [ "$OLD_BASE" != "$OLD_REF" ] && grep -q "$OLD_BASE" "$f"; then
        if [ "$DRY" = "1" ]; then
          echo "would update basename in : $f  ($OLD_BASE -> $NEW_BASE)"
        else
          sed_inplace "s|$OLD_BASE|$NEW_BASE|g" "$f"
          git add -- "$f"
        fi
      fi
    fi
  done
}

# Process references found in code
while IFS= read -r REF; do
  [ -n "$REF" ] || continue

  # Resolve referenced path to an actual file on disk
  CAND=""
  # 1) If REF starts with '/', treat as public/REF
  case "$REF" in
    /*) [ -f "public$REF" ] && CAND="public$REF" ;;
  esac
  # 2) If not found, try REF as-is (maybe already 'public/...' or a relative path)
  [ -z "$CAND" ] && [ -f "$REF" ] && CAND="$REF"
  # 3) Try public/ + REF
  [ -z "$CAND" ] && [ -f "public/$REF" ] && CAND="public/$REF"
  # 4) As a last resort, search by basename under public/
  if [ -z "$CAND" ]; then
    NAME=$(basename "$REF")
    CAND=$(find public -type f -name "$NAME" | head -n 1 || true)
  fi

  if [ -n "$CAND" ]; then
    convert_one "$CAND"
    update_refs "$REF"
  else
    echo "warn: could not resolve referenced image: $REF" >&2
  fi
done < "$REFS_TMP"

# Also convert any remaining real files in public/ (not necessarily referenced)
while IFS= read -r IMG; do
  convert_one "$IMG"
done < "$FILES_TMP"

[ "$DRY" != "1" ] && git add -A

rm -f "$REFS_TMP" "$FILES_TMP" 2>/dev/null || true

echo "Backfill WebP (repo-wide): done (DRY_RUN=$DRY)."
