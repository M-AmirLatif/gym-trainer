"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BreakSection() {
  const customEase = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative py-12 md:py-20 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <motion.div 
          initial={{ y: -30 }}
          whileInView={{ y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 1.5, ease: customEase }}
          className="absolute inset-0 opacity-80 md:opacity-85"
        >
          <Image 
            src="/images/gallery1.jpg" 
            alt="Muhammad Faisal Wraich Training" 
            fill 
            priority
            className="object-cover object-center contrast-[1.15] saturate-[1.05] brightness-[1.0] scale-105" 
          />
        </motion.div>

        {/* Gradient edge blending to fade into background color */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10 pointer-events-none" />
        <div className="absolute inset-0 z-10 pointer-events-none" style={{ boxShadow: 'inset 0 0 100px 40px #0a0a0a' }} />
      </div>

      <div className="container mx-auto px-4 z-20 relative text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: customEase }}
          className="max-w-4xl mx-auto bg-[#0a0a0a]/75 backdrop-blur-md p-8 md:p-14 rounded-3xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-tight text-white drop-shadow-2xl">
            "Discipline is the <span className="text-[#ff3b30]">bridge</span> between goals and <span className="text-[#ff3b30]">accomplishment.</span>"
          </h2>
          <div className="mt-8 w-24 h-1 bg-[#ff3b30] mx-auto opacity-70" />
        </motion.div>
      </div>
    </section>
  );
}
