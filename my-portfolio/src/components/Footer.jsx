import React from 'react';
import { BiLogoLinkedin, BiLogoGithub, BiEnvelope } from 'react-icons/bi';

const SocialLink = ({ href, icon: IconComponent, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-neutral-500 hover:text-primary-light transition-all duration-300 transform hover:scale-110"
  >
    <IconComponent size={28} />
  </a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="footer-section py-10 bg-neutral-darker text-neutral-500 border-t border-neutral-700 opacity-0 animate-fade-in"
      style={{ animationDelay: '0.8s' }} // Fade in after other content
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="social-links flex justify-center space-x-6 mb-8">
          <SocialLink href="https://www.linkedin.com/in/maddi-umashankar/" icon={BiLogoLinkedin} label="LinkedIn" />
          <SocialLink href="https://github.com/maddiumashankar" icon={BiLogoGithub} label="GitHub" />
          <SocialLink href="mailto:maddiumashankar04@gmail.com" icon={BiEnvelope} label="Email" />
        </div>

        <div className="footer-links space-x-4 sm:space-x-6 mb-8">
          <a href="#" className="hover:text-neutral-300 transition-colors text-sm">Privacy Policy</a>
          <a href="#" className="hover:text-neutral-300 transition-colors text-sm">Terms of Usage</a>
          <a href="#" className="hover:text-neutral-300 transition-colors text-sm">Disclaimer</a>
        </div>

        <p className="text-sm text-neutral-500">
          &copy; {currentYear} krIPt0k1d. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
