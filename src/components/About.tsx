"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { Terminal, Cpu, Code, BookOpen, GraduationCap, Briefcase, Smartphone } from "lucide-react";

export default function About() {
  const focusAreas = [
    {
      title: "Full Stack Development",
      description: "Building responsive web systems with Next.js, React, Node.js, and relational databases.",
      icon: <Code className="w-5 h-5 text-primary" />,
    },
    {
      title: "Mobile App Development",
      description: "Creating modern, cross-platform mobile products using Flutter, Dart, and native features.",
      icon: <Smartphone className="w-5 h-5 text-secondary" />,
    },
    {
      title: "Backend & Systems",
      description: "Designing robust backend servers and automated scripts with Python and Java.",
      icon: <Terminal className="w-5 h-5 text-primary" />,
    },
    {
      title: "AI & Automation",
      description: "Integrating smart NLP engines, chatbot agents, and automated workflows into SaaS architectures.",
      icon: <Cpu className="w-5 h-5 text-secondary" />,
    },
  ];

  return (
    <Section id="about" className="relative overflow-hidden">
      {/* Dynamic light glows */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Title Block */}
        <div className="relative mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#94A3B8]">
              Professional Profile
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-[#F8FAFC]"
          >
            Designing With Code, <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Engineering With Purpose</span>
          </motion.h2>
        </div>

        {/* Content Split Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Focus Area Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-6 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Core Focus Areas
            </h3>
            
            <div className="grid gap-4">
              {focusAreas.map((area, idx) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: idx * 0.1,
                  }}
                  whileHover={{ x: 6, borderColor: "rgba(0, 208, 132, 0.3)" }}
                  className="flex items-start gap-4 p-5 rounded-2xl glass border border-white/5 bg-white/[0.01] transition-all select-none"
                >
                  <div className="p-2.5 rounded-xl bg-[#020617] border border-white/5 flex items-center justify-center shrink-0">
                    {area.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F8FAFC]">{area.title}</h4>
                    <p className="text-xs text-[#94A3B8] mt-1 font-light leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Bio Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 text-[#94A3B8] font-light leading-relaxed text-sm md:text-base"
          >
            {/* Academic block */}
            <div className="p-6 md:p-8 rounded-[2rem] glass-card border border-white/5 space-y-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none group-hover:bg-primary/10 transition-colors" />
              <div className="flex items-center gap-3 text-[#F8FAFC]">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h4 className="font-heading font-semibold text-lg">Academic Journey</h4>
              </div>
              <p>
                I am a B.Tech Information Technology student at <span className="text-[#F8FAFC] font-normal">Agni College of Technology</span>. 
                With a passion for building robust digital systems, I dedicate my academic career to mastering software engineering principles and OOP architectures across **Java**, **Python**, and **Dart**.
              </p>
            </div>

            {/* Professional Experiences split */}
            <div className="grid md:grid-cols-2 gap-4">
              
              {/* Experience 1: Garuda Aerospace */}
              <div className="p-6 rounded-2xl glass border border-white/5 space-y-3 relative group">
                <div className="flex items-center gap-2.5 text-[#F8FAFC]">
                  <Briefcase className="w-4 h-4 text-secondary" />
                  <h5 className="font-heading font-medium text-sm">Garuda Aerospace</h5>
                </div>
                <span className="text-[10px] text-primary font-semibold uppercase tracking-wider">Drone Tech Intern</span>
                <p className="text-xs leading-relaxed">
                  Completed a drone technology internship, coding hardware diagnostics and flight telemetry configurations.
                </p>
              </div>

              {/* Experience 2: LynkLathe Solutions */}
              <div className="p-6 rounded-2xl glass border border-white/5 space-y-3 relative group">
                <div className="flex items-center gap-2.5 text-[#F8FAFC]">
                  <Terminal className="w-4 h-4 text-primary" />
                  <h5 className="font-heading font-medium text-sm">LynkLathe Solutions</h5>
                </div>
                <span className="text-[10px] text-secondary font-semibold uppercase tracking-wider">Product Team Lead</span>
                <p className="text-xs leading-relaxed">
                  Leading a product development team designing an automated workshop quotation and client billing platform.
                </p>
              </div>

            </div>

            <p className="px-2 pt-2">
              My development philosophy focuses on product scalability. I combine design aesthetics with strict software engineering patterns, ensuring clean codebases whether building cross-platform applications in **Flutter**, system tools in **Java**, or scripts in **Python**.
            </p>
          </motion.div>

        </div>
      </div>
    </Section>
  );
}
