"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Sparkles, ShieldCheck } from "lucide-react";

interface OpeningExperienceProps {
  onEnter: () => void;
}

const bootLogs = [
  "Initializing brand core system...",
  "Retrieving design tokens & color schemes...",
  "Injecting emerald-cyan color system variables...",
  "Constructing custom 3D projection rendering engine...",
  "Synthesizing high-fidelity glassmorphism components...",
  "Polishing micro-interactions and spring systems...",
  "Compiling developer dashboard module...",
  "Welcome to Sai Siddharth's portfolio. System ready."
];

export default function OpeningExperience({ onEnter }: OpeningExperienceProps) {
  const [progress, setProgress] = useState(0);
  const [bootStage, setBootStage] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Simulated boot log progression
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Varying speed for realistic feel
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  // Update boot stages based on progress
  useEffect(() => {
    const stage = Math.min(
      Math.floor((progress / 100) * bootLogs.length),
      bootLogs.length - 1
    );
    setBootStage(stage);
  }, [progress]);

  // Track mouse for 3D monitor tilt
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Monitor screen perspective calculations
  const rotateX = mousePos.y * -15; // Limit tilt range for elegant feel
  const rotateY = mousePos.x * 15;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full bg-[#020617] flex flex-col items-center justify-center z-[9999] overflow-hidden select-none"
      style={{ perspective: "1200px" }}
    >
      {/* Soft dark-cyan/emerald ambient grids */}
      <div className="absolute inset-0 dot-grid opacity-[0.2]" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[#00D084]/5 blur-[180px] rounded-full" />
        <div className="w-[500px] h-[500px] bg-[#06B6D4]/5 blur-[200px] rounded-full" />
      </div>

      {/* 3D Floating Monitor Wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: 0,
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 20,
          mass: 0.8,
        }}
        className="relative flex flex-col items-center"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Ambient Backlight Glow behind the screen */}
        <div 
          className="absolute inset-x-4 top-4 bottom-20 bg-gradient-to-tr from-[#00D084]/10 to-[#06B6D4]/10 blur-2xl rounded-[2rem] pointer-events-none transition-all duration-300"
          style={{ transform: "translateZ(-30px)" }}
        />

        {/* Monitor Screen Frame */}
        <div 
          className="relative w-[340px] sm:w-[500px] md:w-[600px] aspect-[16/10] rounded-[2rem] p-4 glass bg-[#070b19]/90 border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
          style={{ transform: "translateZ(30px)" }}
        >
          {/* Glass glare overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none z-10" />

          {/* CRT Scanline & Grid texture */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.015)_50%,rgba(0,0,0,0.15)_50%)] bg-[size:100%_4px] pointer-events-none z-10" />

          {/* Top bezel dot status */}
          <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 select-none">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-[#64748B]">
              <Monitor className="w-3.5 h-3.5" />
              <span>GLASS_CORE_V1.0</span>
            </div>
            <div className="w-16 flex justify-end">
              <span className="w-2 h-2 rounded-full bg-[#00D084] animate-pulse shadow-[0_0_8px_rgba(0,208,132,0.8)]" />
            </div>
          </div>

          {/* Inner Content Area */}
          <div className="flex-1 flex flex-col justify-between font-mono bg-[#02050f]/80 rounded-2xl p-4 md:p-6 border border-white/5 relative overflow-hidden select-text">
            {/* Background screen glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.03)_0%,transparent_70%)] pointer-events-none" />

            {/* Simulated Boot Console Outputs */}
            <div className="space-y-1.5 md:space-y-2 text-[10px] sm:text-xs text-[#94A3B8] overflow-hidden max-h-[160px] md:max-h-[220px]">
              {bootLogs.slice(0, bootStage + 1).map((log, i) => (
                <motion.div
                  key={log}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-secondary select-none">&gt;</span>
                  <span className={`${i === bootStage ? "text-[#F8FAFC]" : "text-[#64748B]"} flex-1`}>
                    {log}
                  </span>
                  {i < bootStage && (
                    <span className="text-[#00D084] flex items-center gap-0.5 text-[9px] font-bold select-none">
                      <ShieldCheck className="w-3 h-3 inline" /> OK
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Progress / Loading Interaction Panel */}
            <div className="border-t border-white/5 pt-4 mt-4 select-none">
              <AnimatePresence mode="wait">
                {progress < 100 ? (
                  <motion.div
                    key="loading-stage"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-primary font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                        LOADING...
                      </span>
                      <span className="text-[#F8FAFC]/80 font-bold">{progress}%</span>
                    </div>
                    {/* Glowing progress track */}
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#00D084] to-[#06B6D4] rounded-full shadow-[0_0_12px_rgba(0,208,132,0.5)]"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="enter-stage"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 12 }}
                    className="flex flex-col items-center justify-center pt-2"
                  >
                    <button
                      onClick={onEnter}
                      className="relative px-8 py-3 rounded-full bg-[#00D084] text-[#020617] font-semibold text-xs uppercase tracking-widest hover:bg-[#00f39b] hover:shadow-[0_0_35px_rgba(0,208,132,0.6)] active:scale-[0.97] transition-all duration-300 flex items-center gap-2 group cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-[#020617] group-hover:rotate-12 transition-transform" />
                      <span>Enter Portfolio</span>
                    </button>
                    <span className="text-[9px] text-[#64748B] tracking-wider mt-3 uppercase animate-pulse">
                      Click screen to access catalog
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Monitor Metallic Stand */}
        <div 
          className="w-12 h-14 bg-gradient-to-b from-[#020617] to-white/5 border-x border-white/10 relative -mt-0.5 shadow-2xl"
          style={{ transform: "translateZ(15px)" }}
        />
        {/* Monitor Base */}
        <div 
          className="w-40 h-3 bg-gradient-to-r from-white/5 via-white/15 to-white/5 border border-white/15 rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
          style={{ transform: "translateZ(5px)" }}
        />
      </motion.div>
    </div>
  );
}
