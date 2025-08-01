

// app/about/page.tsx

import React from 'react';
import Layout from '../../components/Layout';
import about from '../../data/about.json';

export default function AboutPage() {
  return (
    <Layout>
      <section className="px-8 py-12">
        <h1 className="text-4xl font-bold mb-6">{about.title}</h1>
        {about.description.map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
        <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
        <ul className="list-disc pl-6 mb-8">
          {about.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Core Clinical Training</h2>
        <ul className="grid grid-cols-2 gap-2 mb-8">
          {about.coreTraining.map((training, index) => (
            <li key={index}>{training}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Training Sites</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {about.trainingSites.map((site, index) => (
            <div key={index}>{site}</div>
          ))}
        </div>
      </section>
    </Layout>
  );
}