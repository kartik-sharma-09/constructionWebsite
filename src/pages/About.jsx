import React from 'react';
import { Users, Award, Calendar, MapPin, Phone, Mail } from 'lucide-react';

function About() {
  const teamMembers = [
    {
      name: 'Amritpal Singh',
      position: 'Owner & Founder',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      description: 'With over 5 years in construction, Amritpal leads with vision and expertise, ensuring every project meets the highest standards.'
    },
    {
      name: 'Gill',
      position: 'Site Supervisor',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      description: 'Gill oversees daily operations and quality control, bringing precision and safety to every construction site.'
    },
    {
      name: 'Jot',
      position: 'Operational Manager',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      description: 'Jot manages project coordination and client relations, ensuring smooth operations and customer satisfaction.'
    }
  ];

  const stats = [
    { icon: Award, label: 'Projects Completed', value: '500+' },
    { icon: Users, label: 'Satisfied Clients', value: '300+' },
    { icon: Calendar, label: 'Years Experience', value: '5+' },
    { icon: MapPin, label: 'Service Areas', value: '10+' }
  ];

  const certifications = [
    'Licensed General Contractor',
    'WCB Registration',
    'Liability Insurance Coverage',
    'Bonded & Insured',
    'Safety Training Certified',
    'Environmental Compliance'
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Black Mountain Precision
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              BC's fastest growing construction company, built on a foundation of 
              precision, quality, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Founded with a vision to redefine construction excellence in British Columbia, 
                    Black Mountain Precision Construction has rapidly grown to become one of the 
                    province's most trusted construction companies.
                  </p>
                  <p>
                    Starting from humble beginnings, our commitment to precision, quality, and 
                    innovation has earned us recognition as BC's fastest growing construction 
                    company. We specialize in residential and commercial projects, from 
                    structural framing to complete renovations.
                  </p>
                  <p>
                    Every project we undertake reflects our core values: delivering superior 
                    craftsmanship, maintaining the highest safety standards, and exceeding 
                    client expectations. Our team's expertise spans multiple construction 
                    disciplines, ensuring comprehensive solutions for every client need.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                  alt="Construction team at work"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold">5+</div>
                    <div className="text-sm">Years Strong</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center bg-white p-6 rounded-xl shadow-lg">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The skilled professionals behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Certifications & Qualifications
              </h2>
              <p className="text-xl text-gray-600">
                Licensed, insured, and certified for your peace of mind
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-semibold text-gray-800">{cert}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our experienced team can bring your construction 
            vision to life with precision and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:250-516-3488"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>250-516-3488</span>
            </a>
            <a
              href="mailto:blackmountainprecision.ca@gmail.com"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;