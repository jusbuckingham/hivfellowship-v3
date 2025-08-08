# HIV Clinical Fellowship v3

A JSON-driven, content-managed website for the HIV Clinical Fellowship program. Built with Next.js (App Router), React, and TypeScript, the site uses structured JSON files for all page content and custom CSS for styling, making updates seamless and code-free.

## 🚀 Features

- **App Router**: Leverages Next.js 15’s App Router for layouts, nested routing, and server components.
- **Responsive & Accessible**: Mobile-first design with semantic HTML, accessible navigation, and form controls.
- **Custom CSS**: Tailwind CSS setup with PostCSS, plus additional global styles in `app/globals.css`.
- **Vercel Deployment**: One-click deploys on Vercel with instant previews on each PR.

## 🛠 Tech Stack

- **Next.js** (App Router)  
- **React**  
- **TypeScript**  
- **Tailwind CSS** & **PostCSS**  
- **JSON** for content  
- **Vercel** for hosting

## 📁 Project Structure

```
hivfellowship-v3/
├── app/                         # Next.js App Router pages
│   ├── layout.tsx               # Root layout (Header & Footer)
│   ├── page.tsx                 # Home/About landing
│   ├── about/                   # About page
│   ├── program/                 # Program overview, partnerships, benefits
│   ├── curriculum/              # Curriculum page
│   ├── who-we-are/              # Who We Are overview, faculty, fellows
│   └── apply/                   # Apply page & form
├── components/                  # Shared UI components
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
├── public/images/               # Static assets & page-specific images
├── app/globals.css              # Global styles & custom CSS
├── tailwind.config.cjs          # Tailwind configuration
├── postcss.config.cjs           # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
└── package.json                 # Dependencies & scripts
```

## 📐 Design Documentation

All design specifications, wireframes, and style guides are maintained in the `hiv-fellowship-design-docs/` directory. Feel free to review or update the design assets there to keep the site’s look consistent.

## 🔧 Getting Started

1. **Install dependencies**  
   ```bash
   npm install
   ```

2. **Run development server**  
   ```bash
   npm run dev
   # Open http://localhost:3000
   ```

3. **Build & start**  
   ```bash
   npm run build
   npm start
   ```

## 📋 Content Management

- Edit or extend page content by modifying the JSON files in `/data`.
- No additional code changes required—pages auto‑render JSON content.

## 📸 Images & Assets

- Place images under `public/images` in subfolders matching pages (e.g., `public/images/apply/apply-ss.png`).
- Use Next.js `<Image>` component for optimized loading.

## 📦 Deployment

Push to GitHub and Vercel will auto‑deploy the `main` branch.  
Configure environment variables in the Vercel dashboard as needed.

## 🤝 Contributing

1. Fork the repo and create a branch:  
   ```bash
   git checkout -b feature/your-feature
   ```
2. Commit your changes:  
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```
3. Push and open a PR against `main`.

## 📄 License

MIT © JKB21