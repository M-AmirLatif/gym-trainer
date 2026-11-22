"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, MessageSquare, Flame, CheckCircle, Award } from "lucide-react";

export function StandardsGuarantee() {
  const customEase = [0.22, 1, 0.36, 1] as const;

  const standards = [
    {
      icon: <UserCheck className="w-6 h-6 text-[#ff3b30]" />,
      title: "100% Direct Coach Access",
      desc: "You deal directly with champion coach Muhammad Faisal Wraich. Your plan is never handed off to an inexperienced junior trainer or an AI generator.",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-[#ff3b30]" />,
      title: "24-Hour WhatsApp Response",
      desc: "Questions about a meal substitution at a restaurant, gym machine swaps, or lifting pain? You have daily direct access with rapid responses.",
    },
    {
      icon: <Flame className="w-6 h-6 text-[#ff3b30]" />,
      title: "No Starvation or Gimmick Diets",
      desc: "We do not believe in 800-calorie crash diets or cutting out carbohydrates. Every nutrition protocol is designed to fuel high performance and stay sustainable for life.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#ff3b30]" />,
      title: "Medical & Injury Adaptive",
      desc: "Diabetes, high blood pressure, thyroid irregularities, disc bulges, or joint surgery history? Every exercise and macro is calibrated strictly with your safety in mind.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="max-w-5xl mx-auto bg-gradient-to-b from-[#141414] to-[#0d0d0d] border border-white/10 rounded-3xl p-8 md:p-14 shadow-2xl relative">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b30] flex items-center justify-center gap-2 mb-2">
              <Award className="w-4 h-4" /> Elite Coaching Standards
            </span>
            <h3 className="text-3xl md:text-4xl font-black uppercase text-white mb-3">
              The Wraich Coaching Guarantee
            </h3>
            <p className="text-zinc-400 font-light text-sm md:text-base">
              When you invest in personal coaching, you deserve uncompromised accountability, clinical precision, and absolute dedication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {standards.map((s, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-[#ff3b30]/10 flex items-center justify-center shrink-0 border border-[#ff3b30]/20">
                  {s.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase text-white mb-1.5">{s.title}</h4>
                  <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
