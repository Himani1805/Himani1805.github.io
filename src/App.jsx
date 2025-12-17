import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import { ArrowUp } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setActiveSection(hash || 'home');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    // Set initial state based on current hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-violet-500 selection:text-white">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="pt-20">
        {activeSection === 'home' && (
          <>
            <Hero setActiveSection={setActiveSection} />
            <About />
            <Skills />
            <Achievements />
            <Experience />
            <Education />
            <Projects />
            <Contact />
          </>
        )}
        {activeSection === 'about' && <About />}
        {activeSection === 'skills' && (
          <>
            <Skills />
            <Achievements />
          </>
        )}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'experience' && (
          <>
            <Experience />
            <Education />
          </>
        )}
        {activeSection === 'contact' && <Contact />}
      </main>

      <footer className="bg-slate-950 border-t border-slate-900 py-8 mt-auto">
        <div className="container mx-auto px-6 text-center text-slate-500">
          <p>© {new Date().getFullYear()} Himani Sharma. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
