import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'HIV Clinical Fellowship',
  description: '…',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}