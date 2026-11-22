"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Image from "next/image";

export function About() {
  const customEase = [0.22, 1, 0.36, 1] as const;

  const awards = [
    "Muhammad Faisal Wraich",
    "Gold Medalist National Pro",
    "Elite Trainer Certification",
    "Best Transformation Coach",
  ];

  return (
    <section id="about" className="pt-8 pb-8 md:pt-16 md:pb-12 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      
      {/* Desktop Background Image */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <Image 
          src="/images/about.jpg" 
          alt="Background" 
          fill 
          priority
          className="object-cover object-[85%_20%] opacity-100 contrast-[1.25] saturate-[1.12] brightness-[1.02]" 
        />
        {/* Clean edge transitions leaving the subject fully prominent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 via-48% to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: customEase }}
            className="w-full lg:w-1/2 lg:hidden"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-3xl overflow-hidden bg-[#0a0a0a] group border border-white/10 shadow-2xl">
              <Image 
                src="/images/about.jpg" 
                alt="Muhammad Faisal Wraich" 
                fill 
                className="object-cover object-[center_20%] contrast-[1.25] saturate-[1.12] brightness-[1.02] group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: customEase, delay: 0.2 }}
            className="w-full lg:w-1/2 lg:mr-auto bg-[#0a0a0a]/80 lg:bg-[#0a0a0a]/75 backdrop-blur-md p-6 sm:p-10 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
              More Than A Coach. <span className="text-[#ff3b30]">A Partner in Your Journey.</span>
            </h2>
            <div className="space-y-6 text-zinc-300 text-lg font-light">
              <p>
                Building an elite physique isn't just about moving weights—it's about the relentless pursuit of perfection, disciplined nutrition, and a bulletproof mindset. With over a decade of experience in the trenches, I know exactly what it takes to break plateaus and achieve results that turn heads.
              </p>
              <p>
                Whether your goal is to shed stubborn fat, pack on dense muscle, or navigate a medical condition safely, my personalized 1-on-1 coaching via WhatsApp ensures you have world-class guidance every single day. No cookie-cutter plans. No guesswork.
              </p>
            </div>

            <div className="mt-12 relative">
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-6">Champion Credentials</h3>
              <div className="flex flex-col gap-4">
                {awards.map((award, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 w-full">
                    <div className="w-10 h-10 rounded-full bg-[#ff3b30]/20 flex items-center justify-center text-[#ff3b30]">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-sm">{award}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
