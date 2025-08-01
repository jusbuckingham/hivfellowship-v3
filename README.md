
# HIV Fellowship v3

This is the third version of the HIV Clinical Fellowship website, built with Next.js (App Router), React, and TypeScript. All page content is driven by JSON files in `/data`, and images are stored under `/public/images`. The site is deployed on Vercel.

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- JSON data files
- Vercel

## Project Structure

```
hivfellowship-v3/
├── app/
│   ├── layout.tsx           # Root layout (header/footer)
│   ├── page.tsx             # About page (home)
│   ├── about/
│   │   └── page.tsx         # About section
│   ├── program/
│   │   ├── page.tsx         # Program overview
│   │   ├── partnerships/
│   │   │   └── page.tsx     # Partnerships
│   │   └── benefits/
│   │       └── page.tsx     # Overview & benefits
│   ├── curriculum/
│   │   └── page.tsx         # Curriculum page
│   ├── who-we-are/
│   │   ├── page.tsx         # Who We Are overview
│   │   ├── faculty/
│   │   │   └── page.tsx     # Faculty
│   │   └── fellows/
│   │       └── page.tsx     # Fellows
│   └── apply/
│       └── page.tsx         # Apply page
├── data/                    # JSON content files
│   ├── about.json
│   ├── program.json
│   ├── curriculum.json
│   ├── faculty.json
│   ├── fellows.json
│   └── apply.json
├── public/
│   └── images/              # All page-specific assets
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Layout.tsx
├── next.config.js
├── tsconfig.json
└── package.json
```

## Getting Started

1. **Install dependencies**  
   ```bash
   npm install
   # or yarn install
   # or pnpm install
   ```

2. **Run the development server**  
   ```bash
   npm run dev
   # or yarn dev
   # or pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Data

All page content lives in `/data` as JSON files. Update these files to change headings, copy, lists, and tables without touching component code.

## Images

Place your image assets in `/public/images` within the folder for each page (e.g. `about/`, `program/partnerships/`, etc.). Reference them with Next.js’s `<Image>` component, e.g.:
```tsx
<Image src="/images/about/team.jpg" width={600} height={400} alt="Team" />
```

## Deployment

1. Commit your changes:
   ```bash
   git add .
   git commit -m "chore: update README"
   ```
2. Push to GitHub and link the repo in Vercel. New pushes to `main` auto-deploy.
