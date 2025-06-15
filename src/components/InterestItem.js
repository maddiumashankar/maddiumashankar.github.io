import React from 'react';

// Placeholder for an icon if you decide to use one (e.g., from react-icons)
// import { FaRegStar } from 'react-icons/fa';

const InterestItem = ({ interest, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-3 hover:shadow-lg transition-shadow duration-200">
      {/* <FaRegStar className="text-yellow-500 text-xl" /> */}
      <div>
        <h4 className="font-semibold text-gray-800">{interest}</h4>
        {description && <p className="text-gray-600 text-sm">{description}</p>}
      </div>
    </div>
  );
};

export default InterestItem;
