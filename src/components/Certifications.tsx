"use client";

import { motion, Variants } from "framer-motion";
import { Award, ShieldCheck, Calendar, MapPin } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  location?: string;
  badgeColor: string;
  details: string;
}

export default function Certifications() {
  const certifications: Certificate[] = [
    {
      title: "Introduction to IoT (Internet of Things)",
      issuer: "IIT Kharagpur (NPTEL)",
      date: "Academic Semester",
      location: "IIT Kharagpur",
      badgeColor: "border-[#00D084]/30 hover:border-[#00D084]/60",
      details: "Completed standard coursework covering microcontroller architectures, network layers, sensor integrations, and protocol configurations (MQTT, CoAP).",
    },
    {
      title: "Google Developer Student Recognition",
      issuer: "Google Developer Student Clubs",
      date: "Active Academic Year",
      location: "Google Developers Portal",
      badgeColor: "border-[#06B6D4]/30 hover:border-[#06B6D4]/60",
      details: "Recognized as a Developer Student contributor, participating in community developer programs, code bootcamps, and developer labs.",
    },
    {
      title: "Drone Technology Internship Certificate",
      issuer: "Garuda Aerospace Pvt Ltd",
      date: "June 2025 (1 Month)",
      location: "Chennai, India",
      badgeColor: "border-[#00D084]/30 hover:border-[#00D084]/60",
      details: "Gained direct exposure to hardware automation, autopilot configs, drone payload integrations, and telemetry data monitoring.",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="relative py-20 bg-[#020617] overflow-hidden">
      {/* Light glow backings */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Title */}
        <div className="relative mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#94A3B8]">
              Verification
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-[#F8FAFC]">
            Accreditation & <span className="text-gradient-cyan">Credentials</span>
          </h3>
        </div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className={`p-6 rounded-[2rem] glass border ${cert.badgeColor} flex flex-col justify-between h-full relative overflow-hidden transition-all duration-500 bg-white/[0.005]`}
            >
              {/* Inner subtle glow indicator */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              
              <div>
                {/* Badge Issuer info */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  
                  {/* Verification Status Pill */}
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold bg-[#00D084]/10 border border-[#00D084]/25 text-primary uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>

                <h4 className="text-lg font-heading font-bold text-[#F8FAFC] leading-snug">
                  {cert.title}
                </h4>
                
                <span className="text-xs text-primary font-semibold block mt-1.5 font-heading">
                  {cert.issuer}
                </span>

                <p className="text-xs text-[#94A3B8] mt-4 font-light leading-relaxed">
                  {cert.details}
                </p>
              </div>

              {/* Footer details */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-[#94A3B8]">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {cert.date}
                </span>
                
                {cert.location && (
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {cert.location}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
