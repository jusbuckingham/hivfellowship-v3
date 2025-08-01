

// app/curriculum/page.tsx

import React from 'react';
import Layout from '../../components/Layout';
import curriculum from '../../data/curriculum.json';

export default function CurriculumPage() {
  return (
    <Layout>
      <section className="px-8 py-12">
        <h1 className="text-3xl font-bold mb-6">Curriculum</h1>

        <h2 className="text-2xl font-semibold mt-4 mb-2">Year 1</h2>
        <ul className="list-disc pl-6 mb-4">
          {curriculum.year1.session1.map((item, i) => (
            <li key={`y1s1-${i}`}>{item}</li>
          ))}
          {curriculum.year1.session2.map((item, i) => (
            <li key={`y1s2-${i}`}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mt-4 mb-2">Year 2</h2>
        <ul className="list-disc pl-6 mb-4">
          {curriculum.year2.clinical.map((item, i) => (
            <li key={`y2c-${i}`}>{item}</li>
          ))}
          {curriculum.year2.scholarship.map((item, i) => (
            <li key={`y2s-${i}`}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mt-4 mb-2">Didactics</h2>
        <ul className="list-disc pl-6 mb-4">
          {curriculum.didactics.map((item, i) => (
            <li key={`d-${i}`}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mt-4 mb-2">Teaching</h2>
        <ul className="list-disc pl-6 mb-4">
          {curriculum.teaching.map((item, i) => (
            <li key={`t-${i}`}>{item}</li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}