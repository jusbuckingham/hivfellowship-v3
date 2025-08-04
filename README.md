
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

# HIV Clinical Fellowship v3

A modern, JSON-driven website for the HIV Clinical Fellowship program, built with Next.js (App Router), React, TypeScript, and Tailwind CSS. Content is fully managed through structured JSON files, making updates fast and code-free.

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
│   ├── page.tsx                 # Home / About section
│   ├── about/page.tsx           # About details
│   ├── program/
│   │   ├── page.tsx             # Program overview
│   │   ├── partnerships/page.tsx
│   │   └── benefits/page.tsx
│   ├── curriculum/page.tsx      # Curriculum page
│   ├── who-we-are/
│   │   ├── page.tsx             # Who We Are overview
│   │   ├── faculty/page.tsx
│   │   └── fellows/page.tsx
│   └── apply/page.tsx           # Apply page
├── components/                  # Shared components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Layout.tsx
├── data/                        # JSON content files
│   ├── about.json
│   ├── program.json
│   ├── curriculum.json
│   ├── faculty.json
│   ├── fellows.json
│   └── apply.json
├── public/                      # Static assets (images, etc.)
│   └── images/
├── styles/
│   └── globals.css              # Tailwind directives & custom CSS
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
└── package.json                 # Dependencies & scripts
```

## Getting Started

1. **Install dependencies**  
   ```bash
   npm install
   ```
   _(Installs Next.js, React, Tailwind CSS, PostCSS, and other libs.)_

2. **Configure Tailwind CSS**  
   Tailwind is preconfigured via `tailwind.config.js` and `postcss.config.js`.  
   Ensure your global styles in `styles/globals.css` include:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

3. **Run the development server**  
   ```bash
   npm run dev
   # Open http://localhost:3000
   ```

4. **Build for production**  
   ```bash
   npm run build
   npm start
   ```

## Content Management

All page content (headings, copy, lists, tables) is driven by JSON files under `/data`. To update page content:

1. Edit the corresponding JSON file (e.g. `data/about.json`).
2. Save and refresh the site—no code changes needed!

## Images & Assets

Store images in `public/images` under subfolders matching each page. Reference them via Next.js’s `<Image>` component:

```tsx
import Image from 'next/image';

<Image
  src="/images/about/team.jpg"
  width={600}
  height={400}
  alt="Our Team"
/>
```

## Deployment

This project is configured for seamless deployment on Vercel:

1. Push your repository to GitHub.
2. Import the project in Vercel.
3. Vercel will build and deploy on every push to `main`.

## Contributing

Feel free to open issues or submit PRs. Please follow the existing coding patterns and run `npm run lint` before committing.

```bash
git checkout -b feature/your-feature
git add .
git commit -m "feat: add new feature"
git push origin feature/your-feature
```

## License

Licensed under MIT.