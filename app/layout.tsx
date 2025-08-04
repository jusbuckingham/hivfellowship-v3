import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HIV Clinical Fellowship',
  description: '…',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-8 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}