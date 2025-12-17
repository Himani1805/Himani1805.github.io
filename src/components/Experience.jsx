import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            type: "work",
            role: "Executive Assistant",
            company: "Sharda University",
            period: "Jun 2023 – Mar 2025",
            description: "Managed academic data (ERP), faculty scheduling, and compliance workflows to ensure operational efficiency."
        },
        {
            type: "work",
            role: "Administrative Coordinator",
            company: "ITS College",
            period: "Aug 2020 – Jun 2023",
            description: "Oversaw admissions data, faculty records, and departmental event coordination ensuring data integrity."
        },
        {
            type: "work",
            role: "Sales & Marketing",
            company: "M+R Logistics (Spedag Group)",
            period: "Jun 2017 – Jul 2020",
            description: "Managed client databases, sales inquiries, and global logistics documentation workflows across global markets."
        }
    ];

    return (
        <section id="experience" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-12 text-center">
                    Work <span className="text-violet-400">Experience</span>
                </h2>

                <div className="max-w-3xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-0">
                            {/* Timeline Line (Desktop) */}
                            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-800 transform -translate-x-1/2"></div>

                            <div className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>

                                {/* Content Card */}
                                <div className="w-full md:w-[45%] mb-8 md:mb-0">
                                    <div className={`p-6 bg-slate-950 rounded-2xl border border-slate-800 hover:border-violet-500/40 hover:bg-slate-900/50 transition-all duration-300 relative ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                                        <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                                            {exp.type === 'work' ? <Briefcase size={16} className="text-violet-400" /> : <GraduationCap size={16} className="text-fuchsia-400" />}
                                            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{exp.type}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                        <h4 className="text-lg text-slate-400 mb-4">{exp.company}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Dot */}
                                <div className="absolute left-[-5px] md:left-[50%] top-6 w-3 h-3 rounded-full bg-violet-500 border-4 border-slate-900 z-10 transform md:-translate-x-1/2 group-hover:scale-150 transition-transform duration-300"></div>

                                {/* Date (Desktop) */}
                                <div className={`hidden md:block w-[45%] ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-violet-300 font-medium text-sm">
                                        <Calendar size={14} /> {exp.period}
                                    </div>
                                </div>

                                {/* Date (Mobile) */}
                                <div className="md:hidden w-full mt-2 pl-2">
                                    <span className="text-sm text-violet-400 font-medium">{exp.period}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
