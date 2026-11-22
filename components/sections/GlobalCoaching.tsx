"use client";

import { motion } from "framer-motion";
import { Globe, Video, ShoppingCart, CreditCard, Clock, MessageSquare, CheckCircle } from "lucide-react";

export function GlobalCoaching() {
  const customEase = [0.22, 1, 0.36, 1] as const;

  const features = [
    {
      icon: <Video className="w-6 h-6 text-[#ff3b30]" />,
      title: "Asynchronous Video Form Audits",
      description:
        "No matter what timezone you train in—London, New York, Dubai, or Sydney—simply record your working sets and send them on WhatsApp. You'll receive annotated video critiques breaking down your bar path, foot rooting, and tempo within 12 hours.",
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-[#ff3b30]" />,
      title: "Localized Supermarket Meal Plans",
      description:
        "We don't give you unrealistic Pakistani recipes if you live in Manchester or Dallas. Your grocery guidance is adapted to your local stores—Tesco, Sainsbury's, Walmart, Costco, Carrefour, or Lulu—with exact halal high-protein alternatives.",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-[#ff3b30]" />,
      title: "Frictionless International Payments",
      description:
        "We accept international payments in USD ($), GBP (£), AED, SAR, and EUR via Wise, Payoneer, Wire Transfer, Remitly, Western Union, and standard debit/credit cards alongside Pakistani bank accounts.",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#ff3b30]" />,
      title: "Shift Worker & Travel Protocols",
      description:
        "Frequent flyers, corporate consultants, and night-shift workers receive adaptive protocols for airport dining, hotel gym workouts, jet lag recovery, and fasting schedules (including seamless Ramadan prep).",
    },
  ];

  const countries = [
    { name: "United Kingdom", flag: "🇬🇧", city: "London, Birmingham, Manchester" },
    { name: "United States", flag: "🇺🇸", city: "New York, Texas, California" },
    { name: "United Arab Emirates", flag: "🇦🇪", city: "Dubai, Abu Dhabi, Sharjah" },
    { name: "Saudi Arabia", flag: "🇸🇦", city: "Riyadh, Jeddah, Dammam" },
    { name: "Canada & Europe", flag: "🇨🇦", city: "Toronto, Frankfurt, Sydney" },
    { name: "Pakistan", flag: "🇵🇰", city: "Lahore, Karachi, Islamabad" },
  ];

  return (
    <section id="global" className="py-16 md:py-24 bg-[#0d0d0d] relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#ff3b30] mb-4">
            <Globe className="w-4 h-4" /> Worldwide Remote Coaching
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: customEase }}
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4"
          >
            Train From <span className="text-[#ff3b30]">Anywhere On Earth</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: customEase, delay: 0.1 }}
            className="text-zinc-400 text-lg font-light leading-relaxed"
          >
            Over 40% of Muhammad Faisal Wraich’s private clients reside in North America, Europe, and the Middle East. Distance is never a barrier to world-class coaching.
          </motion.p>
        </div>

        {/* Global Features 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: customEase, delay: i * 0.1 }}
              className="bg-[#121212]/80 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-3xl flex flex-col justify-between hover:border-[#ff3b30]/40 transition-colors shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-5 border border-white/10">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold uppercase mb-3 text-white">
                  {feat.title}
                </h3>
                <p className="text-zinc-400 font-light text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Worldwide Client Footprint Banner */}
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-zinc-900/90 via-[#151515] to-zinc-900/90 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/3 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b30]">Active Global Roster</span>
              <h4 className="text-2xl md:text-3xl font-black uppercase text-white mt-1 mb-2">
                International Community
              </h4>
              <p className="text-zinc-400 text-sm font-light">
                Delivering personalized championship protocols across every continent with dedicated daily WhatsApp access.
              </p>
            </div>

            <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              {countries.map((c, idx) => (
                <div key={idx} className="bg-black/40 border border-white/5 rounded-2xl p-4 flex items-center gap-3">
                  <span className="text-2xl">{c.flag}</span>
                  <div>
                    <div className="font-bold text-sm text-white">{c.name}</div>
                    <div className="text-[11px] text-zinc-500 font-light">{c.city}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
