import React from 'react';
// Consider using a library like react-icons for social media icons
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Basic form submission feedback. In a real app, you'd handle this with a backend or email service.
    alert('Thank you for your message! I will get back to you soon.');
    event.target.reset();
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" name="name" id="name" required
                       className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" name="email" id="email" required
                       className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" name="subject" id="subject" required
                                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea name="message" id="message" rows="4" required
                          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
              </div>
              <div>
                <button type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md shadow-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information & Social Links */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-2">
                {/* <FaEnvelope className="inline mr-2 text-blue-600" /> */}
                Email: <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">your.email@example.com</a>
              </p>
              <p className="text-gray-600">
                Feel free to reach out via email or connect with me on other platforms.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Follow Me</h3>
              <div className="flex space-x-6">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  {/* <FaLinkedin size={32} /> */}
                  <span className="text-2xl font-bold">LI</span> {/* Placeholder for Icon */}
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black">
                  {/* <FaGithub size={32} /> */}
                  <span className="text-2xl font-bold">GH</span> {/* Placeholder for Icon */}
                </a>
                {/* Add more social links as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
