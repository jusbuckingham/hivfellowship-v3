import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Image
          src="/images/header/logo-ss.png"
          alt="HIV Clinical Fellowship Logo"
          className="header-logo"
          width={200}
          height={60}
          priority
        />
        <nav className="header-nav" aria-label="Main navigation">
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