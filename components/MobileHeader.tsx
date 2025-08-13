// components/MobileHeader.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV = [
  { label: "About", href: "/about" },
  { label: "Program", href: "/program" },
  { label: "Curriculum", href: "/curriculum" },
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Apply", href: "/apply" },
];

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  // Lock background scroll when menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close with ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="md:hidden fixed top-0 inset-x-0 z-50">
      {/* Top bar */}
      <div className="relative flex items-center justify-between bg-[#0C1D4A] text-white h-14 px-4 border-b border-white/10 pt-[env(safe-area-inset-top)]">
        {/* Logo (left) */}
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          {/* Replace src with your logo path (SVG preferred) */}
          <Image src="/logo.png" alt="HIV Clinical Fellowship" width={36} height={36} />
          <span className="text-base font-semibold tracking-tight">HIV Clinical Fellowship</span>
        </Link>

        {/* Hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center w-9 h-9 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          <svg
            className="h-6 w-6 transition-transform duration-200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Backdrop */}
      <button
        aria-hidden={!open}
        tabIndex={-1}
        onClick={() => setOpen(false)}
        className={[
          "fixed inset-0 z-40 bg-black/40 transition-opacity",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      />

      {/* Slide-down panel */}
      <nav
        id="mobile-menu"
        className={[
          "absolute z-50 top-14 inset-x-0 origin-top bg-white text-slate-900",
          "border-b border-slate-200 shadow-sm",
          "transform-gpu transition-all duration-250 ease-out",
          open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0",
        ].join(" ")}
        style={{ transformOrigin: "top" }}
      >
        <ul className="py-2">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-4 py-3 text-lg font-medium active:opacity-70"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          {/* Primary CTA */}
          <li className="px-4 pt-1 pb-3">
            <Link
              href="/apply"
              className="inline-flex w-full items-center justify-center rounded-md border border-[#0C1D4A] bg-[#0C1D4A] px-4 py-3 text-base font-semibold text-white active:opacity-80"
              onClick={() => setOpen(false)}
            >
              Apply Now
            </Link>
          </li>
        </ul>
        <div className="pb-[env(safe-area-inset-bottom)]" />
      </nav>
    </header>
  );
}