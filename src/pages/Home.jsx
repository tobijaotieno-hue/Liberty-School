import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ReviewCard from '../components/ReviewCard';
import SectionHeader from '../components/SectionHeader';
import { testimonials } from '../data/testimonials';

const Home = () => {
  const homeReviews = testimonials.slice(0, 6);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Liberty Christian School</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Faith-Based Excellence in Education
          </p>
          <div className="space-x-4">
            <Link to="/admissions">
              <Button size="lg" className="mb-4 md:mb-0">Enroll Now</Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Welcome to Liberty Christian School"
            subtitle="Where faith meets excellence in education. We nurture young minds with Christian values while providing world-class academic instruction."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
              <p className="text-gray-600">CBC-based curriculum designed to develop critical thinking and problem-solving skills.</p>
            </div>
            <div className="text-center">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Christian Values</h3>
              <p className="text-gray-600">Building character through biblical principles and moral education.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
              <p className="text-gray-600">Fostering a supportive community where every student can thrive and grow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="What Our Community Says"
            subtitle="Hear from parents, students, and alumni about their experience at Liberty Christian School."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/testimonials">
              <Button variant="secondary">Read More Testimonials</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our School Family?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Give your child the gift of faith-based education that prepares them for success in life and eternity.
          </p>
          <div className="space-x-4">
            <Link to="/admissions">
              <Button variant="secondary" size="lg">Start Application</Button>
            </Link>
            <Link to="/contact">
              <Button variant="gold" size="lg">Schedule Visit</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;