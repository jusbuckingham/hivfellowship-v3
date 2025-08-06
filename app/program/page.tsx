// app/program/page.tsx

import Layout from '../../components/Layout';
import Link from 'next/link';

export default function ProgramPage() {
  return (
    <Layout>
      <article className="space-y-10 px-4 sm:px-6 md:px-8">
        <header className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-center">Program Overview</h1>
          <p className="text-base sm:text-lg text-gray-700 text-center sm:text-left">
            Explore the key components of our fellowship program:
          </p>
        </header>
        <section>
          <ul className="list-disc pl-4 sm:pl-6 space-y-2">
            <li>
              <Link href="/program/partnerships" className="block text-blue-600 hover:underline">
                Partnerships
              </Link>
            </li>
            <li>
              <Link href="/program/benefits" className="block text-blue-600 hover:underline">
                Overview & Benefits
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </Layout>
  );
}