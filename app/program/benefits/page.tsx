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
      <article className="space-y-10">

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="text-gray-700">
            <strong>Year 1</strong> is focused on academic coursework in partnership with the UCLA National Clinician Scholars program. Fellows will gain knowledge in health policy, research methods, community-based participatory research, pressing issues in healthcare, and executive leadership skills. Fellows will rotate through various HIV clinics, consult in the Emergency Department on acute care cases that require HIV specialty consultation, and will also begin to build their continuity clinic. Fellows will participate in regular case-based learning and didactic sessions on major HIV medicine topics including HIV multi-drug resistance and opportunistic infections.
          </p>
          <p className="text-gray-700">
            In <strong>Year 2</strong>, fellows will be expected to manage patients with more independent decision-making in specialty or elective rotations, as well as maintain their continuity care patient panels and precept first-year fellows, residents and students. Second-year fellows will spend a significant amount of time implementing their chosen scholarly project which will be presented at a regional/national conference and/or will be submitted for publication in a peer-reviewed journal.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Salary & Benefits</h2>
          <p className="text-gray-700">{salaryAndBenefitsIntro}</p>

          <h3 className="text-xl font-medium mt-4">Annual Gross Salary</h3>
          <p className="text-gray-700 italic">{annualGrossSalary.period}</p>
          <table className="w-full table-auto mb-6">
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
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Medical & Dental Benefits</h2>
          <p className="text-gray-700">{medicalAndDentalBenefits}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Housing Stipend</h2>
          <p className="text-gray-700">{housingStipend}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Educational Stipend</h2>
          <p className="text-gray-700">{educationalStipend}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Relocation</h2>
          <p className="text-gray-700">{relocation}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Licensure Fees</h2>
          <p className="text-gray-700">{licensureFees}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Leave Time</h2>
          <p className="text-gray-700">{leaveTime}</p>
        </section>

      </article>
    </Layout>
  );
}