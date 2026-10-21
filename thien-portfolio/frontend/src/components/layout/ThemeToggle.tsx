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

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const x = e.clientX || window.innerWidth - 100;
    const y = e.clientY || 40;

    if (typeof document !== "undefined" && "startViewTransition" in document) {
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = (document as any).startViewTransition(() => {
        toggleTheme();
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 400,
            easing: "cubic-bezier(0.25, 1, 0.5, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    } else {
      toggleTheme();
    }
  };

  return (
    <button
      onClick={handleToggle}
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
