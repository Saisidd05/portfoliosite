"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import BackgroundEffect from "@/components/BackgroundEffect";
import Hero from "@/components/Hero";
import AchievementStrip from "@/components/AchievementStrip";
import FeaturedWorkPreview from "@/components/FeaturedWorkPreview";
import About from "@/components/About";
import SkillsBento from "@/components/SkillsBento";
import Projects from "@/components/Projects";
import ProjectArchive from "@/components/ProjectArchive";
import Certifications from "@/components/Certifications";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import GithubDashboard from "@/components/GithubDashboard";
import QuoteSection from "@/components/QuoteSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import OpeningExperience from "@/components/OpeningExperience";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const entered = sessionStorage.getItem("portfolio_entered");
    if (entered === "true") {
      setHasEntered(true);
    }
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem("portfolio_entered", "true");
    setHasEntered(true);
  };

  return (
    <main className="min-h-screen bg-[#020617] relative selection:bg-primary/30 selection:text-[#020617] overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <motion.div
            key="loader"
            exit={{ 
              opacity: 0,
              scale: 1.1,
              filter: "blur(12px)",
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
            }}
            className="fixed inset-0 z-[9999]"
          >
            <OpeningExperience onEnter={handleEnter} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* 1. Global Animated Gradient & Cursor Spotlight Background */}
            <BackgroundEffect />

            {/* 2. Floating Capsule Navbar */}
            <Navbar />

            {/* 3. Hero Identity Panel & CTAs */}
            <Hero />

            {/* 4. Live Achievement metric countups */}
            <AchievementStrip />

            {/* 5. Shortcuts to Project case studies */}
            <FeaturedWorkPreview />

            {/* 6. Professional profile split view */}
            <About />

            {/* 7. Bento Grid Skill matrix */}
            <SkillsBento />

            {/* 8. Main Project Case Studies */}
            <Projects />

            {/* 9. Masonry minor project archive */}
            <ProjectArchive />

            {/* 10. Credentials showcase cards */}
            <Certifications />

            {/* 11. Work and project timelines */}
            <ExperienceTimeline />

            {/* 12. Custom mock Github board */}
            <GithubDashboard />

            {/* 13. Minimal Quote Panel */}
            <QuoteSection />

            {/* 14. Contact Form block */}
            <Contact />

            {/* 15. Back to top & signature footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

