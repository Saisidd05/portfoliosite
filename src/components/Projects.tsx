"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles, Gem, HelpCircle, CheckCircle2, ChevronRight, BookOpen, Layers, Settings, Cpu } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-36 bg-[#020617] overflow-hidden">
      {/* Background radial soft glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/5 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-secondary/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main Section Header */}
        <div className="relative mb-20 md:mb-32 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#94A3B8]">
              Flagship Products
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-[#F8FAFC]">
            Featured <span className="text-gradient-cyan">Engineering Showcases</span>
          </h2>
          <p className="text-[#94A3B8] text-sm md:text-base max-w-xl mx-auto mt-4 font-light leading-relaxed">
            Deep dives into architectural design decisions, engineering workflows, and system challenges.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* CASE STUDY 1: Mistry Gems Prototype */}
        {/* ========================================================================= */}
        <div id="mistry-gems" className="relative mb-32 md:mb-48 border-t border-white/5 pt-16 md:pt-24">
          
          {/* Project Hero Banner / Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-45px" }}
            transition={{ duration: 0.8 }}
            className="relative w-full rounded-[2.5rem] p-2 glass bg-white/[0.01] border border-white/10 overflow-hidden shadow-2xl mb-16 group"
          >
            <div className="flex items-center gap-1.5 px-6 py-3 border-b border-white/5 bg-[#020617]/70 rounded-t-[2.2rem]">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <div className="text-xs text-[#94A3B8] ml-4 font-mono select-none">mistrygems.sai.build</div>
              <span className="ml-auto text-[10px] px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono">
                Project Hero Banner
              </span>
            </div>
            
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-b-[2.2rem] overflow-hidden bg-[#070b19]">
              <img
                src="/images/mistry_gems.png"
                alt="Mistry Gems Application Mockup Screenshot"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Quick Specs & Meta */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-[2rem] glass bg-white/[0.005] border border-white/5 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC] flex items-center gap-2 mb-2">
                  <Settings className="w-4 h-4 text-primary" /> Technical Blueprint
                </h4>
                
                <div className="space-y-3 font-light text-xs text-[#94A3B8]">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Role</span>
                    <strong className="text-[#F8FAFC]">Full Stack Developer</strong>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Target Users</span>
                    <strong className="text-[#F8FAFC]">Gemstone Wholesalers</strong>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Tech Stack</span>
                    <strong className="text-[#F8FAFC]">Next.js, TypeScript, Tailwind</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Database</span>
                    <strong className="text-[#F8FAFC]">PostgreSQL Schema</strong>
                  </div>
                </div>
              </div>

              {/* Research Insights Card */}
              <div className="p-6 rounded-[2rem] glass bg-white/[0.005] border border-white/5 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC] flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-secondary" /> User Research Insight
                </h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed font-light">
                  Direct audits of local merchant ledgers revealed that catalog lookup took up to 3 minutes per stone. Introducing dynamic tag mapping and pre-indexed tag columns reduced lookup times to sub-seconds.
                </p>
              </div>

              {/* Project Action Links */}
              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/Saisidd05/CodeAlpha_portfoliosite"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 text-[#F8FAFC] hover:text-primary font-semibold text-xs active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Github className="w-4 h-4" /> View GitHub Repository
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Mistry Gems Prototype Live Demo is hosted locally in development.");
                  }}
                  className="w-full py-3 rounded-full bg-primary text-[#020617] font-semibold text-xs hover:shadow-[0_0_20px_rgba(0,208,132,0.3)] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  Launch Live Demo <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: In-Depth Case Study Narrative */}
            <div className="lg:col-span-8 space-y-8 text-[#94A3B8] font-light leading-relaxed text-sm md:text-base">
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Gem className="w-6 h-6 text-primary" />
                  <h3 className="text-3xl font-heading font-bold text-[#F8FAFC]">
                    Mistry Gems Showroom Catalog
                  </h3>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary block">
                  Product Overview
                </span>
                <p>
                  Mistry Gems is a custom digital showroom platform built for premium gemstone merchants to catalog unique cut stones, perform multi-metric state sorting, and instantly synthesize PDF invoices for international client shipments.
                </p>
              </div>

              {/* Problem vs Solution */}
              <div className="grid md:grid-cols-2 gap-6 pt-2">
                <div className="p-5 rounded-2xl bg-red-500/[0.01] border border-red-500/10 space-y-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-red-400 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4" /> Problem Statement
                  </h5>
                  <p className="text-xs leading-relaxed">
                    Gemstone wholesale pipelines rely on manual paper books. Search latency is high, live inventories cannot be easily shared, and billing outputs suffer from calculation lags and invoice format shifts.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-primary/[0.01] border border-primary/10 space-y-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> The Solution
                  </h5>
                  <p className="text-xs leading-relaxed">
                    A cloud catalog database built with relational structures. Features dynamic tag filtering (carat, cut, color, clarity) and a modular invoice compile module with instant preview capabilities.
                  </p>
                </div>
              </div>

              {/* Design Process & User Flow */}
              <div className="space-y-4">
                <h4 className="text-sm font-heading font-semibold text-[#F8FAFC]">Design Process & System Architecture</h4>
                <div className="grid md:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
                    <span className="text-primary font-bold block mb-1">01 / Wireframe & Specs</span>
                    Mapped schema parameters representing gemstone metrics. Designed responsive layouts in Figma.
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
                    <span className="text-primary font-bold block mb-1">02 / Component Design</span>
                    Configured reusable card UI shells and search inputs using Tailwind utility systems.
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
                    <span className="text-primary font-bold block mb-1">03 / State Optimization</span>
                    Built clientside filtration matrices. Used debounced hooks to eliminate search lag.
                  </div>
                </div>
              </div>

              {/* User Flow Description */}
              <div className="p-5 rounded-2xl glass border border-white/5 space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary" /> Application User Flow
                </h5>
                <ol className="list-decimal list-inside space-y-1.5 text-xs text-[#94A3B8]">
                  <li>Merchant authenticates and uploads gemstone catalog details (image, carat weight, color class).</li>
                  <li>System tags items and assigns relative database IDs.</li>
                  <li>Customer uses search filters to immediately find matching stones.</li>
                  <li>Merchant checks box items and clicks &ldquo;Generate Invoice&rdquo; to compile a professional PDF quote.</li>
                </ol>
              </div>

              {/* Challenges & Outcomes */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC] flex items-center gap-1.5">
                    ⚠️ Key Challenge
                  </h5>
                  <p className="text-xs leading-relaxed">
                    Rendering large gemstone arrays with high-definition thumbnails caused substantial loading bottlenecks and layout shifting.
                  </p>
                  <p className="text-xs text-secondary font-semibold">
                    Solution: Implemented lazy layout triggers and pre-loaded layout boxes (shimmers) to keep layout shift at 0.
                  </p>
                </div>

                <div className="space-y-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC] flex items-center gap-1.5">
                    🏆 Project Outcome
                  </h5>
                  <p className="text-xs leading-relaxed">
                    Delivered a high-performance catalog. Eliminated manual invoice writing times entirely, and cut customer catalog browse time by over 80%.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CASE STUDY 2: AI Resume Builder */}
        {/* ========================================================================= */}
        <div id="ai-resume" className="relative border-t border-white/5 pt-16 md:pt-24">
          
          {/* Project Hero Banner / Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-45px" }}
            transition={{ duration: 0.8 }}
            className="relative w-full rounded-[2.5rem] p-2 glass bg-white/[0.01] border border-white/10 overflow-hidden shadow-2xl mb-16 group"
          >
            <div className="flex items-center gap-1.5 px-6 py-3 border-b border-white/5 bg-[#020617]/70 rounded-t-[2.2rem]">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <div className="text-xs text-[#94A3B8] ml-4 font-mono select-none">airesume.vercel.app</div>
              <span className="ml-auto text-[10px] px-2.5 py-0.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-mono">
                AI SaaS Application
              </span>
            </div>
            
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-b-[2.2rem] overflow-hidden bg-[#070b19]">
              <img
                src="/images/ai_resume.png"
                alt="AI Resume Builder Application Mockup Screenshot"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: AI Pipeline & Details */}
            <div className="lg:col-span-5 space-y-6 lg:order-last">
              <div className="p-6 rounded-[2rem] glass bg-gradient-to-b from-[#020617] to-[#070b19] border border-secondary/20 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/5 rounded-bl-full pointer-events-none" />
                
                <h4 className="text-xs font-bold uppercase tracking-widest text-secondary flex items-center gap-2 mb-6">
                  <Sparkles className="w-4 h-4 text-secondary animate-pulse" /> AI Processing Pipeline
                </h4>

                <div className="space-y-4 font-mono text-[10px]">
                  {/* Step 1 */}
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                    <span className="text-[#F8FAFC] font-semibold">1. Input Parsing</span>
                    <span className="text-[#94A3B8]">TEXT/PDF Analyzer</span>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center -my-2 select-none">
                    <div className="h-4 w-px border-l border-dashed border-secondary/40" />
                  </div>

                  {/* Step 2 */}
                  <div className="p-3 rounded-xl bg-[#020617] border border-white/5 flex items-center justify-between">
                    <span className="text-[#F8FAFC] font-semibold">2. ATS Keyword Extraction</span>
                    <span className="text-primary font-bold">NLP Scoring Engine</span>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center -my-2 select-none">
                    <div className="h-4 w-px border-l border-dashed border-primary/40" />
                  </div>

                  {/* Step 3 */}
                  <div className="p-3 rounded-xl bg-[#02050f] border border-white/5 flex items-center justify-between">
                    <span className="text-[#F8FAFC] font-semibold">3. Bullet Tailoring</span>
                    <span className="text-[#94A3B8]">GPT-4 API Endpoint</span>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center -my-2 select-none">
                    <div className="h-4 w-px border-l border-dashed border-secondary/40" />
                  </div>

                  {/* Step 4 */}
                  <div className="p-3 rounded-xl bg-[#070b19] border border-secondary/30 flex items-center justify-between">
                    <span className="text-secondary font-bold">4. LaTeX Compiling</span>
                    <span className="text-[8px] px-1.5 py-0.5 rounded bg-secondary/15 text-secondary">Export Ready</span>
                  </div>
                </div>
              </div>

              {/* Project Stats Block */}
              <div className="p-6 rounded-[2rem] glass bg-white/[0.005] border border-white/5 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC] flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-primary" /> Backend System Architecture
                </h4>
                <div className="grid grid-cols-2 gap-3 text-[11px] font-light text-[#94A3B8]">
                  <div className="flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-primary" /> 95% ATS Compatibility
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-primary" /> OpenAI API Core
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-primary" /> LaTeX Compiler
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-primary" /> Supabase Storage
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Case Study Narrative */}
            <div className="lg:col-span-7 space-y-6 text-[#94A3B8] font-light leading-relaxed text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-secondary" />
                <h3 className="text-3xl font-heading font-bold text-[#F8FAFC]">
                  AI Resume Parser & Optimizer
                </h3>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-secondary block">
                Product Overview
              </span>
              <p>
                An interactive AI-driven SaaS application designed to analyze candidate resumes, cross-reference experience statements with target job descriptions, extract ATS-friendly keywords, and dynamically rewrite bullet points to optimize hiring performance.
              </p>

              {/* User Journey */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">Candidate User Journey</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.005] border border-white/5">
                    <span className="text-secondary font-mono font-bold">STEP 1.</span>
                    <p>Candidate uploads a PDF resume. The system parses it into structured JSON objects representing education, skills, and work history.</p>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.005] border border-white/5">
                    <span className="text-secondary font-mono font-bold">STEP 2.</span>
                    <p>Candidate pastes target Job Description. The NLP parser runs semantic similarity match algorithms to calculate keyword gaps.</p>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.005] border border-white/5">
                    <span className="text-secondary font-mono font-bold">STEP 3.</span>
                    <p>OpenAI GPT-4 models process experience sections to inject necessary key terms and generate high-impact, tailored action-verb bullet points.</p>
                  </div>
                </div>
              </div>

              {/* Tech Stack & Benefits */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC] mb-3">Key Benefits & Outcomes</h4>
                <div className="grid md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
                    <strong className="text-[#F8FAFC] block mb-1">ATS Proofing</strong>
                    Automatically maps resume headings and structural layout grids to conform with common ATS parsing systems.
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
                    <strong className="text-[#F8FAFC] block mb-1">LaTeX Layouts</strong>
                    Exports clean, beautifully compiles LaTeX templates that avoid the layout breakages of standard Word or HTML documents.
                  </div>
                </div>
              </div>

              {/* Future Scope */}
              <div className="p-5 rounded-2xl glass border border-white/5 space-y-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC] flex items-center gap-1.5">
                  🚀 Product Roadmap & Future Scope
                </h5>
                <p className="text-xs leading-relaxed">
                  Future updates will introduce custom fine-tuned LLM agents optimized specifically for software developer resume analysis, alongside automated LinkedIn profile synchronization plugins.
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2.5 pt-4">
                {["Next.js", "OpenAI API", "PostgreSQL", "Supabase", "LaTeX Compiler", "Tailwind CSS"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#020617] border border-white/5 text-[#F8FAFC]">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://github.com/Saisidd05/CodeAlpha_portfoliosite"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-secondary/50 text-[#F8FAFC] hover:text-secondary font-semibold text-xs active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Github className="w-4 h-4" /> Code Repository
                </a>
                <a
                  href="https://resume-kohl-chi-77.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 rounded-full bg-secondary text-[#020617] font-semibold text-xs hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-[0.98] transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  Launch Live Demo <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
