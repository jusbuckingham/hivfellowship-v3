// components/Footer.tsx

import React from 'react';
import SmartImage from './SmartImage';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" aria-labelledby="footer-heading" className="mt-12 border-t border-slate-200 bg-white">
      {/* Visually hidden heading for assistive tech */}
      <h2 id="footer-heading" className="sr-only">Site footer</h2>

      {/* Full-bleed banner (no global classes) */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
        <SmartImage
          src="/images/footer/footer-banner-ss.webp"
          alt=""
          aria-hidden
          width={1920}
          height={300}
          sizes="100vw"
          priority={false}
          quality={90}
          className="block w-full h-auto"
        />
      </div>

      {/* Logo strip */}
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 py-6 md:py-8 bg-white">
          <SmartImage
            src="/images/footer/logo-bar.webp"
            alt="Partner logos"
            width={1200}
            height={100}
            sizes="(max-width: 640px) 95vw, (max-width: 1024px) 80vw, 60vw"
            priority={false}
            className="w-full h-auto"
          />
        </div>

        {/* Bottom text */}
        <div className="mt-0 rounded-xl bg-primary text-white text-center px-6 py-6 shadow-sm">
          <p>© {year} HIV Clinical Fellowship</p>
          <p>Content on this website is property of the HIV Clinical Fellowship.</p>
        </div>
      </div>
    </footer>
  );
}