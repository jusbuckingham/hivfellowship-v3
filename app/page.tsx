// app/page.tsx

import Layout from '../components/Layout';
import about from '../data/about.json';

export default function HomePage() {
  return (
    <Layout>
      <div className="bg-red-500 text-white p-4 mb-4">
        If you see a red box, Tailwind is working.
      </div>
      <section className="px-8 py-12">
        <h1 className="text-4xl font-bold mb-6">{about.title}</h1>
        <p className="mb-4">{about.purpose}</p>
        <ul className="list-disc pl-6 mb-8">
          {about.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Core Clinical Training</h2>
        <ul className="grid grid-cols-2 gap-2 mb-8">
          {about.coreTraining.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Training Sites</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {about.trainingSites.map((s, i) => (
            <div key={i}>{s}</div>
          ))}
        </div>
      </section>
    </Layout>
  );
}