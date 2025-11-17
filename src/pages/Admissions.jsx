import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';

const Admissions = () => {
  const admissionSteps = [
    {
      step: 1,
      title: "Submit Application",
      description: "Complete and submit the online application form with required documents."
    },
    {
      step: 2,
      title: "Document Review",
      description: "Our admissions team reviews your application and supporting documents."
    },
    {
      step: 3,
      title: "Assessment & Interview",
      description: "Student assessment and parent interview to ensure good fit."
    },
    {
      step: 4,
      title: "Admission Decision",
      description: "Receive admission decision and enrollment information."
    },
    {
      step: 5,
      title: "Enrollment",
      description: "Complete enrollment process and prepare for the new academic year."
    }
  ];

  const requirements = [
    "Completed application form",
    "Birth certificate (certified copy)",
    "Previous school reports/transcripts",
    "Passport-size photographs (4 copies)",
    "Medical examination report",
    "Immunization records",
    "Parent/Guardian identification documents",
    "Transfer letter (if applicable)"
  ];

  const feeStructure = [
    {
      level: "Pre-Primary",
      tuition: "KES 45,000",
      registration: "KES 5,000",
      development: "KES 10,000"
    },
    {
      level: "Lower Primary",
      tuition: "KES 55,000",
      registration: "KES 5,000",
      development: "KES 12,000"
    },
    {
      level: "Upper Primary",
      tuition: "KES 65,000",
      registration: "KES 5,000",
      development: "KES 15,000"
    },
    {
      level: "Junior School",
      tuition: "KES 75,000",
      registration: "KES 5,000",
      development: "KES 18,000"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Admissions"
            subtitle="Join our school family and give your child the gift of faith-based excellence in education."
          />
          <div className="text-center">
            <Button size="lg" className="mr-4">Apply Now</Button>
            <Link to="/contact">
              <Button variant="secondary" size="lg">Schedule Visit</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Admission Process"
            subtitle="Our straightforward admission process ensures a smooth transition for your child."
          />
          <div className="space-y-8">
            {admissionSteps.map((step, index) => (
              <div key={step.step} className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-6 flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  {index < admissionSteps.length - 1 && (
                    <div className="w-px h-8 bg-gray-300 ml-6 mt-4"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Admission Requirements</h2>
              <p className="text-lg text-gray-600 mb-8">
                Please ensure you have all required documents ready before submitting your application.
              </p>
              <div className="space-y-3">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Requirements Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Fee Structure"
            subtitle="Transparent and competitive fees for quality Christian education."
          />
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-primary-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Level</th>
                  <th className="px-6 py-4 text-left font-semibold">Annual Tuition</th>
                  <th className="px-6 py-4 text-left font-semibold">Registration Fee</th>
                  <th className="px-6 py-4 text-left font-semibold">Development Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {feeStructure.map((fee, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-800">{fee.level}</td>
                    <td className="px-6 py-4 text-gray-600">{fee.tuition}</td>
                    <td className="px-6 py-4 text-gray-600">{fee.registration}</td>
                    <td className="px-6 py-4 text-gray-600">{fee.development}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-4">
              * Fees are subject to annual review. Additional costs may apply for uniforms, books, and extracurricular activities.
            </p>
            <p className="text-sm text-gray-500">
              Payment plans and scholarships available. Contact our admissions office for more information.
            </p>
          </div>
        </div>
      </section>

      {/* Downloadable Forms */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Downloadable Forms"
            subtitle="Download and complete these forms to begin your application process."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-center mb-3">Application Form</h3>
              <p className="text-gray-600 text-center text-sm mb-4">Complete student application form</p>
              <div className="text-center">
                <Button size="sm">Download PDF</Button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-center mb-3">Medical Form</h3>
              <p className="text-gray-600 text-center text-sm mb-4">Student health and medical information</p>
              <div className="text-center">
                <Button size="sm">Download PDF</Button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-center mb-3">Parent Agreement</h3>
              <p className="text-gray-600 text-center text-sm mb-4">School policies and parent commitment</p>
              <div className="text-center">
                <Button size="sm">Download PDF</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards giving your child an exceptional Christian education.
          </p>
          <div className="space-x-4">
            <Button variant="secondary" size="lg">Apply Now</Button>
            <Link to="/contact">
              <Button variant="gold" size="lg">Contact Admissions</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;