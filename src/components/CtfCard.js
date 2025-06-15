import React from 'react';

const CtfCard = ({ eventName, description, platformUrl, date, position }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-xl overflow-hidden transform hover:shadow-2xl transition-shadow duration-300">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{eventName}</h3>
        {date && <p className="text-sm text-gray-400 mb-1">{date}</p>}
        {position && <p className="text-sm text-gray-300 mb-3 font-semibold">{position}</p>}
        <p className="text-gray-300 mb-4 text-sm">{description}</p>
        {platformUrl && (
          <a
            href={platformUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-3 rounded text-xs transition-colors duration-300"
          >
            View Platform/Event
          </a>
        )}
      </div>
    </div>
  );
};

export default CtfCard;
