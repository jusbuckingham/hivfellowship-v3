// app/curriculum/page.tsx

import Layout from '../../components/Layout';
import curriculum from '../../data/curriculum.json';

export default function CurriculumPage() {
  return (
    <Layout>
      <article className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 py-8 sm:py-10 lg:py-12 space-y-12">
        <header className="space-y-3 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">Curriculum Outline</h1>
          <p className="text-slate-600 max-w-3xl mx-auto">An overview of the structured fellowship program across sessions and years.</p>
        </header>

        <section className="space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">YEAR 1, Session 1 (6 months)</h2>
          <h3 className="text-lg sm:text-xl font-medium text-slate-800 mt-4">Scholarship/ Leadership Development</h3>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            {curriculum.year1.session1.scholarshipLeadershipDevelopment.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <h3 className="text-lg sm:text-xl font-medium text-slate-800 mt-4">Clinical Training/ Care</h3>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            {curriculum.year1.session1.clinicalTrainingCare.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <h3 className="text-lg sm:text-xl font-medium text-slate-800 mt-4">Didactics and Case Studies</h3>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            {curriculum.year1.session1.didacticsAndCaseStudies.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">YEAR 1, Session 2 (6 months)</h2>
          <h3 className="text-lg sm:text-xl font-medium text-slate-800 mt-4">Clinical Training/ Care</h3>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            {curriculum.year1.session2.clinicalTrainingCare.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <h3 className="text-lg sm:text-xl font-medium text-slate-800 mt-4">Scholarship/ Leadership</h3>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            {curriculum.year1.session2.scholarshipLeadership.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <h3 className="text-lg sm:text-xl font-medium text-slate-800 mt-4">Didactics and Case Studies</h3>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            {curriculum.year1.session2.didacticsAndCaseStudies.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <h3 className="text-lg sm:text-xl font-medium text-slate-800 mt-4">Journal Clubs/ Teaching</h3>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            {curriculum.year1.session2.journalClubsAndTeaching.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">YEAR 2</h2>
          <h3 className="text-lg sm:text-xl font-medium text-slate-800 mt-4">Clinical Training/ Care</h3>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            {curriculum.year2.clinicalTrainingCare.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <h3 className="text-lg sm:text-xl font-medium text-slate-800 mt-4">Scholarship/ Leadership Development</h3>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            {curriculum.year2.scholarshipLeadershipDevelopment.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <h3 className="text-lg sm:text-xl font-medium text-slate-800 mt-4">Scholarship and Research</h3>
          <div className="space-y-3">
            {curriculum.year2.scholarshipAndResearch.map((item, idx) => (
              <p key={idx} className="text-slate-700 leading-relaxed">{item}</p>
            ))}
          </div>
        </section>

        <section className="space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Core Clinical Training Experiences</h2>

          <h3 className="text-lg sm:text-xl font-medium text-slate-800 mt-4">HIV Primary Care</h3>
          <p className="text-slate-700 leading-relaxed">
            HIV Continuity Clinics include:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            {curriculum.coreClinicalTrainingExperiences.hivPrimaryCare.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="text-slate-700 leading-relaxed">
            Fellows provide comprehensive primary and HIV care to over 300 HIV-positive patients, including management of anti-retroviral therapy, HIV-related primary care, HIV or ART-related complications and opportunistic infections. Clinical preceptorship is provided by DHS and USC faculty with Family/HIV Medicine and Infectious Disease training.
          </p>

          <h3 className="text-lg sm:text-xl font-medium text-slate-800 mt-4">Emergency Department HIV Consultation</h3>
          <p className="text-slate-700 leading-relaxed">
            {curriculum.coreClinicalTrainingExperiences.emergencyDepartmentHIVConsultation}
          </p>

          <h3 className="text-lg sm:text-xl font-medium text-slate-800 mt-4">HIV Subspecialty Care</h3>
          <p className="text-slate-700 leading-relaxed">
            {curriculum.coreClinicalTrainingExperiences.hivSubspecialtyCare.description}
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            {curriculum.coreClinicalTrainingExperiences.hivSubspecialtyCare.specialities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h3 className="text-lg sm:text-xl font-medium text-slate-800 mt-4">Inpatient Care</h3>
          <p className="text-slate-700 leading-relaxed">
            {curriculum.coreClinicalTrainingExperiences.inpatientCare}
          </p>
        </section>

        <section className="space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Teaching/ Training Opportunities</h2>
          <div className="space-y-3">
            <p className="text-slate-700 leading-relaxed">
              Fellows actively participate in the following training opportunities:
            </p>
            <p className="text-slate-700 leading-relaxed">
              Development of advanced teaching/training skills in fellows is a key goal of our programs. Fellows are expected to participate in and develop trainings for varied learners from patients to medical students and health professionals of different levels. Fellows will develop a minimum of one original, interactive HIV or HIV-related presentation for providers.
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong>Clinical Training Program (CTP):</strong> The CTP is a hands-on, intensive 1-2 week clinical preceptorship offered year round to resident and community physicians, physician assistants and nurse practitioners wishing to gain experience in HIV management. Trainees participate in a four-hour HIV Orientation workshop, see patients under supervision of a specialist and expand knowledge/skills via additional educational tools, such as interactive opportunistic infection cases, standardized patients and expanded disclosure cases. HIV fellows play a key role as trainer in the CTP program. They provide education to CTP participants in the following roles:
            </p>
          </div>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li>HIV Orientation workshop: conduct this session a minimum of three times during the year</li>
            <li>Opportunistic Infection Cases: conduct small group Opportunistic Infection cases most weeks of the year</li>
            <li>Standardized Patients: provide feedback to participants on their skill with two interactive cases focused on assessing HIV risk factors and providing HIV pre-exposure prophylaxis counseling</li>
            <li>Clinical preceptorship: provide targeted teaching during patient care. As their own skills expand, fellows will function as a preceptor receiving patient presentations from trainees and providing guidance on management to participants during clinic</li>
          </ul>
          <div className="space-y-3 mt-4">
            <p className="text-slate-700 leading-relaxed">
              <strong>Emergency Department Testing & Linkage to Care:</strong> Fellows play a critical teaching role in the HIV Testing, Linkage and Treatment program in the LAC + USC Emergency Department. As first responders on-call, they engage with emergency department providers for all new HIV-positive diagnoses and for those patients who are known-positive and out of care. Fellows provide teaching to patients, emergency room staff, residents and faculty on a wide breadth of topics including: HIV basics (transmission, sign/symptoms), current HIV testing algorithms, opportunistic infection diagnosis/prevention/treatment, ART initiation and management, and strategies to reduce barriers to care and improve linkage-to-care.
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong>Los Angeles County Jail:</strong> The HIV fellow role has become established as a key teaching resource in the jail. Fellows and USC faculty work closely with jail Infection Control (HIV Nurse Liaison, Epidemiologist) and the jail Medical Services Bureau. Fellows will be asked to assist in developing trainings and workshops as needs arise throughout the year. Regular teaching opportunities include:
            </p>
          </div>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li>Jail New Hire HIV Orientation (every odd month – 1st Wed 1-2:30)</li>
            <li>HIV/Hepatitis C Updates & In-services to jail providers (MD/NP), nurses, administration, custody (2-3/year)</li>
          </ul>
          <div className="space-y-3 mt-4">
            <p className="text-slate-700 leading-relaxed">
              <strong>Lectures/ Presentations at Local Academic & Community-Based Training Programs:</strong> Fellows will present lectures on HIV medicine topics to trainee groups at local teaching facilities, such as:
            </p>
          </div>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li>White Memorial Medical Center Family & Internal Medicine lecture series</li>
            <li>USC School of Dentistry</li>
            <li>USC Physician Assistant Program</li>
            <li>USC AETC Projects</li>
          </ul>
        </section>
      </article>
    </Layout>
  );
}