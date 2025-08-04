// app/program/partnerships/page.tsx

import Layout from '../../../components/Layout';
import program from '../../../data/program.json';

export default function PartnershipsPage() {
  return (
    <Layout>
      <article className="space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">Partnerships</h1>
        </header>

        <section className="space-y-6">
          {program.partnerships.map((p, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-semibold">{p.name}</h2>
              <p className="text-gray-700">{p.description}</p>
            </div>
          ))}
        </section>
      </article>
    </Layout>
  );
}