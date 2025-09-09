import React from 'react';
import { Target, Award, Shield, Lightbulb } from 'lucide-react';

function CoreValues() {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every measurement matters, every detail counts'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Exceeding expectations with superior craftsmanship'
    },
    {
      icon: Shield,
      title: 'Safety',
      description: 'Protecting our team and clients on every job'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Modern techniques and cutting-edge solutions'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600">
            The foundation of everything we build
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={value.title}
                className="text-center group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Values Strip */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-lg">
              <span className="font-semibold text-blue-400">Precision</span>
              <span className="hidden md:block text-gray-400">•</span>
              <span className="font-semibold text-green-400">Quality</span>
              <span className="hidden md:block text-gray-400">•</span>
              <span className="font-semibold text-yellow-400">Safety</span>
              <span className="hidden md:block text-gray-400">•</span>
              <span className="font-semibold text-purple-400">Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreValues;