"use client";

import { useEffect, useState } from "react";
import WelcomeScreen from "@/components/ui/welcome-screen";

import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ShowcaseSection from "@/components/sections/showcase-section";
import ContactSection from "@/components/sections/contact-section";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 8000); // ⏱️ 8 seconds (change to 10000 for 10s)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <WelcomeScreen />}

      {!loading && (
        <main className="relative">
          <HeroSection />
          <AboutSection />
          <ShowcaseSection />
          <ContactSection />
        </main>
      )}
    </>
  );
}