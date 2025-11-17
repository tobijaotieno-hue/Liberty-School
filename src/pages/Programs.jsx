import SectionHeader from '../components/SectionHeader';
import { programs } from '../data/programs';

const Programs = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Programs & Activities"
            subtitle="Beyond academics, we offer a rich variety of programs that develop talents, build character, and create lasting memories."
          />
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div key={program.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">{program.category}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {program.items.map((item, idx) => (
                        <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">{program.category} Image Placeholder</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Why Our Programs Matter"
            subtitle="Our diverse programs contribute to the holistic development of every student."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">Skill Development</h3>
                <p className="text-gray-600 text-sm">Programs help students discover and develop their unique talents and abilities.</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">Teamwork</h3>
                <p className="text-gray-600 text-sm">Collaborative activities build essential teamwork and leadership skills.</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">Character Building</h3>
                <p className="text-gray-600 text-sm">Programs instill values of perseverance, discipline, and sportsmanship.</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">Confidence</h3>
                <p className="text-gray-600 text-sm">Participation in programs builds self-confidence and public speaking skills.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Weekly Schedule Highlights"
            subtitle="A glimpse into our vibrant weekly program schedule."
          />
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-7 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
                <div key={day} className="p-4">
                  <h4 className="font-semibold text-primary-600 mb-3">{day}</h4>
                  <div className="space-y-2 text-sm">
                    {index === 0 && (
                      <>
                        <p className="text-gray-600">Morning Devotion</p>
                        <p className="text-gray-600">Football Practice</p>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <p className="text-gray-600">Choir Practice</p>
                        <p className="text-gray-600">Science Club</p>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <p className="text-gray-600">Chapel Service</p>
                        <p className="text-gray-600">Art & Craft</p>
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <p className="text-gray-600">Drama Club</p>
                        <p className="text-gray-600">Basketball</p>
                      </>
                    )}
                    {index === 4 && (
                      <>
                        <p className="text-gray-600">Debate Club</p>
                        <p className="text-gray-600">Music Lessons</p>
                      </>
                    )}
                    {index === 5 && (
                      <>
                        <p className="text-gray-600">Sports Day</p>
                        <p className="text-gray-600">Community Service</p>
                      </>
                    )}
                    {index === 6 && (
                      <>
                        <p className="text-gray-600">Family Time</p>
                        <p className="text-gray-600">Rest & Reflection</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;