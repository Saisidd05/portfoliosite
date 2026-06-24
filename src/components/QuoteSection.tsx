"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function QuoteSection() {
  return (
    <section className="relative py-24 bg-[#020617] overflow-hidden">
      {/* Dynamic light glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00D084]/5 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse" />

      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative p-8 md:p-14 rounded-[2.5rem] glass-card border border-white/5 text-center overflow-hidden bg-white/[0.002]"
        >
          {/* Subtle light reflect line */}
          <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-white/5 border border-white/5 text-primary flex items-center justify-center">
              <Quote className="w-6 h-6 rotate-180" />
            </div>
          </div>

          <h3 className="text-xl sm:text-3xl md:text-4xl font-heading font-semibold text-[#F8FAFC] leading-snug tracking-tight max-w-2xl mx-auto">
            &ldquo;Great products are built where <span className="text-gradient-cyan">technology</span>, <span className="text-gradient-cyan">design</span>, and <span className="text-gradient-cyan">user needs</span> meet.&rdquo;
          </h3>
          
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-white/10" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#94A3B8]">
              Engineering Principle
            </span>
            <span className="h-px w-8 bg-white/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
