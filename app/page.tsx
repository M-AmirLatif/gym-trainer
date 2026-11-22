import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Methodology } from "@/components/sections/Methodology";
import { BreakSection } from "@/components/sections/BreakSection";
import { TransformationCalculator } from "@/components/sections/TransformationCalculator";
import { GlobalCoaching } from "@/components/sections/GlobalCoaching";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Pricing } from "@/components/sections/Pricing";
import { StandardsGuarantee } from "@/components/sections/StandardsGuarantee";
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
      <Methodology />
      <BreakSection />
      <TransformationCalculator />
      <GlobalCoaching />
      <HowItWorks />
      <Testimonials />
      <CaseStudies />
      <Pricing />
      <StandardsGuarantee />
      <FAQ />
      <Footer />
      
      {/* Floating WhatsApp Quick Action Button */}
      <a 
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/40 hover:scale-110 transition-transform flex items-center justify-center animate-[pulse_2s_infinite]"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </main>
  );
}
