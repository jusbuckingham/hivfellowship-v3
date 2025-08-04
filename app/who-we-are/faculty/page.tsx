

// app/who-we-are/faculty/page.tsx

import Layout from '../../../components/Layout';
import faculty from '../../../data/faculty.json';
import Image from 'next/image';

export default function FacultyPage() {
  return (
    <Layout>
      <article className="space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">Faculty</h1>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faculty.map((member, idx) => (
            <div key={idx} className="flex items-center space-x-4">
              <Image
                src={member.image}
                width={80}
                height={80}
                alt={member.name}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-700">{member.role}</p>
              </div>
            </div>
          ))}
        </section>
      </article>
    </Layout>
  );
}