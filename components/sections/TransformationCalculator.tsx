"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Flame, Dumbbell, Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TransformationCalculator() {
  const customEase = [0.22, 1, 0.36, 1] as const;

  const [gender, setGender] = useState<"male" | "female">("male");
  const [goal, setGoal] = useState<"fat_loss" | "muscle_gain" | "recomposition">("fat_loss");
  const [weightKg, setWeightKg] = useState<number>(80);
  const [activity, setActivity] = useState<"sedentary" | "moderate" | "active">("moderate");

  // Calorie & Macro estimation based on inputs
  const activityMultiplier = activity === "sedentary" ? 1.3 : activity === "moderate" ? 1.55 : 1.75;
  const baseTDEE = Math.round(weightKg * 22 * activityMultiplier);

  let targetCalories = baseTDEE;
  let proteinGrams = Math.round(weightKg * 2.2); // ~1g per lb
  let fatGrams = Math.round((targetCalories * 0.25) / 9);

  if (goal === "fat_loss") {
    targetCalories = Math.round(baseTDEE * 0.8); // 20% deficit
    proteinGrams = Math.round(weightKg * 2.4); // higher protein to preserve lean tissue
    fatGrams = Math.round((targetCalories * 0.22) / 9);
  } else if (goal === "muscle_gain") {
    targetCalories = Math.round(baseTDEE * 1.12); // 12% surplus
    proteinGrams = Math.round(weightKg * 2.0);
    fatGrams = Math.round((targetCalories * 0.25) / 9);
  } else {
    // Recomposition
    targetCalories = baseTDEE;
    proteinGrams = Math.round(weightKg * 2.3);
    fatGrams = Math.round((targetCalories * 0.24) / 9);
  }

  const carbGrams = Math.max(50, Math.round((targetCalories - (proteinGrams * 4 + fatGrams * 9)) / 4));

  const goalName =
    goal === "fat_loss" ? "Rapid Fat Loss" : goal === "muscle_gain" ? "Lean Muscle Hypertrophy" : "Body Recomposition";

  const waMessage = encodeURIComponent(
    `Hello Coach Muhammad Faisal Wraich! I used your website assessment calculator.
- Goal: ${goalName}
- Gender: ${gender === "male" ? "Male" : "Female"}
- Current Weight: ${weightKg} kg
- Target Calories: ~${targetCalories} kcal
I would like to apply for your 1-on-1 coaching program.`
  );

  return (
    <section id="calculator" className="py-16 md:py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#ff3b30] mb-4">
            <Calculator className="w-4 h-4" /> Interactive Transformation Estimator
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: customEase }}
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4"
          >
            Calculate Your <span className="text-[#ff3b30]">Transformation Targets</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: customEase, delay: 0.1 }}
            className="text-zinc-400 text-lg font-light leading-relaxed"
          >
            Curious about what your body requires to shed fat or pack on muscle? Enter your basic numbers below to calculate your estimated metabolic blueprint.
          </motion.p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="max-w-5xl mx-auto bg-[#121212]/90 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Inputs Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Gender Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  1. Biological Gender
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setGender("male")}
                    className={`py-3 px-4 rounded-xl font-bold uppercase text-xs tracking-wider transition-all border ${
                      gender === "male"
                        ? "bg-[#ff3b30] text-white border-[#ff3b30]"
                        : "bg-white/5 text-zinc-400 border-white/10 hover:border-white/20"
                    }`}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender("female")}
                    className={`py-3 px-4 rounded-xl font-bold uppercase text-xs tracking-wider transition-all border ${
                      gender === "female"
                        ? "bg-[#ff3b30] text-white border-[#ff3b30]"
                        : "bg-white/5 text-zinc-400 border-white/10 hover:border-white/20"
                    }`}
                  >
                    Female
                  </button>
                </div>
              </div>

              {/* Goal Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  2. Primary Physique Goal
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { id: "fat_loss", label: "Fat Loss" },
                    { id: "muscle_gain", label: "Muscle Gain" },
                    { id: "recomposition", label: "Recomp" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setGoal(item.id as any)}
                      className={`py-3 px-2 sm:px-4 rounded-xl font-bold uppercase text-[11px] sm:text-xs tracking-wider transition-all border ${
                        goal === item.id
                          ? "bg-[#ff3b30] text-white border-[#ff3b30]"
                          : "bg-white/5 text-zinc-400 border-white/10 hover:border-white/20"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Current Weight Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    3. Current Weight
                  </label>
                  <span className="text-lg font-black text-white">
                    {weightKg} kg <span className="text-zinc-500 text-xs">({Math.round(weightKg * 2.204)} lbs)</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="45"
                  max="140"
                  value={weightKg}
                  onChange={(e) => setWeightKg(Number(e.target.value))}
                  className="w-full accent-[#ff3b30] h-2 bg-white/10 rounded-lg cursor-pointer"
                />
              </div>

              {/* Activity Level */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  4. Current Lifestyle Activity
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { id: "sedentary", label: "Desk Job (1-2x/wk)" },
                    { id: "moderate", label: "Active (3-4x/wk)" },
                    { id: "active", label: "Intense (5-6x/wk)" },
                  ].map((act) => (
                    <button
                      key={act.id}
                      type="button"
                      onClick={() => setActivity(act.id as any)}
                      className={`py-3 px-2 rounded-xl font-bold uppercase text-[10px] sm:text-xs tracking-wider transition-all border ${
                        activity === act.id
                          ? "bg-white/20 text-white border-white/40"
                          : "bg-white/5 text-zinc-400 border-white/10 hover:border-white/20"
                      }`}
                    >
                      {act.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Results Column */}
            <div className="lg:col-span-5 bg-gradient-to-br from-black/80 to-zinc-900/90 border border-white/10 p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="text-xs font-bold uppercase tracking-widest text-[#ff3b30] mb-2 flex items-center gap-2">
                <Flame className="w-4 h-4" /> Estimated Daily Protocol
              </div>

              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-1">
                {targetCalories} <span className="text-lg font-bold text-zinc-400">kcal/day</span>
              </div>
              <p className="text-zinc-400 text-xs font-light mb-6">
                Calibrated for {goalName} with zero metabolic damage.
              </p>

              {/* Macros Breakdown */}
              <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/10 mb-6 text-center">
                <div className="bg-white/5 rounded-xl p-3">
                  <div className="text-xs text-zinc-400 uppercase font-semibold">Protein</div>
                  <div className="text-xl font-black text-white">{proteinGrams}g</div>
                </div>
                <div className="bg-white/5 rounded-xl p-3">
                  <div className="text-xs text-zinc-400 uppercase font-semibold">Carbs</div>
                  <div className="text-xl font-black text-white">{carbGrams}g</div>
                </div>
                <div className="bg-white/5 rounded-xl p-3">
                  <div className="text-xs text-zinc-400 uppercase font-semibold">Fats</div>
                  <div className="text-xl font-black text-white">{fatGrams}g</div>
                </div>
              </div>

              <a
                href={`https://wa.me/1234567890?text=${waMessage}`}
                className="w-full inline-flex items-center justify-center font-bold uppercase tracking-wider text-xs sm:text-sm bg-[#ff3b30] hover:bg-[#ff3b30]/90 text-white rounded-full py-4 px-6 transition-transform hover:scale-[1.02] shadow-lg shadow-[#ff3b30]/20 text-center"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Claim Custom Plan With Faisal
              </a>
              <p className="text-[11px] text-zinc-500 text-center mt-3 font-light">
                *Estimates only. Actual coaching factors in hormonal health, insulin sensitivity, and medical history.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
