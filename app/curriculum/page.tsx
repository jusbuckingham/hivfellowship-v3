// app/curriculum/page.tsx

import Layout from '../../components/Layout';
import curriculum from '../../data/curriculum.json';

export default function CurriculumPage() {
  return (
    <Layout>
      <article className="space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">Curriculum</h1>
        </header>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Year 1</h2>
          <ul className="list-disc pl-6 space-y-2">
            {curriculum.year1.session1.map((item, i) => (
              <li key={`y1s1-${i}`}>{item}</li>
            ))}
            {curriculum.year1.session2.map((item, i) => (
              <li key={`y1s2-${i}`}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Year 2</h2>
          <ul className="list-disc pl-6 space-y-2">
            {curriculum.year2.clinical.map((item, i) => (
              <li key={`y2c-${i}`}>{item}</li>
            ))}
            {curriculum.year2.scholarship.map((item, i) => (
              <li key={`y2s-${i}`}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Didactics</h2>
          <ul className="list-disc pl-6 space-y-2">
            {curriculum.didactics.map((item, i) => (
              <li key={`d-${i}`}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Teaching</h2>
          <ul className="list-disc pl-6 space-y-2">
            {curriculum.teaching.map((item, i) => (
              <li key={`t-${i}`}>{item}</li>
            ))}
          </ul>
        </section>
      </article>
    </Layout>
  );
}