// app/program/benefits/page.tsx

import Layout from '../../../components/Layout';
import program from '../../../data/program.json';

export default function BenefitsPage() {
  const { benefits } = program;
  return (
    <Layout>
      <article className="space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">Overview & Benefits</h1>
        </header>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Salary</h2>
          <table className="w-full table-auto mb-6">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-left">PGY</th>
                <th className="border px-4 py-2 text-left">Annual Salary</th>
              </tr>
            </thead>
            <tbody>
              {benefits.salary.map((s, idx) => (
                <tr key={idx}>
                  <td className="border px-4 py-2">{s.year}</td>
                  <td className="border px-4 py-2">${s.amount.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold mb-2">Additional Benefits</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Housing Stipend:</strong> ${benefits.housingStipend.toLocaleString()}/year
            </li>
            <li>
              <strong>Medical & Dental:</strong> {benefits.medicalDental ? 'Included' : 'Not Included'}
            </li>
            <li>
              <strong>Educational Benefit:</strong> {benefits.educational ? 'Included' : 'Not Included'}
            </li>
            <li>
              <strong>Leave Days:</strong> {benefits.leaveDays}
            </li>
          </ul>
        </section>
      </article>
    </Layout>
  );
}