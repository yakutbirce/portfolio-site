import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Workintech',
      description: 'A simple, customizable, minimal setup cookie plugin that allows users to select which cookies to accept or decline.',
      imgUrl: 'https://via.placeholder.com/300',
      githubLink: 'https://github.com',
      viewSiteLink: '#',
      technologies: ['react', 'redux', 'axios']
    },
    {
      title: 'Random Jokes',
      description: 'A simple, customizable, minimal setup cookie plugin that allows users to select which cookies to accept or decline.',
      imgUrl: 'https://via.placeholder.com/300',
      githubLink: 'https://github.com',
      viewSiteLink: '#',
      technologies: ['react', 'redux', 'axios']
    },
    {
      title: 'Journey',
      description: 'A simple, customizable, minimal setup cookie plugin that allows users to select which cookies to accept or decline.',
      imgUrl: 'https://via.placeholder.com/300',
      githubLink: 'https://github.com',
      viewSiteLink: '#',
      technologies: ['react', 'redux', 'axios']
    },
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <img src={project.imgUrl} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="text-sm bg-purple-100 text-purple-500 rounded-full px-3 py-1 mr-2 mb-2">{tech}</span>
              ))}
            </div>
            <div className="flex justify-between">
              <a href={project.githubLink} className="text-purple-500">Github</a>
              <a href={project.viewSiteLink} className="text-purple-500">View Site</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
