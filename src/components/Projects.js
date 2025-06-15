import React from 'react';
import ProjectCard from './ProjectCard'; // Assuming ProjectCard.js is in the same directory

const projectData = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with user authentication, product listings, shopping cart, and payment integration. Built with the MERN stack.',
    imageUrl: 'https://via.placeholder.com/600x400.png?text=E-commerce+Project',
    projectUrl: '#', // Replace with actual link
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe']
  },
  {
    title: 'Portfolio Website (This One!)',
    description: 'A personal portfolio website to showcase my skills, projects, and CTF achievements. Built with React and Tailwind CSS.',
    imageUrl: 'https://via.placeholder.com/600x400.png?text=Portfolio+Project',
    projectUrl: '#', // Replace with actual link
    techStack: ['React', 'Tailwind CSS', 'Vite']
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'A web application for visualizing complex datasets using interactive charts and graphs. Developed using D3.js and a Python backend.',
    imageUrl: 'https://via.placeholder.com/600x400.png?text=Data+Viz+Dashboard',
    projectUrl: '#', // Replace with actual link
    techStack: ['D3.js', 'Python', 'Flask', 'JavaScript']
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          My Projects
        </h2>
        {projectData.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
                techStack={project.techStack}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No projects to display yet. Please check back soon!</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
