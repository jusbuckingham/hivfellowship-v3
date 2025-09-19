import Layout from '../../components/Layout';
import fellowsData from '../../data/fellows.json';
import SmartImage from '../../components/SmartImage';

export default function FellowsPage() {
  const { current: currentFellows, alumni, careerImpact } = fellowsData;

  return (
    <Layout>
      <article className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-8 sm:py-10 lg:py-12 space-y-12">
        <header className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 text-center">Current Fellows</h1>
        </header>

        {/* Class of 2027 */}
        <section aria-labelledby="class-of-2027-heading">
          <h2
            id="class-of-2027-heading"
            className="purple-heading mb-6 text-xl sm:text-2xl font-semibold text-slate-900"
            style={{ scrollMarginTop: '4rem' }}
          >
            Class of 2027
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {currentFellows
              .filter(f => f.classOf === 2027)
              .map((fellow) => (
                <div key={fellow.name} className="fellow-card flex flex-col items-center text-center p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
                  <SmartImage
                    src={fellow.image}
                    width={120}
                    height={120}
                    alt={fellow.name}
                    className="rounded-full ring-2 ring-slate-200"
                    loading="lazy"
                    sizes="(max-width: 640px) 96px, (max-width: 1024px) 120px, 120px"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold mt-3 mb-0 leading-tight">{fellow.name}</h3>
                  <p className="text-sm text-slate-600 mt-0.5 mb-0 leading-snug">Class of {fellow.classOf}</p>
                  <p className="text-slate-700 mt-3 leading-relaxed text-sm sm:text-base">{fellow.bio}</p>
                </div>
              ))}
          </div>
        </section>

        {/* Class of 2026 */}
        <section aria-labelledby="class-of-2026-heading">
          <h2
            id="class-of-2026-heading"
            className="purple-heading mb-6 text-xl sm:text-2xl font-semibold text-slate-900"
            style={{ scrollMarginTop: '4rem' }}
          >
            Class of 2026
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {currentFellows
              .filter(f => f.classOf === 2026)
              .map((fellow) => (
                <div key={fellow.name} className="fellow-card flex flex-col items-center text-center p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
                  <SmartImage
                    src={fellow.image}
                    width={120}
                    height={120}
                    alt={fellow.name}
                    className="rounded-full ring-2 ring-slate-200"
                    loading="lazy"
                    sizes="(max-width: 640px) 96px, (max-width: 1024px) 120px, 120px"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold mt-3 mb-0 leading-tight">{fellow.name}</h3>
                  <p className="text-sm text-slate-600 mt-0.5 mb-0 leading-snug">Class of {fellow.classOf}</p>
                  <p className="text-slate-700 mt-3 leading-relaxed text-sm sm:text-base">{fellow.bio}</p>
                </div>
              ))}
          </div>
        </section>

        {/* Fellowship Alumni */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center uppercase">Fellowship Alumni</h2>
          {Array.from(new Set(alumni.map(a => a.classOf)))
            .sort((a, b) => b - a)
            .map((year) => {
              const yearAlumni = alumni.filter((a) => a.classOf === year);

              return (
                <div key={year}>
                  <h3 className="purple-heading">Class of {year}</h3>
                  {(() => {
                    const count = yearAlumni.length;
                    const cols = count >= 4
                      ? 'grid-cols-4'
                      : count === 3
                      ? 'grid-cols-3'
                      : count === 2
                      ? 'grid-cols-2'
                      : 'grid-cols-1';
                    return (
                      <div className={`mt-4 grid ${cols} gap-12 place-items-center`}> 
                        {yearAlumni.map((alum, idx) => (
                          <div key={idx} className="fellow-card w-48 sm:w-56 flex flex-col items-center text-center p-3 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
                            <SmartImage
                              src={alum.image}
                              width={100}
                              height={100}
                              alt={alum.name}
                              className="rounded-full ring-2 ring-slate-200 mx-auto"
                              loading="lazy"
                              sizes="(max-width: 640px) 80px, (max-width: 1024px) 100px, 100px"
                            />
                            <h4 className="text-base sm:text-lg font-semibold mt-2 mb-0 leading-snug break-words whitespace-normal text-slate-900">{alum.name}</h4>
                          </div>
                        ))}
                      </div>
                    );
                  })()}
                </div>
              );
            })}
        </section>

        {/* Career Impact */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 text-center">Career Impact</h2>
          <p className="text-slate-700 leading-relaxed max-w-3xl mx-auto text-center mt-4">
            Graduates of the program have gone on to hold influential leadership roles such as:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-700 leading-relaxed max-w-3xl mx-auto text-center mt-2">
            {careerImpact.slice(0, -1).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="text-slate-700 leading-relaxed max-w-3xl mx-auto text-center mt-4">
            {careerImpact[careerImpact.length - 1]}
          </p>
        </section>
      </article>
    </Layout>
  );
}