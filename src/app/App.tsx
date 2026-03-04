import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { NewsSection } from "./components/NewsSection";
import { StatsSection } from "./components/StatsSection";
import { ShowcaseSection } from "./components/ShowcaseSection";
import { ScenariosSection } from "./components/ScenariosSection";
import { AuthoritySection } from "./components/AuthoritySection";
import { ContactSection } from "./components/ContactSection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#FDF8F0]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <NewsSection />
      <ShowcaseSection />
      <ScenariosSection />
      <AuthoritySection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
