import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { BreakSection } from "@/components/sections/BreakSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden w-full relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <BreakSection />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/1234567890"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform flex items-center justify-center animate-[pulse_2s_infinite]"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </main>
  );
}
