// app/page.tsx

import Layout from '../components/Layout';
import about from '../data/about.json';

export default function HomePage() {
  return (
    <Layout>
      <article className="space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">{about.title}</h1>
          <p className="text-lg text-gray-700">{about.purpose}</p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
          <ul className="list-disc pl-6 space-y-2">
            {about.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Core Clinical Training</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
            {about.coreTraining.map((training, index) => (
              <li key={index}>{training}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Training Sites</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {about.trainingSites.map((site, index) => (
              <li key={index}>{site}</li>
            ))}
          </ul>
        </section>
      </article>
    </Layout>
  );
}