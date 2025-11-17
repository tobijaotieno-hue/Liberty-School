import SectionHeader from '../components/SectionHeader';

const About = () => {
  const leadership = [
    {
      name: "Dr. Mary Wanjiku",
      position: "Principal",
      description: "20+ years in Christian education, PhD in Educational Leadership"
    },
    {
      name: "Rev. John Kamau",
      position: "Chaplain",
      description: "Master of Divinity, passionate about youth ministry and spiritual development"
    },
    {
      name: "Mrs. Grace Muthoni",
      position: "Academic Director",
      description: "15+ years in curriculum development, specialist in CBC implementation"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="About Liberty Christian School"
            subtitle="Established in 1995, we have been nurturing young minds with Christian values and academic excellence for over 25 years."
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To provide quality Christian education that develops the whole child - spiritually, academically, 
                socially, and physically - preparing them to be godly leaders and productive citizens in their communities.
              </p>
              <p className="text-lg text-gray-600">
                We believe that education is a partnership between home, school, and church, working together to 
                shape young lives according to biblical principles while maintaining the highest academic standards.
              </p>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Mission Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-8">
                To be the leading Christian school in Kenya, known for academic excellence, 
                spiritual growth, and character development that transforms lives and communities.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Core Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">F</span>
                  <div>
                    <strong>Faith:</strong> Grounding all learning in biblical truth and Christian worldview
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">E</span>
                  <div>
                    <strong>Excellence:</strong> Pursuing the highest standards in all we do
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">I</span>
                  <div>
                    <strong>Integrity:</strong> Acting with honesty, transparency, and moral uprightness
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">L</span>
                  <div>
                    <strong>Love:</strong> Showing Christ's love in all our relationships and interactions
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">S</span>
                  <div>
                    <strong>Service:</strong> Developing hearts that serve God and others selflessly
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Vision & Values Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Our Leadership Team"
            subtitle="Experienced educators and spiritual leaders committed to your child's growth and development."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{leader.position}</p>
                <p className="text-gray-600 text-sm">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Culture */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Our School Culture"
            subtitle="A nurturing environment where every child is valued, supported, and encouraged to reach their full potential."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m3 5.197H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Inclusive Community</h3>
                <p className="text-gray-600 text-sm">Welcoming students from all backgrounds to learn and grow together.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">Embracing modern teaching methods while maintaining timeless values.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Empowerment</h3>
                <p className="text-gray-600 text-sm">Equipping students with skills and confidence for future success.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Compassion</h3>
                <p className="text-gray-600 text-sm">Teaching students to care for others and serve their community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;