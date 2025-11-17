import SectionHeader from '../components/SectionHeader';
import { cbcLevels } from '../data/academics';

const Academics = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Academic Excellence"
            subtitle="Our Competency-Based Curriculum (CBC) approach ensures every student develops the skills and knowledge needed for success in the 21st century."
          />
        </div>
      </section>

      {/* CBC Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Competency-Based Curriculum (CBC)</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our CBC implementation focuses on developing competencies that prepare students for real-world challenges. 
                We emphasize critical thinking, creativity, communication, collaboration, and character development.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold mb-1">Learner-Centered Approach</h4>
                    <p className="text-gray-600">Students actively participate in their learning journey</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">Competency Development</h4>
                    <p className="text-gray-600">Focus on skills and knowledge application</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold mb-1">Holistic Assessment</h4>
                    <p className="text-gray-600">Continuous assessment of learning progress</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">CBC Overview Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* CBC Levels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Our CBC Levels"
            subtitle="Comprehensive education from early years through junior school, building strong foundations for lifelong learning."
          />
          <div className="space-y-12">
            {cbcLevels.map((level, index) => (
              <div key={level.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <span className="bg-primary-600 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{level.title}</h3>
                        <p className="text-primary-600 font-medium">{level.ageRange}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{level.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Subjects Offered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {level.subjects.map((subject, idx) => (
                          <span key={idx} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Learning Approach:</h4>
                      <p className="text-gray-600">{level.approach}</p>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">{level.title} Image Placeholder</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Assessment Methods"
            subtitle="We use diverse assessment strategies to evaluate and support student learning and development."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Formative Assessment</h3>
              <p className="text-gray-600 text-center">Ongoing evaluation during learning to provide immediate feedback and support.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Summative Assessment</h3>
              <p className="text-gray-600 text-center">Comprehensive evaluation at the end of learning periods to measure achievement.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Portfolio Assessment</h3>
              <p className="text-gray-600 text-center">Collection of student work showing progress and achievement over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Our Learning Approach"
            subtitle="Innovative teaching methods that engage students and promote deep understanding."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Project-Based Learning</h4>
                  <p className="text-gray-600">Students work on real-world projects that integrate multiple subjects and develop practical skills.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Collaborative Learning</h4>
                  <p className="text-gray-600">Group activities and peer learning that build teamwork and communication skills.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Technology Integration</h4>
                  <p className="text-gray-600">Modern technology tools enhance learning and prepare students for the digital age.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Learning Approach Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;