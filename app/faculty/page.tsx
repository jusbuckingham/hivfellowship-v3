import Layout from '../../components/Layout';
import faculty from '../../data/faculty.json';
import SmartImage from '../../components/SmartImage';

export default function FacultyPage() {
  return (
    <Layout>
      <article className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-8 sm:py-10 lg:py-12 space-y-12">

        <section className="space-y-8" aria-labelledby="leadership-heading">
          <h2 id="leadership-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 text-center">Leadership</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 auto-rows-auto">
            {faculty.slice(0, 8).map((member, idx) => (
              <div key={idx} className="faculty-card flex flex-col items-center text-center p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
                <SmartImage
                  src={member.image}
                  width={100}
                  height={100}
                  alt={member.name}
                  className="rounded-full ring-2 ring-slate-200"
                  loading="lazy"
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 100px, 120px"
                />
                <h3 className="mt-3 text-lg sm:text-xl font-semibold text-slate-900 leading-tight">{member.name}</h3>
                <p className="text-slate-600 text-sm sm:text-base mt-1 leading-snug">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8" aria-labelledby="clinical-team-heading">
          <h2 id="clinical-team-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 text-center">Clinical Team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 auto-rows-auto">
            {faculty.slice(8, 17).map((member, idx) => (
              <div key={idx} className="faculty-card flex flex-col items-center text-center p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
                <SmartImage
                  src={member.image}
                  width={100}
                  height={100}
                  alt={member.name}
                  className="rounded-full ring-2 ring-slate-200"
                  loading="lazy"
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 100px, 120px"
                />
                <h3 className="mt-3 text-lg sm:text-xl font-semibold text-slate-900 leading-tight">{member.name}</h3>
                <p className="text-slate-600 text-sm sm:text-base mt-1 leading-snug">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </Layout>
  );
}