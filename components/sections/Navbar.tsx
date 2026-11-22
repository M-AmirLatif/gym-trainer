"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Protocol", href: "#methodology" },
    { name: "Calculator", href: "#calculator" },
    { name: "Global", href: "#global" },
    { name: "Results", href: "#transformations" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];
  const customEase = [0.22, 1, 0.36, 1] as const;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: customEase }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-1.5 font-black text-sm sm:text-base md:text-lg uppercase tracking-wider text-white shrink-0 hover:opacity-90 transition-opacity">
            <span className="text-[#ff3b30]">Muhammad Faisal</span>
            <span className="text-zinc-400 font-light hidden sm:inline">Wraich</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-[#ff3b30] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center shrink-0">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#ff3b30] hover:bg-[#ff3b30]/90 text-white rounded-full relative overflow-hidden group text-xs font-bold uppercase tracking-wider h-10 px-5 shadow-md shadow-[#ff3b30]/20">
                <span className="relative z-10 flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Book on WhatsApp
                </span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left ease-out duration-300" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button (ONLY visible on mobile/tablet) */}
          <button 
            className="lg:hidden text-white p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors" 
            onClick={() => setIsOpen(true)} 
            aria-label="Toggle Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: customEase }}
            className="fixed inset-0 z-[60] bg-[#0a0a0a] flex flex-col justify-between px-6 sm:px-10 py-8 overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <span className="font-bold text-base uppercase text-[#ff3b30]">
                Muhammad Faisal Wraich
              </span>
              <button 
                className="text-white p-2 rounded-xl bg-white/5 border border-white/10" 
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-4 py-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }}
                  className="text-xl font-black uppercase text-white hover:text-[#ff3b30] transition-colors py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <div className="pt-6 border-t border-white/10">
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full inline-flex items-center justify-center font-bold uppercase tracking-wider text-sm bg-[#ff3b30] text-white rounded-full py-4 px-6 shadow-lg shadow-[#ff3b30]/30"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
