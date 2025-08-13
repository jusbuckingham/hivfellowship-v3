"use client";
import React from 'react';
import SmartImage from './SmartImage';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header role="banner" className="site-header w-full bg-[#162363]">
      <div className="flex items-center justify-between w-full px-2 py-1 sm:px-4 sm:py-2 md:px-0 md:py-1 flex-wrap">
        <div className="logo-slot flex-none w-[160px] sm:w-[200px] md:w-[300px] xl:w-[360px]">
          <SmartImage
            src="/images/header/test-logo-ss.webp"
            alt="HIV Clinical Fellowship Logo"
            className="header-logo"
            width={360}
            height={104}
            priority
          />
        </div>
        <nav className="header-nav w-full mx-auto flex items-center justify-center flex-1 min-w-0 gap-1 sm:gap-4 md:gap-8 xl:gap-12 text-xs sm:text-sm md:text-base xl:text-lg whitespace-normal sm:whitespace-nowrap text-white flex-wrap" aria-label="Main navigation">
          <Link
            href="/"
            className={`px-1 py-0.5 sm:px-2 sm:py-1 transition opacity-90 hover:opacity-100 ${pathname === '/' ? 'font-semibold' : 'font-medium'}`}
          >
            About
          </Link>
          <Link
            href="/program"
            className={`px-1 py-0.5 sm:px-2 sm:py-1 transition opacity-90 hover:opacity-100 ${pathname === '/program' ? 'font-semibold' : 'font-medium'}`}
          >
            Program
          </Link>
          <Link
            href="/curriculum"
            className={`px-1 py-0.5 sm:px-2 sm:py-1 transition opacity-90 hover:opacity-100 ${pathname === '/curriculum' ? 'font-semibold' : 'font-medium'}`}
          >
            Curriculum
          </Link>
          <Link
            href="/who-we-are"
            className={`px-1 py-0.5 sm:px-2 sm:py-1 transition opacity-90 hover:opacity-100 ${pathname === '/who-we-are' ? 'font-semibold' : 'font-medium'}`}
          >
            Who We Are
          </Link>
          <Link
            href="/apply"
            className={`px-1 py-0.5 sm:px-2 sm:py-1 transition opacity-90 hover:opacity-100 ${pathname === '/apply' ? 'font-semibold' : 'font-medium'}`}
          >
            Apply
          </Link>
        </nav>
        <div className="hidden sm:block logo-slot flex-none w-[160px] sm:w-[200px] md:w-[300px] xl:w-[360px]" aria-hidden />
      </div>
    </header>
  );
}