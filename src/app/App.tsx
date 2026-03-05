import React from "react";
import { Routes, Route } from "react-router-dom";
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
import { BlogsListPage } from "./components/BlogsListPage";
import { BlogDetailPage } from "./components/BlogDetailPage";
import { Footer } from "./components/Footer";

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <NewsSection />
      <ShowcaseSection />
      <ScenariosSection />
      <AuthoritySection />
      <ContactSection />
      <FAQSection />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#FDF8F0]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsListPage />} />
        <Route path="/blogs/:slug" element={<BlogDetailPage />} />
        {/* 預設回到首頁 */}
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}
