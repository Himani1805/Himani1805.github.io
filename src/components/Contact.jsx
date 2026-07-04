import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-0 w-96 h-96 bg-violet-900/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-900/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
                        Get In <span className="text-violet-400">Touch</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch">
                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-violet-500/30 transition-all duration-300 h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-slate-800 rounded-lg text-violet-400">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Email Me</h4>
                                        <a
                                            href="mailto:hinusharma18@gmail.com"
                                            className="text-slate-400 break-all hover:text-violet-300 transition-colors"
                                        >
                                            hinusharma18@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-slate-800 rounded-lg text-violet-400">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Phone</h4>
                                        <a
                                            href="tel:+917982363038"
                                            className="text-slate-400 hover:text-violet-300 transition-colors"
                                        >
                                            +91 79823 63038
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-slate-800 rounded-lg text-violet-400">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Location</h4>
                                        <a
                                            href="https://www.google.com/maps/search/?api=1&query=Greater%20Noida%2C%20India"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-slate-400 hover:text-violet-300 transition-colors"
                                        >
                                            Greater Noida, India
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-slate-800">
                            <h4 className="font-semibold text-white mb-4">Follow Me</h4>
                            <div className="flex gap-4">
                                <a href="https://github.com/Himani1805" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-violet-600 transition-all duration-300">
                                    <Github size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/himani1805" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-violet-600 transition-all duration-300">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default Contact;
