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

  const navLinks = ["Home", "About", "Services", "Transformations", "Pricing", "Contact"];
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
          <h1 className="font-bold text-lg md:text-2xl uppercase tracking-wider text-white shrink-0">
            <span className="text-[#ff3b30]">Muhammad Faisal Wraich</span>
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block shrink-0">
            <Button className="bg-[#ff3b30] hover:bg-[#ff3b30]/90 text-white rounded-full relative overflow-hidden group">
              <span className="relative z-10 flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                Book on WhatsApp
              </span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left ease-out duration-300" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-white shrink-0" onClick={() => setIsOpen(true)}>
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
            className="fixed inset-0 z-[60] bg-[#0a0a0a] flex flex-col justify-center px-8"
          >
            <button 
              className="absolute top-6 right-4 text-white p-2" 
              onClick={() => setIsOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: customEase }}
                  className="text-2xl sm:text-4xl font-black uppercase text-white hover:text-[#ff3b30] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5, ease: customEase }}
              className="mt-12 flex justify-center"
            >
              <Button size="lg" className="bg-[#ff3b30] text-white rounded-full text-lg h-14 px-8 w-full max-w-sm">
                <MessageCircle className="w-5 h-5 mr-2" />
                Book on WhatsApp
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
