import React, { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive e-commerce analytics dashboard with real-time sales tracking, inventory management, and customer insights.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
      image: '/images/ecommerce-dashboard.jpg',
      githubLink: 'https://github.com/username/ecommerce-dashboard',
      demoLink: 'https://ecommerce-dashboard.demo.com',
      category: 'Full Stack'
    },
    {
      title: 'Task Management App',
      description: 'Modern task management application with real-time updates and team collaboration features.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      image: '/images/task-management.jpg',
      githubLink: 'https://github.com/username/task-manager',
      demoLink: 'https://task-manager.demo.com',
      category: 'Frontend'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Responsive social media analytics dashboard with real-time data visualization.',
      tech: ['React', 'Chart.js', 'Tailwind CSS', 'Redux'],
      image: '/images/portfolio.jpg',
      githubLink: 'https://github.com/username/social-dashboard',
      demoLink: 'https://social-dashboard.demo.com',
      category: 'Frontend'
    },
    {
      title: 'Blog Platform',
      description: 'Full-featured blogging platform with markdown support and user authentication.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: '/images/smart-home.jpg',
      githubLink: 'https://github.com/username/blog-platform',
      demoLink: 'https://blog-platform.demo.com',
      category: 'Full Stack'
    }
  ];

  const [filter, setFilter] = useState('All');
  const observerRef = useRef(null);

  const categories = ['All', 'Full Stack', 'Frontend'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.project-card').forEach((card) => {
      observerRef.current.observe(card);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [filter]);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and experience
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300
                  ${filter === category
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-purple-50'}
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title} 
              className="project-card opacity-0 translate-y-8 transition-all duration-700 ease-out bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="block group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/50 text-white rounded-full text-xs backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                      </svg>
                      GitHub
                    </a>
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      Visit Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .project-card.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default Projects;
