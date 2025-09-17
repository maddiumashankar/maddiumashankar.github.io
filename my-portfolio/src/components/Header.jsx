import React, { useState, useEffect } from 'react';
import { BiMenu, BiX } from 'react-icons/bi'; // Icons for menu toggle

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { id: "home", href: "#home", text: "Home" },
    { id: "about", href: "#about", text: "About" },
    { id: "ctf", href: "#ctf", text: "CTF's" },
    { id: "projects", href: "#projects", text: "Projects" },
    { id: "contact", href: "#contact", text: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Calculate offset if header is fixed, to prevent overlap
        const headerOffset = isScrolled ? 70 : 80; // Approximate height of header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else {
      // For external links or different pages (not used here but good practice)
      window.location.href = href;
    }
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-neutral-darker shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-2xl font-bold text-primary-light hover:text-primary transition-colors duration-300"
            >
              krIPt0k1d
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2 rounded-md text-base font-medium text-neutral-300 hover:bg-neutral-700 hover:text-white transition-all duration-300 ease-in-out"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-light transition-all duration-300"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <BiX size={28} /> : <BiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Transition for slide down effect */}
      <div
        className={`md:hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-500 ease-in-out bg-neutral-darker shadow-lg`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-3 py-3 rounded-md text-base font-medium text-neutral-200 hover:bg-neutral-700 hover:text-white transition-all duration-300 ease-in-out"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
