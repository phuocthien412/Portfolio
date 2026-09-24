import React, { useState, useEffect } from "react";

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const currentProgress = Math.min(1, Math.max(0, window.scrollY / totalHeight));
            setScrollProgress(currentProgress);
          } else {
            setScrollProgress(0);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 shadow-[0_0_14px_rgba(16,185,129,0.85)] pointer-events-none transition-transform duration-75 ease-out"
      style={{ transform: `scaleX(${scrollProgress})` }}
    />
  );
};
