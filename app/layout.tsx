import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'HIV Clinical Fellowship',
  description: '…',
  viewport: {
    width: 'device-width',
    initialScale: 1
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white overflow-x-hidden">
        <Header />
        <main className="flex-1 w-full px-4 sm:px-6 md:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}