import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-8">
      <div className="container mx-auto">
        <p>&copy; {currentYear} Your Name. All rights reserved.</p>
        <p>
          Built with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">React</a> &
          <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300"> Tailwind CSS</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
