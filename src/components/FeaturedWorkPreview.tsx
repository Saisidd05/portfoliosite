"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Gem, Layers } from "lucide-react";

export default function FeaturedWorkPreview() {
  const previews = [
    {
      id: "mistry-gems",
      title: "Mistry Gems Prototype",
      tagline: "Featured Case Study",
      description: "A digital catalog and automated invoice generator built for high-end gemstone wholesale merchants, modernizing traditional manual ledger records.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/images/mistry_gems.png",
      icon: <Gem className="w-5 h-5 text-primary" />,
      color: "from-[#00D084]/15 to-transparent",
      glowColor: "group-hover:border-primary/40 group-hover:shadow-[0_20px_50px_rgba(0,208,132,0.15)]",
    },
    {
      id: "ai-resume",
      title: "AI Resume Builder",
      tagline: "AI SaaS Product",
      description: "An AI-powered resume parser and job-tailoring engine. Analyzes ATS keyword compatibility and compiles structured LaTeX resume formats.",
      tech: ["Next.js", "OpenAI API", "PostgreSQL"],
      image: "/images/ai_resume.png",
      icon: <Sparkles className="w-5 h-5 text-secondary" />,
      color: "from-[#06B6D4]/15 to-transparent",
      glowColor: "group-hover:border-secondary/40 group-hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)]",
    },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative py-12 md:py-16 z-20">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-8">
          <Layers className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#94A3B8]">
            Selected Artifacts
          </span>
        </div>
        
        {/* Grid Container */}
        <div className="grid lg:grid-cols-2 gap-8">
          {previews.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 18,
                delay: idx * 0.15,
              }}
              whileHover={{ y: -6 }}
              onClick={() => handleScroll(item.id)}
              className={`group cursor-pointer rounded-[2.5rem] glass-card border border-white/5 flex flex-col md:flex-row items-stretch justify-between overflow-hidden shadow-2xl relative min-h-[340px] md:min-h-[300px] transition-all duration-500 ${item.glowColor}`}
            >
              {/* Subtle background glow flow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              {/* Left Side: Product Description */}
              <div className="p-8 flex flex-col justify-between flex-1 relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 text-primary">
                      {item.tagline}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[#020617] border border-white/5 group-hover:border-primary/20 transition-all duration-300">
                      {item.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-[#F8FAFC] group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-[#94A3B8] leading-relaxed font-light line-clamp-4">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[9px] font-medium bg-white/5 text-[#F8FAFC]/80 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  {/* Explore link */}
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F8FAFC] group-hover:text-primary group-hover:translate-x-1.5 transition-all duration-300 select-none">
                    Explore Case Study
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Right Side: Tilted Screenshot Preview */}
              <div className="relative w-full md:w-[220px] lg:w-[240px] shrink-0 overflow-hidden bg-black/20 border-t md:border-t-0 md:border-l border-white/5 min-h-[200px] md:min-h-auto">
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  {/* Tilted frame mimicking app mockups */}
                  <motion.div 
                    className="w-[140%] h-[140%] relative rounded-xl overflow-hidden border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.5)] origin-top-left"
                    style={{
                      transform: "rotate(-10deg) translate(20px, 10px)",
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotate: "-8deg",
                      x: 10,
                      y: 5,
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 15 }}
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                    {/* Shadow reflect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
