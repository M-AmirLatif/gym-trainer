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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Methodology", href: "#methodology" },
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
          isScrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">
          <a href="#" className="font-bold text-base md:text-xl uppercase tracking-wider text-white shrink-0">
            <span className="text-[#ff3b30]">Muhammad Faisal Wraich</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-[#ff3b30] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block shrink-0">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#ff3b30] hover:bg-[#ff3b30]/90 text-white rounded-full relative overflow-hidden group text-xs font-bold uppercase tracking-wider h-10 px-6">
                <span className="relative z-10 flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Book on WhatsApp
                </span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left ease-out duration-300" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="xl:hidden text-white shrink-0 p-2" onClick={() => setIsOpen(true)} aria-label="Toggle Menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: customEase }}
            className="fixed inset-0 z-[60] bg-[#0a0a0a] flex flex-col justify-center px-8 overflow-y-auto py-12"
          >
            <button 
              className="absolute top-6 right-4 text-white p-2" 
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <X className="w-8 h-8" />
            </button>
            
            <nav className="flex flex-col gap-4 text-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: customEase }}
                  className="text-xl sm:text-2xl font-black uppercase text-white hover:text-[#ff3b30] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5, ease: customEase }}
              className="mt-8 flex justify-center"
            >
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="w-full max-w-sm">
                <Button size="lg" className="bg-[#ff3b30] text-white rounded-full text-base h-12 px-8 w-full font-bold uppercase tracking-wider">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book on WhatsApp
                </Button>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
