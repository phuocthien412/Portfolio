import React, { useMemo } from "react";
import { usePortfolioStore } from "../../stores/usePortfolioStore";

interface Star {
  id: number;
  top: string;
  left: string;
  size: number;
  opacity: number;
  duration: string;
  delay: string;
  color: string;
}

export const CosmicSpaceAtmosphere: React.FC = () => {
  const theme = usePortfolioStore((s) => s.theme);
  const isDark = theme === "dark";

  // Precompute 45 deterministic starry points across the viewport
  const stars: Star[] = useMemo(() => {
    const starColors = ["#ffffff", "#6ee7b7", "#38bdf8", "#a78bfa", "#fef08a"];
    const generated: Star[] = [];
    
    // Seeded distribution
    for (let i = 0; i < 45; i++) {
      const top = `${(i * 17.3 + (i % 7) * 9.1) % 96}%`;
      const left = `${(i * 23.7 + (i % 5) * 11.3) % 98}%`;
      const size = i % 8 === 0 ? 3 : i % 3 === 0 ? 2 : 1.5;
      const opacity = 0.35 + ((i % 5) * 0.12);
      const duration = `${3 + (i % 4) * 2}s`;
      const delay = `${(i % 5) * 1.2}s`;
      const color = starColors[i % starColors.length];

      generated.push({
        id: i,
        top,
        left,
        size,
        opacity,
        duration,
        delay,
        color,
      });
    }
    return generated;
  }, []);

  if (!isDark) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{ willChange: "transform" }}
    >
      {/* 1. Deep Cosmic Nebula Dust Clouds */}
      <div className="absolute -top-32 left-1/4 w-[700px] h-[600px] bg-gradient-to-br from-emerald-600/10 via-teal-500/5 to-transparent rounded-full blur-[140px] opacity-70 animate-pulse duration-[12000ms]" />
      <div className="absolute top-1/3 -right-32 w-[650px] h-[550px] bg-gradient-to-bl from-cyan-600/10 via-indigo-600/5 to-transparent rounded-full blur-[150px] opacity-60" />
      <div className="absolute bottom-10 left-1/3 w-[800px] h-[500px] bg-gradient-to-t from-emerald-600/8 via-cyan-500/5 to-transparent rounded-full blur-[160px] opacity-50" />

      {/* 2. Planetary Orbital Rings Ambient Accent */}
      <div className="absolute top-[18%] -left-36 w-[520px] h-[520px] rounded-full border border-emerald-500/[0.07] border-dashed pointer-events-none transform -rotate-12 animate-[spin_160s_linear_infinite]" />
      <div className="absolute top-[45%] -right-48 w-[640px] h-[640px] rounded-full border border-cyan-500/[0.06] pointer-events-none transform rotate-45" />

      {/* 3. Twinkling Stars Constellation Layer */}
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            boxShadow: star.size > 2 ? `0 0 6px ${star.color}` : "none",
            opacity: star.opacity,
            animation: `twinkle ${star.duration} ease-in-out infinite alternate`,
            animationDelay: star.delay,
          }}
        />
      ))}

      {/* 4. Cosmic Shooting Stars (Meteors) */}
      <div className="cosmic-meteor cosmic-meteor-1" />
      <div className="cosmic-meteor cosmic-meteor-2" />
    </div>
  );
};
