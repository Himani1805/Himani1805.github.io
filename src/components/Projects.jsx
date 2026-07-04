import { useState, useEffect, useCallback } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Grid, Layers } from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Prime Health",
      description: "Hospital management platform with patients, roles, dashboards, and secure multi-tenant workflows.",
      tags: ["React", "Express.js", "MongoDB", "Redux Toolkit", "Tailwind"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      demoLink: "https://prime-health-one.vercel.app",
      codeLink: "https://github.com/Himani1805/Prime-Health"
    },
    {
      title: "PowerX CRM",
      description: "PERN CRM for large lead datasets with RBAC, real-time alerts, and fast tracking workflows.",
      tags: ["React", "PostgreSQL", "Prisma", "Redux", "Socket.io"],
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      demoLink: "https://power-x-pink.vercel.app",
      codeLink: "https://github.com/Himani1805/PowerX"
    },
    {
      title: "Nomichi Trip Desk",
      description: "Trip enquiry and admin operations tool with leads, availability, and AI WhatsApp drafts.",
      tags: ["Next.js", "Supabase", "PostgreSQL", "Gemini API", "Vercel"],
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      demoLink: "https://nomichi-trip-desk-xi.vercel.app",
      codeLink: "https://github.com/Himani1805/nomichi-trip-desk"
    },
    {
      title: "WaiverPro Compliance Agent",
      description: "AI audit tool that compares WaiverPro screens with PDF rules and generates evidence reports.",
      tags: ["React", "Vite", "Puppeteer", "AI", "MongoDB"],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      demoLink: "https://waiverpro-compliance-agent.vercel.app",
      codeLink: "https://github.com/Himani1805/waiverpro-compliance-agent"
    },
    {
      title: "Avidus Task Manager",
      description: "RBAC task manager with user tasks, admin controls, activity logs, charts, and statistics.",
      tags: ["React", "Express.js", "MongoDB", "JWT", "Recharts"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      demoLink: "https://avidus-task-manager-tau.vercel.app",
      codeLink: "https://github.com/Himani1805/avidus-task-manager"
    },
    {
      title: "Spur Chatbot",
      description: "AI chatbot app with markdown replies, chat APIs, Prisma data layer, and Gemini-powered responses.",
      tags: ["React", "Express", "TypeScript", "Prisma", "Gemini"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      demoLink: "https://spur-chatbot-eight.vercel.app",
      codeLink: "https://github.com/Himani1805/spur_chatbot"
    },
    {
      title: "Expense Tracker",
      description: "Mobile-first finance app with transactions, filters, local storage, and analytics charts.",
      tags: ["React", "Vite", "Plain CSS", "Context API", "Recharts"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      demoLink: "https://expense-tracker-zeta-flame-83.vercel.app",
      codeLink: "https://github.com/Himani1805/expense-tracker"
    },
    {
      title: "GitHub User Explorer",
      description: "GitHub profile explorer with live search, repository details, and API-backed user data.",
      tags: ["React", "GitHub API", "Search", "REST API"],
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      demoLink: "https://github-user-explorer-eta.vercel.app",
      codeLink: "https://github.com/Himani1805/github-user-explorer"
    },
    {
      title: "Invoice Extraction AI",
      description: "AI invoice parser for images and PDFs with Gemini extraction, analytics, and Supabase storage.",
      tags: ["React", "Tailwind", "FastAPI", "Gemini", "Supabase"],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      demoLink: "https://invoice-extraction-ai-eosin.vercel.app",
      codeLink: "https://github.com/Himani1805/invoice_extraction_ai"
    },
    {
      title: "MediaNV Candidate Management",
      description: "Recruitment dashboard for structured candidate records, tracking, and cleaner hiring workflows.",
      tags: ["React", "Recruitment", "Dashboard", "Data"],
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      demoLink: "https://media-nv-candidate-management-system.vercel.app",
      codeLink: "https://github.com/Himani1805/MediaNV-Candidate-Management-System"
    },
    {
      title: "MediaNV Database Interface",
      description: "PostgreSQL admin interface for database creation and migration without command-line work.",
      tags: ["React", "PostgreSQL", "Database UI", "Admin Tools"],
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      demoLink: "https://media-nv-database-management-interface.vercel.app",
      codeLink: "https://github.com/Himani1805/MediaNV-Database-Management-Interface"
    },
    {
      title: "India Data Hub",
      description: "Authenticated data dashboard with filters, sorting, and visualizations for India-focused datasets.",
      tags: ["React", "Tailwind", "Node.js", "MongoDB", "JWT"],
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      demoLink: "https://india-data-hub-ten.vercel.app",
      codeLink: "https://github.com/Himani1805/IndiaDataHub"
    },
    {
      title: "Library Management",
      description: "Library system with login, book catalog, borrow-return tracking, and admin oversight.",
      tags: ["React", "Tailwind", "Express", "MongoDB", "REST"],
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      demoLink: "https://library-management-eosin-two.vercel.app/",
      codeLink: "https://github.com/Himani1805/library_management"
    },
    {
      title: "Health Connect",
      description: "Doctor appointment platform with reusable components, booking flows, and Context API state.",
      tags: ["React", "JavaScript", "Tailwind CSS", "Context API"],
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      demoLink: "https://health-connect-xi.vercel.app/",
      codeLink: "https://github.com/Himani1805/health_connect"
    },
    {
      title: "Weather App",
      description: "Weather dashboard with city search, forecasts, live API data, and responsive layouts.",
      tags: ["React", "Weather API", "Tailwind"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      demoLink: "https://weather-app-xi-sandy.vercel.app/",
      codeLink: "https://github.com/Himani1805/weather_app"
    },
    {
      title: "Wayfair E-commerce",
      description: "E-commerce dashboard with product management, authentication, and persistent cart flows.",
      tags: ["React", "Node.js", "MongoDB", "Chakra UI"],
      image: "https://res.cloudinary.com/dgbymqjtk/image/upload/v1747657660/Screenshot_2025-05-19_174219_i5mcam.png",
      demoLink: "https://wayfair-com.vercel.app",
      codeLink: "https://github.com/Himani1805/Wayfair.com"
    },
    {
      title: "Croma Ecommerce",
      description: "Responsive Croma clone with product browsing, filtering, Redux state, and cart management.",
      tags: ["React", "Redux", "Tailwind", "Router"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      demoLink: "https://croma-ecommerce.vercel.app/products",
      codeLink: "https://github.com/Himani1805/croma-ecommerce"
    },
    {
      title: "Nordstrom Rack",
      description: "Fashion retail clone with product listings, filters, and responsive cart experience.",
      tags: ["React", "Chakra UI", "React Router"],
      image: "https://res.cloudinary.com/dgbymqjtk/image/upload/v1747657659/Screenshot_2025-05-19_171121_pjjmhv.png",
      demoLink: "https://nordstromrack-himani.netlify.app",
      codeLink: "https://github.com/Himani1805/nordstromrack.com"
    },
    {
      title: "Etsy Fashion Store",
      description: "Marketplace UI focused on product discovery, smooth navigation, and custom CSS styling.",
      tags: ["React", "CSS", "React Router"],
      image: "https://res.cloudinary.com/dgbymqjtk/image/upload/v1747657659/Screenshot_2025-05-19_171207_jl5y1f.png",
      demoLink: "https://etsycom.netlify.app/",
      codeLink: "https://github.com/Himani1805/Etsy.com"
    },
    {
      title: "Bluefly.com Clone",
      description: "Static e-commerce frontend with clean layout, responsive styling, and DOM interactions.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "https://res.cloudinary.com/dgbymqjtk/image/upload/v1747657659/Screenshot_2025-05-19_173902_tq8dmu.png",
      demoLink: "https://blueflycomnetlify.netlify.app",
      codeLink: "https://github.com/Himani1805/Bluefly.com"
    },
    {
      title: "UPIC Clone",
      description: "Informational portal clone focused on accessible structure and clear content hierarchy.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "https://res.cloudinary.com/dgbymqjtk/image/upload/v1747657659/Screenshot_2025-05-19_172342_vjtwir.png",
      demoLink: "https://upicgov.netlify.app",
      codeLink: "https://github.com/Himani1805/upic.gov.in"
    },
    {
      title: "AIIMS Clone",
      description: "Healthcare portal clone with structured information and professional page layouts.",
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

    handleResize();
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
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all duration-500 z-10" />
        <img
          src={project.image}
          alt={project.title}
          onError={(event) => {
            event.currentTarget.src = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80";
          }}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      <div className="flex flex-col p-6 flex-grow">
        <div className="flex justify-between items-start gap-3 mb-4">
          <h3 className="min-w-0 text-xl font-bold text-white group-hover:text-indigo-400 transition-colors break-words">
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

        <p className="min-h-10 text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
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
              <Motion.div
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
                      <Motion.div
                        key={`${project.title}-${currentIndex + index}`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        layout
                      >
                        <ProjectCard project={project} />
                      </Motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* These dots wrap on mobile because the project list is long. */}
                <div className="flex justify-center gap-3 sm:gap-4 mt-8">
                  <button onClick={prevSlide} className="p-3 bg-slate-800/80 backdrop-blur-md border border-slate-700 text-white rounded-full hover:bg-indigo-600 hover:border-indigo-500 transition-all shadow-lg group">
                    <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                  </button>

                  <div className="flex flex-wrap items-center justify-center gap-2 max-w-36 sm:max-w-xs">
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
              </Motion.div>
            ) : (
              <Motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {projects.map((project, index) => (
                  <Motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} />
                  </Motion.div>
                ))}
              </Motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
