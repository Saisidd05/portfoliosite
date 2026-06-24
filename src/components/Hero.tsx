"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin, MessageSquare, Award, GitPullRequest, CheckCircle } from "lucide-react";

export default function Hero() {
  const titles = [
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "AI Builder",
    "Product Thinker",
    "Problem Solver"
  ];
  
  const [titleIdx, setTitleIdx] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  // Set up mouse tilt values for Portrait Card
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [15, -15]);
  const rotateY = useTransform(x, [-150, 150], [-15, 15]);

  const springConfig = { damping: 25, stiffness: 220, mass: 0.6 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIdx((prev) => (prev + 1) % titles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [titles.length]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 35, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  // Helper for slow, out-of-sync floating animations
  const floatAnimation = (duration: number, delay: number) => ({
    y: [0, -10, 0],
    x: [0, 5, 0],
    rotate: [0, 2, 0],
    transition: {
      duration,
      delay,
      repeat: Infinity,
      repeatType: "mirror" as const,
      ease: "easeInOut" as const,
    }
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 md:pt-36 overflow-hidden">
      {/* Subtle lighting overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.02),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl z-10 relative">
        
        {/* ==================== FLOATING ELEMENTS ==================== */}
        {/* Particle 1: GitHub Stats Card (Left Side) */}
        <motion.div
          animate={floatAnimation(7, 0.2)}
          className="absolute left-[2%] top-[15%] hidden lg:flex items-center gap-3 p-3.5 rounded-2xl glass bg-[#070b19]/80 border border-white/5 shadow-xl select-none z-20 hover:border-primary/30 transition-colors"
        >
          <div className="p-2 rounded-xl bg-[#020617] border border-white/5 text-primary">
            <GitPullRequest className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider block">GitHub Status</span>
            <span className="text-xs font-semibold text-[#F8FAFC]">412 commits YTD</span>
          </div>
        </motion.div>

        {/* Particle 2: AI Tech Pill (Right of Portrait) */}
        <motion.div
          animate={floatAnimation(6, 1.2)}
          className="absolute left-[36%] bottom-[12%] hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-full glass bg-[#070b19]/80 border border-white/5 shadow-md z-20 hover:border-secondary/30 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-secondary" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#F8FAFC]/90">
            OpenAI & Supabase
          </span>
        </motion.div>

        {/* Particle 3: Developer Core Metric (Top Right) */}
        <motion.div
          animate={floatAnimation(8, 0.5)}
          className="absolute right-[5%] top-[18%] hidden lg:flex items-center gap-3 p-3.5 rounded-2xl glass bg-[#070b19]/80 border border-white/5 shadow-xl z-20 hover:border-primary/30 transition-colors"
        >
          <div className="p-2 rounded-xl bg-[#020617] border border-white/5 text-secondary">
            <CheckCircle className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider block">ATS Diagnostics</span>
            <span className="text-xs font-semibold text-primary">95% Score Verified</span>
          </div>
        </motion.div>

        {/* Particle 4: Tech Stack Floating Pill (Far Right Center) */}
        <motion.div
          animate={floatAnimation(9, 2.1)}
          className="absolute right-[2%] top-[55%] hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-full glass bg-[#070b19]/80 border border-white/5 shadow-md z-20 text-xs font-medium text-[#94A3B8] hover:text-[#F8FAFC]"
        >
          🚀 <span>Flutter · Java · Python</span>
        </motion.div>
        {/* ========================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column - 3D Portrait Card and Badges */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Interactive Portrait Card Container */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative group w-full max-w-[290px] sm:max-w-[330px] aspect-[4/5] rounded-[2.5rem] p-3 cursor-pointer select-none"
              style={{ perspective: "1000px" }}
            >
              {/* Outer Glow backing (emerald-cyan blend) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00D084]/15 to-[#06B6D4]/15 rounded-[2.5rem] opacity-40 blur-2xl group-hover:opacity-85 transition-opacity duration-700 pointer-events-none" />

              {/* 3D Rotatable Shell */}
              <motion.div
                style={{
                  rotateX: rotateXSpring,
                  rotateY: rotateYSpring,
                  transformStyle: "preserve-3d",
                }}
                className="w-full h-full rounded-[2.2rem] glass bg-[#070b19]/90 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex items-center justify-center p-3 overflow-hidden relative"
              >
                {/* Emerald glowing inner border */}
                <div className="absolute inset-0 rounded-[2.2rem] border border-primary/20 group-hover:border-primary/50 transition-colors duration-500 pointer-events-none z-10" />

                {/* Portrait Image with Translation Depth */}
                <div 
                  className="w-full h-full rounded-[1.8rem] overflow-hidden bg-[#02050f] border border-white/5 relative"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <img
                    src="https://i.ibb.co/Kjcy84SR/profile.jpg"
                    alt="Sai Siddharth Nanda Gopal"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:filter group-hover:brightness-[1.03]"
                    onError={(e) => {
                      // Fallback gradient mock card if link breaks
                      e.currentTarget.src = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' width%3D'300' height%3D'375' viewBox%3D'0 0 300 375'%3E%3Crect width%3D'300' height%3D'375' fill%3D'%23070b19'%2F%3E%3Ccircle cx%3D'150' cy%3D'187' r%3D'90' fill%3D'%2300D084' opacity%3D'0.15' filter%3D'blur(30px)'%2F%3E%3C%2Fsvg%3E";
                    }}
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/70 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>

            {/* Availability Badge */}
            <motion.div
              variants={itemVariants}
              className="mt-8 px-4 py-2 rounded-full glass border border-white/10 bg-white/5 inline-flex items-center gap-2 shadow-lg"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
              <span className="text-xs font-semibold text-[#F8FAFC]">
                🟢 Available for Internships & Collaborations
              </span>
            </motion.div>

            {/* Focus Tags */}
            <motion.div
              variants={itemVariants}
              className="mt-4 flex flex-wrap gap-2.5 justify-center max-w-[360px]"
            >
              {["Internships", "Product Engineering", "Flutter Apps", "Python Scripts"].map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#020617]/50 border border-white/5 text-[#94A3B8] hover:text-[#F8FAFC] hover:border-white/15 transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Identity and Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 bg-primary/5 hover:border-primary/40 transition-colors pointer-events-none">
              <Award className="w-3.5 h-3.5 text-primary" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary">
                Building Products, Not Just Projects
              </span>
            </div>

            {/* Main Title Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-[#F8FAFC] leading-none">
              Sai Siddharth <br className="hidden sm:inline" />
              <span className="text-gradient-primary">Nanda Gopal</span>
            </h1>

            {/* Animated Role Typography */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start text-xl sm:text-3xl font-heading font-medium text-[#F8FAFC]">
              <span className="text-[#94A3B8] mr-2">I am a</span>
              <div className="relative inline-block overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={titles[titleIdx]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 120, damping: 14 }}
                    className="text-gradient-cyan inline-block font-semibold"
                  >
                    {titles[titleIdx]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* High-quality Body Copy */}
            <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] max-w-2xl font-light leading-relaxed">
              I design and build modern digital experiences that combine elegant design, scalable technology, and real-world problem solving.
            </p>

            {/* Three CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4">
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary text-[#020617] font-semibold text-sm hover:shadow-[0_0_35px_rgba(0,208,132,0.4)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent border border-white/10 hover:border-white/20 hover:bg-white/5 text-[#F8FAFC] font-semibold text-sm active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Contact Me
                <MessageSquare className="w-4 h-4 text-[#94A3B8]" />
              </a>

              <a
                href="/resume.pdf"
                download
                onClick={(e) => {
                  e.preventDefault();
                  alert("Simulated download: Sai Siddharth's Resume download triggered.");
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent text-[#94A3B8] hover:text-[#F8FAFC] font-semibold text-sm active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Download Resume
                <Download className="w-4 h-4" />
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 pt-8 border-t border-white/5 w-full justify-center lg:justify-start">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#94A3B8]">
                Connect:
              </span>
              
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/Saisidd05"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-surface border border-border text-[#94A3B8] hover:text-[#F8FAFC] hover:border-primary/50 transition-colors shadow-md cursor-pointer"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/sai-siddharth-nanda-gopal-b96883321"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-surface border border-border text-[#94A3B8] hover:text-[#F8FAFC] hover:border-primary/50 transition-colors shadow-md cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:nsaisiddharth05@gmail.com"
                className="p-2.5 rounded-full bg-surface border border-border text-[#94A3B8] hover:text-[#F8FAFC] hover:border-primary/50 transition-colors shadow-md cursor-pointer"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
