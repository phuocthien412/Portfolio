import React from "react";
import { usePortfolioStore } from "../../stores/usePortfolioStore";

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = usePortfolioStore();

  return (
    <div
      role="group"
      aria-label="Language selection"
      className="flex items-center rounded-xl border border-border/80 bg-card/60 backdrop-blur-md p-0.5 shadow-sm"
    >
      <button
        onClick={() => setLanguage("vi")}
        aria-label="Tiếng Việt"
        title="Tiếng Việt"
        className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all duration-200 ${
          language === "vi"
            ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-sm shadow-emerald-500/30 scale-100"
            : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
        }`}
      >
        VI
      </button>

      <button
        onClick={() => setLanguage("en")}
        aria-label="English"
        title="English"
        className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all duration-200 ${
          language === "en"
            ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-sm shadow-emerald-500/30 scale-100"
            : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
        }`}
      >
        EN
      </button>
    </div>
  );
};
