// app/about/page.tsx

import Layout from "../../components/Layout";
import SmartImage from "../../components/SmartImage";
import about from "../../data/about.json";

export default function AboutPage() {
  return (
    <Layout>
      <section aria-labelledby="about-heading" className="mt-0 flush-under-header">
        {/* Hero */}
        <div className="relative full-bleed">
          <SmartImage
            src="/images/about/about-1.webp"
            alt="HIV Clinical Fellowship banner"
            width={1600}
            height={500}
            sizes="100vw"
            priority
            quality={90}
            className="w-full h-auto"
          />
          {/* Subtle gradient at bottom for readability on transition to content */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/80 to-transparent" />
        </div>

        {/* Content */}
        <article className="mx-auto max-w-5xl px-3 sm:px-4 md:px-6">
          {/* Title + Purpose */}
          <header className="mt-6 sm:mt-8 text-center">
            <h1 id="about-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              {about.title}
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              {about.purpose}
            </p>
          </header>

          {/* Program */}
          <section aria-labelledby="program-heading" className="mt-10 sm:mt-12">
            <div className="rounded-xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur-sm p-5 sm:p-6">
              <h2 id="program-heading" className="text-xl sm:text-2xl font-semibold text-slate-900">Program</h2>
              <p className="mt-3 text-slate-700 leading-relaxed">{about.program.description}</p>

              <ol className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 list-decimal pl-6">
                {about.program.qualifiedPhysicians.map((item, idx) => (
                  <li key={idx} className="text-slate-800">{item}</li>
                ))}
              </ol>
            </div>
          </section>

          {/* History */}
          <section className="mt-10 sm:mt-12">
            <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-slate-900">Origins</h3>
                <p className="mt-2 text-slate-700 leading-relaxed">
                  {about.history?.[0] || (
                    <>
                      <strong>Established 2001.</strong> One of the first U.S. fellowship programs dedicated to HIV care, developed by the Los Angeles AETC at the Keck School of Medicine of USC.
                    </>
                  )}
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-slate-900">Expansion</h3>
                <p className="mt-2 text-slate-700 leading-relaxed">
                  {about.history?.[1] || (
                    <>In 2016, partnership with Los Angeles County DHS expanded reach across the nation’s second‑largest municipal safety‑net system.</>
                  )}
                </p>
              </div>
            </div>
          </section>

          {/* Description paragraphs */}
          <section className="mt-10 sm:mt-12">
            <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-5 sm:p-6">
              <div className="space-y-4">
                {about.description.map((paragraph: string, idx: number) => (
                  <p key={idx} className="text-slate-700 leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </div>
          </section>

          {/* Training Sites */}
          <section className="mt-10 sm:mt-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">Training Sites</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
              {about.trainingSites.map((site: string, idx: number) => (
                <li
                  key={idx}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 shadow-sm"
                >
                  {site}
                </li>
              ))}
            </ul>
          </section>

          {/* Core Training */}
          <section className="mt-10 sm:mt-12 mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">Core Clinical Training</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
              {about.coreTraining.map((training: string, idx: number) => (
                <li
                  key={idx}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 shadow-sm"
                >
                  {training}
                </li>
              ))}
            </ul>
          </section>
        </article>
      </section>
    </Layout>
  );
}