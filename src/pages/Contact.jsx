import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Instagram } from 'lucide-react';

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const services = [
    'Framing',
    'Painting & Epoxy',
    'Foundation & Formwork',
    'Renovation',
    'Consultation',
    'Other'
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '250-516-3488',
      action: 'tel:250-516-3488'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'blackmountainprecision.ca@gmail.com',
      action: 'mailto:blackmountainprecision.ca@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '3244 Wishart Rd\nVictoria, BC V9C 1R1',
      action: 'https://maps.google.com/?q=3244+Wishart+Rd,+Victoria,+BC+V9C+1R1'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      details: '@bmp_construction_ca',
      action: 'https://instagram.com/bmp_construction_ca'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '7:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Emergency calls only' }
  ];

  // ✅ FIXED: Submits form to FormSubmit using fetch API
  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://formsubmit.co/ajax/e7e064a634f8e75e846c934a6c9b5cfe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        setSelectedService('');
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Ready to start your construction project? Get in touch with BC's 
              fastest growing construction company today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600">
                Multiple ways to reach our team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={index}
                    className="text-center bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {info.title}
                    </h3>
                    <div className="text-gray-600 text-sm whitespace-pre-line mb-4">
                      {info.details}
                    </div>
                    <a
                      href={info.action}
                      target={info.title === 'Instagram' || info.title === 'Address' ? '_blank' : undefined}
                      rel={info.title === 'Instagram' || info.title === 'Address' ? 'noopener noreferrer' : undefined}
                      className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors"
                    >
                      {info.title === 'Phone' && 'Call Now'}
                      {info.title === 'Email' && 'Send Email'}
                      {info.title === 'Address' && 'Get Directions'}
                      {info.title === 'Instagram' && 'Follow Us'}
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Business Hours */}
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Business Hours</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="text-center">
                    <div className="font-semibold text-gray-800">{schedule.day}</div>
                    <div className="text-blue-600">{schedule.hours}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Thank You!
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We've received your message and will get back to you within 24 hours. 
                      For urgent matters, please call us directly at{' '}
                      <a href="tel:250-516-3488" className="text-blue-600 font-semibold">
                        250-516-3488
                      </a>
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          {...register('name', { required: 'Name is required' })}
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: 'Invalid email address',
                            },
                          })}
                          type="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Phone & Service */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          {...register('phone', { required: 'Phone number is required' })}
                          type="tel"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="(250) 555-0123"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Service Needed *
                        </label>
                        <select
                          {...register('service', { required: 'Please select a service' })}
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                        {errors.service && (
                          <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Project Location */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Location
                      </label>
                      <input
                        {...register('location')}
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="City, BC"
                      />
                    </div>

                    {/* Project Details */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        {...register('message', { required: 'Please provide project details' })}
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Please describe your project, timeline, budget range, and any specific requirements..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Preferred Contact Method */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Contact Method
                      </label>
                      <div className="flex flex-wrap gap-4">
                        <label className="flex items-center">
                          <input {...register('contactMethod')} type="radio" value="phone" className="text-blue-600 mr-2" />
                          Phone Call
                        </label>
                        <label className="flex items-center">
                          <input {...register('contactMethod')} type="radio" value="email" className="text-blue-600 mr-2" />
                          Email
                        </label>
                        <label className="flex items-center">
                          <input {...register('contactMethod')} type="radio" value="either" defaultChecked className="text-blue-600 mr-2" />
                          Either
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Map & Additional Info */}
              <div className="space-y-8">
                {/* Map */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p className="font-semibold">Interactive Map</p>
                      <p className="text-sm">3244 Wishart Rd, Victoria, BC</p>
                      <a
                        href="https://maps.google.com/?q=3244+Wishart+Rd,+Victoria,+BC+V9C+1R1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm font-semibold mt-2 inline-block"
                      >
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-blue-600 text-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
                  <p className="mb-6">
                    For urgent construction needs or emergency services, 
                    call us directly. We're here to help!
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:250-516-3488"
                      className="block bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-center transition-colors duration-200"
                    >
                      Call 250-516-3488
                    </a>
                    <a
                      href="mailto:blackmountainprecision.ca@gmail.com"
                      className="block border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold text-center transition-colors duration-200"
                    >
                      Send Email
                    </a>
                  </div>
                </div>

                {/* Service Area */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Service Area</h3>
                  <p className="text-gray-600 mb-4">
                    We proudly serve clients throughout British Columbia, with a focus on:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-gray-700">• Victoria</div>
                    <div className="text-gray-700">• Vancouver</div>
                    <div className="text-gray-700">• Surrey</div>
                    <div className="text-gray-700">• Richmond</div>
                    <div className="text-gray-700">• Burnaby</div>
                    <div className="text-gray-700">• Langley</div>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    Other areas available upon request
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
