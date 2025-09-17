import React from 'react';
import { interestsData } from '../data/interestsData'; // Import data
import { BiBitcoin, BiTerminal, BiShieldQuarter, BiCodeCurly, BiBrain, BiFlag } from 'react-icons/bi'; // Example icons

// Icon mapping component
const GetInterestIcon = ({ iconName, color }) => {
  const iconStyle = { color: color, fontSize: '2.5rem', marginBottom: '0.75rem' };
  switch (iconName) {
    case 'BiBitcoin': return <BiBitcoin style={iconStyle} />;
    case 'BiTerminal': return <BiTerminal style={iconStyle} />;
    case 'BiShieldQuarter': return <BiShieldQuarter style={iconStyle} />;
    case 'BiCodeCurly': return <BiCodeCurly style={iconStyle} />;
    case 'BiBrain': return <BiBrain style={iconStyle} />;
    case 'BiFlag': return <BiFlag style={iconStyle} />;
    default: return <span style={iconStyle}>?</span>;
  }
};

const InterestCard = ({ iconName, name, color, delay }) => (
  <div
    className="flex flex-col items-center p-6 bg-neutral-darker rounded-lg shadow-xl hover:shadow-primary-dark/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl opacity-0 animate-fade-in-up"
    style={{ animationDelay: delay }}
  >
    <GetInterestIcon iconName={iconName} color={color} />
    <h3 className="text-xl font-semibold text-neutral-100 text-center">{name}</h3>
  </div>
);

const Interests = () => {
  return (
    <section
      id="interests"
      className="interests-section py-16 md:py-24 bg-neutral-darkest text-neutral-100 opacity-0 animate-fade-in-up"
      style={{ animationDelay: '0.4s' }} // Stagger sections
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-light opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          Interests
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {interestsData.map((interest, index) => (
            <InterestCard
              key={interest.id}
              iconName={interest.iconName}
              name={interest.name}
              color={interest.color}
              delay={`${0.6 + index * 0.1}s`} // Stagger card animation
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
