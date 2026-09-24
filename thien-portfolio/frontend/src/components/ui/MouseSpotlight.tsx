import React, { useEffect, useState } from "react";
import { usePortfolioStore } from "../../stores/usePortfolioStore";

export const MouseSpotlight: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isVisible, setIsVisible] = useState(false);
  const theme = usePortfolioStore((s) => s.theme);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  const isDark = theme === "dark";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background: isDark
          ? `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.14), rgba(6, 182, 212, 0.05) 35%, transparent 75%)`
          : `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.10), rgba(14, 165, 233, 0.05) 35%, transparent 70%)`,
      }}
    />
  );
};
