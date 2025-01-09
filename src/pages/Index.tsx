import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CasesSection from "@/components/CasesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ProjectsSection />
      <CasesSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default Index;