// app/benefits/page.tsx

import Layout from '../../components/Layout';
import data from '../../data/overview-benefits.json';

export default function BenefitsPage() {
  const {
    salaryAndBenefitsIntro,
    annualGrossSalary,
    medicalAndDentalBenefits,
    housingStipend,
    educationalStipend,
    relocation,
    licensureFees,
    leaveTime,
  } = data;

  return (
    <Layout>
      <article className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 py-8 sm:py-10 lg:py-12 space-y-12">

        <section className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Overview</h2>
          <p className="text-slate-700 leading-relaxed">
            <strong>Year 1</strong> is focused on academic coursework in partnership with the UCLA National Clinician Scholars program. Fellows will gain knowledge in health policy, research methods, community-based participatory research, pressing issues in healthcare, and executive leadership skills. Fellows will rotate through various HIV clinics, consult in the Emergency Department on acute care cases that require HIV specialty consultation, and will also begin to build their continuity clinic. Fellows will participate in regular case-based learning and didactic sessions on major HIV medicine topics including HIV multi-drug resistance and opportunistic infections.
          </p>
          <p className="text-slate-700 leading-relaxed">
            In <strong>Year 2</strong>, fellows will be expected to manage patients with more independent decision-making in specialty or elective rotations, as well as maintain their continuity care patient panels and precept first-year fellows, residents and students. Second-year fellows will spend a significant amount of time implementing their chosen scholarly project which will be presented at a regional/national conference and/or will be submitted for publication in a peer-reviewed journal.
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Salary & Benefits</h2>
          <p className="text-slate-700 leading-relaxed">{salaryAndBenefitsIntro}</p>

          <h3 className="text-lg sm:text-xl font-medium text-slate-800 mt-4">Annual Gross Salary</h3>
          <p className="text-slate-700 leading-relaxed italic">{annualGrossSalary.period}</p>
          <div className="overflow-auto">
            <table className="w-full border border-slate-200 rounded-lg overflow-hidden text-sm sm:text-base">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-4 py-2 text-left font-semibold">Position</th>
                  <th className="border border-slate-200 px-4 py-2 text-left font-semibold">Amount</th>
                </tr>
              </thead>
              <tbody>
                {annualGrossSalary.entries.map((entry, idx) => (
                  <tr key={idx} className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-2">{entry.position}</td>
                    <td className="border border-slate-200 px-4 py-2">{entry.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Medical & Dental Benefits</h2>
          <p className="text-slate-700 leading-relaxed">{medicalAndDentalBenefits}</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Housing Stipend</h2>
          <p className="text-slate-700 leading-relaxed">{housingStipend}</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Educational Stipend</h2>
          <p className="text-slate-700 leading-relaxed">{educationalStipend}</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Relocation</h2>
          <p className="text-slate-700 leading-relaxed">{relocation}</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Licensure Fees</h2>
          <p className="text-slate-700 leading-relaxed">{licensureFees}</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Leave Time</h2>
          <p className="text-slate-700 leading-relaxed">{leaveTime}</p>
        </section>

      </article>
    </Layout>
  );
}