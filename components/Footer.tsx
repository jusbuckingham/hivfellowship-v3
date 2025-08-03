

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} HIV Clinical Fellowship. All rights reserved.
        </p>
      </div>
    </footer>
  );
}