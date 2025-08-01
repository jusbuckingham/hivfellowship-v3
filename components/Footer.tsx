

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4">
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} HIV Clinical Fellowship. All rights reserved.
      </p>
    </footer>
  );
}