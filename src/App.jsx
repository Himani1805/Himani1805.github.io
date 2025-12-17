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
  const [visibleSection, setVisibleSection] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setActiveSection(hash || 'home');
      setVisibleSection(hash || 'home');
      if (hash && hash !== 'home') {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    // Set initial state based on current hash
    // handleHashChange(); // Let the router or browser handle initial scroll if hash exists? 
    // Actually we need to set initial activeSection.
    const initialHash = window.location.hash.replace('#', '');
    setActiveSection(initialHash || 'home');
    setVisibleSection(initialHash || 'home');


    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll Spy Effect for Home Section
  useEffect(() => {
    if (activeSection !== 'home') return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section is near top
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id) {
            // Use replaceState to update URL without triggering hashchange
            // preventing the app from switching out of 'home' mode
            const sectionName = id === 'hero' ? 'home' : id;
            window.history.replaceState(null, null, `#${sectionName}`);
            setVisibleSection(sectionName);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [activeSection]);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-violet-500 selection:text-white">
      <Navbar activeSection={activeSection} visibleSection={visibleSection} setActiveSection={setActiveSection} />

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
