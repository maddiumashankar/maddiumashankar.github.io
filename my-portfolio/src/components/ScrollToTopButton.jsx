import React, { useState, useEffect } from 'react';
import { BiArrowToTop } from 'react-icons/bi'; // Using an appropriate icon

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className="p-3 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2 focus:ring-offset-neutral-darkest"
          aria-label="Scroll to top"
        >
          <BiArrowToTop size={24} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
