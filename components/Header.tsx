"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header role="banner" className="site-header w-full bg-[#1C297B]">
      <div className="flex items-center justify-between w-full px-6 py-9 sm:px-8 sm:py-12 md:px-12 md:py-16">
        <Image
          src="/images/header/logo-ss.png"
          alt="HIV Clinical Fellowship Logo"
          className="header-logo max-w-[60%] sm:max-w-[40%]"
          width={170}
          height={54}
          priority
        />
        <nav className="header-nav flex flex-wrap justify-center gap-6" aria-label="Main navigation">
          <Link
            href="/"
            className={`py-2 text-white hover:text-gray-200 ${pathname === '/' ? 'font-bold underline' : ''}`}
          >
            About
          </Link>
          <Link
            href="/program"
            className={`py-2 text-white hover:text-gray-200 ${pathname === '/program' ? 'font-bold underline' : ''}`}
          >
            Program
          </Link>
          <Link
            href="/curriculum"
            className={`py-2 text-white hover:text-gray-200 ${pathname === '/curriculum' ? 'font-bold underline' : ''}`}
          >
            Curriculum
          </Link>
          <Link
            href="/who-we-are"
            className={`py-2 text-white hover:text-gray-200 ${pathname === '/who-we-are' ? 'font-bold underline' : ''}`}
          >
            Who We Are
          </Link>
          <Link
            href="/apply"
            className={`py-2 text-white hover:text-gray-200 ${pathname === '/apply' ? 'font-bold underline' : ''}`}
          >
            Apply
          </Link>
        </nav>
      </div>
    </header>
  );
}