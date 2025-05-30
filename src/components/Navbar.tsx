import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Capabilities',
      subLinks: [
        { name: 'AI', href: '/ai' },
        { name: 'Agentic', href: '/agentic' },
        { name: 'Blockchain', href: '/blockchain' }
      ]
    },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://i.imgur.com/iAalTAa.png"
              alt="Company Logo"
              className="h-10 w-auto mr-2"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              link.subLinks ? (
                <div key={link.name} className="relative group">
                  <button className="flex items-center px-3 py-2 text-sm font-medium hover:text-teal-600 transition-colors">
                    {link.name}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {link.subLinks.map((subLink) => (
                      <a
                        key={subLink.name}
                        href={subLink.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                      >
                        {subLink.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium hover:text-teal-600 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            ))}
          </nav>

          <div className="hidden md:block">
            <Button variant="primary">Book Consultation</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.subLinks ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full py-2 text-left"
                      onClick={() => setIsCapabilitiesOpen(!isCapabilitiesOpen)}
                    >
                      <span className="font-medium">{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isCapabilitiesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isCapabilitiesOpen && (
                      <div className="ml-4 border-l border-gray-200 pl-4">
                        {link.subLinks.map((subLink) => (
                          <a
                            key={subLink.name}
                            href={subLink.href}
                            className="block py-2 text-gray-600 hover:text-teal-600"
                            onClick={() => setIsOpen(false)}
                          >
                            {subLink.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="block py-2 font-medium hover:text-teal-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Button variant="primary" className="w-full">
                Book Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};