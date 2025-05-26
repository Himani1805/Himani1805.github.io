import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'other', label: 'Other' }
  ];

  const skills = {
    frontend: [
      { name: 'HTML', icon: '🌐', color: '#E34F26', stars: 5, category: 'frontend', description: 'Semantic markup and accessibility standards' },
      { name: 'CSS', icon: '🎨', color: '#1572B6', stars: 5, category: 'frontend', description: 'Advanced styling, animations, and responsive design' },
      { name: 'JavaScript', icon: '⚡', color: '#F7DF1E', stars: 5, category: 'frontend', description: 'Modern ES6+, DOM manipulation, and asynchronous patterns' },
      { name: 'React', icon: '⚛️', color: '#61DAFB', stars: 5, category: 'frontend', description: 'Component architecture, hooks, context API, and state management' },
      { name: 'Chakra UI', icon: '✨', color: '#319795', stars: 4, category: 'frontend', description: 'Building accessible UI components with Chakra UI library' }
    ],
    backend: [
      { name: 'Node.js', icon: '🟢', color: '#339933', stars: 4, category: 'backend', description: 'Server-side JavaScript runtime for building scalable applications' },
      { name: 'Express.js', icon: '🚂', color: '#000000', stars: 4, category: 'backend', description: 'RESTful API development with middleware architecture' },
      { name: 'Python', icon: '🐍', color: '#3776AB', stars: 4, category: 'backend', description: 'Data processing, automation, and scripting' },
      // { name: 'Django', icon: '🎯', color: '#092E20', stars: 4, category: 'backend', description: 'Full-stack Python framework for rapid development' }
    ],
    database: [
      { name: 'MongoDB', icon: '🍃', color: '#47A248', stars: 4, category: 'database', description: 'Document-oriented NoSQL database with aggregation framework' },
      { name: 'REST API', icon: '🔌', color: '#FF6B6B', stars: 4, category: 'database', description: 'Building and consuming RESTful web services' }
    ],
    other: [
      { name: 'Git', icon: '📦', color: '#F05032', stars: 4, category: 'other', description: 'Version control and collaborative development workflows' },
      // { name: 'QGIS', icon: '🗺️', color: '#589632', stars: 4, category: 'other', description: 'Geographic data analysis and visualization' },
      // { name: 'ArcGIS', icon: '🌍', color: '#2C7AC3', stars: 4, category: 'other', description: 'Enterprise GIS solutions and spatial analysis' }
    ]
  };

  const SkillCard = ({ skill }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-navy-900 rounded-xl overflow-hidden"
        style={{
          backgroundColor: '#1a1f2b',
          minHeight: '180px',
          transform: isHovered ? 'translateY(-5px)' : 'none',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">{skill.icon}</span>
            <h4 className="text-xl font-semibold text-white">{skill.name}</h4>
          </div>
          <div className="flex mb-3">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`text-lg ${index < skill.stars ? 'text-yellow-400' : 'text-gray-600'}`}
              >
                ★
              </span>
            ))}
          </div>
          <p className="text-gray-400 text-sm">{skill.description}</p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ backgroundColor: skill.color }}
        />
      </motion.div>
    );
  };

  const filteredSkills = activeCategory === 'all'
    ? Object.values(skills).flat()
    : skills[activeCategory] || [];

  return (
    // <section className="min-h-screen py-20 bg-gradient-to-br from-gray-900 to-black text-white">

    <section className="min-h-screen py-20 bg-gradient-to-br from-white-900 to-white text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Skills & Tech Stack
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Technologies I've worked with to build modern web applications
          </motion.p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all ${activeCategory === category.id
                ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
