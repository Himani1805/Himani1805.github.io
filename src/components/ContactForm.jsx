import React from "react";
import emailjs from "emailjs-com";
import { Send } from "lucide-react"; // assuming you use lucide-react icons

const ContactForm = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,   // your service ID
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // your template ID
                e.target,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // your public key
            )
            .then(
                (result) => {
                    console.log("Message sent:", result.text);
                    alert("Message sent successfully!");
                },
                (error) => {
                    console.log("Error:", error.text);
                    alert("Failed to send message. Try again!");
                }
            );
    };

    return (
        <form
            onSubmit={sendEmail}
            className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl h-full flex flex-col justify-between"
        >
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-slate-400 mb-2"
                        >
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"   // ✅ added for EmailJS
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-slate-400 mb-2"
                        >
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"   // ✅ added
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                            placeholder="john@example.com"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-slate-400 mb-2"
                    >
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"   // ✅ added
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                        placeholder="Project Inquiry"
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-400 mb-2"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"   // ✅ added
                        rows="4"
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all resize-none"
                        placeholder="Tell me about your project..."
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"   // ✅ changed from "button" to "submit"
                    className="w-full py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-xl shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                    Send Message <Send size={18} />
                </button>
            </div>
        </form>
    );
};

export default ContactForm;