import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Campus', 'Students', 'Events', 'Sports', 'Arts'];

  // Placeholder gallery data
  const galleryImages = [
    { id: 1, category: 'Campus', title: 'School Main Building', description: 'Our beautiful main academic building' },
    { id: 2, category: 'Students', title: 'Happy Students', description: 'Students enjoying their break time' },
    { id: 3, category: 'Events', title: 'Annual Sports Day', description: 'Students participating in sports day activities' },
    { id: 4, category: 'Sports', title: 'Football Team', description: 'Our championship football team' },
    { id: 5, category: 'Arts', title: 'Art Exhibition', description: 'Student artwork on display' },
    { id: 6, category: 'Campus', title: 'Library', description: 'Modern library with extensive resources' },
    { id: 7, category: 'Students', title: 'Science Class', description: 'Students conducting experiments' },
    { id: 8, category: 'Events', title: 'Graduation Ceremony', description: 'Celebrating our graduates' },
    { id: 9, category: 'Sports', title: 'Basketball Court', description: 'Students playing basketball' },
    { id: 10, category: 'Arts', title: 'Music Performance', description: 'School choir performance' },
    { id: 11, category: 'Campus', title: 'Playground', description: 'Children enjoying playground activities' },
    { id: 12, category: 'Students', title: 'Reading Time', description: 'Students engaged in reading' }
  ];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Photo Gallery"
            subtitle="Explore life at Liberty Christian School through our photo gallery showcasing campus, students, events, and activities."
          />
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                onClick={() => openModal(image)}
              >
                <div className="relative bg-gray-200 h-64 flex items-center justify-center">
                  <span className="text-gray-500 text-center px-4">
                    {image.title}<br />
                    <small className="text-xs">Image Placeholder</small>
                  </span>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-gray-800 mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-600">{image.description}</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-full overflow-auto">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="bg-gray-200 h-96 flex items-center justify-center">
                <span className="text-gray-500 text-center px-4">
                  {selectedImage.title}<br />
                  <small className="text-sm">Full Size Image Placeholder</small>
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Capturing Memories"
            subtitle="Every moment at Liberty Christian School is a memory in the making."
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
              <div className="text-gray-600">Photos Captured</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Events Documented</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary-600 mb-2">25+</div>
              <div className="text-gray-600">Years of Memories</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Moments</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Be Part of Our Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our school community and create lasting memories with us.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Apply Now
            </button>
            <button className="bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Schedule Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;