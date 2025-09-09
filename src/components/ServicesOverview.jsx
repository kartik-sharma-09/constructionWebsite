import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Paintbrush, Radiation as Foundation, Wrench, ArrowRight } from 'lucide-react';

function ServicesOverview() {
  const services = [
    {
      icon: Home,
      title: 'Framing',
      description: 'Expert structural wood framing for multi-family homes, custom residences, and commercial projects.',
      image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Multi-family Construction', 'Custom Homes', 'Structural Engineering']
    },
    {
      icon: Paintbrush,
      title: 'Painting & Epoxy',
      description: 'Premium interior and exterior painting services plus professional epoxy flooring solutions.',
      image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Interior/Exterior Painting', 'Epoxy Flooring', 'Commercial Coating']
    },
    {
      icon: Foundation,
      title: 'Foundation & Formwork',
      description: 'Solid foundation construction and precise concrete formwork for lasting structural integrity.',
      image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Concrete Formwork', 'Foundation Construction', 'Structural Support']
    },
    {
      icon: Wrench,
      title: 'Renovation',
      description: 'Complete home transformations including kitchen, bathroom, and full-home remodeling projects.',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Kitchen Renovation', 'Bathroom Remodeling', 'Full Home Makeovers']
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction services delivered with precision, quality, and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 p-3 rounded-lg">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-gray-500 flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/services"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesOverview;