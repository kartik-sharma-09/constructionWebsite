import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

function Testimonials() {
  const [activeService, setActiveService] = useState('All');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = ['All', 'Framing', 'Painting & Epoxy', 'Foundation', 'Renovation'];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Victoria, BC',
      service: 'Renovation',
      project: 'Kitchen Renovation',
      rating: 5,
      text: "Black Mountain Precision transformed our outdated kitchen into a modern masterpiece. The attention to detail was incredible, and they completed the project on time and within budget. Amritpal and his team were professional, clean, and a pleasure to work with. Our new kitchen has become the heart of our home!",
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      date: '2024'
    },
    {
      id: 2,
      name: 'Mike Chen',
      location: 'Vancouver, BC',
      service: 'Framing',
      project: 'Custom Home Framing',
      rating: 5,
      text: "Outstanding framing work for our custom home. The precision and quality of their structural work exceeded our expectations. Gill supervised the site expertly, ensuring every beam and joint was perfect. They worked efficiently and maintained excellent communication throughout the entire project.",
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      date: '2024'
    },
    {
      id: 3,
      name: 'Emily Davis',
      location: 'Surrey, BC',
      service: 'Foundation',
      project: 'Foundation Construction',
      rating: 5,
      text: "Excellent foundation work for our new home. The team was professional, knowledgeable, and delivered exceptional quality. The concrete work is flawless, and they even helped us with some design improvements. I would definitely hire Black Mountain Precision again for future projects.",
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      date: '2024'
    },
    {
      id: 4,
      name: 'David Wilson',
      location: 'Richmond, BC',
      service: 'Painting & Epoxy',
      project: 'Commercial Painting',
      rating: 5,
      text: "We hired Black Mountain Precision for our office renovation, including painting and epoxy flooring. The quality of work was exceptional, and they completed everything with minimal disruption to our business operations. The epoxy floors look amazing and have held up perfectly to heavy foot traffic.",
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      date: '2023'
    },
    {
      id: 5,
      name: 'Lisa Martinez',
      location: 'Burnaby, BC',
      service: 'Renovation',
      project: 'Bathroom Remodel',
      rating: 5,
      text: "Our master bathroom renovation was handled beautifully by Black Mountain Precision. From the initial consultation to the final walkthrough, everything was professional and high-quality. They transformed our cramped, outdated bathroom into a luxurious spa-like retreat. Highly recommended!",
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      date: '2023'
    },
    {
      id: 6,
      name: 'Robert Thompson',
      location: 'Langley, BC',
      service: 'Framing',
      project: 'Multi-Family Development',
      rating: 5,
      text: "As a developer, I've worked with many contractors, but Black Mountain Precision stands out for their reliability and quality. They framed our 12-unit townhouse project flawlessly, staying on schedule and maintaining excellent craftsmanship throughout. Jot's project management was exceptional.",
      image: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      date: '2023'
    },
    {
      id: 7,
      name: 'Amanda Foster',
      location: 'Victoria, BC',
      service: 'Foundation',
      project: 'Basement Foundation',
      rating: 5,
      text: "Black Mountain Precision did an excellent job with our basement foundation. Their attention to waterproofing and drainage details was impressive. The work site was always clean and organized, and they explained every step of the process. The foundation is solid and we're very satisfied with the quality.",
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      date: '2023'
    },
    {
      id: 8,
      name: 'James Kumar',
      location: 'Coquitlam, BC',
      service: 'Painting & Epoxy',
      project: 'Residential Painting',
      rating: 5,
      text: "Fantastic painting job on both interior and exterior of our home. The crew was meticulous in their preparation work and the final finish is flawless. They also applied epoxy coating to our garage floor which looks great and is very durable. Professional service from start to finish.",
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      date: '2023'
    }
  ];

  const filteredTestimonials = activeService === 'All' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.service === activeService);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === filteredTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? filteredTestimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Real feedback from satisfied clients across British Columbia
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <button
                key={service}
                onClick={() => {
                  setActiveService(service);
                  setCurrentTestimonial(0);
                }}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                  activeService === service
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600">
                {filteredTestimonials.length} reviews for{' '}
                {activeService === 'All' ? 'all services' : activeService}
              </p>
            </div>

            {filteredTestimonials.length > 0 && (
              <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div className="absolute -top-6 left-8">
                  <div className="bg-blue-600 text-white p-3 rounded-full">
                    <Quote className="w-8 h-8" />
                  </div>
                </div>

                <div className="text-center">
                  {/* Stars */}
                  <div className="flex justify-center space-x-1 mb-6">
                    {[...Array(filteredTestimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-8">
                    "{filteredTestimonials[currentTestimonial].text}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <img
                      src={filteredTestimonials[currentTestimonial].image}
                      alt={filteredTestimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-center sm:text-left">
                      <h4 className="text-xl font-bold text-gray-800">
                        {filteredTestimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-gray-600">
                        {filteredTestimonials[currentTestimonial].location}
                      </p>
                      <p className="text-blue-600 font-semibold">
                        {filteredTestimonials[currentTestimonial].project} • {filteredTestimonials[currentTestimonial].date}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                {filteredTestimonials.length > 1 && (
                  <>
                    <button
                      onClick={prevTestimonial}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center space-x-2 mt-8">
                      {filteredTestimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              All Reviews
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gray-50 rounded-xl p-6 relative hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="absolute -top-4 left-6">
                    <div className="bg-blue-600 text-white p-2 rounded-full">
                      <Quote className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="pt-4">
                    {/* Service Badge */}
                    <div className="mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {testimonial.service}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="flex space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 mb-6 italic leading-relaxed text-sm">
                      "{testimonial.text.length > 150 
                        ? `${testimonial.text.substring(0, 150)}...`
                        : testimonial.text}"
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-xs">
                          {testimonial.location}
                        </p>
                        <p className="text-blue-600 font-semibold text-xs">
                          {testimonial.project}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Satisfied Clients?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the Black Mountain Precision difference for yourself. 
            Contact us today for your free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Free Quote
            </a>
            <a
              href="tel:250-516-3488"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Call 250-516-3488
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;