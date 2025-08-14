#!/bin/sh
set -e

# Usage:
#   DRY_RUN=1 sh scripts/backfill-webp.sh   # preview only
#   sh scripts/backfill-webp.sh             # convert + update + stage

ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
cd "$ROOT"

DRY="${DRY_RUN:-0}"
echo "Backfill WebP (repo-wide): scanning tracked files for PNG/JPG refs… (DRY_RUN=$DRY)"

# sed -i cross-platform
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
    grep -IhoE '([A-Za-z0-9_./-]+)\.(png|jpg|jpeg)' "$f" || true
  fi
done | sort -u > "$REFS_TMP"

# Fallback: also convert any leftover real files in public/
FILES_TMP="$(mktemp)"
find public -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) \
  -not -path "*/node_modules/*" -not -path "*/.git/*" -not -path "*/.next/*" \
  -not -path "*/dist/*" -not -path "*/build/*" \
  > "$FILES_TMP"

convert_one () {
  SRC="$1"  # actual file path on disk
  [ -f "$SRC" ] || return 0

  base_no_ext=${SRC%.*}
  ext=${SRC##*.}
  dst="${base_no_ext}.webp"

  case "$ext" in
    png|PNG)
      if [ "$DRY" = "1" ]; then
        echo "would convert (lossless): $SRC -> $dst"
      else
        cwebp -lossless -m 6 "$SRC" -o "$dst" >/dev/null
      fi
      ;;
    jpg|JPG|jpeg|JPEG)
      if [ "$DRY" = "1" ]; then
        echo "would convert (q=80):     $SRC -> $dst"
      else
        cwebp -q 80 -m 6 "$SRC" -o "$dst" >/dev/null
      fi
      ;;
    *)
      return 0
      ;;
  esac

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
