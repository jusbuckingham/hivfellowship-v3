"use client";
import React, { useEffect, useRef, useState } from 'react';
import SmartImage from './SmartImage';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const [programOpen, setProgramOpen] = useState(false);
  const programMenuRef = useRef<HTMLDivElement | null>(null);

  const [whoOpen, setWhoOpen] = useState(false);
  const whoMenuRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on escape key or outside click
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setProgramOpen(false);
    }
    function onClick(e: MouseEvent) {
      const t = e.target as Node;
      if (programMenuRef.current && !programMenuRef.current.contains(t)) {
        setProgramOpen(false);
      }
      if (whoMenuRef.current && !whoMenuRef.current.contains(t)) {
        setWhoOpen(false);
      }
    }
    window.addEventListener('keydown', onKey);
    window.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('click', onClick);
    };
  }, []);

  // Close when route changes
  useEffect(() => {
    setProgramOpen(false);
    setWhoOpen(false);
  }, [pathname]);

  return (
    <header role="banner" className="site-header w-full bg-[#162363]">
      <div className="flex items-center justify-between w-full px-2 py-3 sm:px-4 sm:py-4 md:px-0 md:py-3 flex-wrap">
        <div className="logo-slot flex-none w-[350px] sm:w-[450px] md:w-[600px] xl:w-[735px]">
          <SmartImage
            src="/images/header/test-logo-ss.webp"
            alt="HIV Clinical Fellowship Logo"
            className="header-logo max-w-none w-auto"
            style={{ objectFit: 'contain' }}
            width={735}
            height={210}
            priority
          />
        </div>
        <nav className="relative header-nav w-full mx-auto flex items-center justify-center flex-1 min-w-0 gap-1 sm:gap-4 md:gap-8 xl:gap-12 text-xs sm:text-sm md:text-base xl:text-lg whitespace-normal sm:whitespace-nowrap text-white flex-wrap" aria-label="Main navigation">
          <Link
            href="/"
            className={`px-1 py-0.5 sm:px-2 sm:py-1 transition opacity-90 hover:opacity-100`}
          >
            About
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setProgramOpen(true)}
            onMouseLeave={() => setProgramOpen(false)}
            ref={programMenuRef}
          >
            <span
              role="button"
              aria-haspopup="menu"
              aria-expanded={programOpen}
              aria-controls="program-menu"
              className={`px-1 py-0.5 sm:px-2 sm:py-1 transition opacity-90 hover:opacity-100 select-none cursor-default`}
            >
              Program
            </span>

            <div
              id="program-menu"
              role="menu"
              className={`${programOpen ? 'block' : 'hidden'} absolute left-0 mt-3 min-w-[220px] rounded-xl shadow-2xl ring-1 ring-black/10 overflow-hidden z-[80]`}
            >
              <Link
                role="menuitem"
                href="/program/benefits"
                className="block px-5 py-3 text-sm text-white transition-colors duration-150"
              >
                Overview & Benefits
              </Link>
              <Link
                role="menuitem"
                href="/program/partnerships"
                className="block px-5 py-3 text-sm text-white transition-colors duration-150"
              >
                Partnerships
              </Link>
            </div>
          </div>
          <Link
            href="/curriculum"
            className={`px-1 py-0.5 sm:px-2 sm:py-1 transition opacity-90 hover:opacity-100`}
          >
            Curriculum
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setWhoOpen(true)}
            onMouseLeave={() => setWhoOpen(false)}
            ref={whoMenuRef}
          >
            <span
              role="button"
              aria-haspopup="menu"
              aria-expanded={whoOpen}
              aria-controls="who-menu"
              className={`px-1 py-0.5 sm:px-2 sm:py-1 transition opacity-90 hover:opacity-100 select-none cursor-default`}
            >
              Who We Are
            </span>

            <div
              id="who-menu"
              role="menu"
              className={`${whoOpen ? 'block' : 'hidden'} absolute left-1/2 -translate-x-1/2 top-full mt-3 min-w-[220px] rounded-xl shadow-2xl ring-1 ring-black/10 overflow-hidden z-[80]`}
            >
              <Link
                role="menuitem"
                href="/who-we-are/faculty"
                className="block px-5 py-3 text-sm text-white transition-colors duration-150"
              >
                Faculty
              </Link>
              <Link
                role="menuitem"
                href="/who-we-are/fellows"
                className="block px-5 py-3 text-sm text-white transition-colors duration-150"
              >
                Fellows
              </Link>
            </div>
          </div>
          <Link
            href="/apply"
            className={`px-1 py-0.5 sm:px-2 sm:py-1 transition opacity-90 hover:opacity-100`}
          >
            Apply
          </Link>
        </nav>
        <div className="hidden sm:block logo-slot flex-none w-[350px] sm:w-[450px] md:w-[600px] xl:w-[735px]" aria-hidden />
      </div>
    </header>
  );
}