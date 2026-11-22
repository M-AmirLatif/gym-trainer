"use client";

import { motion } from "framer-motion";
import { Dumbbell, Apple, Activity, ShieldCheck, Sparkles } from "lucide-react";

export function Methodology() {
  const customEase = [0.22, 1, 0.36, 1] as const;

  const pillars = [
    {
      step: "01",
      title: "Scientific Progressive Overload",
      subtitle: "Mechanical Tension & Autoregulation",
      icon: <Dumbbell className="w-7 h-7 text-[#ff3b30]" />,
      description:
        "Random workouts yield random results. We engineer structured mesocycles tracking RPE and RIR so you consistently build dense, functional muscle without plateaus or systemic burn-out.",
      highlights: [
        "Periodized volume & intensity curves",
        "Targeted weak-point isolation & symmetry",
        "Video-guided exercise execution audits",
      ],
    },
    {
      step: "02",
      title: "Metabolic Nutrition Architecture",
      subtitle: "Flexible Macronutrient Calibration",
      icon: <Apple className="w-7 h-7 text-[#ff3b30]" />,
      description:
        "No starvation, no cutting out food groups, and no misery. We calculate your BMR and TDEE, designing personalized meal plans with real, appetizing food that seamlessly fit your lifestyle and family dinners.",
      highlights: [
        "Dynamic refeeds & diet breaks to preserve thyroid health",
        "Exact protein, carb, and healthy fat distribution",
        "Global & Halal friendly grocery lists (UK, USA, GCC, Pakistan)",
      ],
    },
    {
      step: "03",
      title: "Biomechanics & Joint Longevity",
      subtitle: "Injury Prevention & Rehabilitation",
      icon: <ShieldCheck className="w-7 h-7 text-[#ff3b30]" />,
      description:
        "Longevity is the true hallmark of an elite physique. With deep expertise in musculoskeletal alignment, we adapt lifting paths to your individual bone lengths, protecting your spine, knees, and rotator cuffs.",
      highlights: [
        "Safe protocols for disc bulges & joint impingements",
        "Mobility & active warm-up progressions",
        "Strict posture & scapular control correction",
      ],
    },
    {
      step: "04",
      title: "Hormonal & Recovery Optimization",
      subtitle: "Sleep Architecture & Cortisol Control",
      icon: <Activity className="w-7 h-7 text-[#ff3b30]" />,
      description:
        "Muscle grows outside the gym during deep rest. We fine-tune circadian rhythm habits, hydration, electrolyte replenishment, and science-backed supplementation to lower stress biomarkers.",
      highlights: [
        "Rest day nutrition adjustments",
        "Evidence-based supplement stack recommendations",
        "Sleep quality & nervous system restoration audit",
      ],
    },
  ];

  return (
    <section id="methodology" className="py-16 md:py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-[#ff3b30] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Evidence-Based Blueprint
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: customEase }}
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4"
          >
            The <span className="text-[#ff3b30]">Wraich Protocol</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: customEase, delay: 0.1 }}
            className="text-zinc-400 text-base md:text-lg font-light leading-relaxed"
          >
            How we take you from frustrated plateaus to a world-class, sculpted physique. Built on exercise physiology, metabolic science, and ten years of competitive bodybuilding triumph.
          </motion.p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: customEase, delay: i * 0.1 }}
              className="bg-[#121212]/90 backdrop-blur-md border border-white/10 hover:border-[#ff3b30]/40 p-8 md:p-10 rounded-3xl relative overflow-hidden group transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between"
            >
              {/* Pillar Number Watermark in clean modern font */}
              <span className="absolute top-6 right-8 text-5xl md:text-6xl font-black text-white/10 select-none pointer-events-none group-hover:text-[#ff3b30]/20 transition-colors font-mono tracking-tighter">
                {pillar.step}
              </span>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:border-[#ff3b30]/40 transition-all duration-300">
                  {pillar.icon}
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-[#ff3b30] mb-2">
                  {pillar.subtitle}
                </div>

                <h3 className="text-xl md:text-2xl font-bold uppercase mb-4 text-white tracking-tight">
                  {pillar.title}
                </h3>

                <p className="text-zinc-300 font-light leading-relaxed mb-6 text-sm">
                  {pillar.description}
                </p>
              </div>

              <div className="space-y-2 border-t border-white/10 pt-5 relative z-10">
                {pillar.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs md:text-sm text-zinc-400 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff3b30] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
