// app/partnerships/page.tsx

import Layout from '../../components/Layout';
import data from '../../data/partnerships.json';

type Partner = { name: string; description: string };
interface PartnershipsData { partnerships: Partner[]; coreCollaborators: Partner[] }
const { partnerships, coreCollaborators } = (data as PartnershipsData);

export default function PartnershipsPage() {
  return (
    <Layout>
      <article className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 py-8 sm:py-10 lg:py-12 space-y-12">
        <header className="space-y-3 text-center">
          <h1 id="partnerships-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">Partnerships</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">Our fellowship thrives through collaboration with key institutions and dedicated partners.</p>
        </header>

        <section className="space-y-6 rounded-xl border border-slate-200 bg-white shadow-sm p-6">
          {partnerships.map((p: Partner, idx: number) => (
            <div key={idx} className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">{p.name}</h2>
              <p className="text-slate-700 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </section>

        <section className="space-y-6 rounded-xl border border-slate-200 bg-white shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Core Collaborators</h2>
          {coreCollaborators.map((c: Partner, idx: number) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-lg sm:text-xl font-medium text-slate-800">{c.name}</h3>
              <p className="text-slate-700 leading-relaxed">{c.description}</p>
            </div>
          ))}
        </section>
      </article>
    </Layout>
  );
}