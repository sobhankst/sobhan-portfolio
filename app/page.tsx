"use client";
import Header from "@/components/laoyout/Header";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ServicesSection from "@/components/sections/ServicesSection";
import { useState } from "react";

export default function Home() {
  const [visibleSection, setVisibleSection] = useState<string | null>("home");

  return (
    <>
      <Header activeSection={visibleSection} onSelect={setVisibleSection} />
      {visibleSection === "home" ? (
        <HeroSection />
      ) : visibleSection === "services" ? (
        <ServicesSection />
      ) : visibleSection === "resume" ? (
        <ResumeSection />
      ) : visibleSection === "portfolio" ? (
        <PortfolioSection />
      ) : visibleSection === "contact" ? (
        <ContactSection />
      ) : null}
    </>
  );
}
