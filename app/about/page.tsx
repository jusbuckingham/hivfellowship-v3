// app/about/page.tsx

import Layout from '../../components/Layout';
import SmartImage from '../../components/SmartImage';
import about from '../../data/about.json';

export default function AboutPage() {
  return (
    <Layout>
      <section aria-labelledby="about-heading" className="mt-0 flush-under-header">
        <div className="mb-8 full-bleed">
          <SmartImage
            src="/images/about/about-1.webp"
            alt="HIV Clinical Fellowship banner"
            width={1200}
            height={300}
            sizes="100vw"
            priority
            quality={90}
            className="w-full h-auto"
          />
        </div>

        <article className="space-y-10">
          <header className="space-y-4">
            <h1 id="about-heading" className="text-3xl sm:text-4xl font-bold text-center">{about.title}</h1>
            <h2 className="text-xl font-semibold">Purpose</h2>
            <p className="text-left sm:text-left text-lg text-gray-700">{about.purpose}</p>
          </header>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Program</h2>
            <p className="text-gray-700">{about.program.description}</p>
            <ol className="list-decimal pl-4 sm:pl-8 space-y-2">
              {about.program.qualifiedPhysicians.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="space-y-4">
            <p className="text-gray-700">
              <strong>Established in 2001, the HIV Clinical Fellowship (HCF)</strong> is one of the first fellowship programs in the United States dedicated to HIV care. Based at a well-recognized clinic in the Los Angeles area, the program was developed by the Los Angeles Area AIDS Education and Training Center (AETC) at the Keck School of Medicine of USC, within the Department of Family Medicine. Since its inception, the program has continually evolved to address the changing needs of both patients and healthcare systems.
            </p>
            <p className="text-gray-700">
              In 2016, the program expanded through a strategic partnership with the Los Angeles County Department of Health Services (DHS)—the second-largest municipal safety-net health system in the nation—further increasing its capacity and influence.
            </p>
          </section>

          <section className="space-y-4">
            {about.description.map((paragraph, idx) => (
              <p key={idx} className="text-gray-700">
                {paragraph}
              </p>
            ))}
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Training Sites</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 sm:px-6 md:px-0">
              {about.trainingSites.map((site, idx) => (
                <li key={idx}>{site}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Core Clinical Training</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 px-4 sm:px-6 md:px-0">
              {about.coreTraining.map((training, idx) => (
                <li key={idx}>{training}</li>
              ))}
            </ul>
          </section>
        </article>
      </section>
    </Layout>
  );
}