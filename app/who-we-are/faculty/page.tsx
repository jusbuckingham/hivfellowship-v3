import Layout from '../../../components/Layout';
import faculty from '../../../data/faculty.json';
import SmartImage from '../../../components/SmartImage';

export default function FacultyPage() {
  return (
    <Layout>
      <article className="space-y-10 px-4 sm:px-6 md:px-8">

        <section className="space-y-8" aria-labelledby="leadership-heading">
          <h2 id="leadership-heading" className="text-xl sm:text-2xl font-semibold mb-4">Leadership</h2>
          <div className="grid grid-cols-4 gap-8 md:gap-10 auto-rows-auto max-w-screen-xl mx-auto">
            {faculty.slice(0, 8).map((member, idx) => (
              <div key={idx} className="faculty-card flex flex-col items-center text-center pb-6">
                <SmartImage
                  src={member.image}
                  width={100}
                  height={100}
                  alt={member.name}
                  className="rounded-full"
                  loading="lazy"
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 100px, 120px"
                />
                <h3 className="text-lg sm:text-xl font-semibold mb-0 leading-tight">{member.name}</h3>
                <p className="text-gray-700 text-base sm:text-lg mt-0.5 mb-0 leading-tight">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8" aria-labelledby="clinical-team-heading">
          <h2 id="clinical-team-heading" className="text-xl sm:text-2xl font-semibold mb-4">Clinical Team</h2>
          <div className="grid grid-cols-3 gap-8 md:gap-10 auto-rows-auto max-w-screen-xl mx-auto">
            {faculty.slice(8, 17).map((member, idx) => (
              <div key={idx} className="faculty-card flex flex-col items-center text-center pb-6">
                <SmartImage
                  src={member.image}
                  width={100}
                  height={100}
                  alt={member.name}
                  className="rounded-full"
                  loading="lazy"
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 100px, 120px"
                />
                <h3 className="text-lg sm:text-xl font-semibold mb-0 leading-tight">{member.name}</h3>
                <p className="text-gray-700 text-base sm:text-lg mt-0.5 mb-0 leading-tight">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </Layout>
  );
}