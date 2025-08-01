import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">HIV Clinical Fellowship</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/program" className="hover:underline">
                Program
              </Link>
            </li>
            <li>
              <Link href="/curriculum" className="hover:underline">
                Curriculum
              </Link>
            </li>
            <li>
              <Link href="/who-we-are" className="hover:underline">
                Who We Are
              </Link>
            </li>
            <li>
              <Link href="/apply" className="hover:underline">
                Apply
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}