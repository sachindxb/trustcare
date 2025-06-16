'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { scroller } from 'react-scroll';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      const sections = ['hero', 'services', 'technology', 'contact', 'book-appointment'];
      const activeSection = sections.find((section) => {
        const element = document.getElementById(section);
        return element && currentPosition >= element.offsetTop - 80 && currentPosition < element.offsetTop + element.offsetHeight;
      });
      if (activeSection) {
        const links = document.querySelectorAll('.nav-link');
        links.forEach((link) => link.classList.remove('active'));
        const activeLink = document.querySelector(`button[onClick*="${activeSection}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionName: string) => {
    scroller.scrollTo(sectionName, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -80, // Adjust the offset to account for the header height
    });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#2C5282]">
            TrustCare
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="nav-link text-gray-600 hover:text-[#2C5282] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="nav-link text-gray-600 hover:text-[#2C5282] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('technology')}
              className="nav-link text-gray-600 hover:text-[#2C5282] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Technology
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="nav-link text-gray-600 hover:text-[#2C5282] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('book-appointment')}
              className="nav-link text-gray-600 hover:text-[#2C5282] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Book Appointment
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <button
              onClick={() => {
                scrollToSection('hero');
                setIsMenuOpen(false);
              }}
              className="block nav-link text-gray-600 hover:text-[#2C5282] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Home
            </button>
            <button
              onClick={() => {
                scrollToSection('services');
                setIsMenuOpen(false);
              }}
              className="block nav-link text-gray-600 hover:text-[#2C5282] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Services
            </button>
            <button
              onClick={() => {
                scrollToSection('technology');
                setIsMenuOpen(false);
              }}
              className="block nav-link text-gray-600 hover:text-[#2C5282] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Technology
            </button>
            <button
              onClick={() => {
                scrollToSection('contact');
                setIsMenuOpen(false);
              }}
              className="block nav-link text-gray-600 hover:text-[#2C5282] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Contact
            </button>
            <button
              onClick={() => {
                scrollToSection('book-appointment');
                setIsMenuOpen(false);
              }}
              className="block nav-link text-gray-600 hover:text-[#2C5282] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Book Appointment
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}