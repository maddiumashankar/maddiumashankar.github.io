import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {/* You can replace this with an actual image */}
            <img
              src="https://via.placeholder.com/400x400.png?text=Your+Photo"
              alt="Your Name"
              className="rounded-lg shadow-md mx-auto mb-6 w-64 h-64 object-cover"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">Your Name</h3>
            <p className="text-center text-blue-600 font-medium mb-4">Full-Stack Developer | Cybersecurity Enthusiast</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-700 mb-3">Who I Am</h4>
              <p className="text-gray-600 leading-relaxed">
                Hello! I'm [Your Name], a passionate and driven developer with a keen interest in building innovative solutions
                and exploring the depths of technology. My journey into the world of tech started with [mention your origin story briefly],
                and I've been captivated ever since. I thrive on challenges and am constantly seeking opportunities to learn and grow.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-700 mb-3">My Skills</h4>
              <p className="text-gray-600 leading-relaxed mb-3">
                I have experience with a variety of technologies, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>JavaScript (React, Node.js, Express)</li>
                <li>Python (Django, Flask)</li>
                <li>Databases (SQL, NoSQL)</li>
                <li>Cloud Platforms (AWS, Azure, GCP)</li>
                <li>Cybersecurity Tools & Concepts</li>
                <li>DevOps & CI/CD</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                I'm always eager to expand my skillset and take on new challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-700 mb-3">My Journey & Aspirations</h4>
              <p className="text-gray-600 leading-relaxed">
                [Talk about your journey, what you're currently learning or working on, and your future aspirations.
                What kind of impact do you want to make? What are you passionate about within tech?]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
