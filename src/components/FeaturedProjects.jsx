import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';

function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: 'Modern Family Home',
      category: 'Framing',
      location: 'Victoria, BC',
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Complete structural framing for a luxury family residence with custom design elements.'
    },
    {
      title: 'Commercial Renovation',
      category: 'Renovation',
      location: 'Vancouver, BC',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Full commercial space transformation including modern finishes and layout optimization.'
    },
    {
      title: 'Foundation Project',
      category: 'Foundation',
      location: 'Surrey, BC',
      image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Precision concrete foundation work for multi-unit residential development.'
    },
    {
      title: 'Luxury Kitchen',
      category: 'Renovation',
      location: 'Richmond, BC',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Complete kitchen renovation with custom cabinetry and premium finishes.'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600">
            Showcasing our recent work and craftsmanship
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto mb-8">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div className="relative">
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="w-full h-96 md:h-[500px] object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="max-w-2xl">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
                    {projects[currentIndex].category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-blue-300 font-semibold mb-2">
                    {projects[currentIndex].location}
                  </p>
                  <p className="text-gray-200 text-lg">
                    {projects[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {projects.slice(1, 4).map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm font-semibold">
                  {project.category}
                </span>
                <h4 className="text-lg font-bold text-gray-800 mt-2 mb-1">
                  {project.title}
                </h4>
                <p className="text-blue-600 font-semibold text-sm mb-2">
                  {project.location}
                </p>
                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;