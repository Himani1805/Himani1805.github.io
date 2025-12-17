import React from 'react';
import { Award, FileCheck } from 'lucide-react';

const Achievements = () => {
    return (
        <section id="achievements" className="py-20 bg-slate-950 relative">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-12 text-center">
                    Certifications & <span className="text-violet-400">Achievements</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Certifications Card */}
                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-violet-500/30 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-slate-800 rounded-lg text-violet-400">
                                <FileCheck size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Certifications</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex flex-col space-y-1">
                                <span className="text-white font-medium">Full Stack Web Development (MERN)</span>
                                <span className="text-slate-400 text-sm">Masai School</span>
                                <a href="https://drive.google.com/file/d/12hBDjGO4ot49OOIR7Oyuj2os6PwbI3Fy/view?usp=sharing" target="_blank" className="text-violet-400 text-sm hover:underline">View Certificate</a>
                            </li>
                            <li className="flex flex-col space-y-1">
                                <span className="text-white font-medium">Leadership Lesson from Kargil War</span>
                                <span className="text-slate-400 text-sm">Sharda University</span>
                                <a href="https://drive.google.com/file/d/1wJ8y8aW3hqEKPveB59NwgNcde4bsOfOJ/view?usp=sharing" target="_blank" className="text-violet-400 text-sm hover:underline">View Certificate</a>
                            </li>
                        </ul>
                    </div>

                    {/* Achievements Card */}
                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-violet-500/30 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-slate-800 rounded-lg text-fuchsia-400">
                                <Award size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Achievements</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex flex-col space-y-1">
                                <span className="text-white font-medium">HackArena 2.0 Hackathon – Top 5 Finalist</span>
                                <span className="text-slate-400 text-sm">Platform Commons, Masai</span>
                                <p className="text-slate-500 text-sm mt-1">Selected among top teams for building a scalable full-stack solution under time constraints.</p>
                                <a href="https://drive.google.com/file/d/1Xsl5rlXFXjmuAVPtsxi_nevv1xjsZ2QW/view?usp=sharing" target="_blank" className="text-violet-400 text-sm hover:underline">View Certificate</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
