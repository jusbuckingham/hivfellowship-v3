"use client";
import React, { useState } from "react";
import SmartImage from "./SmartImage";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      role="banner"
      className="site-header sticky top-0 z-50 w-full bg-[#162363] text-white"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <SmartImage
            src="/images/header/test-logo-ss.webp"
            alt="HIV Clinical Fellowship Logo"
            className="block w-auto max-h-[40px] sm:max-h-[48px] md:max-h-[56px]"
            style={{ objectFit: "contain" }}
            width={735}
            height={210}
            sizes="(max-width: 768px) 180px, 220px"
            priority
          />
          <span className="ml-2 text-white font-semibold text-lg sm:text-xl">HIV Clinical Fellowship</span>
          <span className="sr-only">Home</span>
        </Link>

        {/* Desktop nav (minimal) */}
        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-6 lg:gap-8 text-sm lg:text-base">
            <li className="pl-0 first:pl-0 first:border-l-0"><HeaderLink href="/about" label="About" /></li>
            <li className="pl-4 border-l border-white/15"><HeaderLink href="/benefits" label="Benefits" /></li>
            <li className="pl-4 border-l border-white/15"><HeaderLink href="/curriculum" label="Curriculum" /></li>
            <li className="pl-4 border-l border-white/15"><HeaderLink href="/faculty" label="Faculty" /></li>
            <li className="pl-4 border-l border-white/15"><HeaderLink href="/fellows" label="Fellows" /></li>
            <li className="pl-4 border-l border-white/15"><HeaderLink href="/partnerships" label="Partnerships" /></li>
            <li className="pl-4 border-l border-white/15"><HeaderLink href="/apply" label="Apply" emphasize /></li>
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 border border-white/30"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="flex items-center gap-2">
              <div aria-hidden="true" className="relative h-5 w-5">
                <span className={`absolute inset-x-0 top-[2px] h-[2px] rounded bg-white transition-transform duration-200 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
                <span className={`absolute inset-x-0 top-[9px] h-[2px] rounded bg-white transition-opacity duration-200 ${mobileOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`absolute inset-x-0 top-[16px] h-[2px] rounded bg-white transition-transform duration-200 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
              </div>
              <span className="text-sm leading-none text-white/90">{mobileOpen ? 'Close' : 'Menu'}</span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile panel (minimal) */}
      <div
        id="mobile-menu"
        className={`${mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} w-full overflow-hidden transition-[max-height,opacity] duration-300 ease-out md:hidden bg-[#162363] text-white`}
        aria-hidden={!mobileOpen}
      >
        <nav aria-label="Mobile navigation" className="px-4 py-4">
          <ul className="flex flex-col divide-y divide-white/10">
            <li className="py-2"><MobileNavLink href="/about" label="About" onNavigate={() => setMobileOpen(false)} /></li>
            <li className="py-2"><MobileNavLink href="/benefits" label="Benefits" onNavigate={() => setMobileOpen(false)} /></li>
            <li className="py-2"><MobileNavLink href="/curriculum" label="Curriculum" onNavigate={() => setMobileOpen(false)} /></li>
            <li className="py-2"><MobileNavLink href="/faculty" label="Faculty" onNavigate={() => setMobileOpen(false)} /></li>
            <li className="py-2"><MobileNavLink href="/fellows" label="Fellows" onNavigate={() => setMobileOpen(false)} /></li>
            <li className="py-2"><MobileNavLink href="/partnerships" label="Partnerships" onNavigate={() => setMobileOpen(false)} /></li>
            <li className="pt-3">
              <Link
                href="/apply"
                onClick={() => setMobileOpen(false)}
                className="mt-2 block w-full rounded-md border border-white/40 px-3 py-2 text-center text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                Apply
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
        />
      )}
    </header>
  );
}

/* ---------- Minimal link components ---------- */

function HeaderLink({ href, label, emphasize = false }: { href: string; label: string; emphasize?: boolean }) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={[
        "relative inline-flex items-center px-2 py-1.5 rounded-md text-white visited:text-white",
        emphasize ? "font-semibold" : "font-medium",
        active ? "underline underline-offset-4" : "hover:underline underline-offset-4 hover:bg-white/10",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

function MobileNavLink({ href, label, onNavigate }: { href: string; label: string; onNavigate?: () => void }) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={[
        "block px-2 py-1.5 rounded-md text-white",
        active ? "underline underline-offset-4" : "hover:underline underline-offset-4 hover:bg-white/10",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
      ].join(" ")}
    >
      {label}
    </Link>
  );
}