// app/program/benefits/page.tsx

import Layout from '../../../components/Layout';
import data from '../../../data/overview-benefits.json';

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
      <article className="space-y-10 px-4 sm:px-6 md:px-8">

        <section className="space-y-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 text-base sm:text-lg text-center sm:text-left">
            <strong>Year 1</strong> is focused on academic coursework in partnership with the UCLA National Clinician Scholars program. Fellows will gain knowledge in health policy, research methods, community-based participatory research, pressing issues in healthcare, and executive leadership skills. Fellows will rotate through various HIV clinics, consult in the Emergency Department on acute care cases that require HIV specialty consultation, and will also begin to build their continuity clinic. Fellows will participate in regular case-based learning and didactic sessions on major HIV medicine topics including HIV multi-drug resistance and opportunistic infections.
          </p>
          <p className="text-gray-700 text-base sm:text-lg text-center sm:text-left">
            In <strong>Year 2</strong>, fellows will be expected to manage patients with more independent decision-making in specialty or elective rotations, as well as maintain their continuity care patient panels and precept first-year fellows, residents and students. Second-year fellows will spend a significant amount of time implementing their chosen scholarly project which will be presented at a regional/national conference and/or will be submitted for publication in a peer-reviewed journal.
          </p>
        </section>

        <section className="space-y-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Salary & Benefits</h2>
          <p className="text-gray-700">{salaryAndBenefitsIntro}</p>

          <h3 className="text-lg sm:text-xl font-medium mt-4">Annual Gross Salary</h3>
          <p className="text-gray-700 italic">{annualGrossSalary.period}</p>
          <div className="overflow-auto">
            <table className="w-full table-auto min-w-full mb-6">
              <thead>
                <tr>
                  <th className="border px-4 py-2 text-left">Position</th>
                  <th className="border px-4 py-2 text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                {annualGrossSalary.entries.map((entry, idx) => (
                  <tr key={idx}>
                    <td className="border px-4 py-2">{entry.position}</td>
                    <td className="border px-4 py-2">{entry.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Medical & Dental Benefits</h2>
          <p className="text-gray-700">{medicalAndDentalBenefits}</p>
        </section>

        <section className="space-y-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Housing Stipend</h2>
          <p className="text-gray-700">{housingStipend}</p>
        </section>

        <section className="space-y-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Educational Stipend</h2>
          <p className="text-gray-700">{educationalStipend}</p>
        </section>

        <section className="space-y-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Relocation</h2>
          <p className="text-gray-700">{relocation}</p>
        </section>

        <section className="space-y-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Licensure Fees</h2>
          <p className="text-gray-700">{licensureFees}</p>
        </section>

        <section className="space-y-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Leave Time</h2>
          <p className="text-gray-700">{leaveTime}</p>
        </section>

      </article>
    </Layout>
  );
}