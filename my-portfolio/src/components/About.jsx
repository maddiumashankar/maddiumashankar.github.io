import React from 'react';
import { BiDownload } from 'react-icons/bi'; // Import Download icon

const About = () => {
  const aboutImageUrl = 'https://via.placeholder.com/400x500/0e7490/FFFFFF?text=About+Me';
  const cvUrl = "https://drive.google.com/file/d/1V3uvfVN4kQAPxb7zBEBU__vJdHV3scw0/view?usp=drive_link";

  return (
    <section
      id="about"
      className="about-section py-16 md:py-24 bg-neutral-darker text-neutral-100 opacity-0 animate-fade-in-up"
      style={{ animationDelay: '0.3s' }} // Stagger sections
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-light opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          {/* Image and CV Button */}
          <div
            className="md:w-1/3 text-center md:text-left flex flex-col items-center transform transition-all duration-500 hover:scale-105 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            <img
              src={aboutImageUrl}
              alt="Umashankar"
              className="rounded-lg shadow-xl w-full max-w-xs object-cover mb-8 border-4 border-neutral-700 hover:border-primary-dark transition-all duration-300"
            />
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-lg font-semibold rounded-md text-neutral-darkest bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-darker focus:ring-primary-dark transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Download CV
              <BiDownload className="ml-2 h-5 w-5" />
            </a>
          </div>

          {/* About Text */}
          <div
            className="md:w-2/3 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed mb-6">
              "Hello world!!" Myself Umashankar aka <b className="text-primary-light font-semibold">krIPt0k1d</b>.
              I'm an active CTF player and Currently Pursuing B.tech 3rd year in Rajiv Gandhi University of Knowledge Technologies, Nuzvid.
            </p>
            <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed mb-6">
              I'm a person with high curiosity about learning new things in various domains. Mainly Interested in Cybersecurity.
            </p>
            <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed">
              Working in various domains like Network security, FullStack Development and Machine learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
