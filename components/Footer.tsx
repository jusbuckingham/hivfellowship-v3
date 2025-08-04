import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-purple-700 text-white">
      <div className="container mx-auto px-8 py-6 text-center">
        <p className="text-sm">
          <small>&copy; {new Date().getFullYear()} HIV Clinical Fellowship. All rights reserved.</small>
        </p>
      </div>
    </footer>
  );
}