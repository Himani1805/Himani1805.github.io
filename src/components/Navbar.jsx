import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeSection, visibleSection }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    const sectionAliases = {
        hero: 'home',
        achievements: 'skills',
        education: 'experience',
    };
    const rawCurrentSection = activeSection === 'home' ? visibleSection : activeSection;
    const currentSection = sectionAliases[rawCurrentSection] || rawCurrentSection;

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a
                    href="#home"
                    className="group flex min-w-0 shrink-0 items-center gap-3 focus:outline-none"
                    aria-label="Himani Sharma home"
                    onClick={() => setIsOpen(false)}
                >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-indigo-400/40 bg-slate-900/80 text-base font-bold text-white shadow-lg shadow-indigo-950/30 transition-all duration-300 group-hover:border-emerald-400/60 group-hover:shadow-emerald-950/30">
                        HS
                    </span>
                    <span className="min-w-0 leading-tight">
                        <span className="block truncate font-display text-base font-bold text-white sm:text-lg">
                            Himani Sharma
                        </span>
                        <span className="hidden text-xs font-medium tracking-wide text-slate-400 sm:block">
                            Developer Portfolio
                        </span>
                    </span>
                </a>

                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => {
                        const sectionId = link.href.replace('#', '');
                        const isActive = currentSection === sectionId || (currentSection === 'home' && sectionId === 'home');

                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`transition-colors duration-200 text-sm font-medium tracking-wide ${isActive ? 'text-white border-b-2 border-indigo-500' : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                    <a
                        href="https://drive.google.com/file/d/1ZfRo7SdhSFStKxOpnSnmyZlwr7o09Unc/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2 rounded-full border border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-white transition-all duration-300 text-sm font-medium"
                    >
                        Resume
                    </a>
                </div>

                <button
                    className="md:hidden text-gray-300 hover:text-white focus:outline-none p-2 -mr-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 p-4 shadow-xl">
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => {
                            const sectionId = link.href.replace('#', '');
                            const isActive = currentSection === sectionId || (currentSection === 'home' && sectionId === 'home');

                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`block py-2 text-center text-sm font-medium ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                        <a
                            href="https://drive.google.com/file/d/1ZfRo7SdhSFStKxOpnSnmyZlwr7o09Unc/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                            className="block py-2 text-center text-sm font-medium text-violet-300 hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            Resume
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
