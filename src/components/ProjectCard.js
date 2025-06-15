import React from 'react';

const ProjectCard = ({ title, description, imageUrl, projectUrl, techStack }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover"/>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-700 mb-4 text-sm">{description}</p>
        {techStack && techStack.length > 0 && (
          <div className="mb-4">
            <h4 className="text-md font-semibold text-gray-700 mb-1">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 text-xs rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        {projectUrl && (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
