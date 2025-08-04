

// app/who-we-are/page.tsx

import Layout from '../../components/Layout';
import Link from 'next/link';

export default function WhoWeArePage() {
  return (
    <Layout>
      <article className="space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">Who We Are</h1>
          <p className="text-lg text-gray-700">
            Meet the faculty and fellows who make our fellowship program exceptional.
          </p>
        </header>
        <section>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="/who-we-are/faculty" className="text-blue-600 hover:underline">
                Faculty
              </Link>
            </li>
            <li>
              <Link href="/who-we-are/fellows" className="text-blue-600 hover:underline">
                Fellows
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </Layout>
  );
}