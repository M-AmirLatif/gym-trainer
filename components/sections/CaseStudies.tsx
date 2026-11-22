"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Target, CheckCircle2, Award, Sparkles } from "lucide-react";

export function CaseStudies() {
  const customEase = [0.22, 1, 0.36, 1] as const;

  const cases = [
    {
      title: "Executive Fat Loss & Metabolic Reversal",
      client: "Farhan M. (Senior Tech Consultant, Dubai UAE)",
      timeline: "16 Weeks",
      startingStats: "94 kg (31% Body Fat)",
      endingStats: "76 kg (14% Body Fat)",
      totalLoss: "-18 kg Fat Lost",
      strategy: [
        "Reversed high resting blood sugar through nutrient partitioning",
        "High-protein flexible nutrition allowing corporate travel dining",
        "4-day upper/lower hypertrophy schedule with minimal cardio fatigue",
      ],
      quote:
        "Traveling 3 weeks a month across the Gulf made diets impossible until Faisal gave me a protocol that worked inside hotel rooms and business dinners. My doctor was stunned by my bloodwork.",
    },
    {
      title: "Hardgainer Hypertrophy & Strength Architecture",
      client: "Zain A. (Chartered Accountant, London UK)",
      timeline: "20 Weeks",
      startingStats: "62 kg (Skinny Fat)",
      endingStats: "73 kg (Dense Muscle)",
      totalLoss: "+11 kg Muscle Gained",
      strategy: [
        "Calorie surplus calibrated at 350 kcal to prevent visceral fat spillover",
        "Targeted chest and shoulder delt specialization mesocycle",
        "Asynchronous video form audits on deadlifts and overhead press",
      ],
      quote:
        "I spent 4 years spinning my wheels in commercial gyms with zero size. In 20 weeks with Faisal, my bench went from 60kg to 110kg and my back doubled in width.",
    },
    {
      title: "Post-Injury Rehabilitation & Total Recomp",
      client: "Hamza S. (Civil Engineer, Lahore PK)",
      timeline: "14 Weeks",
      startingStats: "88 kg (Chronic Lower Back Pain)",
      endingStats: "79 kg (Abs Visible & Pain-Free)",
      totalLoss: "Full Mobility Rebuilt",
      strategy: [
        "Replaced compressive spinal loads with belt squats & chest-supported rows",
        "Posterior chain hamstring/glute activation and core bracing mastery",
        "Slow reverse-diet into maintenance while shredding 9 kg of stubborn abdominal fat",
      ],
      quote:
        "Two orthopedic doctors told me never to lift heavy again. Faisal's deep medical understanding healed my back and got me into the best shape of my life at age 38.",
    },
  ];

  return (
    <section id="case-studies" className="py-16 md:py-24 bg-[#0d0d0d] relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#ff3b30] mb-4">
            <Award className="w-4 h-4" /> Proven Client Metrics
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: customEase }}
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4"
          >
            Real <span className="text-[#ff3b30]">Case Studies</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: customEase, delay: 0.1 }}
            className="text-zinc-400 text-lg font-light leading-relaxed"
          >
            We don’t just claim results—we engineer them with clinical precision. Here is how our customized programming solved real challenges for real clients.
          </motion.p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cases.map((cs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: customEase, delay: i * 0.15 }}
              className="bg-[#121212]/85 backdrop-blur-md border border-white/10 hover:border-[#ff3b30]/30 rounded-3xl p-8 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.6)] transition-all"
            >
              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ff3b30] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {cs.timeline}
                  </span>
                  <span className="text-xs font-extrabold uppercase bg-white/10 px-3 py-1 rounded-full text-white">
                    {cs.totalLoss}
                  </span>
                </div>

                <h3 className="text-2xl font-bold uppercase text-white mb-2 leading-snug">
                  {cs.title}
                </h3>
                <div className="text-xs text-zinc-400 font-medium mb-6">
                  {cs.client}
                </div>

                {/* Metrics Box */}
                <div className="bg-black/50 border border-white/5 rounded-2xl p-4 mb-6 grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">Starting</div>
                    <div className="text-sm font-bold text-zinc-300 mt-1">{cs.startingStats}</div>
                  </div>
                  <div className="border-l border-white/10">
                    <div className="text-[11px] uppercase tracking-wider text-[#ff3b30] font-semibold">Result</div>
                    <div className="text-sm font-black text-white mt-1">{cs.endingStats}</div>
                  </div>
                </div>

                {/* Strategy List */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">Key Protocols Used:</div>
                  {cs.strategy.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-light">
                      <CheckCircle2 className="w-4 h-4 text-[#ff3b30] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Quote */}
              <div className="border-t border-white/10 pt-4 mt-auto">
                <p className="text-xs text-zinc-400 italic font-light leading-relaxed">
                  "{cs.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
