"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BreakSection() {
  const customEase = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative py-8 md:py-16 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <motion.div 
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 1.5, ease: customEase }}
          className="absolute inset-0 opacity-40 md:opacity-60"
        >
          <Image 
            src="/images/gallery1.png" 
            alt="Muhammad Faisal Wraich Training" 
            fill 
            className="object-cover object-center contrast-[1.1] saturate-[1.05] brightness-[0.9] scale-110" 
          />
        </motion.div>

        {/* Gradient edge blending to fade strictly into background color */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10 pointer-events-none" />
        <div className="absolute inset-0 z-10 pointer-events-none" style={{ boxShadow: 'inset 0 0 150px 80px #0a0a0a' }} />
      </div>

      <div className="container mx-auto px-4 z-20 relative text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: customEase }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-tight text-white drop-shadow-2xl">
            "Discipline is the <span className="text-[#ff3b30]">bridge</span> between goals and <span className="text-[#ff3b30]">accomplishment.</span>"
          </h2>
          <div className="mt-8 w-24 h-1 bg-[#ff3b30] mx-auto opacity-50" />
        </motion.div>
      </div>
    </section>
  );
}
