"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const customEase = [0.22, 1, 0.36, 1] as const;

  const faqs = [
    {
      question: "What are your consultation timings?",
      answer: "I am available daily from 1 PM to 4 PM for 1-on-1 calls, check-ins, and direct support. Outside these hours, you can still drop messages and I'll get back as quickly as possible.",
    },
    {
      question: "How does the WhatsApp coaching work exactly?",
      answer: "It's highly personalized. We start with an initial call to discuss your baseline and goals. I then send your customized diet and training plan directly to your WhatsApp. You will send daily or weekly check-ins (depending on your tier) and videos of your lifts for form correction.",
    },
    {
      question: "Are the diet and training plans really customized?",
      answer: "100%. No cookie-cutter PDF templates. Every macro is calculated for your specific metabolic rate, lifestyle constraints, and preferences. If you have medical conditions (e.g., diabetes, thyroid issues), the plan is adapted safely.",
    },
    {
      question: "What is your pricing and refund policy?",
      answer: "Our standard plan starts at 25,000 PKR per month, offering great value for elite-level guidance. Due to the highly personalized nature of the programming and time invested upfront, we do not offer refunds once the customized plan is delivered.",
    },
    {
      question: "How quickly can I get started?",
      answer: "Click the WhatsApp button anywhere on the site, send a message detailing which plan you're interested in, and we can set up your initial consultation call within 24 hours.",
    }
  ];

  return (
    <section id="faq" className="pt-8 pb-8 md:pt-12 md:pb-12 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-3xl">
        
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: customEase }}
            className="text-4xl md:text-5xl font-black uppercase mb-4"
          >
            Got <span className="text-[#ff3b30]">Questions?</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: customEase, delay: 0.2 }}
        >
          <Accordion className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/10 bg-zinc-900/30 rounded-2xl px-6 border-none mb-4">
                <AccordionTrigger className="hover:no-underline hover:text-[#ff3b30] text-left text-lg font-bold py-6 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 leading-relaxed font-light pb-6">
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
