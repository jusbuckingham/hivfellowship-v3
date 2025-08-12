// components/Footer.tsx

import React from 'react';
import SmartImage from './SmartImage';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Full-width banner image */}
      <div className="footer-banner">
        <SmartImage
          src="/images/footer/footer-banner-ss.png"
          alt="Los Angeles skyline"
          className="footer-banner-img"
          width={1920}
          height={300}
          priority
        />
      </div>

      {/* Logo strip */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="footer-logos flex justify-center">
          <SmartImage
            src="/images/footer/logo-bar.webp"
            alt="Partner logos"
            className="footer-logo-bar w-full h-auto"
            width={1200}
            height={100}
            priority
          />
        </div>

      {/* Bottom copyright text */}
      <div className="footer-text text-center mt-6">
        <p>© {new Date().getFullYear()} HIV Clinical Fellowship</p>
        <p>Content in this website is property of the HIV Clinical Fellowship.</p>
      </div>
      </div>
    </footer>
  );
}