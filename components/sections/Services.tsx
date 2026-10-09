"use client";

import { motion } from "framer-motion";
import { Flame, Dumbbell, Apple, Crosshair, Stethoscope, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Services() {
  const customEase = [0.22, 1, 0.36, 1] as const;

  const services = [
    {
      title: "Fat Loss Coaching",
      description: "Shred stubborn body fat while preserving lean muscle mass through precise macro tracking and intense training.",
      icon: <Flame className="w-8 h-8 text-[#ff3b30]" />
    },
    {
      title: "Weight & Muscle Gain",
      description: "Pack on size with scientifically backed hypertrophy programming and surplus nutrition plans.",
      icon: <Dumbbell className="w-8 h-8 text-[#ff3b30]" />
    },
    {
      title: "Custom Diet Plans",
      description: "No restrictive starvation diets. Eat what you love, structured perfectly around your unique metabolic needs.",
      icon: <Apple className="w-8 h-8 text-[#ff3b30]" />
    },
    {
      title: "1-on-1 Training Sessions",
      description: "Form correction, intense pushing, and immediate feedback during your critical lifts.",
      icon: <Crosshair className="w-8 h-8 text-[#ff3b30]" />
    },
    {
      title: "Medical Guidance",
      description: "Specialized plans tailored for diabetes, thyroid issues, or injury rehabilitation safely.",
      icon: <Stethoscope className="w-8 h-8 text-[#ff3b30]" />
    },
    {
      title: "Gym Program Design",
      description: "Structured mesocycles mapped out specifically for your gym equipment and schedule.",
      icon: <Activity className="w-8 h-8 text-[#ff3b30]" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: customEase }
    }
  };

  return (
    <section id="services" className="pt-8 pb-8 md:pt-12 md:pb-16 bg-[#0a0a0a] relative overflow-hidden">
      
      {/* Desktop Background Image */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <Image 
          src="/images/gallery2.jpg" 
          alt="Background" 
          fill 
          priority
          className="object-cover object-center opacity-30 contrast-[1.1] saturate-[1.05]" 
        />
        {/* Gradients to blend edges and make text readable */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
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
            Elite <span className="text-[#ff3b30]">Coaching Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: customEase, delay: 0.1 }}
            className="text-zinc-400 text-lg font-light"
          >
            Comprehensive programs engineered to break your limits. Every detail optimized for maximum return on effort.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
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
                src="/images/gallery2.jpg" 
                alt="Elite Training Service" 
                fill 
                className="object-cover object-[center_30%] scale-125 contrast-[1.1] saturate-[1.05] brightness-[0.95]" 
              />
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {services.map((svc, i) => (
              <motion.div 
                key={i} 
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-zinc-900/60 backdrop-blur-sm border border-white/5 p-8 rounded-3xl group hover:bg-zinc-900 hover:border-[#ff3b30]/30 transition-colors relative overflow-hidden"
              >
                {/* Subtle hover glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#ff3b30]/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                
                <div className="relative z-10">
                  <div className="mb-6 bg-black/50 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/5 group-hover:scale-110 group-hover:border-[#ff3b30]/30 transition-all duration-300">
                    {svc.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{svc.title}</h3>
                  <p className="text-zinc-400 font-light mb-6 text-sm leading-relaxed">{svc.description}</p>
                  <div className="flex items-center text-sm font-semibold text-[#ff3b30] group-hover:translate-x-2 transition-transform duration-300">
                    Learn More <span className="ml-2">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
