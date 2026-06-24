"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function BackgroundEffect() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Motion values for smooth cursor tracking
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Smooth springs to eliminate animation lag and make the glow feel fluid
  const springConfig = { damping: 40, stiffness: 150, mass: 0.6 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Correct transform hook for Framer Motion to avoid runtime and compile errors
  const xStr = useTransform(mouseXSpring, (val) => `${val}px`);
  const yStr = useTransform(mouseYSpring, (val) => `${val}px`);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-[#020617] pointer-events-none select-none"
    >
      {/* 1. Global subtle lines and dot grid patterns */}
      <div className="absolute inset-0 line-grid opacity-[0.25]" />
      <div className="absolute inset-0 dot-grid opacity-[0.45]" />

      {/* 2. Floating Radial Gradient Orbs (Emerald and Cyan) */}
      {/* Orb 1: Emerald/Green Glowing Aura */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] aurora-orb -top-20 -left-20"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -50, 60, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Orb 2: Cyan Glowing Aura */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[140px] aurora-orb bottom-20 -right-20"
        animate={{
          x: [0, -90, 50, 0],
          y: [0, 70, -60, 0],
          scale: [1, 0.85, 1.1, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Orb 3: Soft Emerald Highlight */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] aurora-orb top-1/2 left-1/3"
        animate={{
          x: [0, 50, -60, 0],
          y: [0, 90, -40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* 3. Mouse-Follow Spotlight Glow */}
      <motion.div
        className="absolute inset-0 z-10 opacity-100 pointer-events-none"
        style={{
          background: `radial-gradient(700px circle at var(--x) var(--y), rgba(0, 208, 132, 0.07), rgba(6, 182, 212, 0.03) 40%, transparent 70%)`,
          "--x": xStr,
          "--y": yStr,
        } as React.CSSProperties}
      />

      {/* 4. Ambient top/bottom lights */}
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-[#06b6d4]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-[#00d084]/5 to-transparent pointer-events-none" />
    </div>
  );
}
