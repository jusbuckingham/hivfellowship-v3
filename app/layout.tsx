import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";

export const metadata = {
  title: "HIV Clinical Fellowship",
  description: "…",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-white text-slate-900 antialiased overflow-x-hidden">
        <Header />

        {/* The .site-header + main padding is handled in globals.css; we keep main adjacent to header */}
        <main
          id="main-content"
          role="main"
          className="flex-1 mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 lg:py-12"
        >
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">{children}</div>
        </main>

        <Footer />
      </body>
    </html>
  );
}