"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export function FAQ() {
  const customEase = [0.22, 1, 0.36, 1] as const;

  const faqs = [
    {
      question: "I live outside Pakistan (UK, USA, UAE, Canada). How does remote coaching work?",
      answer:
        "Over 40% of our active roster lives overseas. Everything is run seamlessly via WhatsApp. You receive localized grocery recommendations (e.g. Tesco, Sainsbury's, Walmart, Costco, Lulu, Carrefour) with exact halal alternatives. Whenever you perform compound lifts, you send brief video clips of your working sets, and Faisal sends back detailed voice or annotated video critiques on bar path, depth, and tempo within 12 hours.",
    },
    {
      question: "What are your consultation and check-in timings?",
      answer:
        "Coach Faisal is available daily from 1:00 PM to 4:00 PM PKT for scheduled 1-on-1 calls, check-in reviews, and form audits. Outside these core hours, you can message questions on WhatsApp at any time, and you will receive priority answers within our guaranteed daily response window.",
    },
    {
      question: "How do you handle dietary preferences, family dinners, and social outings?",
      answer:
        "We reject crash starvation diets and eating boiled chicken from plastic tupperware all day. We use flexible macronutrient programming calibrated to your metabolic rate. You are taught how to budget calories for dining out at restaurants, family gatherings, weddings, and business trips without setting back your progress.",
    },
    {
      question: "I have a medical condition (Diabetes, Thyroid, High BP, PCOS, Disc Bulge). Is this safe?",
      answer:
        "Yes, absolutely. Faisal has extensive practical experience adapting programs for insulin resistance, hypothyroidism, PCOS, and orthopedic joint rehabilitations. Every single exercise is selected to avoid spinal compression or joint impingement, and your nutritional macro balance is structured to stabilize insulin and inflammatory markers safely.",
    },
    {
      question: "Do I need expensive supplements or anabolic steroids to get results?",
      answer:
        "No. 95% of your transformation comes from progressive overload in the gym, calorie and protein discipline, and quality sleep. We only suggest basic, evidence-backed supplements (such as pure creatine monohydrate, quality whey protein, and vitamin D3/Omega-3) if needed for convenience. We never push proprietary or unnecessary pill stacks.",
    },
    {
      question: "What if I travel frequently or have access only to a hotel or home gym?",
      answer:
        "Your program is engineered around the equipment you actually possess. If you only have dumbbells and a pull-up bar at home, or if you rotate between hotel gyms while traveling, your exercises are adapted using progressive calisthenics, bands, and dumbbell mechanics to stimulate the exact same muscle fibers.",
    },
    {
      question: "What international payment methods are accepted?",
      answer:
        "We support seamless international remittances including Wise (formerly TransferWise), Payoneer, Direct Bank Wire Transfers, Remitly, Western Union, and Ria alongside domestic Pakistani accounts (Meezan, HBL, Allied, Raast).",
    },
    {
      question: "What is your refund policy?",
      answer:
        "Because our coaching involves bespoke, non-reusable physiological assessments, metabolic calculations, and customized workout programming written manually by Faisal upfront, all purchases are non-refundable once the plan has been delivered. We commit 100% of our energy to your results, and we expect that same commitment from you.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#ff3b30] mb-4">
            <HelpCircle className="w-4 h-4" /> Clear Answers & Transparency
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: customEase }}
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-4"
          >
            Frequently Asked <span className="text-[#ff3b30]">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: customEase, delay: 0.1 }}
            className="text-zinc-400 text-lg font-light leading-relaxed"
          >
            Everything you need to know about our remote coaching workflow, methodology, and international protocols.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: customEase, delay: 0.2 }}
        >
          <Accordion className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`} 
                className="border border-white/10 bg-[#121212]/80 backdrop-blur-md rounded-2xl px-6 md:px-8 transition-colors hover:border-white/20 overflow-hidden shadow-lg"
              >
                <AccordionTrigger className="hover:no-underline hover:text-[#ff3b30] text-left text-base md:text-lg font-bold py-6 transition-colors text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 leading-relaxed font-light pb-6 text-sm md:text-base border-t border-white/5 pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

      </div>
    </section>
  );
}
