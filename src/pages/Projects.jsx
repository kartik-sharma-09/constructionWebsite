import React, { useState } from 'react';
import { MapPin, Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ['All', 'Framing', 'Painting & Epoxy', 'Foundation', 'Renovation'];

  const projects = [
    {
      id: 1,
      title: 'Modern Family Residence',
      category: 'Framing',
      location: 'Victoria, BC',
      date: '2024',
      client: 'Johnson Family',
      description: 'Complete structural framing for a luxury 3,500 sq ft family home featuring custom architectural elements and open-concept design.',
      images: [
        'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      details: {
        'Project Type': 'Residential Framing',
        'Size': '3,500 sq ft',
        'Timeline': '8 weeks',
        'Challenges': 'Complex roof lines and engineered beams',
        'Materials': 'Premium grade lumber, steel connections'
      }
    },
    {
      id: 2,
      title: 'Commercial Office Renovation',
      category: 'Renovation',
      location: 'Vancouver, BC',
      date: '2024',
      client: 'TechCorp Solutions',
      description: 'Full commercial space renovation including modern finishes, lighting, and open-concept workspace design.',
      images: [
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      details: {
        'Project Type': 'Commercial Renovation',
        'Size': '5,000 sq ft',
        'Timeline': '6 weeks',
        'Challenges': 'Working around business operations',
        'Features': 'Glass partitions, modern lighting'
      }
    },
    {
      id: 3,
      title: 'Residential Foundation',
      category: 'Foundation',
      location: 'Surrey, BC',
      date: '2024',
      client: 'Anderson Development',
      description: 'Precision foundation construction for multi-unit residential development with complex drainage systems.',
      images: [
        'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/162539/architecture-building-construction-work-162539.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      details: {
        'Project Type': 'Foundation Construction',
        'Size': '12 units',
        'Timeline': '4 weeks',
        'Challenges': 'Complex drainage requirements',
        'Materials': 'Reinforced concrete, waterproofing'
      }
    },
    {
      id: 4,
      title: 'Luxury Kitchen Remodel',
      category: 'Renovation',
      location: 'Richmond, BC',
      date: '2023',
      client: 'Smith Residence',
      description: 'Complete kitchen transformation with custom cabinetry, quartz countertops, and premium appliances.',
      images: [
        'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      details: {
        'Project Type': 'Kitchen Renovation',
        'Size': '400 sq ft',
        'Timeline': '3 weeks',
        'Features': 'Custom cabinetry, quartz countertops',
        'Appliances': 'Premium stainless steel suite'
      }
    },
    {
      id: 5,
      title: 'Industrial Epoxy Flooring',
      category: 'Painting & Epoxy',
      location: 'Burnaby, BC',
      date: '2023',
      client: 'Manufacturing Plus',
      description: 'Professional epoxy floor coating system for industrial facility with high-traffic requirements.',
      images: [
        'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/162539/architecture-building-construction-work-162539.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      details: {
        'Project Type': 'Epoxy Flooring',
        'Size': '10,000 sq ft',
        'Timeline': '2 weeks',
        'System': 'Industrial-grade epoxy coating',
        'Features': 'Slip-resistant, chemical resistant'
      }
    },
    {
      id: 6,
      title: 'Multi-Family Framing',
      category: 'Framing',
      location: 'Langley, BC',
      date: '2023',
      client: 'Westside Developments',
      description: 'Structural framing for 24-unit townhouse development with complex architectural requirements.',
      images: [
        'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      details: {
        'Project Type': 'Multi-Family Framing',
        'Size': '24 units',
        'Timeline': '12 weeks',
        'Challenges': 'Coordinated phasing',
        'Materials': 'Engineered lumber systems'
      }
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Showcasing our commitment to excellence through completed projects 
              across British Columbia.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 sm:px-6 py-2 rounded-full font-semibold transition-all duration-200 text-sm sm:text-base ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {project.description.length > 100 
                      ? `${project.description.substring(0, 100)}...`
                      : project.description
                    }
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <User className="w-4 h-4" />
                      <span>{project.client}</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedProject.title}
                </h2>
                <p className="text-blue-600 font-semibold">
                  {selectedProject.category}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Image Gallery */}
            <div className="relative">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={selectedProject.title}
                className="w-full h-64 sm:h-96 object-cover"
              />
              
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Project Details */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Project Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{selectedProject.location}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{selectedProject.date}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{selectedProject.client}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Project Details
                  </h3>
                  <div className="space-y-2">
                    {Object.entries(selectedProject.details).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="font-semibold text-gray-600">{key}:</span>
                        <span className="text-gray-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Description
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;