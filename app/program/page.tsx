// app/program/page.tsx

import Layout from '../../components/Layout';
import Link from 'next/link';

export default function ProgramPage() {
  return (
    <Layout>
      <article className="space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">Program Overview</h1>
          <p className="text-lg text-gray-700">
            Explore the key components of our fellowship program:
          </p>
        </header>

        <section>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="/program/partnerships" className="text-blue-600 hover:underline">
                Partnerships
              </Link>
            </li>
            <li>
              <Link href="/program/benefits" className="text-blue-600 hover:underline">
                Overview & Benefits
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </Layout>
  );
}