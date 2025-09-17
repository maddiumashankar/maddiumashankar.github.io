import React, { useState, useEffect } from 'react';
import { BiLogoLinkedin, BiLogoGithub, BiEnvelope } from 'react-icons/bi'; // Using BiEnvelope for mail

const SocialLink = ({ href, icon: IconComponent, label }) => ( // Changed icon prop to IconComponent
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-neutral-400 hover:text-primary-light transition-colors duration-300 transform hover:scale-110"
  >
    <IconComponent size={30} /> {/* Render the passed icon component */}
  </a>
);

const Home = () => {
  const roles = ["Programmer", "CTF Player", "Web Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [deletingSpeed, setDeletingSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, typedText.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, typedText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && typedText === currentRole) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentRoleIndex, roles, typingSpeed, deletingSpeed]);

  const profileImageUrl = 'https://via.placeholder.com/300x300/06b6d4/FFFFFF?text=Profile';

  return (
    <section
      id="home"
      className="home-section min-h-screen flex items-center justify-center py-20 pt-32 md:pt-24 bg-neutral-darkest opacity-0 animate-fade-in-up"
      style={{ animationDelay: '0.2s' }} // Optional delay for staggered effect if other elements animate too
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 md:gap-12">
          {/* Profile Image */}
          <div className="mb-8 md:mb-0 flex-shrink-0 transform transition-all duration-500 hover:scale-105 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <img
              src={profileImageUrl}
              alt="Maddi Umashankar"
              className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full object-cover shadow-xl border-4 border-primary-dark"
            />
          </div>

          {/* Text Content */}
          <div className="home-text opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl md:text-2xl font-semibold text-neutral-200 mb-2">
              MADDI UMASHANKAR
            </h3>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-100 mb-4 leading-tight">
              I'm a <span className="text-primary typing-effect whitespace-nowrap">{typedText}</span>
              <span className="inline-block w-1 h-10 sm:h-12 lg:h-14 bg-primary animate-pulse ml-1 align-bottom"></span> {/* Blinking cursor */}
            </h1>

            {/* Social Links */}
            <div className="social-links mt-8 flex justify-center md:justify-start space-x-5 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <SocialLink href="https://www.linkedin.com/in/maddi-umashankar/" icon={BiLogoLinkedin} label="LinkedIn" />
              <SocialLink href="https://github.com/maddiumashankar" icon={BiLogoGithub} label="GitHub" />
              <SocialLink href="mailto:maddiumashankar04@gmail.com" icon={BiEnvelope} label="Email" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
