import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";
import { usePortfolioStore, useT } from "../../stores/usePortfolioStore";
import { ScrollReveal } from "../ui/ScrollReveal";
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

                {/* View CV Button */}
                <button
                  onClick={openCvModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl font-semibold text-sm border border-emerald-500/50 dark:border-emerald-500/40 bg-emerald-500/10 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-500/20 dark:hover:bg-emerald-500/25 hover:border-emerald-500 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all"
                  title="Xem và tải CV Ngô Minh Thiên"
                >
                  <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{t.hero.viewCv}</span>
                </button>

                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl font-semibold text-sm border border-slate-300 dark:border-border/80 bg-white dark:bg-card/60 text-slate-800 dark:text-foreground hover:bg-slate-100 dark:hover:bg-card/90 hover:border-slate-400 shadow-sm transition-all active:scale-[0.98]">
                    <span>{t.hero.contactMe}</span>
                  </button>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Circular Avatar with Neon Emerald Halo */}
          <div className="flex-shrink-0 relative group">
            <ScrollReveal animation="scale-up" delay={250}>
              {/* Multi-layered Neon Emerald & Teal Glow Rings */}
              <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 opacity-25 dark:opacity-40 blur-3xl group-hover:opacity-45 dark:group-hover:opacity-65 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 opacity-80 dark:opacity-90 blur-sm pointer-events-none" />

              {/* Circular Avatar Frame */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-[4px] border-emerald-500 dark:border-emerald-400 shadow-[0_10px_35px_rgba(16,185,129,0.35)] dark:shadow-[0_0_45px_rgba(16,185,129,0.8),inset_0_0_20px_rgba(16,185,129,0.3)] bg-slate-100 dark:bg-slate-950">
                <img
                  src={avatarUrl}
                  alt="Ngô Minh Thiên - Software Engineer"
                  className="w-full h-full object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
