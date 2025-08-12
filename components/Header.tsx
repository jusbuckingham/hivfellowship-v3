"use client";
import React from 'react';
import SmartImage from './SmartImage';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header role="banner" className="site-header w-full bg-[#162363] full-bleed overflow-x-hidden">
      <div className="flex items-center justify-between w-full px-0 py-0 sm:px-0 sm:py-0.5 md:px-0 md:py-1">
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
        <nav className="header-nav mx-auto flex items-center justify-center flex-1 min-w-0 gap-2 sm:gap-6 md:gap-12 xl:gap-20 text-sm sm:text-base md:text-lg xl:text-xl whitespace-normal sm:whitespace-nowrap text-white" aria-label="Main navigation">
          <Link
            href="/"
            className={`py-0.5 sm:py-1 transition opacity-90 hover:opacity-100 ${pathname === '/' ? 'font-semibold' : 'font-medium'}`}
          >
            About
          </Link>
          <Link
            href="/program"
            className={`py-0.5 sm:py-1 transition opacity-90 hover:opacity-100 ${pathname === '/program' ? 'font-semibold' : 'font-medium'}`}
          >
            Program
          </Link>
          <Link
            href="/curriculum"
            className={`py-0.5 sm:py-1 transition opacity-90 hover:opacity-100 ${pathname === '/curriculum' ? 'font-semibold' : 'font-medium'}`}
          >
            Curriculum
          </Link>
          <Link
            href="/who-we-are"
            className={`py-0.5 sm:py-1 transition opacity-90 hover:opacity-100 ${pathname === '/who-we-are' ? 'font-semibold' : 'font-medium'}`}
          >
            Who We Are
          </Link>
          <Link
            href="/apply"
            className={`py-0.5 sm:py-1 transition opacity-90 hover:opacity-100 ${pathname === '/apply' ? 'font-semibold' : 'font-medium'}`}
          >
            Apply
          </Link>
        </nav>
        <div className="hidden sm:block logo-slot flex-none w-[160px] sm:w-[200px] md:w-[300px] xl:w-[360px]" aria-hidden />
      </div>
    </header>
  );
}