import React, { useEffect, useRef } from 'react';

const About = () => {
  const skills = {
    frontend: [
      { name: 'React.js', level: 90 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 90 }
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'RESTful APIs', level: 85 }
    ]
  };

  const observerRef = useRef(null);

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

    document.querySelectorAll('.fade-in').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const SkillBar = ({ name, level, delay }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm font-medium text-purple-600">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-purple-600 to-pink-500 h-2.5 rounded-full skill-progress"
          style={{ 
            width: '0%',
            transitionDelay: `${delay}ms`
          }}
          data-width={`${level}%`}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="fade-in opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Passionate about creating beautiful and functional web experiences
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="fade-in opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: '200ms' }}>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-6 text-purple-600">My Journey</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I'm a Full Stack Developer with a passion for building modern web applications.
                With expertise in both front-end and back-end development, I create seamless
                digital experiences that solve real-world problems.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with
                the latest web technologies and best practices.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="fade-in opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: '400ms' }}>
              <h3 className="text-2xl font-semibold mb-6">Frontend Skills</h3>
              {skills.frontend.map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  name={skill.name} 
                  level={skill.level} 
                  delay={600 + (index * 100)}
                />
              ))}
            </div>

            <div className="fade-in opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: '600ms' }}>
              <h3 className="text-2xl font-semibold mb-6">Backend Skills</h3>
              {skills.backend.map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  name={skill.name} 
                  level={skill.level}
                  delay={1000 + (index * 100)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, #6366f1 1px, transparent 1px);
          background-size: 24px 24px;
        }

        .fade-in.show {
          opacity: 1;
          transform: translateY(0);
        }

        .skill-progress.show {
          width: var(--width);
        }

        .show .skill-progress {
          width: var(--data-width);
        }
      `}</style>
    </section>
  );
};

export default About;
