import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";

const SEND_TIMEOUT_MS = 12000;

const ContactForm = () => {
    const [status, setStatus] = useState("idle");
    const [message, setMessage] = useState("");
    const [fallbackHref, setFallbackHref] = useState("");

    const sendEmail = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setStatus("error");
            setMessage("Contact form is not configured yet. Please email me directly.");
            return;
        }

        setStatus("sending");
        setMessage("");
        setFallbackHref("");

        try {
            await Promise.race([
                emailjs.sendForm(serviceId, templateId, form, { publicKey }),
                new Promise((_, reject) => {
                    window.setTimeout(() => reject(new Error("EmailJS request timed out")), SEND_TIMEOUT_MS);
                }),
            ]);
            form.reset();
            setStatus("success");
            setMessage("Message sent successfully. I will get back to you soon.");
        } catch (error) {
            const formData = new FormData(form);
            const name = formData.get("name") || "";
            const email = formData.get("email") || "";
            const subject = formData.get("subject") || "Portfolio inquiry";
            const body = [
                `Name: ${name}`,
                `Email: ${email}`,
                "",
                formData.get("message") || "",
            ].join("\n");

            console.error(`EmailJS error: ${error?.status || "unknown"} ${error?.text || "No provider message"}`);
            setStatus("error");
            setMessage("Message could not be sent from the form. You can email me directly instead.");
            setFallbackHref(`mailto:hinusharma18@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
        }
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
                            name="name"
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
                            name="email"
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
                        name="subject"
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
                        name="message"
                        rows="4"
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all resize-none"
                        placeholder="Tell me about your project..."
                        required
                    ></textarea>
                </div>

                {message && (
                    <div
                        className={`text-sm ${status === "success" ? "text-emerald-300" : "text-red-300"}`}
                        role="status"
                        aria-live="polite"
                    >
                        <p>{message}</p>
                        {fallbackHref && (
                            <a href={fallbackHref} className="mt-2 inline-block font-medium underline underline-offset-4 hover:text-red-200">
                                Open email app
                            </a>
                        )}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-xl shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70 disabled:transform-none"
                >
                    {status === "sending" ? "Sending..." : "Send Message"} <Send size={18} />
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
