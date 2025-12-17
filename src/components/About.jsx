import React from 'react';
import { User, Code, Globe } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-950 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Image/Profile Side */}
                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-md">
                            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-slate-800 border-2 border-slate-700 relative group">
                                {/* Placeholder for actual image */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                                <img
                                    // src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1766000737/3096ff95-b305-463b-abdb-35a92dd7384a_ctozt9.jpg"
                                    alt="Profile"
                                    className="w-full h-full object-cover  transition-all duration-500"
                                    // grayscale group-hover:grayscale-0
                                />
                            </div>

                            {/* Floating Cards */}
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-800 p-4 rounded-lg border border-slate-700 shadow-xl hidden md:block z-20 w-max">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-violet-500/20 rounded-lg text-violet-400">
                                        <Code size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400">Experience</p>
                                        <p className="font-bold text-white"> Years</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="md:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold font-display">
                            <span className="text-violet-400">About</span> Me
                        </h2>

                        <p className="text-slate-400 leading-relaxed text-lg">
                            Hello! I'm Himani Sharma, a passionate Full Stack Developer with experience in building robust web applications. I enjoy creating intuitive and dynamic user experiences, solving complex problems with clean and efficient code.
                        </p>

                        <p className="text-slate-400 leading-relaxed text-lg">
                            I specialize in the MERN stack (MongoDB, Express, React, Node.js) and have a strong foundation in frontend technologies like HTML, CSS, and Chakra UI. I'm always eager to learn new technologies and contribute to meaningful projects.
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-violet-500/50 transition-colors">
                                <h4 className="font-bold text-white mb-1">Frontend</h4>
                                <p className="text-sm text-slate-500">React, Tailwind, Next.js</p>
                            </div>
                            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-violet-500/50 transition-colors">
                                <h4 className="font-bold text-white mb-1">Backend</h4>
                                <p className="text-sm text-slate-500">Node.js, Express, MongoDB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
