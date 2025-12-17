import React, { useState, useEffect, useCallback } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Grid, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Prime Health",
      description: "Hospital Management System offering multi-tenant architecture, patient management, secure role-based access, and interactive dashboards.",
      tags: ["React", "Express.js", "MongoDB", "Redux Toolkit", "Tailwind"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      demoLink: "https://prime-health-one.vercel.app",
      codeLink: "https://github.com/Himani1805/Prime-Health"
    },
    {
      title: "PowerX CRM",
      description: "Full-stack PERN CRM handling 10,000+ records. Features real-time Socket.io notifications, RBAC security, and high-performance lead tracking.",
      tags: ["React", "PostgreSQL", "Prisma", "Redux Toolkit", "Socket.io"],
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      demoLink: "https://power-x-pink.vercel.app",
      codeLink: "https://github.com/Himani1805/PowerX"
    },
    {
      title: "Wayfair E-commerce",
      description: "Full-stack e-commerce dashboard featuring comprehensive product management, secure user authentication, and persistent shopping cart functionality.",
      tags: ["React", "Node.js", "MongoDB", "Chakra UI"],
      image: "https://res.cloudinary.com/dgbymqjtk/image/upload/v1747657660/Screenshot_2025-05-19_174219_i5mcam.png",
      demoLink: "https://wayfair-com.vercel.app",
      codeLink: "https://github.com/Himani1805/Wayfair.com"
    },
    {
      title: "Nordstrom Rack",
      description: "Pixel-perfect clone of the fashion retailer website. Features varied product listings, filtering systems, and a responsive shopping cart experience.",
      tags: ["React", "Chakra UI", "React Router"],
      image: "https://res.cloudinary.com/dgbymqjtk/image/upload/v1747657659/Screenshot_2025-05-19_171121_pjjmhv.png",
      demoLink: "https://nordstromrack-himani.netlify.app",
      codeLink: "https://github.com/Himani1805/nordstromrack.com"
    },
    {
      title: "Etsy Fashion Store",
      description: "A responsive marketplace simulation focusing on product discovery and smooth navigation flow, built with vanilla CSS for custom styling.",
      tags: ["React", "CSS", "React Router"],
      image: "https://res.cloudinary.com/dgbymqjtk/image/upload/v1747657659/Screenshot_2025-05-19_171207_jl5y1f.png",
      demoLink: "https://etsycom.netlify.app/",
      codeLink: "https://github.com/Himani1805/Etsy.com"
    },
    {
      title: "Bluefly.com Clone",
      description: "Static e-commerce frontend demonstrating mastery of HTML/CSS layout techniques and JavaScript DOM manipulation.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "https://res.cloudinary.com/dgbymqjtk/image/upload/v1747657659/Screenshot_2025-05-19_173902_tq8dmu.png",
      demoLink: "https://blueflycomnetlify.netlify.app",
      codeLink: "https://github.com/Himani1805/Bluefly.com"
    },
    {
      title: "UPIC Clone",
      description: "Official-looking informational portal for the Uttar Pradesh Information Commission. Focuses on information architecture and accessibility.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "https://res.cloudinary.com/dgbymqjtk/image/upload/v1747657659/Screenshot_2025-05-19_172342_vjtwir.png",
      demoLink: "https://upicgov.netlify.app",
      codeLink: "https://github.com/Himani1805/upic.gov.in"
    },
    {
      title: "AIIMS Clone",
      description: "Healthcare portal design clone. Demonstrates ability to structure complex information and maintain professional design standards.",
      tags: ["HTML", "CSS"],
      image: "https://res.cloudinary.com/dgbymqjtk/image/upload/v1747657659/Screenshot_2025-05-19_172957_o97hsh.png",
      demoLink: "https://aiimsup.netlify.app",
      codeLink: "https://github.com/Himani1805/AIIMS-clone"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isViewAll, setIsViewAll] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Handle responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    if (isViewAll || isPaused) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [isViewAll, isPaused, nextSlide]);

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < itemsPerPage; i++) {
      visible.push(projects[(currentIndex + i) % projects.length]);
    }
    return visible;
  };

  const ProjectCard = ({ project }) => (
    <div className="flex flex-col h-full bg-slate-800/30 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden hover:border-indigo-500/30 transition-all duration-300 group">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all duration-500 z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors pr-2">
            {project.title}
          </h3>
          <div className="flex gap-2 shrink-0">
            <a
              href={project.codeLink}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-700/50 text-white hover:bg-indigo-600 hover:text-white transition-all duration-300"
              title="View Code"
            >
              <Github size={18} />
            </a>
            <a
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-700/50 text-white hover:bg-emerald-500 hover:text-white transition-all duration-300"
              title="Live Demo"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 text-[10px] font-medium text-indigo-300 bg-indigo-500/10 rounded-full border border-indigo-500/20">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-24 bg-[#0B1121] relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-[20%] left-[10%] w-[30rem] h-[30rem] bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[30rem] h-[30rem] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Projects</span>
            </h2>
            <p className="text-slate-400 max-w-xl text-lg">
              A showcase of my technical proficiency and design capabilities.
            </p>
          </div>

          <button
            onClick={() => setIsViewAll(!isViewAll)}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700/80 transition-all font-medium text-sm backdrop-blur-md group"
          >
            {isViewAll ? <><Layers size={18} className="group-hover:scale-110 transition-transform" /> Slider View</> : <><Grid size={18} className="group-hover:scale-110 transition-transform" /> View All Projects</>}
          </button>
        </div>

        <div className="min-h-[500px] relative">
          <AnimatePresence mode='wait'>
            {!isViewAll ? (
              /* SLIDER VIEW */
              <motion.div
                key="slider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence mode='popLayout'>
                    {getVisibleProjects().map((project, index) => (
                      <motion.div
                        key={`${project.title}-${currentIndex + index}`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        layout
                      >
                        <ProjectCard project={project} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Slider Navigation */}
                <div className="flex justify-center gap-4 mt-8">
                  <button onClick={prevSlide} className="p-3 bg-slate-800/80 backdrop-blur-md border border-slate-700 text-white rounded-full hover:bg-indigo-600 hover:border-indigo-500 transition-all shadow-lg group">
                    <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                  </button>

                  {/* Indicators */}
                  <div className="flex items-center gap-2">
                    {projects.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-indigo-500' : 'w-1.5 bg-slate-700'}`}
                      />
                    ))}
                  </div>

                  <button onClick={nextSlide} className="p-3 bg-slate-800/80 backdrop-blur-md border border-slate-700 text-white rounded-full hover:bg-indigo-600 hover:border-indigo-500 transition-all shadow-lg group">
                    <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ) : (
              /* GRID VIEW */
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
