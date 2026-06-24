"use client";

import { motion, Variants } from "framer-motion";
import { FolderGit2, Github, ExternalLink } from "lucide-react";

interface ArchiveProject {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectArchive() {
  const archive: ArchiveProject[] = [
    {
      title: "Aura Design System",
      description: "A developer design system focused on high-performance dark themes, glassmorphism UI variables, and smooth spring physics.",
      tech: ["Next.js", "Tailwind CSS", "Figma"],
      githubUrl: "https://github.com/Saisidd05/CodeAlpha_portfoliosite",
    },
    {
      title: "BlogHub",
      description: "A full-stack blogging platform with user authentication, custom content editors, relational databases, and dynamic routing states.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/Saisidd05/bloghub.git",
      liveUrl: "https://bloghub-hazel.vercel.app/",
    },
    {
      title: "DBMS Logistics System",
      description: "A relational database management mini-project designed to catalog shipment details, logistics workflows, and track driver schedules.",
      tech: ["SQL", "Relational Database"],
      githubUrl: "https://github.com/Saisidd05",
    },
    {
      title: "Expense Tracker",
      description: "A desktop productivity tool built with Python scripting, utilizing SQLite databases to organize expenditures and generate CSV charts.",
      tech: ["Python", "Tkinter", "SQLite"],
      githubUrl: "https://github.com/Saisidd05/Rise-3.0-Task-2.git",
    },
    {
      title: "Currency Converter",
      description: "A desktop application that fetches live global exchange metrics from open APIs to deliver fast and precise conversion rates.",
      tech: ["Python", "Tkinter", "API Integration"],
      githubUrl: "https://github.com/Saisidd05/Rise-3.0-Task_1.git",
    },
    {
      title: "Responsive Image Gallery",
      description: "A front-end image showcase displaying high-definition feeds from Unsplash APIs, with flex-grid layouts and full-screen preview modals.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/Saisidd05",
    },
    {
      title: "Basic Calculator",
      description: "A web utility performing algebraic arithmetic operations with clean styling, memory storage slots, and live calculation preview feeds.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/Saisidd05/Basic_Calculator.git",
    },
    {
      title: "Portfolio Site",
      description: "A client-side portfolio designed with floating glass navigation headers, mouse-following gradients, and scroll-triggered spring grids.",
      tech: ["Next.js", "TypeScript", "Tailwind v4"],
      githubUrl: "https://github.com/Saisidd05/CodeAlpha_portfoliosite",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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
    <section className="relative py-20 bg-[#020617] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="relative mb-14 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 mb-3">
            <FolderGit2 className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#94A3B8]">
              Other Creations
            </span>
          </div>
          <h3 className="text-3xl font-heading font-bold text-[#F8FAFC]">
            Project <span className="text-gradient-cyan">Archive Vault</span>
          </h3>
        </div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {archive.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -6, borderColor: "rgba(6, 182, 212, 0.25)" }}
              className="group p-5 rounded-2xl glass border border-white/5 flex flex-col justify-between h-[230px] relative overflow-hidden transition-all duration-300"
            >
              {/* Card background glowing flow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5 group-hover:text-primary transition-colors">
                    <FolderGit2 className="w-5 h-5 text-[#94A3B8]" />
                  </div>
                  
                  {/* Actions */}
                  <div className="flex items-center gap-2 relative z-10">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg hover:bg-white/10 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                        aria-label={`View GitHub repository for ${project.title}`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg hover:bg-white/10 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                        aria-label={`View live demo for ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-base font-heading font-semibold text-[#F8FAFC] group-hover:text-primary transition-colors duration-300 truncate">
                  {project.title}
                </h4>
                
                <p className="text-xs text-[#94A3B8] mt-2 font-light leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[9px] font-medium bg-white/5 text-[#F8FAFC]/75"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
