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
          src="/images/about.png" 
          alt="Background" 
          fill 
          className="object-cover object-[80%_20%] opacity-40 contrast-[1.1] saturate-[1.05]" 
        />
        {/* Gradients to blend edges and make text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
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
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden bg-[#0a0a0a] group">
              <Image 
                src="/images/about.png" 
                alt="Muhammad Faisal Wraich" 
                fill 
                className="object-cover object-[90%_20%] scale-[1.3] contrast-[1.1] saturate-[1.05] brightness-[0.95] group-hover:scale-[1.35] transition-transform duration-700" 
              />
              {/* Aggressive radial overlay to fade edges */}
              <div className="absolute inset-0 z-20 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, #0a0a0a 85%)' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-80 z-20 pointer-events-none" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: customEase, delay: 0.2 }}
            className="w-full lg:w-1/2 lg:mr-auto"
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
