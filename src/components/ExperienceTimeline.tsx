"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Cpu, Compass, Laptop } from "lucide-react";

interface TimelineItem {
  role: string;
  organization: string;
  duration: string;
  icon: React.ReactNode;
  highlights: string[];
}

export default function ExperienceTimeline() {
  const timelineData: TimelineItem[] = [
    {
      role: "Product Development Team Lead",
      organization: "LynkLathe Solutions",
      duration: "2025 - Present",
      icon: <Cpu className="w-4 h-4 text-primary" />,
      highlights: [
        "Leading a development team to build a digital quotation and job proposal platform.",
        "Digitizing offline customer communications and billing workflows for small lathe workshops.",
        "Designed UI schema architectures and mapped product development requirements.",
      ],
    },
    {
      role: "Drone Technology Intern",
      organization: "Garuda Aerospace Pvt Ltd (Chennai)",
      duration: "June 2025 (1 Month)",
      icon: <Compass className="w-4 h-4 text-secondary" />,
      highlights: [
        "Acquired hands-on experience with hardware automation and telemetry configurations.",
        "Investigated flight controller architectures and script-driven drone diagnostics.",
        "Strengthened problem-solving workflows for hardware-software integrations.",
      ],
    },
    {
      role: "Full Stack Academic Projects",
      organization: "Agni College of Technology",
      duration: "2024 - Present",
      icon: <Briefcase className="w-4 h-4 text-primary" />,
      highlights: [
        "Built responsive web catalog prototypes and database management systems.",
        "Configured relational SQL database structures to represent shipping and logistics pipelines.",
        "Integrated public APIs and real-time state sorting in frontend layouts.",
      ],
    },
    {
      role: "Independent Product Prototyping",
      organization: "Personal Development",
      duration: "2024 - Present",
      icon: <Laptop className="w-4 h-4 text-secondary" />,
      highlights: [
        "Developed full-stack web applications and automation utilities.",
        "Engineered AI-powered resume analyzers and modular layout template tools.",
        "Authored open-source design variables and calculator components.",
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-24 md:py-36 bg-[#020617] overflow-hidden">
      {/* Subtle bottom backing light */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Title Header */}
        <div className="relative mb-20 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#94A3B8]">
              Timeline
            </span>
          </div>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-[#F8FAFC]">
            Engineering <span className="text-gradient-cyan">Milestones</span>
          </h3>
        </div>

        {/* Timeline Track */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10 ml-4 md:ml-8 space-y-12">
          {timelineData.map((item, idx) => (
            <motion.div
              key={item.role + item.organization}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 16,
                delay: idx * 0.15,
              }}
              className="relative"
            >
              {/* Connector dot */}
              <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-[#020617] border-2 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(0,208,132,0.4)] z-10 group-hover:scale-110 transition-transform">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F8FAFC]" />
              </div>

              {/* Card Container */}
              <div className="p-6 md:p-8 rounded-[2rem] glass-card border border-white/5 relative group bg-white/[0.003] hover:border-primary/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-lg font-heading font-bold text-[#F8FAFC] group-hover:text-primary transition-colors">
                      {item.role}
                    </h4>
                    <span className="text-xs font-semibold text-secondary block mt-0.5">
                      {item.organization}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-xs text-[#94A3B8] font-medium shrink-0 bg-white/5 px-3 py-1 rounded-full border border-white/5 self-start md:self-center">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.duration}
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs md:text-sm text-[#94A3B8] font-light list-none pl-0">
                  {item.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <span className="text-primary mt-1 shrink-0">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
