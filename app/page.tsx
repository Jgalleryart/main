"use client";

import { useEffect, useState } from "react";
import HomeFeaturedWorks from "../components/HomeFeaturedWorks";
import Landing from "../components/Landing";

export default function HomePage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (showContent) return;

      const pageHeight = document.documentElement.scrollHeight;
      const maxScroll = Math.max(pageHeight - window.innerHeight, 0);
      const threshold = Math.min(window.innerHeight * 0.8, Math.max(maxScroll - 8, 0));

      if (window.scrollY > threshold) {
        setShowContent(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showContent]);

  return (
    <main>
      <Landing />

      <div className={`home-content fade-in ${showContent ? "visible" : ""}`}>
        <section className="poetic-divider section-block">
          <p>Observation is a form of devotion.</p>
        </section>

        <HomeFeaturedWorks />

        <footer id="contact" className="home-footer section-block">
          <p>Inquiries by appointment.</p>
        </footer>
      </div>
    </main>
  );
}
