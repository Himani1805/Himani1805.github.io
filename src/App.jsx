import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  const  resumeUrl = "https://resume-api-new.masaischool.com/profile/download/resume?resumeId=682b333ed980da4fe4fbb06e&templateName=Matty&fontSize=medium"
  return (
    <div className="min-h-screen">
      <nav className="fixed w-full bg-white bg-opacity-90 shadow-md z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-purple-300">HS</h1>
            <div className="space-x-6">
              <a href={resumeUrl} className="hover:text-purple-600">Resume</a>
              <a href="#about" className="hover:text-purple-600">About</a>
              <a href="#projects" className="hover:text-purple-600">Projects</a>
              <a href="#contact" className="hover:text-purple-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p> 2025 Himani Sharma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
