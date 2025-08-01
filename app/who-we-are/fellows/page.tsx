

// app/who-we-are/fellows/page.tsx

import React from 'react';
import Layout from '../../../components/Layout';
import fellowsData from '../../../data/fellows.json';
import Image from 'next/image';

export default function FellowsPage() {
  return (
    <Layout>
      <section className="px-8 py-12">
        <h1 className="text-3xl font-bold mb-6">Current Fellows</h1>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {fellowsData.current.map((fellow, idx) => (
            <div key={idx} className="border p-4 rounded">
              <Image
                src={fellow.image}
                width={100}
                height={100}
                alt={fellow.name}
                className="rounded-full mb-2"
              />
              <h3 className="text-xl font-semibold">{fellow.name}</h3>
              <p className="text-sm mb-1">Class of {fellow.classOf}</p>
              <p className="text-sm">{fellow.bio}</p>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold mb-4">Alumni</h2>
        <ul className="list-disc pl-6">
          {fellowsData.alumni.map((alum, idx) => (
            <li key={idx}>
              {alum.name} (Class of {alum.classOf})
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}