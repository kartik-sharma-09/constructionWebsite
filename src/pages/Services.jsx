import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Paintbrush, Radiation as Foundation, Wrench, ArrowRight, CheckCircle } from 'lucide-react';

function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Home,
      title: 'Framing',
      subtitle: 'Structural Excellence',
      description: 'Expert structural wood framing services for residential and commercial projects. From multi-family developments to custom homes, we deliver precision-engineered frameworks that stand the test of time.',
      image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Multi-family Construction Framing',
        'Custom Home Structural Framing',
        'Commercial Building Frameworks',
        'Engineered Beam Installation',
        'Roof Truss Systems',
        'Advanced Framing Techniques'
      ],
      process: [
        'Site Assessment & Planning',
        'Blueprint Review & Engineering',
        'Foundation Coordination',
        'Precision Framing Installation',
        'Quality Inspection & Compliance',
        'Project Handover'
      ]
    },
    {
      icon: Paintbrush,
      title: 'Painting & Epoxy',
      subtitle: 'Professional Finishes',
      description: 'Premium painting and epoxy coating services for both interior and exterior applications. We transform spaces with high-quality finishes that enhance beauty and provide lasting protection.',
      image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Interior & Exterior Painting',
        'Commercial Space Painting',
        'Epoxy Floor Coating Systems',
        'Industrial Coatings',
        'Color Consultation',
        'Surface Preparation & Priming'
      ],
      process: [
        'Color Consultation & Planning',
        'Surface Preparation',
        'Primer Application',
        'Professional Paint Application',
        'Epoxy System Installation',
        'Final Quality Check'
      ]
    },
    {
      icon: Foundation,
      title: 'Foundation & Formwork',
      subtitle: 'Solid Foundations',
      description: 'Professional foundation construction and concrete formwork services. We create the solid base your project needs with precision-engineered foundations and expert concrete work.',
      image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Residential Foundation Construction',
        'Commercial Foundation Systems',
        'Concrete Formwork Design',
        'Waterproofing Solutions',
        'Basement Construction',
        'Crawl Space Solutions'
      ],
      process: [
        'Site Survey & Soil Analysis',
        'Foundation Design & Planning',
        'Excavation & Site Preparation',
        'Formwork Installation',
        'Concrete Pouring & Finishing',
        'Curing & Quality Control'
      ]
    },
    {
      icon: Wrench,
      title: 'Renovation',
      subtitle: 'Transform Your Space',
      description: 'Complete renovation services from kitchen and bathroom remodels to full-home transformations. We bring your vision to life with expert craftsmanship and attention to detail.',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Kitchen Renovation & Remodeling',
        'Bathroom Transformation',
        'Full Home Renovations',
        'Basement Finishing',
        'Room Additions',
        'Custom Millwork & Cabinetry'
      ],
      process: [
        'Initial Consultation & Design',
        'Planning & Permits',
        'Demolition & Preparation',
        'Construction & Installation',
        'Finishing & Detail Work',
        'Final Walkthrough & Handover'
      ]
    }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Comprehensive construction services delivered with precision, 
              quality, and innovation across British Columbia.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Service Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      activeService === index
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{service.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Service Details */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Section */}
                <div className="h-64 lg:h-full relative overflow-hidden">
                  <img
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-600/20"></div>
                  <div className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-2 rounded-lg">
                    <span className="font-semibold">{services[activeService].subtitle}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      {React.createElement(services[activeService].icon, {
                        className: "w-8 h-8 text-blue-600"
                      })}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800">
                        {services[activeService].title}
                      </h2>
                      <p className="text-blue-600 font-semibold">
                        {services[activeService].subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-8">
                    {services[activeService].description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      What We Offer:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {services[activeService].features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
                  >
                    <span>Get Quote for {services[activeService].title}</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Process for {services[activeService].title}
              </h2>
              <p className="text-xl text-gray-600">
                How we deliver excellence from start to finish
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services[activeService].process.map((step, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-gray-800">Step {index + 1}</h3>
                  </div>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Service Areas
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Proudly serving communities across British Columbia
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                'Victoria', 'Vancouver', 'Surrey', 'Richmond',
                'Burnaby', 'Langley', 'Coquitlam', 'Delta',
                'North Vancouver', 'West Vancouver', 'Saanich', 'Kelowna'
              ].map((city) => (
                <div key={city} className="bg-white p-3 rounded-lg shadow-md">
                  <span className="font-semibold text-gray-800">{city}</span>
                </div>
              ))}
            </div>
            
            <p className="text-gray-600">
              Don't see your area? Contact us - we may be able to serve your location.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed quote 
            for your construction project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Free Quote
            </Link>
            <Link
              to="/projects"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;