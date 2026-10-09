"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Stats } from "./Stats";

import Image from "next/image";

export function Hero() {
  const customEase = [0.22, 1, 0.36, 1] as const;

  const headline = "Muhammad Faisal Wraich";
  const words = headline.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: customEase },
    },
  };

  const fadeSlideVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: customEase, delay: 0.6 },
    },
  };

  return (
    <section className="relative flex flex-col justify-center pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: customEase }}
          className="absolute inset-0 opacity-70"
        >
          <Image 
            src="/images/hero.png" 
            alt="Muhammad Faisal Wraich" 
            fill 
            className="object-cover object-[center_10%] contrast-[1.1] saturate-[1.05] brightness-[0.95]" 
            priority 
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
        <div className="absolute inset-0 z-20 pointer-events-none" style={{ boxShadow: 'inset 0 0 120px 60px #0a0a0a' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-20 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-3xl">
          <motion.h2 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6 flex flex-wrap gap-x-3 md:gap-x-4"
          >
            {words.map((word, i) => (
              <motion.span key={i} variants={wordVariants} className={word === "Wraich" ? "text-[#ff3b30]" : ""}>
                {word}
              </motion.span>
            ))}
          </motion.h2>
          
          <motion.p 
            variants={fadeSlideVariants}
            initial="hidden"
            animate="visible"
            className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-xl font-light"
          >
            Train with Muhammad Faisal Wraich. Custom nutrition, training, and 1-on-1 coaching via WhatsApp.
          </motion.p>
          
          <motion.div 
            variants={fadeSlideVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 mb-8 relative z-30"
          >
            <a href="https://wa.me/1234567890" className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#ff3b30] hover:bg-[#ff3b30]/90 text-white rounded-full text-lg h-14 px-8 shadow-sm">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Your Transformation
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-white/40 bg-transparent hover:bg-white hover:text-black text-white rounded-full text-lg h-14 px-8 shadow-sm">
              View Plans
            </a>
          </motion.div>

          <motion.div
            variants={fadeSlideVariants}
            initial="hidden"
            animate="visible"
          >
            <Stats />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
