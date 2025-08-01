

// app/program/benefits/page.tsx

import React from 'react';
import Layout from '../../../components/Layout';
import program from '../../../data/program.json';

export default function BenefitsPage() {
  const { benefits } = program;
  return (
    <Layout>
      <section className="px-8 py-12">
        <h1 className="text-3xl font-bold mb-6">Overview & Benefits</h1>
        <table className="w-full border-collapse mb-8">
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
        <p className="mb-2"><strong>Housing Stipend:</strong> ${benefits.housingStipend.toLocaleString()}/year</p>
        <p className="mb-2"><strong>Medical & Dental:</strong> {benefits.medicalDental ? 'Included' : 'Not Included'}</p>
        <p className="mb-2"><strong>Educational Benefit:</strong> {benefits.educational ? 'Included' : 'Not Included'}</p>
        <p className="mb-2"><strong>Leave Days:</strong> {benefits.leaveDays}</p>
      </section>
    </Layout>
  );
}