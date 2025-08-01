

// app/apply/page.tsx

import Layout from '../../components/Layout';
import apply from '../../data/apply.json';

export default function ApplyPage() {
  return (
    <Layout>
      <section className="px-8 py-12">
        <h1 className="text-3xl font-bold mb-6">Apply Today</h1>
        <p className="mb-4">
          Seeking up to {apply.maxCandidates} fellows board eligible or certified in:
        </p>
        <ul className="list-disc pl-6 mb-6">
          {apply.roles.map((role, index) => (
            <li key={index}>{role}</li>
          ))}
        </ul>
        <p className="mb-4">{apply.eligibility}</p>
        <p className="mb-6">
          Contact:{' '}
          <a href={`mailto:${apply.contact.email}`} className="underline">
            {apply.contact.name}
          </a>
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded">
          Access Application Form
        </button>
      </section>
    </Layout>
  );
}