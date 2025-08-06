// app/program/partnerships/page.tsx

import Layout from '../../../components/Layout';
import data from '../../../data/partnerships.json';

const { partnerships, coreCollaborators } = data;

export default function PartnershipsPage() {
  return (
    <Layout>
      <article className="space-y-12 px-4 sm:px-6 md:px-8">
        <header className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold">Partnerships</h1>
        </header>

        <section className="space-y-8 mb-6">
          {partnerships.map((p, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold">{p.name}</h2>
              <p className="text-gray-700 text-base sm:text-lg">{p.description}</p>
            </div>
          ))}
        </section>

        <section className="space-y-8 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold">Core Collaborators</h2>
          {coreCollaborators.map((c, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-lg sm:text-xl font-medium">{c.name}</h3>
              <p className="text-gray-700 text-base sm:text-lg">{c.description}</p>
            </div>
          ))}
        </section>
      </article>
    </Layout>
  );
}