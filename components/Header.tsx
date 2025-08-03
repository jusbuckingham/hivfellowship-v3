import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <nav>
          <ul className="flex space-x-8 list-none pl-0 m-0">
            <li>
              <Link href="/" className="uppercase hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/curriculum" className="uppercase hover:underline">
                Curriculum
              </Link>
            </li>
            <li>
              <Link href="/program" className="uppercase hover:underline">
                Program
              </Link>
            </li>
            <li>
              <Link href="/who-we-are" className="uppercase hover:underline">
                Who We Are
              </Link>
            </li>
            <li>
              <Link href="/apply" className="uppercase hover:underline">
                Apply
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}