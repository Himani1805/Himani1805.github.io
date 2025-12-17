import React from 'react';

const Skills = () => {
    const skills = [
        {
            category: "Frontend",
            items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Context API", "Tailwind CSS"]
        },
        {
            category: "Backend",
            items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Bcryptjs"]
        },
        {
            category: "Database",
            items: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma ORM"]
        },
        {
            category: "Tools & Platforms",
            items: ["Git", "GitHub", "Vercel", "Render", "Postman", "VS Code"]
        }
    ];
    return (
        <section id="skills" className="py-20 bg-slate-900 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Expertise</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A comprehensive overview of my technical skills and tools I use to build robust applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup, index) => (
                        <div
                            key={index}
                            className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-violet-500/30 transition-all duration-300 hover:transform hover:-translate-y-1 group"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-2 group-hover:text-violet-400 transition-colors">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-slate-900 text-slate-300 text-sm rounded-full border border-slate-800 hover:bg-violet-900/20 hover:text-violet-300 hover:border-violet-500/30 transition-all duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
