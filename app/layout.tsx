// app/layout.tsx

import './globals.css'
import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'HIV Clinical Fellowship',
  description:
    'Train primary care physicians in advanced HIV care and develop future leaders in HIV medicine.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}