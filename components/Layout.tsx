import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* Accessible skip link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-[#162363] shadow"
      >
        Skip to content
      </a>

      <main
        id="main-content"
        role="main"
        className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 min-h-[calc(100dvh-84px)]"
      >
        {/* Standardize vertical rhythm between sections while allowing full‑bleed blocks to opt out */}
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {children}
        </div>
      </main>
    </>
  );
}
