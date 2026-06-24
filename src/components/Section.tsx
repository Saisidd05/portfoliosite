"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
    id: string;
    className?: string;
    children: ReactNode;
}

export default function Section({ id, className = "", children }: SectionProps) {
    return (
        <section id={id} className={`py-20 md:py-32 relative ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </section>
    );
}
