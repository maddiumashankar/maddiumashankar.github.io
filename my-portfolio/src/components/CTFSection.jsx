import React from 'react';
import { ctfEventsData } from '../data/ctfData'; // Import data
import { BiCaretRight } from 'react-icons/bi'; // Import icon

const CTFCard = ({ name, details, writeupLink, delay }) => (
  <div
    className="ctf-box bg-neutral-darker p-6 rounded-lg shadow-xl hover:shadow-primary-dark/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl opacity-0 animate-fade-in-up"
    style={{ animationDelay: delay }}
  >
    <h3 className="text-2xl font-semibold text-primary-light mb-4">{name}</h3>
    <ul className="space-y-2 text-neutral-300">
      {details.map((detail, index) => (
        <li key={index} className="flex items-center">
          <BiCaretRight className="mr-2 text-primary-light flex-shrink-0" size={20} />
          {detail}
        </li>
      ))}
      <li className="flex items-center">
        <BiCaretRight className="mr-2 text-primary-light flex-shrink-0" size={20} />
        Click Here to read: <a href={writeupLink} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline ml-1">writeup</a>
      </li>
    </ul>
  </div>
);

const CTFSection = () => {
  return (
    <section
      id="ctf"
      className="ctf-section py-16 md:py-24 bg-neutral-darkest text-neutral-100 opacity-0 animate-fade-in-up"
      style={{ animationDelay: '0.5s' }} // Stagger sections
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-light opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          CTF's
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ctfEventsData.map((event, index) => (
            <CTFCard
              key={event.id}
              {...event}
              delay={`${0.7 + index * 0.15}s`} // Stagger card animation
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTFSection;
