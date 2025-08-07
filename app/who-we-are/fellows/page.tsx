// app/who-we-are/fellows/page.tsx

import Layout from '../../../components/Layout';
import fellowsData from '../../../data/fellows.json';
import Image from 'next/image';

export default function FellowsPage() {
  const { current: currentFellows, alumni, careerImpact } = fellowsData;

  return (
    <Layout>
      <article className="space-y-10 px-4 md:px-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold uppercase">CURRENT FELLOWS</h1>
        </header>

        {/* Class of 2027 */}
        <section aria-labelledby="class-of-2027-heading">
          <h2
            id="class-of-2027-heading"
            className="purple-heading mb-4"
            style={{ scrollMarginTop: '4rem' }}
          >
            Class of 2027
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentFellows
              .filter(f => f.classOf === 2027)
              .map((fellow) => (
                <div key={fellow.name} className="text-center">
                  <Image
                    src={fellow.image}
                    width={120}
                    height={120}
                    alt={fellow.name}
                    className="rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-1">{fellow.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">Class of {fellow.classOf}</p>
                  <p className="text-gray-700">{fellow.bio}</p>
                </div>
              ))}
          </div>
        </section>

        {/* Class of 2026 */}
        <section aria-labelledby="class-of-2026-heading">
          <h2
            id="class-of-2026-heading"
            className="purple-heading mb-4"
            style={{ scrollMarginTop: '4rem' }}
          >
            Class of 2026
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentFellows
              .filter(f => f.classOf === 2026)
              .map((fellow) => (
                <div key={fellow.name} className="text-center">
                  <Image
                    src={fellow.image}
                    width={120}
                    height={120}
                    alt={fellow.name}
                    className="rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-1">{fellow.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">Class of {fellow.classOf}</p>
                  <p className="text-gray-700">{fellow.bio}</p>
                </div>
              ))}
          </div>
        </section>

        {/* Fellowship Alumni */}
        <section>
          <h2 className="text-2xl font-bold mt-10 uppercase">FELLOWSHIP ALUMNI</h2>
          {Array.from(new Set(alumni.map(a => a.classOf)))
            .sort((a, b) => b - a)
            .map(year => (
              <div key={year}>
                <h3 className="purple-heading">Class of {year}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                  {alumni
                    .filter(a => a.classOf === year)
                    .map((alum, idx) => (
                      <div key={idx} className="text-center">
                        <Image
                          src={alum.image}
                          width={100}
                          height={100}
                          alt={alum.name}
                          className="rounded-full mb-4 mx-auto"
                        />
                        <h4 className="text-lg font-semibold">{alum.name}</h4>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </section>

        {/* Career Impact */}
        <section>
          <h2 className="text-2xl font-semibold mt-10">Career Impact</h2>
          <p className="text-gray-700 mt-4">
            Graduates of the program have gone on to hold influential leadership roles such as:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2">
            {careerImpact.slice(0, -1).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="text-gray-700 mt-4">
            {careerImpact[careerImpact.length - 1]}
          </p>
        </section>
      </article>
    </Layout>
  );
}