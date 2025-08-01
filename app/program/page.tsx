

// app/program/page.tsx

import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

export default function ProgramPage() {
  return (
    <Layout>
      <section className="px-8 py-12">
        <h1 className="text-3xl font-bold mb-6">Program Overview</h1>
        <p className="mb-4">
          Explore the key components of our fellowship program:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>
            <Link href="/program/partnerships" className="text-blue-600 hover:underline">
              Partnerships
            </Link>
          </li>
          <li>
            <Link href="/program/benefits" className="text-blue-600 hover:underline">
              Overview & Benefits
            </Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
}