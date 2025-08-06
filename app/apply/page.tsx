// app/apply/page.tsx

import Layout from '../../components/Layout';
import apply from '../../data/apply.json';
import Link from 'next/link';
import Image from 'next/image';

export default function ApplyPage() {
  return (
    <Layout>
      <article className="space-y-10 pb-12 px-4 sm:px-6 md:px-8">
        <header className="space-y-4 pt-8">
          <div className="flex justify-center mt-8 mb-8">
            <Image
              src="/images/apply/apply-ss.png"
              width={1200}
              height={400}
              alt="Apply Page Screenshot"
              className="w-1/2 h-auto"
            />
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700">
              {apply.intro.join(' ')}
            </p>
          </div>
        </header>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Application Process</h2>
          <p className="text-gray-700">{apply.applicationProcess.note}</p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            We are seeking passionate, mission-driven physicians who:
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {apply.missionDriven.map((item, idx) => (
              <li key={idx} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            {apply.boardEligibility.description}
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {apply.boardEligibility.roles.map((role, idx) => (
              <li key={idx} className="text-gray-700">{role}</li>
            ))}
          </ul>
        </section>

        {/* Call to Apply */}
        <section>
          <p className="text-lg text-gray-700 mt-8">Apply today!</p>
          <p className="text-lg text-gray-700">
            Please{' '}
            <Link href="#" className="text-blue-600 hover:underline">
              click here to access the application form
            </Link>
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Contact</h2>
          <div className="bg-gray-50 p-6 rounded-md max-w-lg mx-auto text-center space-y-2 mb-6">
            <p className="text-gray-700">To request additional information, please contact:</p>
            <p className="text-xl font-bold">{apply.contact.name}</p>
            {apply.contact.positions.map((pos, idx) => (
              <p key={idx} className="text-gray-700">{pos}</p>
            ))}
            <p className="text-gray-700 mt-2">
              Email:{' '}
              <Link href={`mailto:${apply.contact.email}`} className="text-blue-600 hover:underline">
                {apply.contact.email}
              </Link>
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Application Form</h2>
          <form className="application-form space-y-6 max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
            {apply.form.fields.map((field, idx) => (
              <div key={idx}>
                <label className="block text-sm font-medium text-gray-700 mb-2">{field}</label>
                {field === 'Message' ? (
                  <textarea
                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    rows={4}
                    placeholder={field}
                  />
                ) : (
                  <input
                    type={field === 'Email address' ? 'email' : 'text'}
                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    placeholder={field}
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg shadow-lg transform transition duration-200 ease-in-out hover:scale-105 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-300 mt-4"
            >
              {apply.form.submitLabel}
            </button>
          </form>
        </section>
      </article>
    </Layout>
  );
}