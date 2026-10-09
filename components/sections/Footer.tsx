"use client";

import { motion } from "framer-motion";
import { MessageCircle, Camera, Globe } from "lucide-react";

export function Footer() {
  const customEase = [0.22, 1, 0.36, 1] as const;

  return (
    <footer id="contact" className="bg-[#0a0a0a] relative overflow-hidden border-t border-white/5 pt-12 pb-8">
      <div className="container mx-auto px-4">
        
        {/* Contact CTA Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: customEase }}
          className="bg-zinc-900 border border-white/10 rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto mb-24 relative overflow-hidden group"
        >
          {/* Subtle bg glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#ff3b30]/10 blur-[100px] pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100" />
          
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 relative z-10">
            Ready to change your <span className="text-[#ff3b30]">Life?</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto relative z-10 font-light">
            Stop waiting. Lock in your consultation now. <br className="hidden md:block" />
            <span className="text-white font-medium">Consultations Daily 1 PM – 4 PM</span>
          </p>
          
          <div className="flex justify-center relative z-10">
            <a 
              href="https://wa.me/1234567890" 
              className="bg-[#25D366] text-white font-bold text-lg px-8 py-5 rounded-full flex items-center gap-3 hover:scale-105 transition-transform shadow-[0_0_40px_-10px_#25D366] animate-[pulse_3s_infinite]"
            >
              <MessageCircle className="w-6 h-6" />
              Book on WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Footer Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12 border-b border-white/10 pb-12">
          
          <div className="md:col-span-12 lg:col-span-6">
            <h1 className="font-bold text-2xl uppercase tracking-wider text-white mb-4">
              <span className="text-[#ff3b30]">Muhammad Faisal Wraich</span>
            </h1>
            <p className="text-zinc-500 font-light text-sm leading-relaxed max-w-sm">
              Muhammad Faisal Wraich. Elite online coaching, custom nutrition, and professional prep via WhatsApp.
            </p>
          </div>

          <div className="md:col-span-6 lg:col-span-3">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Transformations', 'Pricing', 'FAQ'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-zinc-500 hover:text-[#ff3b30] text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-6 lg:col-span-3">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Follow Me</h4>
            <div className="flex items-center gap-4">
              <a href="#" className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#ff3b30] hover:border-[#ff3b30] transition-colors group" title="Instagram">
                <Camera className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#ff3b30] hover:border-[#ff3b30] transition-colors group" title="Facebook">
                <Globe className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          
        </div>

        <div className="text-center text-zinc-600 text-sm font-light">
          &copy; 2026 Muhammad Faisal Wraich. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
