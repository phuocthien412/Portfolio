import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";
import { usePortfolioStore, useT } from "../../stores/usePortfolioStore";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SpaceGlowButton } from "../ui/SpaceGlowButton";
import type { ProfileData } from "../../types";

interface HeroSectionProps {
  profile?: ProfileData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile }) => {
  const t = useT();
  const openCvModal = usePortfolioStore((s) => s.openCvModal);
  const name = "Ngô Minh Thiên";
  const avatarUrl = profile?.avatar_url || "/avatar-thien.jpg";

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* 1. Atmospheric Neon Background Lighting & Subtle Dots Grid */}
      <div className="absolute inset-0 bg-aurora-emerald pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-dots-emerald opacity-70 pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_85%)]" />
      <div className="absolute inset-0 bg-grid-cyber opacity-40 pointer-events-none -z-10" />

      {/* Floating Ambient Neon Orbs */}
      <div className="absolute top-1/4 -left-36 w-[420px] h-[420px] bg-emerald-500/15 dark:bg-emerald-500/20 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 right-4 w-[500px] h-[500px] bg-teal-400/15 dark:bg-teal-400/20 rounded-full blur-[160px] pointer-events-none animate-pulse-slow delay-700" />
      <div className="absolute bottom-10 left-1/3 w-[380px] h-[380px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Column: Heading, Subtitle, Pitch & Action Buttons */}
          <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
            <ScrollReveal animation="fade-up" delay={100}>
              {/* Main Heading with ample line-height for Vietnamese tone marks */}
              <div className="space-y-1 pt-1 pb-1">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-foreground block tracking-tight">
                  {t.hero.greeting}
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.25] text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-800 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 drop-shadow-sm dark:drop-shadow-[0_0_25px_rgba(16,185,129,0.45)] pb-1">
                  {name}
                </h1>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              {/* Subtitle in high contrast Emerald for light mode & Neon Emerald for dark mode */}
              <p className="text-xl sm:text-2xl font-semibold text-emerald-700 dark:text-emerald-400 dark:drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                {t.hero.role}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              {/* Concise Pitch with high contrast in both themes */}
              <p className="text-base sm:text-lg text-slate-700 dark:text-foreground/85 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {t.hero.pitch}
              </p>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal animation="fade-up" delay={400}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link to="/projects" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white dark:text-slate-950 shadow-[0_4px_20px_rgba(16,185,129,0.35)] dark:shadow-[0_0_30px_rgba(16,185,129,0.55)] hover:shadow-[0_6px_25px_rgba(16,185,129,0.5)] dark:hover:shadow-[0_0_40px_rgba(16,185,129,0.75)] hover:scale-[1.02] active:scale-[0.98] transition-all">
                    <span>{t.hero.viewProjects}</span>
                    <ArrowRight className="w-4 h-4 ml-0.5" />
                  </button>
                </Link>

                {/* View CV Space Glow Button */}
                <SpaceGlowButton
                  onClick={openCvModal}
                  className="w-full sm:w-auto"
                  icon={<FileText className="w-4 h-4 text-emerald-400" />}
                >
                  {t.hero.viewCv}
                </SpaceGlowButton>

                {/* Direct Contact Space Glow Button */}
                <SpaceGlowButton
                  to="/contact"
                  className="w-full sm:w-auto"
                  icon={<ArrowRight className="w-4 h-4 text-cyan-400" />}
                >
                  {t.hero.contactMe}
                </SpaceGlowButton>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Cosmic Planetary Avatar with Orbit Rings */}
          <div className="flex-shrink-0 relative group cursor-pointer">
            <ScrollReveal animation="scale-up" delay={250}>
              {/* 1. Deep Cosmic Solar Flare & Nebula Corona */}
              <div className="cosmic-corona-pulse absolute -inset-12 rounded-full pointer-events-none" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 opacity-70 group-hover:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none" />

              {/* 2. Outer Planetary Orbit Ring with Satellite Star */}
              <div className="cosmic-orbit-1 absolute -inset-8 sm:-inset-10 lg:-inset-12 rounded-full border border-dashed border-emerald-400/25 group-hover:border-emerald-400/60 pointer-events-none transition-colors duration-500">
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-cyan-300 shadow-[0_0_14px_#22d3ee] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                </span>
              </div>

              {/* 3. Inner Counter-Rotating Orbit Ring */}
              <div className="cosmic-orbit-2 absolute -inset-4 sm:-inset-5 lg:-inset-6 rounded-full border border-cyan-400/20 group-hover:border-cyan-400/50 pointer-events-none transition-colors duration-500">
                <span className="absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
              </div>

              {/* 4. Circular Avatar Celestial Frame */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-[4px] border-emerald-500 dark:border-emerald-400 group-hover:border-cyan-400 shadow-[0_10px_35px_rgba(16,185,129,0.35)] dark:shadow-[0_0_50px_rgba(16,185,129,0.85),inset_0_0_25px_rgba(16,185,129,0.4)] group-hover:dark:shadow-[0_0_65px_rgba(6,182,212,0.9),inset_0_0_30px_rgba(6,182,212,0.5)] bg-slate-100 dark:bg-slate-950 transition-all duration-500">
                <img
                  src={avatarUrl}
                  alt="Ngô Minh Thiên - Software Engineer"
                  className="w-full h-full object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Subtle Starlight Sheen overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
