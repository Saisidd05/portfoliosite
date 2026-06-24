"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 md:py-16 border-t border-white/5 bg-[#020617]/50 backdrop-blur-sm">
      {/* Visual top border flow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Info */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-sm font-heading font-semibold text-[#F8FAFC]">
            Sai Siddharth Nanda Gopal
          </p>
          <p className="text-xs text-[#94A3B8] font-light">
            © {new Date().getFullYear()} All rights reserved. Built with Next.js & Tailwind CSS.
          </p>
        </div>

        {/* Social Link icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Saisidd05"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-white/5 border border-white/5 text-[#94A3B8] hover:text-[#F8FAFC] hover:border-primary/30 transition-all duration-300"
            aria-label="GitHub Link"
          >
            <Github className="w-4 h-4" />
          </a>
          
          <a
            href="https://www.linkedin.com/in/sai-siddharth-nanda-gopal-b96883321"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-white/5 border border-white/5 text-[#94A3B8] hover:text-[#F8FAFC] hover:border-primary/30 transition-all duration-300"
            aria-label="LinkedIn Link"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href="mailto:nsaisiddharth05@gmail.com"
            className="p-2.5 rounded-full bg-white/5 border border-white/5 text-[#94A3B8] hover:text-[#F8FAFC] hover:border-primary/30 transition-all duration-300"
            aria-label="Email Link"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3.5 rounded-full glass border border-white/10 text-primary hover:text-[#020617] hover:bg-primary hover:border-primary shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(0,208,132,0.4)] transition-all duration-300 cursor-pointer z-50 active:scale-90"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
