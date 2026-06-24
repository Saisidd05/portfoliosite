"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 py-4 md:py-6">
      {/* Outer wrapper that shrinks and forms a floating pill on scroll */}
      <div
        className={`mx-auto px-6 transition-all duration-500 ${
          scrolled
            ? "max-w-4xl"
            : "max-w-7xl"
        }`}
      >
        <div
          className={`flex items-center justify-between px-6 py-3 transition-all duration-500 rounded-full ${
            scrolled
              ? "bg-[#020617]/70 glass border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-md"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group text-lg md:text-xl font-heading font-semibold tracking-wide text-[#F8FAFC]"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(0,208,132,0.8)]" />
            Sai <span className="text-gradient-cyan font-bold transition-all duration-300 group-hover:tracking-wider">Siddharth</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-300 py-1.5 group"
              >
                {link.name}
                {/* Micro-interaction underline */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA / Quick Contact Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold rounded-full bg-surface border border-border text-[#F8FAFC] hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300"
            >
              {"Let's Talk"}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Navigation Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full text-[#F8FAFC] hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-[80px] left-6 right-6 p-6 rounded-3xl glass shadow-[0_24px_50px_rgba(0,0,0,0.7)] z-40 border border-white/10 md:hidden flex flex-col gap-5"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-[#94A3B8] hover:text-[#F8FAFC] transition-colors py-2 border-b border-white/5 flex items-center justify-between group"
                >
                  {link.name}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3.5 rounded-2xl bg-primary text-black font-semibold text-sm shadow-[0_0_30px_rgba(0,208,132,0.3)] hover:shadow-[0_0_45px_rgba(0,208,132,0.5)] active:scale-95 transition-all"
            >
              Get In Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
