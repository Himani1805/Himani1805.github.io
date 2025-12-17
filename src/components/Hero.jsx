import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = ({ setActiveSection }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[#0B1121]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-violet-400 text-sm font-medium mb-4">
            Available for freelance & full-time roles
          </div>
          {/* 23 line code  text-5xl md:text-7xl font-bold font-display leading-tight           */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display leading-tight">
            Building Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
              Experiences
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
            I'm Himani Sharma, a Full Stack Developer passionate about crafting accessible, pixel-perfect, and performant web applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <button
              onClick={() => setActiveSection('contact')}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              Contact Me <ArrowRight size={20} />
            </button>
            <button
              onClick={() => setActiveSection('projects')}
              className="px-8 py-3.5 rounded-full bg-slate-800 text-white border border-slate-700 hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 font-medium"
            >
              View Projects
            </button>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6 pt-8">
            <a href="https://github.com/Himani1805" target="_blank" className="text-slate-400 hover:text-violet-400 transition-colors"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/himani1805" target="_blank" className="text-slate-400 hover:text-violet-400 transition-colors"><Linkedin size={24} /></a>
            <a href="mailto:hinusharma18@gmail.com" className="text-slate-400 hover:text-violet-400 transition-colors"><Mail size={24} /></a>
          </div>
        </div>

        {/* Visual Content (Illustration/Image) */}
        <div className="relative hidden md:block">
          <div className="relative z-10 w-full max-w-md mx-auto aspect-square rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center overflow-hidden shadow-2xl skew-y-3 transform rotate-2 hover:rotate-0 hover:skew-y-0 transition-all duration-500">
            {/* Abstract Code Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>
           
            <div className="text-center p-8">
              {/* w-48 h-48 w-32 h-32 */}
              <div className="w-44 h-44 mx-auto mb-8 relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-emerald-600 rounded-full blur-[2px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-tr from-violet-500 to-emerald-500">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-900 bg-slate-800">
                    <img
                      src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1766000737/3096ff95-b305-463b-abdb-35a92dd7384a_ctozt9.jpg"
                      alt="Himani Sharma"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Himani Sharma</h3>
              <p className="text-slate-400">Full Stack Developer</p>

              <div className="mt-8 flex gap-3 justify-center">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-fuchsia-500/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-violet-500/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
