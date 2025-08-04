import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="flex-1 container mx-auto px-8 py-12">
      {children}
    </main>
  );
}
