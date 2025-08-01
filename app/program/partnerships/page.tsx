

// app/program/partnerships/page.tsx

import React from 'react';
import Layout from '../../../components/Layout';
import program from '../../../data/program.json';

export default function PartnershipsPage() {
  return (
    <Layout>
      <section className="px-8 py-12">
        <h1 className="text-3xl font-bold mb-6">Partnerships</h1>
        {program.partnerships.map((p, idx) => (
          <div key={idx} className="mb-6">
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p>{p.description}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
}