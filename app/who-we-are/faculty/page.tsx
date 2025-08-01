

// app/who-we-are/faculty/page.tsx

import React from 'react';
import Layout from '../../../components/Layout';
import faculty from '../../../data/faculty.json';
import Image from 'next/image';

export default function FacultyPage() {
  return (
    <Layout>
      <section className="px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {faculty.map((member, idx) => (
          <div key={idx} className="flex items-center">
            <Image
              src={member.image}
              width={80}
              height={80}
              alt={member.name}
              className="rounded-full mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}