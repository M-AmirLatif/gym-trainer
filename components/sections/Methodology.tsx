"use client";

import { motion } from "framer-motion";
import { Dumbbell, Apple, Activity, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

export function Methodology() {
  const customEase = [0.22, 1, 0.36, 1] as const;

  const pillars = [
    {
      step: "01",
      title: "Scientific Progressive Overload",
      subtitle: "Mechanical Tension & Autoregulation",
      icon: <Dumbbell className="w-8 h-8 text-[#ff3b30]" />,
      description:
        "Random workouts yield random results. We engineer structured mesocycles tracking RPE (Rate of Perceived Exertion) and RIR (Reps in Reserve) so you consistently build dense, functional muscle without plateaus or systemic burn-out.",
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
      icon: <Apple className="w-8 h-8 text-[#ff3b30]" />,
      description:
        "No starvation, no cutting out food groups, and no misery. We calculate your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE), designing personalized meal plans with real, appetizing food that seamlessly fit your lifestyle and family dinners.",
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
      icon: <ShieldCheck className="w-8 h-8 text-[#ff3b30]" />,
      description:
        "Longevity is the true hallmark of an elite physique. With deep expertise in musculoskeletal alignment, we adapt lifting paths to your individual femur and torso lengths, protecting your spine, knees, and rotator cuffs for decades of pain-free performance.",
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
      icon: <Activity className="w-8 h-8 text-[#ff3b30]" />,
      description:
        "Muscle grows outside the gym during deep rest. We fine-tune circadian rhythm habits, hydration, electrolyte replenishment, and science-backed supplementation to lower stress biomarkers and accelerate your body's cellular recovery.",
      highlights: [
        "Rest day nutrition adjustments",
        "Evidence-based supplement stack recommendations",
        "Sleep quality & nervous system restoration audit",
      ],
    },
  ];

  return (
    <section id="methodology" className="py-16 md:py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#ff3b30]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#ff3b30]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#ff3b30] mb-4">
            <Sparkles className="w-4 h-4" /> Evidence-Based Blueprint
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
            className="text-zinc-400 text-lg font-light leading-relaxed"
          >
            How we take you from frustrated plateaus to a world-class, sculpted physique. Built on exercise physiology, metabolic science, and ten years of competitive bodybuilding triumph.
          </motion.p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: customEase, delay: i * 0.12 }}
              className="bg-[#121212]/80 backdrop-blur-md border border-white/10 hover:border-[#ff3b30]/40 p-8 md:p-10 rounded-3xl relative overflow-hidden group transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
            >
              {/* Pillar Number Watermark */}
              <span className="absolute top-6 right-8 text-6xl md:text-7xl font-black text-white/5 select-none pointer-events-none group-hover:text-[#ff3b30]/10 transition-colors">
                {pillar.step}
              </span>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#ff3b30]/30 transition-all duration-300">
                  {pillar.icon}
                </div>

                <div className="text-xs font-bold uppercase tracking-widest text-[#ff3b30] mb-2">
                  {pillar.subtitle}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4 text-white">
                  {pillar.title}
                </h3>

                <p className="text-zinc-300 font-light leading-relaxed mb-6 text-sm md:text-base">
                  {pillar.description}
                </p>

                <div className="space-y-2 border-t border-white/10 pt-6">
                  {pillar.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs md:text-sm text-zinc-400 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ff3b30] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
