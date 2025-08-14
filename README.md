# HIV Clinical Fellowship – v3

A modern, JSON‑driven website for the HIV Clinical Fellowship program. Built with **Next.js (App Router)**, **React**, and **TypeScript**, styled with **Tailwind CSS** + global CSS. Optimized for performance, accessibility, and easy content updates through structured JSON files.

## 🚀 Features

- **Next.js App Router**: layouts, nested routes, and server components
- **Responsive & Accessible**: semantic HTML, keyboard-friendly menus, skip/hover/focus states
- **Custom Styling**: Tailwind utilities + handcrafted global CSS
- **Clean Navigation**: hover dropdowns for _Program_ (Overview & Benefits, Partnerships) and _Who We Are_ (Faculty, Fellows)
- **Dynamic People Grids**:
  - Faculty: Leadership (4×2), Clinical Team (3×3)
  - Fellows: current section unchanged; Alumni rows auto‑center and adapt (1, 2, 3, or 4+ across)
- **Image Pipeline**: WebP‑first policy with automated conversion hooks
  - Pre‑commit: converts staged/unstaged `public/**/*.png|jpg|jpeg` → real **.webp**, deletes originals, and updates references in `app/`, `components/`, `pages/`, `data/`
  - Pre‑push: blocks pushes if any non‑WebP remain in `public/`
- **Instant Deploys**: Vercel previews and production deploys

## 🛠 Tech Stack

- **Next.js (App Router)** • **React** • **TypeScript**
- **Tailwind CSS & PostCSS**
- **JSON content** under `/data`
- **Vercel** for hosting
- **Husky** Git hooks for image enforcement

## 📁 Project Structure

```
hivfellowship-v3/
├── app/                         # Next.js App Router pages
│   ├── layout.tsx               # Root layout (Header & Footer)
│   ├── page.tsx                 # Home / About landing
│   ├── about/                   # About page
│   ├── program/                 # Program: overview-benefits, partnerships
│   ├── curriculum/              # Curriculum
│   ├── who-we-are/              # Who We Are: faculty, fellows
│   └── apply/                   # Apply page & form
├── components/                  # Shared UI
│   ├── Header.tsx               # Dropdown menus (hover)
│   ├── Footer.tsx
│   └── Layout.tsx
├── data/                        # JSON content
│   ├── about.json
│   ├── partnerships.json
│   ├── overview-benefits.json
│   ├── curriculum.json
│   ├── faculty.json
│   ├── fellows.json
│   └── apply.json
├── public/images/               # Static assets (WebP preferred)
├── app/globals.css              # Global styles
├── .husky/                      # Git hooks (pre-commit, pre-push)
├── tailwind.config.cjs          # Tailwind config
├── postcss.config.cjs           # PostCSS config
├── tsconfig.json                # TypeScript config
├── next.config.js               # Next.js config
└── design-docs/                 # Design assets / wireframes
```

## 🔧 Getting Started

1) **Install dependencies**
```bash
npm install
```

2) **Run the development server**
```bash
npm run dev
# Open http://localhost:3000
```

3) **Build & start**
```bash
npm run build && npm start
```

### Husky hooks (already configured)
- On commit: converts any `public/**/*.png|jpg|jpeg` → **.webp** (PNG lossless, JPEG quality 80), deletes originals, and updates references in `app/`, `components/`, `pages/`, `data/`.
- On push: rejects the push if any non‑WebP images remain in `public/`.

> If hooks don’t run after cloning, ensure Husky is installed by running:
> ```bash
> npm install
> ```

## 📸 Images & Assets

- **WebP‑first**. Place images under `public/images/...` and reference them by path (Next.js serves from `/images/...`).
- If you add PNG/JPGs under `public/`, the **pre‑commit** hook will convert them to real WebP and update references automatically.
- For manual, one‑off conversion:
```bash
# Convert all PNG/JPG in public/ to WebP (quality 80) and keep originals
find public -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) \
  | while read -r f; do cwebp -q 80 "$f" -o "${f%.*}.webp"; done
```

## 🧭 Notable UI Details

- Dropdown menus open on **hover** and via **keyboard focus**; labels match the top‑nav styling
- About page hero is **flush** to the header (only on About); other pages get consistent spacing under the sticky header
- Partnerships heading size now matches Core Collaborators
- Curriculum teaching sections use proper HTML lists (no `<ul>` inside `<p>`), fixing hydration issues

## 📝 Content Management

- Edit JSON files in `/data` to update page content
- Example: `data/apply.json` corrected “Clinical Leadership Program” → **“HIV Clinical Fellowship”** where applicable

## 📦 Deployment

- Push to `main` → Vercel deploys automatically (previews on PRs)

## 🤝 Contributing

1. Create a branch
```bash
git checkout -b feature/your-feature
```
2. Commit with conventional messages
```bash
git add -A
git commit -m "feat(nav): improve dropdown styling"
```
3. Open a PR against `main`

## 📄 License

MIT © JKB21