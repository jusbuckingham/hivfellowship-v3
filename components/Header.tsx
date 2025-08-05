// components/Header.tsx

import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <img
          src="/images/about/hiv-fellowship-logo-2.png"
          alt="HIV Clinical Fellowship Logo"
          className="header-logo"
        />
        <nav className="header-nav">
          <Link href="/">About</Link>
          <Link href="/program">Program</Link>
          <Link href="/curriculum">Curriculum</Link>
          <Link href="/who-we-are">Who We Are</Link>
          <Link href="/apply">Apply</Link>
        </nav>
      </div>
    </header>
  );
}