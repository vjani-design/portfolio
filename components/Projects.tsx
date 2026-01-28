
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Vitality Lens',
      stack: 'Google AI Studio',
      description: 'An advanced image analysis and data processing tool built leveraging Google AI technologies to provide health or vitality insights.',
      image: 'https://picsum.photos/id/180/800/600',
      tag: 'AI / ML',
      link: 'https://ai.studio/apps/drive/1qJ0wZkxhNt5bkWwBy7nbgW92I3qWXNoi',
    },
    {
      title: 'URL Detector',
      stack: 'Html, CSS, JavaScript, Php, MySQL',
      description: 'A full-stack web application designed to detect malicious URLs and protect users from phishing attacks using a custom database.',
      image: 'https://picsum.photos/id/201/800/600',
      tag: 'Full Stack',
      link: 'https://github.com/vaibhavijani/url-detector',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-slate-600">
              A selection of my technical work spanning from traditional full-stack development to modern AI-driven solutions.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
             <div className="h-1 w-24 bg-teal-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-teal-600 font-bold text-xs uppercase tracking-widest rounded-full shadow-sm">
                    {project.tag}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-400 uppercase tracking-wider">{project.stack}</p>
                <p className="mt-4 text-slate-600 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-teal-600 font-bold text-sm uppercase flex items-center group-hover:translate-x-2 transition-transform"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
