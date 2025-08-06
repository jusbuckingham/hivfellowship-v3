// app/curriculum/page.tsx

import Layout from '../../components/Layout';
import curriculum from '../../data/curriculum.json';

export default function CurriculumPage() {
  return (
    <Layout>
      <article className="space-y-12 px-4 sm:px-6 md:px-8">
        <header className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold">Curriculum Outline</h1>
        </header>

        <section className="space-y-8 px-0 sm:px-0 md:px-0">
          <h2 className="text-xl sm:text-2xl font-semibold">YEAR 1, Session 1 (6 months)</h2>
          <h3 className="text-lg sm:text-xl font-medium">Scholarship/ Leadership Development</h3>
          <ul className="list-disc pl-4 sm:pl-6 space-y-2">
            {curriculum.year1.session1.scholarshipLeadershipDevelopment.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <h3 className="text-lg sm:text-xl font-medium">Clinical Training/ Care</h3>
          <ul className="list-disc pl-4 sm:pl-6 space-y-2">
            {curriculum.year1.session1.clinicalTrainingCare.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <h3 className="text-lg sm:text-xl font-medium">Didactics and Case Studies</h3>
          <ul className="list-disc pl-4 sm:pl-6 space-y-2">
            {curriculum.year1.session1.didacticsAndCaseStudies.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-8 px-0 sm:px-0 md:px-0">
          <h2 className="text-xl sm:text-2xl font-semibold">YEAR 1, Session 2 (6 months)</h2>
          <h3 className="text-lg sm:text-xl font-medium">Clinical Training/ Care</h3>
          <ul className="list-disc pl-4 sm:pl-6 space-y-2">
            {curriculum.year1.session2.clinicalTrainingCare.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <h3 className="text-lg sm:text-xl font-medium">Scholarship/ Leadership</h3>
          <ul className="list-disc pl-4 sm:pl-6 space-y-2">
            {curriculum.year1.session2.scholarshipLeadership.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <h3 className="text-lg sm:text-xl font-medium">Didactics and Case Studies</h3>
          <ul className="list-disc pl-4 sm:pl-6 space-y-2">
            {curriculum.year1.session2.didacticsAndCaseStudies.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <h3 className="text-lg sm:text-xl font-medium">Journal Clubs/ Teaching</h3>
          <ul className="list-disc pl-4 sm:pl-6 space-y-2">
            {curriculum.year1.session2.journalClubsAndTeaching.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-8 px-0 sm:px-0 md:px-0">
          <h2 className="text-xl sm:text-2xl font-semibold">YEAR 2</h2>
          <h3 className="text-lg sm:text-xl font-medium">Clinical Training/ Care</h3>
          <ul className="list-disc pl-4 sm:pl-6 space-y-2">
            {curriculum.year2.clinicalTrainingCare.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <h3 className="text-lg sm:text-xl font-medium">Scholarship/ Leadership Development</h3>
          <ul className="list-disc pl-4 sm:pl-6 space-y-2">
            {curriculum.year2.scholarshipLeadershipDevelopment.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <h3 className="text-lg sm:text-xl font-medium">Scholarship and Research</h3>
          <div className="space-y-4">
            {curriculum.year2.scholarshipAndResearch.map((item, idx) => (
              <p key={idx} className="text-gray-700 text-base sm:text-lg">{item}</p>
            ))}
          </div>
        </section>

        <section className="space-y-8 px-0 sm:px-0 md:px-0">
          <h2 className="text-xl sm:text-2xl font-semibold">Core Clinical Training Experiences</h2>

          <h3 className="text-lg sm:text-xl font-medium">HIV Primary Care</h3>
          <p className="text-gray-700 text-base sm:text-lg">
            HIV Continuity Clinics include:
          </p>
          <ul className="list-disc pl-4 sm:pl-6 space-y-2">
            {curriculum.coreClinicalTrainingExperiences.hivPrimaryCare.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="text-gray-700 text-base sm:text-lg">
            Fellows provide comprehensive primary and HIV care to over 300 HIV-positive patients, including management of anti-retroviral therapy, HIV-related primary care, HIV or ART-related complications and opportunistic infections. Clinical preceptorship is provided by DHS and USC faculty with Family/HIV Medicine and Infectious Disease training.
          </p>

          <h3 className="text-lg sm:text-xl font-medium">Emergency Department HIV Consultation</h3>
          <p className="text-gray-700 text-base sm:text-lg">
            {curriculum.coreClinicalTrainingExperiences.emergencyDepartmentHIVConsultation}
          </p>

          <h3 className="text-lg sm:text-xl font-medium">HIV Subspecialty Care</h3>
          <p className="text-gray-700 text-base sm:text-lg">
            {curriculum.coreClinicalTrainingExperiences.hivSubspecialtyCare.description}
          </p>
          <ul className="list-disc pl-4 sm:pl-6 space-y-2">
            {curriculum.coreClinicalTrainingExperiences.hivSubspecialtyCare.specialities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h3 className="text-lg sm:text-xl font-medium">Inpatient Care</h3>
          <p className="text-gray-700 text-base sm:text-lg">
            {curriculum.coreClinicalTrainingExperiences.inpatientCare}
          </p>
        </section>

        <section className="space-y-8 px-0 sm:px-0 md:px-0">
          <h2 className="text-xl sm:text-2xl font-semibold">Teaching/ Training Opportunities</h2>
          <p className="text-gray-700 text-base sm:text-lg">
            Development of advanced teaching/training skills in fellows is a key goal of our programs. Fellows are expected to participate in and develop trainings for varied learners from patients to medical students and health professionals of different levels. Fellows will develop a minimum of one original, interactive HIV or HIV-related presentation for providers.
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            <strong>Clinical Training Program (CTP):</strong> The CTP is a hands-on, intensive 1-2 week clinical preceptorship offered year round to resident and community physicians, physician assistants and nurse practitioners wishing to gain experience in HIV management. Trainees participate in a four-hour HIV Orientation workshop, see patients under supervision of a specialist and expand knowledge/skills via additional educational tools, such as interactive opportunistic infection cases, standardized patients and expanded disclosure cases. HIV fellows play a key role as trainer in the CTP program. They provide education to CTP participants in the following roles: HIV Orientation workshop: conduct this session a minimum of three times during the year; Opportunistic Infection Cases: conduct small group Opportunistic Infection cases most weeks of the year; Standardized Patients: provide feedback to participants on their skill with two interactive cases focused on assessing HIV risk factors and providing HIV pre-exposure prophylaxis counseling; Clinical preceptorship: provide targeted teaching during patient care. As their own skills expand, fellows will function as a preceptor receiving patient presentations from trainees and providing guidance on management to participants during clinic.
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            <strong>Emergency Department Testing & Linkage to Care:</strong> Fellows play a critical teaching role in the HIV Testing, Linkage and Treatment program in the LAC + USC Emergency Department. As first responders on-call, they engage with emergency department providers for all new HIV-positive diagnoses and for those patients who are known-positive and out of care. Fellows provide teaching to patients, emergency room staff, residents and faculty on a wide breadth of topics including: HIV basics (transmission, sign/symptoms), current HIV testing algorithms, opportunistic infection diagnosis/prevention/treatment, ART initiation and management, and strategies to reduce barriers to care and improve linkage-to-care.
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            <strong>Los Angeles County Jail:</strong> The HIV fellow role has become established as a key teaching resource in the jail. Fellows and USC faculty work closely with jail Infection Control (HIV Nurse Liaison, Epidemiologist) and the jail Medical Services Bureau. Fellows will be asked to assist in developing trainings and workshops as needs arise throughout the year. Regular teaching opportunities include: Jail New Hire HIV Orientation (every odd month – 1st Wed 1-2:30), HIV/Hepatitis C Updates & In-services to jail providers (MD/NP), nurses, administration, custody (2-3/year).
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            <strong>Lectures/ Presentations at Local Academic & Community-Based Training Programs:</strong> Fellows will present lectures on HIV medicine topics to trainee groups at local teaching facilities, such as White Memorial Medical Center Family & Internal Medicine lecture series, USC School of Dentistry, USC Physician Assistant Program, USC AETC Projects.
          </p>
        </section>
      </article>
    </Layout>
  );
}