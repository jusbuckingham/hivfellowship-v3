import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header w-full bg-[#1F2377]">
      <div className="flex items-center justify-between w-full px-6 py-9 sm:px-8 sm:py-12 md:px-12 md:py-16">
        <Image
          src="/images/header/logo-ss.png"
          alt="HIV Clinical Fellowship Logo"
          className="header-logo"
          width={250}
          height={80}
          priority
        />
        <nav className="header-nav flex space-x-6" aria-label="Main navigation">
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