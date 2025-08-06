# HIV Clinical Fellowship v3

A modern, JSON-driven website for the HIV Clinical Fellowship program, built with Next.js (App Router), React, TypeScript, and custom CSS. Content is fully managed through structured JSON files, making updates fast and code-free.

## Tech Stack

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS** (utility-first styling)
- **PostCSS** (with Tailwind integration)
- **JSON** data files for content
- **Vercel** for deployment

## Project Structure

```
hivfellowship-v3/
├── app/                         # Next.js App Router pages
│   ├── layout.tsx               # Root layout (Header & Footer)
│   ├── page.tsx                 # Home/About page
│   ├── about/
│   │   └── page.tsx             # About details
│   ├── program/
│   │   ├── page.tsx             # Program overview
│   │   ├── partnerships/
│   │   │   └── page.tsx
│   │   └── benefits/
│   │       └── page.tsx
│   ├── curriculum/
│   │   └── page.tsx             # Curriculum page
│   ├── who-we-are/
│   │   ├── page.tsx             # Who We Are overview
│   │   ├── faculty/
│   │   │   └── page.tsx
│   │   └── fellows/
│   │       └── page.tsx
│   └── apply/
│       └── page.tsx             # Apply page
├── components/                  # Shared components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Layout.tsx
├── data/                        # JSON content files
│   ├── about.json
│   ├── partnerships.json
│   ├── overview-benefits.json
│   ├── curriculum.json
│   ├── faculty.json
│   ├── fellows.json
│   └── apply.json
├── public/                      # Static assets (images, etc.)
│   └── images/
├── styles/
│   └── globals.css              # Tailwind directives & custom CSS
├── tailwind.config.cjs          # Tailwind configuration
├── postcss.config.cjs           # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
└── package.json                 # Dependencies & scripts
```

## Getting Started

1. **Install dependencies**  
   ```bash
   npm install
   ```

2. **Run the development server**  
   ```bash
   npm run dev
   # Open http://localhost:3000
   ```

3. **Build for production**  
   ```bash
   npm run build
   npm start
   ```

## Content Management

All page content is driven by JSON files in `/data`. To update:

1. Edit the corresponding JSON file (e.g. `data/about.json`).
2. Save and refresh—no code changes needed!

## Images & Assets

Store images in `public/images` under subfolders matching each page. Reference via Next.js’s `<Image>`:

```tsx
import Image from 'next/image';

<Image src="/images/about/team.jpg" width={600} height={400} alt="Team" />
```

## Deployment

Seamless deployment on Vercel:
1. Commit and push your changes to GitHub.
2. Vercel will auto-deploy your `main` branch to production.

## Contributing

Feel free to open issues or PRs. Run `npm run lint` before committing:

```bash
git checkout -b feature/your-feature
git add .
git commit -m "feat: add new feature"
git push origin feature/your-feature
```

## License

Licensed under MIT.