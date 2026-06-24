"use client";

import { useState } from "react";
import Section from "./Section";
import { Send, Mail, Github, Linkedin, Smartphone, MessageSquare, CheckCircle, ShieldAlert } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  const contactMethods = [
    {
      name: "Send an Email",
      value: "nsaisiddharth05@gmail.com",
      href: "mailto:nsaisiddharth05@gmail.com",
      icon: <Mail className="w-5 h-5 text-primary" />,
    },
    {
      name: "WhatsApp & Call",
      value: "+91 93454 11184",
      href: "https://wa.me/919345411184",
      icon: <Smartphone className="w-5 h-5 text-secondary" />,
    },
    {
      name: "GitHub Repository",
      value: "github.com/Saisidd05",
      href: "https://github.com/Saisidd05",
      icon: <Github className="w-5 h-5 text-primary" />,
    },
    {
      name: "LinkedIn Profile",
      value: "linkedin.com/in/sai-siddharth",
      href: "https://www.linkedin.com/in/sai-siddharth-nanda-gopal-b96883321",
      icon: <Linkedin className="w-5 h-5 text-secondary" />,
    },
  ];

  return (
    <Section id="contact" className="relative pb-32">
      {/* Light glow */}
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Title Block */}
        <div className="relative mb-16 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#94A3B8]">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#F8FAFC]">
            {"Let's Build Something"} <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Amazing Together</span>
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Glass Contact Cards */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {contactMethods.map((method) => (
              <a
                key={method.name}
                href={method.href}
                target="_blank"
                rel="noreferrer"
                className="group p-5 rounded-2xl glass border border-white/5 bg-white/[0.005] hover:border-primary/30 flex items-center gap-4 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-[#020617] border border-white/5 group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-300 shrink-0">
                  {method.icon}
                </div>
                
                <div className="min-w-0">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#94A3B8] block">
                    {method.name}
                  </span>
                  <span className="text-sm font-medium text-[#F8FAFC] group-hover:text-primary transition-colors block mt-0.5 truncate">
                    {method.value}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-[2rem] glass-card border border-white/5 bg-white/[0.002] space-y-6 relative overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                <h3 className="font-heading font-semibold text-base text-[#F8FAFC]">Drop Me a Message</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    disabled={status === "loading"}
                    className="w-full bg-[#020617]/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-[#F8FAFC] placeholder-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-sans"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    disabled={status === "loading"}
                    className="w-full bg-[#020617]/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-[#F8FAFC] placeholder-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-sans"
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                  Message Content
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  disabled={status === "loading"}
                  className="w-full bg-[#020617]/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-[#F8FAFC] placeholder-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-sans resize-none"
                  placeholder="Describe details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-[#020617] bg-primary rounded-xl overflow-hidden transition-all hover:shadow-[0_0_25px_rgba(0,208,132,0.3)] active:scale-[0.98] disabled:opacity-75 disabled:hover:shadow-none"
              >
                <span className="relative flex items-center justify-center gap-2">
                  {status === "loading" ? (
                    <>
                      Sending...
                      <span className="w-4 h-4 border-2 border-[#020617] border-t-transparent rounded-full animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </span>
              </button>

              {/* Status Feedbacks */}
              {status === "success" && (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-primary/10 border border-primary/20 text-primary text-xs font-medium animate-fadeIn">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>{"Your message has been sent successfully! I'll get back to you shortly."}</span>
                </div>
              )}
              
              {status === "error" && (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium animate-fadeIn">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>Failed to send feedback. Please check connection and try again.</span>
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </Section>
  );
}
