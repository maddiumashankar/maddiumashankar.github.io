import React from 'react';
import { projectsData } from '../data/projectsData'; // Import data
import { BiLinkAlt } from 'react-icons/bi'; // Import icon

const ProjectCard = ({ title, imgSrc, link, delay }) => (
  <div
    className="project-box group relative overflow-hidden rounded-lg shadow-xl aspect-video opacity-0 animate-fade-in-up"
    style={{ animationDelay: delay }}
  >
    <img
      src={imgSrc}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col items-center justify-end p-6">
      <h3 className="text-2xl font-semibold text-white mb-2 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">{title}</h3>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-light hover:text-primary transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out delay-100"
        aria-label={`Link to ${title} project`}
      >
        <BiLinkAlt size={30} />
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section
      id="projects"
      className="projects-section py-16 md:py-24 bg-neutral-darker text-neutral-100 opacity-0 animate-fade-in-up"
      style={{ animationDelay: '0.6s' }} // Stagger sections
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-light opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.7s' }}
        >
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              delay={`${0.8 + index * 0.15}s`} // Stagger card animation
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
