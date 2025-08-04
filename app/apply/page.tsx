// app/apply/page.tsx

import Layout from '../../components/Layout';
import apply from '../../data/apply.json';

export default function ApplyPage() {
  return (
    <Layout>
      <article className="space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">Apply Today</h1>
          <p className="text-lg text-gray-700">
            Seeking up to {apply.maxCandidates} fellows board eligible or certified in:
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Eligible Roles</h2>
          <ul className="list-disc pl-6 space-y-2">
            {apply.roles.map((role, idx) => (
              <li key={idx}>{role}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Eligibility</h2>
          <p className="text-gray-700">{apply.eligibility}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Contact</h2>
          <p>
            <a 
              href={`mailto:${apply.contact.email}`} 
              className="text-blue-600 hover:underline"
            >
              {apply.contact.name}
            </a>
          </p>
        </section>

        <footer>
          <a
            href="#"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
          >
            Access Application Form
          </a>
        </footer>
      </article>
    </Layout>
  );
}