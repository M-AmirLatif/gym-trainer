"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, MessageCircle, Sparkles, Globe } from "lucide-react";

export function Pricing() {
  const customEase = [0.22, 1, 0.36, 1] as const;
  const [currency, setCurrency] = useState<"PKR" | "USD">("PKR");

  const plans = [
    {
      name: "Starter Protocol",
      pricePKR: "15,000 PKR",
      priceUSD: "$55 USD",
      duration: "per month",
      popular: false,
      badge: "Foundation",
      description: "Ideal for self-motivated individuals looking for a structured, evidence-based plan.",
      features: [
        "Personalized Calorie & Macro Target Plan",
        "Targeted 3–4 Day Gym Hypertrophy Program",
        "Bi-weekly Weight & Measurement Audits",
        "WhatsApp Q&A Support (24h response)",
        "Supplement Guidance & Dosage Protocols",
        "Halal & Regional Food Adaptations",
      ],
    },
    {
      name: "Elite Transformation",
      pricePKR: "25,000 PKR",
      priceUSD: "$90 USD",
      duration: "per month",
      popular: true,
      badge: "Most Popular",
      description: "Our flagship program with active video form analysis and weekly strategy calls.",
      features: [
        "Advanced Dynamic Nutrition & Macro Cycling",
        "Periodized 4–5 Day Progressive Overload Program",
        "Weekly Deep-Dive Check-ins & Program Tweaks",
        "Unlimited Lifting Form Reviews via Video",
        "Priority WhatsApp Voice & Text Support",
        "Dining Out, Travel & Fasting Protocols",
        "Cardio & Metabolic Conditioning Roadmap",
      ],
    },
    {
      name: "Executive VIP Coaching",
      pricePKR: "40,000 PKR",
      priceUSD: "$145 USD",
      duration: "per month",
      popular: false,
      badge: "Total White-Glove",
      description: "Complete hands-on guidance for busy executives, competitors, and medical cases.",
      features: [
        "Medical Condition Nutrition (PCOS, Thyroid, Diabetes)",
        "Daily Habit Tracking & WhatsApp Check-in Audits",
        "Weekly 1-on-1 Consultation Calls with Faisal",
        "Immediate Priority WhatsApp Response (< 2 hrs)",
        "Custom Injury Rehabilitation & Mobility Framework",
        "Quarterly Bloodwork & Biomarker Evaluation",
        "International Travel & Shift-Worker Schedules",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#ff3b30] mb-4">
            <Globe className="w-4 h-4" /> Transparent Global Pricing
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: customEase }}
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-4"
          >
            Invest In <span className="text-[#ff3b30]">Your Peak Self</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: customEase, delay: 0.1 }}
            className="text-zinc-400 text-lg font-light leading-relaxed mb-8"
          >
            Zero hidden fees. Month-to-month flexibility. Direct coaching from a champion athlete.
          </motion.p>

          {/* Currency Toggle Switch */}
          <div className="inline-flex items-center bg-zinc-900 border border-white/10 p-1.5 rounded-full">
            <button
              onClick={() => setCurrency("PKR")}
              className={`px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all ${
                currency === "PKR" ? "bg-[#ff3b30] text-white shadow-md" : "text-zinc-400 hover:text-white"
              }`}
            >
              🇵🇰 PKR (Domestic)
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all ${
                currency === "USD" ? "bg-[#ff3b30] text-white shadow-md" : "text-zinc-400 hover:text-white"
              }`}
            >
              🌍 USD $ (International)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: customEase, delay: i * 0.12 }}
              className={`rounded-3xl p-8 md:p-10 flex flex-col justify-between relative transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-b from-[#181818] to-[#101010] border-2 border-[#ff3b30] shadow-[0_20px_50px_rgba(255,59,48,0.15)] lg:-translate-y-2"
                  : "bg-[#121212]/80 backdrop-blur-md border border-white/10 hover:border-white/20 shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff3b30] text-white text-[11px] font-black uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#ff3b30]">
                      {plan.badge}
                    </span>
                    <h3 className="text-2xl font-bold uppercase text-white mt-1">
                      {plan.name}
                    </h3>
                  </div>
                </div>

                <p className="text-zinc-400 text-xs font-light mb-6 min-h-[32px] leading-relaxed">
                  {plan.description}
                </p>

                <div className="mb-8 pb-8 border-b border-white/10">
                  <div className="text-4xl md:text-5xl font-black text-white tracking-tight">
                    {currency === "PKR" ? plan.pricePKR : plan.priceUSD}
                  </div>
                  <span className="text-xs text-zinc-500 uppercase tracking-widest font-medium">
                    {plan.duration} • Cancel Anytime
                  </span>
                </div>

                <div className="space-y-3.5 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">What's Included:</div>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs md:text-sm text-zinc-300 font-light">
                      <Check className="w-4 h-4 text-[#ff3b30] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={`https://wa.me/1234567890?text=${encodeURIComponent(
                  `Hello Coach Faisal! I am interested in joining your ${plan.name} (${currency === "PKR" ? plan.pricePKR : plan.priceUSD}) program.`
                )}`}
                className={`w-full inline-flex items-center justify-center font-bold uppercase tracking-wider text-xs md:text-sm rounded-full py-4 px-6 transition-all shadow-md ${
                  plan.popular
                    ? "bg-[#ff3b30] hover:bg-[#ff3b30]/90 text-white hover:scale-[1.02]"
                    : "bg-white/10 hover:bg-white text-white hover:text-black"
                }`}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Select {plan.name}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Payment Methods Notice */}
        <div className="text-center mt-12 text-zinc-500 text-xs font-light">
          Accepted Payment Methods: Pakistani Bank Transfers (Raast, HBL, Meezan) • International Wire • Wise • Payoneer • Remitly • Western Union
        </div>

      </div>
    </section>
  );
}
