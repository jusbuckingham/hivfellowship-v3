import Layout from '../../../components/Layout';
import faculty from '../../../data/faculty.json';
import Image from 'next/image';

export default function FacultyPage() {
  return (
    <Layout>
      <article className="space-y-10 px-4 sm:px-6 md:px-8">

        <section className="space-y-8">
          <h2 className="text-xl sm:text-2xl font-semibold">Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-6 md:px-0">
            {faculty.slice(0, 8).map((member, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-1">
                <Image
                  src={member.image}
                  width={100}
                  height={100}
                  alt={member.name}
                  className="rounded-full"
                />
                <h3 className="text-lg sm:text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-700 text-base sm:text-lg">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-xl sm:text-2xl font-semibold">Clinical Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 md:px-0">
            {faculty.slice(8).map((member, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-1">
                <Image
                  src={member.image}
                  width={100}
                  height={100}
                  alt={member.name}
                  className="rounded-full"
                />
                <h3 className="text-lg sm:text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-700 text-base sm:text-lg">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </Layout>
  );
}