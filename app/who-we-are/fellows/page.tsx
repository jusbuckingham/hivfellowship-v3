

// app/who-we-are/fellows/page.tsx

import Layout from '../../../components/Layout';
import fellowsData from '../../../data/fellows.json';
import Image from 'next/image';

export default function FellowsPage() {
  return (
    <Layout>
      <article className="space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">Current Fellows</h1>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fellowsData.current.map((fellow, idx) => (
            <div key={idx} className="border p-6 rounded-lg">
              <Image
                src={fellow.image}
                width={100}
                height={100}
                alt={fellow.name}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">{fellow.name}</h3>
              <p className="text-sm text-gray-600 mb-2">Class of {fellow.classOf}</p>
              <p className="text-gray-700">{fellow.bio}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Alumni</h2>
          <ul className="list-disc pl-6 space-y-2">
            {fellowsData.alumni.map((alum, idx) => (
              <li key={idx}>
                {alum.name} (Class of {alum.classOf})
              </li>
            ))}
          </ul>
        </section>
      </article>
    </Layout>
  );
}