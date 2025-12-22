import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

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

    const currentSection = activeSection === 'home' ? visibleSection : activeSection;

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a
                    href="#home"
                    className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent font-display focus:outline-none"
                    onClick={() => setIsOpen(false)}
                >
                    HS.
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => {
                        // Extract id from href (e.g. #about -> about)
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

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-300 hover:text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 p-4">
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
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
