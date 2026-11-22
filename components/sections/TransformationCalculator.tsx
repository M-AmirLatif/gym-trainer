"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Flame, MessageCircle } from "lucide-react";

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
  let proteinGrams = Math.round(weightKg * 2.2);
  let fatGrams = Math.round((targetCalories * 0.25) / 9);

  if (goal === "fat_loss") {
    targetCalories = Math.round(baseTDEE * 0.8);
    proteinGrams = Math.round(weightKg * 2.4);
    fatGrams = Math.round((targetCalories * 0.22) / 9);
  } else if (goal === "muscle_gain") {
    targetCalories = Math.round(baseTDEE * 1.12);
    proteinGrams = Math.round(weightKg * 2.0);
    fatGrams = Math.round((targetCalories * 0.25) / 9);
  } else {
    targetCalories = baseTDEE;
    proteinGrams = Math.round(weightKg * 2.3);
    fatGrams = Math.round((targetCalories * 0.24) / 9);
  }

  const carbGrams = Math.max(50, Math.round((targetCalories - (proteinGrams * 4 + fatGrams * 9)) / 4));

  const goalName =
    goal === "fat_loss" ? "Rapid Fat Loss" : goal === "muscle_gain" ? "Muscle Hypertrophy" : "Body Recomposition";

  const waMessage = encodeURIComponent(
    `Hello Coach Faisal! I calculated my transformation targets:
- Goal: ${goalName}
- Gender: ${gender === "male" ? "Male" : "Female"}
- Current Weight: ${weightKg} kg
- Estimated Target: ~${targetCalories} kcal/day
I would like to apply for your 1-on-1 coaching program.`
  );

  return (
    <section id="calculator" className="py-16 md:py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-[#ff3b30] mb-4">
            <Calculator className="w-3.5 h-3.5" /> Interactive Target Estimator
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
            className="text-zinc-400 text-base md:text-lg font-light leading-relaxed"
          >
            Curious about what your body requires to shed fat or pack on muscle? Enter your basic numbers below to calculate your estimated metabolic blueprint.
          </motion.p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="max-w-5xl mx-auto bg-[#121212]/95 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Inputs Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
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
                        ? "bg-[#ff3b30] text-white border-[#ff3b30] shadow-md shadow-[#ff3b30]/20"
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
                        ? "bg-[#ff3b30] text-white border-[#ff3b30] shadow-md shadow-[#ff3b30]/20"
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
                          ? "bg-[#ff3b30] text-white border-[#ff3b30] shadow-md shadow-[#ff3b30]/20"
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
                    3. Current Body Weight
                  </label>
                  <span className="text-base sm:text-lg font-black text-white">
                    {weightKg} kg <span className="text-zinc-500 text-xs font-normal">({Math.round(weightKg * 2.204)} lbs)</span>
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
                    { id: "sedentary", label: "Sedentary" },
                    { id: "moderate", label: "Moderate (3-4d)" },
                    { id: "active", label: "Active (5-6d)" },
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
            <div className="lg:col-span-5 bg-gradient-to-br from-black/90 to-zinc-950 border border-white/10 p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-2xl">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#ff3b30] mb-2 flex items-center gap-2">
                  <Flame className="w-4 h-4" /> Daily Protocol Target
                </div>

                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-1">
                  {targetCalories} <span className="text-lg font-bold text-zinc-400">kcal/day</span>
                </div>
                <p className="text-zinc-400 text-xs font-light mb-6">
                  Calibrated for {goalName} without metabolic slowdown.
                </p>

                {/* Macros Breakdown */}
                <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/10 mb-6 text-center">
                  <div className="bg-white/5 rounded-2xl p-3 border border-white/5">
                    <div className="text-[11px] text-zinc-400 uppercase font-semibold">Protein</div>
                    <div className="text-xl font-black text-white mt-0.5">{proteinGrams}g</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-3 border border-white/5">
                    <div className="text-[11px] text-zinc-400 uppercase font-semibold">Carbs</div>
                    <div className="text-xl font-black text-white mt-0.5">{carbGrams}g</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-3 border border-white/5">
                    <div className="text-[11px] text-zinc-400 uppercase font-semibold">Fats</div>
                    <div className="text-xl font-black text-white mt-0.5">{fatGrams}g</div>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href={`https://wa.me/1234567890?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 font-bold uppercase tracking-wider text-xs sm:text-sm bg-[#ff3b30] hover:bg-[#ff3b30]/90 text-white rounded-full py-4 px-6 transition-transform hover:scale-[1.02] shadow-lg shadow-[#ff3b30]/25 text-center leading-normal"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <span>Start Plan With Faisal</span>
                </a>
                <p className="text-[11px] text-zinc-500 text-center mt-3 font-light leading-relaxed">
                  *Estimates only. Actual coaching factors in insulin sensitivity, digestion, and medical history.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
