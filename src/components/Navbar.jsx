import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      {/* <div className="bg-gray-900 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>250-516-3488</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>blackmountainprecision.ca@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Victoria, BC</span>
              </div>
            </div>
            <div className="text-blue-400 font-semibold">
              BC's Fastest Growing Construction Company
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Navigation */}
      <nav
        className={`sticky w-full top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg border-b border-gray-200'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
        style={{ marginTop: window.innerWidth >= 768 ? '40px' : '0' }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                  <span className="font-bold text-blue-600 text-lg">BMP</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-xl text-gray-800">
                  Black Mountain Precision
                </h1>
                <p className="text-sm text-gray-600">Construction Ltd.</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                      : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-gray-700 hover:text-blue-600 font-medium px-2 py-1 ${
                      location.pathname === link.path ? 'text-blue-600' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;