"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Laptop, Award, GitBranch, Lightbulb } from "lucide-react";

interface StatItem {
  label: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
}

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTimestamp: number | null = null;
    const duration = 1200; // ms

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums font-heading">
      {count}
      {suffix}
    </span>
  );
}

export default function AchievementStrip() {
  const stats: StatItem[] = [
    {
      label: "Projects Built",
      value: 10,
      suffix: "+",
      icon: <Laptop className="w-5 h-5 text-primary" />,
    },
    {
      label: "Certifications Earned",
      value: 5,
      suffix: "+",
      icon: <Award className="w-5 h-5 text-secondary" />,
    },
    {
      label: "Repositories Created",
      value: 20,
      suffix: "+",
      icon: <GitBranch className="w-5 h-5 text-primary" />,
    },
    {
      label: "Technologies Learned",
      value: 12,
      suffix: "+",
      icon: <Lightbulb className="w-5 h-5 text-secondary" />,
    },
  ];

  return (
    <section className="relative py-12 md:py-16 -mt-8 z-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: idx * 0.1,
              }}
              whileHover={{ y: -5 }}
              className="relative p-6 md:p-8 rounded-[1.75rem] glass-card border border-white/5 flex flex-col justify-between overflow-hidden group shadow-lg"
            >
              {/* Micro gradient shine */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/5 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                  {stat.icon}
                </div>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F8FAFC]">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-xs md:text-sm font-medium text-[#94A3B8] mt-1 group-hover:text-[#F8FAFC]/80 transition-colors">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
