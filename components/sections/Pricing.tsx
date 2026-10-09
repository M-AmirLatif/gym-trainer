"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function Pricing() {
  const customEase = [0.22, 1, 0.36, 1] as const;

  const plans = [
    {
      name: "Basic",
      price: "15,000 PKR",
      duration: "per month",
      popular: false,
      features: [
        "Customized Diet Plan",
        "Basic Workout Program",
        "Bi-weekly Check-ins",
        "WhatsApp Support (24h response)"
      ]
    },
    {
      name: "Standard",
      price: "25,000 PKR",
      duration: "per month",
      popular: true,
      features: [
        "Advanced Diet & Macros",
        "Hypertrophy/Fat Loss Programming",
        "Weekly Check-ins & Adjustments",
        "Priority WhatsApp Support",
        "Form Review via Video"
      ]
    },
    {
      name: "Premium",
      price: "40,000 PKR",
      duration: "per month",
      popular: false,
      features: [
        "Medical Condition Specific Diet",
        "Elite Training Protocols",
        "Daily Check-ins & Adjustments",
        "Instant WhatsApp Support",
        "1-on-1 Consultation Call (Weekly)"
      ]
    }
  ];

  return (
    <section id="pricing" className="pt-8 pb-16 md:pt-12 md:pb-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: customEase }}
            className="text-4xl md:text-5xl font-black uppercase mb-4"
          >
            Invest In <span className="text-[#ff3b30]">Yourself</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: customEase, delay: 0.1 }}
            className="text-zinc-400 text-lg font-light"
          >
            Clear pricing. No hidden fees. Select the level of coaching you need.
          </motion.p>
        </div>

        <div className="relative">
          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-8 pb-8 px-0">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: customEase, delay: i * 0.15 }}
                className={`w-full relative rounded-3xl p-6 md:p-8 bg-zinc-900/50 border transition-transform duration-500 hover:-translate-y-2 flex flex-col ${
                  plan.popular ? "border-[#ff3b30]/50 shadow-[0_0_40px_-15px_rgba(255,59,48,0.3)] bg-gradient-to-b from-zinc-900 to-zinc-900/50 mt-2 md:mt-0" : "border-white/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff3b30] text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-6 border-b border-white/10 pb-6">
                  <span className="text-3xl font-black text-[#ff3b30]">{plan.price}</span>
                  <span className="text-sm text-zinc-500 font-medium">{plan.duration}</span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#ff3b30] shrink-0" />
                      <span className="text-zinc-300 font-light text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/1234567890?text=${encodeURIComponent(`Hi, I'm interested in the ${plan.name} package`)}`}
                  className={`w-full py-4 rounded-full font-bold text-center transition-all duration-300 ${
                    plan.popular 
                      ? "bg-[#ff3b30] hover:bg-white hover:text-black text-white shadow-[0_0_20px_-5px_rgba(255,59,48,0.5)]" 
                      : "bg-white/5 border border-white/20 hover:bg-white hover:text-black text-white"
                  }`}
                >
                  Choose {plan.name}
                </a>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
