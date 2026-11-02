import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Cuộn lên đầu trang"
      title="Cuộn lên đầu trang"
      className={`fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-white/90 dark:bg-card/90 backdrop-blur-xl border border-slate-200 dark:border-emerald-500/30 text-slate-700 dark:text-emerald-400 shadow-lg shadow-slate-300/40 dark:shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-300 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
};

