"use client";

import { motion } from "framer-motion";
import { MessageCircle, Clock, PhoneCall, FileText } from "lucide-react";

export function HowItWorks() {
  const customEase = [0.22, 1, 0.36, 1] as const;

  const steps = [
    {
      title: "Message on WhatsApp",
      description: "Reach out directly to secure your spot.",
      icon: <MessageCircle className="w-6 h-6 text-[#ff3b30]" />,
    },
    {
      title: "Book Your Slot",
      description: "Consultations happen daily from 1 PM – 4 PM.",
      icon: <Clock className="w-6 h-6 text-[#ff3b30]" />,
    },
    {
      title: "Consultation Call",
      description: "We discuss your goals, medical history, and timeline.",
      icon: <PhoneCall className="w-6 h-6 text-[#ff3b30]" />,
    },
    {
      title: "Get Custom Plan",
      description: "Receive your bespoke diet and training program.",
      icon: <FileText className="w-6 h-6 text-[#ff3b30]" />,
    }
  ];

  return (
    <section id="how-it-works" className="pt-8 pb-16 md:pt-12 md:pb-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: customEase }}
            className="text-4xl md:text-5xl font-black uppercase mb-4"
          >
            How To <span className="text-[#ff3b30]">Start</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: customEase, delay: 0.1 }}
            className="text-zinc-400 text-lg font-light"
          >
            A streamlined process to get you on track immediately.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          
          {/* Animated Connecting Line (Mobile: Vertical) */}
          <div className="absolute left-[39px] top-0 bottom-0 w-[2px] bg-white/10 z-0 md:hidden">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: customEase }}
              className="bg-gradient-to-b from-[#ff3b30] to-transparent w-full h-full origin-top"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: customEase, delay: i * 0.2 }}
                className="flex md:flex-col items-start md:items-center text-left md:text-center relative group"
              >
                <div className="w-20 h-20 shrink-0 bg-[#0a0a0a] border-2 border-white/10 group-hover:border-[#ff3b30]/50 rounded-full flex items-center justify-center mb-0 md:mb-6 mr-6 md:mr-0 z-10 transition-colors duration-300">
                  {step.icon}
                </div>
                <div>
                  <div className="text-[#ff3b30] font-black text-sm uppercase tracking-widest mb-2">Step {i + 1}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
