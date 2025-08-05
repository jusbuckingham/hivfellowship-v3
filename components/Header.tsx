import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-purple-700 text-white shadow">
      <nav className="container mx-auto px-8 py-4 flex space-x-8">
        <Link href="/" className="uppercase font-medium hover:underline">
          About
        </Link>
        <Link href="/curriculum" className="uppercase font-medium hover:underline">
          Curriculum
        </Link>
        <Link href="/program" className="uppercase font-medium hover:underline">
          Program
        </Link>
        <Link href="/who-we-are" className="uppercase font-medium hover:underline">
          Who We Are
        </Link>
        <Link href="/apply" className="uppercase font-medium hover:underline">
          Apply
        </Link>
      </nav>
    </header>
  );
}