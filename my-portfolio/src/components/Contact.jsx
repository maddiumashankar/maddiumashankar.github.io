import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage('Please fill in all fields.');
      setIsSubmitted(false);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        setSubmitMessage('Please enter a valid email address.');
        setIsSubmitted(false);
        return;
    }

    console.log('Form data submitted:', formData);
    setSubmitMessage(`Thank you, ${formData.name}! Your message has been sent.`);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
        setSubmitMessage('');
        setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="contact-section py-16 md:py-24 bg-neutral-darkest text-neutral-100 opacity-0 animate-fade-in-up"
      style={{ animationDelay: '0.7s' }} // Stagger sections
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-light opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          Contact Me
        </h2>
        <form
          onSubmit={handleSubmit}
          className="contact-form space-y-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.9s' }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md bg-neutral-darker border border-neutral-700 text-neutral-100 focus:ring-primary focus:border-primary transition-all duration-300 ease-in-out"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md bg-neutral-darker border border-neutral-700 text-neutral-100 focus:ring-primary focus:border-primary transition-all duration-300 ease-in-out"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1">Message</label>
            <textarea
              name="message"
              id="message"
              rows="6"
              placeholder="Write Your Message Here..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md bg-neutral-darker border border-neutral-700 text-neutral-100 focus:ring-primary focus:border-primary transition-all duration-300 ease-in-out resize-none"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-neutral-darkest bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-darkest focus:ring-primary transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
        {submitMessage && (
          <p
            className={`mt-6 text-center text-sm ${isSubmitted ? 'text-green-400' : 'text-red-400'} opacity-0 animate-fade-in`}
            style={{animationDelay: '0.2s'}} // Quick fade for message
          >
            {submitMessage}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
