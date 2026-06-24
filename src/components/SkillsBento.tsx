"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Terminal, Figma, GitMerge, Check, Smartphone } from "lucide-react";

interface SkillItem {
  name: string;
}

export default function SkillsBento() {
  const frontendSkills: SkillItem[] = [
    { name: "Next.js" },
    { name: "React" },
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "Tailwind CSS" },
    { name: "HTML5 & CSS3" },
  ];

  const backendSkills: SkillItem[] = [
    { name: "Python" },
    { name: "Java" },
    { name: "C Programming" },
    { name: "SQL (Relational)" },
  ];

  const tools: SkillItem[] = [
    { name: "Git" },
    { name: "GitHub" },
    { name: "VS Code" },
    { name: "Vercel" },
  ];

  const gridContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      {/* Light glow backings */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-secondary/5 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Title block */}
        <div className="relative mb-16 md:mb-24 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#94A3B8]">
              Capabilities
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#F8FAFC]">
            Technical <span className="text-gradient-cyan">Arsenal & Tools</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-45px" }}
          className="grid grid-cols-1 md:grid-cols-6 gap-6"
        >
          {/* Card 1: Frontend (Large - spans 3 columns on md, spans 2 rows) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-3 md:row-span-2 group p-8 rounded-[2rem] glass-card border border-white/5 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-primary group-hover:border-primary/25 transition-all">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-[#F8FAFC]">Frontend Engineering</h3>
                    <p className="text-xs text-[#94A3B8]">Modular Web Systems</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#94A3B8] font-light leading-relaxed max-w-md">
                Creating responsive, high-performance web applications using modular architectures, clientside caching, and modern web systems.
              </p>

              {/* Skills chips */}
              <div className="flex flex-wrap gap-2 pt-4">
                {frontendSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 350, damping: 12 }}
                    className="px-4 py-2 rounded-full glass border border-white/5 text-xs text-[#F8FAFC]/90 font-medium hover:border-primary/40 hover:shadow-[0_4px_20px_rgba(0,208,132,0.15)] flex items-center gap-1.5 cursor-default transition-all duration-300"
                  >
                    <Check className="w-3 h-3 text-primary" />
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Visual element representing a UI grid */}
            <div className="mt-8 border border-white/5 rounded-2xl p-4 bg-[#020617]/50 relative overflow-hidden h-[120px] select-none pointer-events-none opacity-50 group-hover:opacity-75 transition-opacity">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>
              <div className="mt-4 space-y-2">
                <div className="h-2 w-1/3 bg-white/10 rounded" />
                <div className="h-2 w-2/3 bg-gradient-to-r from-primary/30 to-secondary/30 rounded" />
                <div className="h-2 w-1/2 bg-white/5 rounded" />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Backend & OOP (Medium - spans 3 columns on md) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-3 group p-8 rounded-[2rem] glass-card border border-white/5 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-secondary group-hover:border-secondary/25 transition-all">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-[#F8FAFC]">Backend & Object-Oriented</h3>
                  <p className="text-xs text-[#94A3B8]">Systems & Data Schema</p>
                </div>
              </div>
              <p className="text-sm text-[#94A3B8] font-light leading-relaxed">
                Writing automated scripts, designing relational database models, and building structured object-oriented code.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 mt-6 relative z-10">
              {backendSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="px-4 py-2 rounded-full glass border border-white/5 text-xs text-[#F8FAFC]/90 font-medium hover:border-secondary/40 cursor-default transition-colors duration-300"
                >
                  ⚡ {skill.name}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Mobile Apps (Spans 2 columns on md) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 group p-6 rounded-[2rem] glass-card border border-white/5 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-2.5">
                <Smartphone className="w-5 h-5 text-primary animate-pulse" />
                <h4 className="font-heading font-semibold text-base text-[#F8FAFC]">Mobile Engineering</h4>
              </div>
              <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                Developing cross-platform, single-codebase mobile experiences.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/5 text-xs text-[#F8FAFC]/90 inline-block font-semibold">
                📱 Flutter
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-[#020617] border border-white/5 text-xs text-[#94A3B8] inline-block">
                Dart
              </span>
            </div>
          </motion.div>

          {/* Card 4: Design (Spans 2 columns on md) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 group p-6 rounded-[2rem] glass-card border border-white/5 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-2.5">
                <Figma className="w-5 h-5 text-secondary" />
                <h4 className="font-heading font-semibold text-base text-[#F8FAFC]">UI/UX Design</h4>
              </div>
              <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                Wireframing components and prototyping interactive responsive layouts.
              </p>
            </div>

            <div className="flex gap-2 mt-6">
              {["Figma", "UI/UX Design"].map((d) => (
                <span key={d} className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-xs text-[#F8FAFC]/90 font-medium">
                  {d}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 5: Tools (Spans 2 columns on md) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 group p-6 rounded-[2rem] glass-card border border-white/5 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-2.5">
                <GitMerge className="w-5 h-5 text-primary" />
                <h4 className="font-heading font-semibold text-base text-[#F8FAFC]">Version & Tools</h4>
              </div>
              <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                Configuring repositories, package managers, and production bundles.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {tools.map((tool) => (
                <span
                  key={tool.name}
                  className="px-2.5 py-1 rounded-lg bg-[#020617] border border-white/5 text-[10px] font-semibold text-[#94A3B8] group-hover:text-[#F8FAFC] group-hover:border-white/15 transition-all"
                >
                  {tool.name}
                </span>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
