// app/who-we-are/page.tsx

import Layout from '../../components/Layout';
import Link from 'next/link';

export default function WhoWeArePage() {
  return (
    <Layout>
      <article className="space-y-10 px-4 sm:px-6 md:px-8">
        <header className="space-y-4 pt-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">Who We Are</h1>
          <p className="text-base sm:text-lg text-gray-700 text-center sm:text-left">
            Meet the faculty and fellows who make our fellowship program exceptional.
          </p>
        </header>
        <section>
          <ul className="list-disc pl-4 sm:pl-6 space-y-2">
            <li>
              <Link href="/who-we-are/faculty" className="block text-blue-600 hover:underline py-2">
                Faculty
              </Link>
            </li>
            <li>
              <Link href="/who-we-are/fellows" className="block text-blue-600 hover:underline py-2">
                Fellows
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </Layout>
  );
}