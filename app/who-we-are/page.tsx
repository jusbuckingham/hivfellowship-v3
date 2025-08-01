

// app/who-we-are/page.tsx

import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

export default function WhoWeArePage() {
  return (
    <Layout>
      <section className="px-8 py-12">
        <h1 className="text-3xl font-bold mb-6">Who We Are</h1>
        <p className="mb-4">
          Meet the faculty and fellows who make our fellowship program exceptional.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/who-we-are/faculty" className="text-blue-600 hover:underline">
              Faculty
            </Link>
          </li>
          <li>
            <Link href="/who-we-are/fellows" className="text-blue-600 hover:underline">
              Fellows
            </Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
}