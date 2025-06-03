
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <img 
                src="/img/38988b4a-44ec-40ef-950d-e2ac441f9729.png" 
                alt="NSS Logo" 
                className="w-10 h-10 object-contain"
              />
              <img 
                src="/img/41158cb0-370f-472a-8dac-ae6a95a85925.png" 
                alt="NSUT Logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">NSS NSUT</h1>
              <p className="text-xs text-gray-600">National Service Scheme</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('programs')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Programs
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Events
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Join NSS
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('programs')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                Programs
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                Events
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                Contact
              </button>
              <button className="text-left bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium mt-4">
                Join NSS
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
