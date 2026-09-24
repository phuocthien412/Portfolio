import React from "react";
import { Sun, Moon } from "lucide-react";
import { usePortfolioStore } from "../../stores/usePortfolioStore";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme, language } = usePortfolioStore();

  const title =
    theme === "dark"
      ? language === "vi"
        ? "Chuyển sang giao diện Sáng"
        : "Switch to Light Mode"
      : language === "vi"
      ? "Chuyển sang giao diện Tối"
      : "Switch to Dark Mode";

  return (
    <button
      onClick={toggleTheme}
      aria-label={title}
      title={title}
      className="relative p-2 rounded-xl border border-border/80 bg-card/60 backdrop-blur-md text-foreground/80 hover:text-emerald-500 hover:border-emerald-500/40 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm group"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300 animate-in spin-in-180" />
      ) : (
        <Moon className="w-4 h-4 text-indigo-600 group-hover:-rotate-12 transition-transform duration-300 animate-in spin-in-180" />
      )}
    </button>
  );
};
