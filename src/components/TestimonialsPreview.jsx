import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote } from 'lucide-react';

function TestimonialsPreview() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Victoria, BC',
      service: 'Kitchen Renovation',
      rating: 5,
      text: 'Black Mountain Precision transformed our kitchen beyond our expectations. The attention to detail and quality of work is outstanding.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Mike Chen',
      location: 'Vancouver, BC',
      service: 'Home Framing',
      rating: 5,
      text: 'Professional, reliable, and skilled. They completed our home framing project on time and within budget. Highly recommended!',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Emily Davis',
      location: 'Surrey, BC',
      service: 'Foundation Work',
      rating: 5,
      text: 'Excellent foundation work for our new home. The team was professional and the quality of their concrete work is exceptional.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Real feedback from satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 relative hover:shadow-lg transition-shadow duration-300"
            >
              <div className="absolute -top-4 left-6">
                <div className="bg-blue-600 text-white p-2 rounded-full">
                  <Quote className="w-5 h-5" />
                </div>
              </div>

              <div className="pt-4">
                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                    <p className="text-sm text-blue-600 font-semibold">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/testimonials"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Read More Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsPreview;