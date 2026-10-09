"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export function Testimonials() {
  const customEase = [0.22, 1, 0.36, 1] as const;

  const testimonials = [
    {
      name: "Ali Raza",
      result: "Lost 15kg in 12 weeks",
      quote: "Faisal completely changed my perspective on dieting. I never felt starved, and the results were beyond what I thought possible. His daily check-ins kept me accountable.",
    },
    {
      name: "Hassan Tariq",
      result: "Gained 8kg Lean Muscle",
      quote: "The programming is intense but perfectly tailored to my weak points. Mr. Pakistan doesn't just give you a template; he gives you a roadmap to greatness.",
    },
    {
      name: "Usman Khan",
      result: "Rehabilitated Shoulder Injury",
      quote: "I thought I wouldn't be able to lift heavy again. Faisal's medical knowledge and targeted programming helped me rebuild my strength safely.",
    }
  ];

  return (
    <section id="transformations" className="pt-8 pb-16 md:pt-12 md:pb-24 bg-[#0a0a0a] relative overflow-hidden">
      
      {/* Desktop Background Image */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <Image 
          src="/images/gallery3.jpg" 
          alt="Background" 
          fill 
          priority
          className="object-cover object-[center_20%] opacity-30 contrast-[1.1] saturate-[1.05]" 
        />
        {/* Gradients to blend edges and make text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: customEase }}
            className="text-4xl md:text-5xl font-black uppercase mb-4"
          >
            Client <span className="text-[#ff3b30]">Results</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: customEase, delay: 0.1 }}
            className="text-zinc-400 text-lg font-light"
          >
            Real people. Real discipline. Unbelievable transformations.
          </motion.p>
        </div>

        <div className="relative">
          <div className="flex flex-col lg:flex-row pb-8 gap-12 items-center px-0">
            
            {/* Mobile Image */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: customEase }}
              className="w-full lg:hidden mb-2"
            >
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/5 shadow-2xl">
                <Image 
                  src="/images/gallery3.jpg" 
                  alt="Client Results" 
                  fill 
                  className="object-cover object-[center_30%] scale-125 contrast-[1.1] saturate-[1.05] brightness-[0.95]" 
                />
              </div>
            </motion.div>

            <div className="w-full lg:w-2/3 mx-auto flex flex-col gap-6">
              {testimonials.map((test, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: customEase, delay: i * 0.15 }}
                  className="w-full bg-zinc-900/60 backdrop-blur-sm border border-white/5 p-8 rounded-3xl relative hover:bg-zinc-900 transition-colors"
                >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
                
                <div className="flex items-center gap-4 mb-6">
                  {/* Photo placeholder matching photography guidelines */}
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-zinc-800 relative border-2 border-white/10 shrink-0">
                    <Image 
                      src="/images/about.jpg" 
                      alt={test.name} 
                      fill 
                      className="object-cover object-top contrast-[1.1] saturate-[1.05] brightness-[0.95]" 
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{test.name}</h4>
                    <span className="text-xs font-black uppercase tracking-wider text-[#ff3b30]">{test.result}</span>
                  </div>
                </div>

                <p className="text-zinc-300 font-light leading-relaxed italic relative z-10">
                  "{test.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        </div>

      </div>
    </section>
  );
}
