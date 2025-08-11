# HIV Clinical Fellowship – v3

A modern, JSON-driven, content-managed website for the HIV Clinical Fellowship program. Designed for speed, accessibility, and effortless maintenance, it leverages Next.js (App Router), React, and TypeScript with structured JSON content and custom CSS.

## 🚀 Features

- **Next.js App Router**: Harness layouts, nested routes, and server components for a seamless user experience.  
- **Responsive & Accessible**: Mobile-first design with semantic HTML and accessible navigation ensures usability for all.  
- **Custom Styling**: Tailwind CSS with PostCSS plus global styles for a polished, consistent look.  
- **Instant Previews & Deploys**: One-click deployment on Vercel with automatic previews on every pull request.

## 🛠 Tech Stack

- **Next.js (App Router)** – Modern routing and server components  
- **React** – Interactive UI building blocks  
- **TypeScript** – Type-safe development  
- **Tailwind CSS & PostCSS** – Utility-first styling with post-processing  
- **JSON** – Easy content management  
- **Vercel** – Fast, scalable hosting and deployment

## 📁 Project Structure

Organized for clarity, maintainability, and scalability.

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
└── design-docs/                 # Design assets and wireframes
```

## 📐 Design Documentation

Refer to the `design-docs/` directory for the latest design specs, wireframes, and style guides to ensure consistent visuals.

## 🔧 Getting Started

Clone the repo and follow these steps:

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

Edit JSON files in `/data` to update content instantly. Changes reflect immediately without redeploying—unless you modify images or code.

## 📸 Images & Assets

Store images under `public/images` in page-specific folders (e.g., `public/images/apply/apply-ss.png`). For best performance, use optimized formats like `.webp`. Use Next.js `<Image>` for automatic optimization.

## 📦 Deployment

Push to `main` and Vercel automatically deploys your site with instant previews on pull requests.

## 🤝 Contributing

1. Fork and create a branch:  
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