import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, MessageSquare, FileText, Mail, Phone } from "lucide-react";
import { Badge } from "../ui/Badge";
import { usePortfolioStore, useT } from "../../stores/usePortfolioStore";
import { ScrollReveal } from "../ui/ScrollReveal";

export const HomeCtaBanner: React.FC = () => {
  const t = useT();
  const openCvModal = usePortfolioStore((s) => s.openCvModal);

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-slate-50/80 dark:bg-transparent border-t border-slate-200/80 dark:border-emerald-500/20 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* 1. Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-emerald-500/8 via-cyan-500/5 to-transparent dark:from-cyan-600/15 dark:via-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-bl from-teal-500/8 via-indigo-500/5 to-transparent dark:from-teal-500/15 dark:via-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* 2. Planetary Orbit Arcs & Subtle Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-slate-300/30 dark:border-cyan-500/10 pointer-events-none animate-spin-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-dashed border-emerald-500/15 pointer-events-none" />
      
      {/* 3. Subtle Cyber Space Grid */}
      <div className="absolute inset-0 bg-grid-cyber opacity-15 dark:opacity-25 pointer-events-none" />

      {/* 4. Twinkling Cosmic Stars in Dark Mode */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-100">
        <span className="absolute top-10 left-[15%] w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping opacity-70" />
        <span className="absolute top-24 right-[20%] w-1 h-1 bg-emerald-400 rounded-full animate-pulse opacity-80" />
        <span className="absolute bottom-16 left-[25%] w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse opacity-60" />
        <span className="absolute bottom-20 right-[15%] w-2 h-2 bg-cyan-400 rounded-full blur-[1px] opacity-75 animate-ping" />
        <span className="absolute top-1/3 right-[10%] w-1 h-1 bg-emerald-400 rounded-full opacity-60" />
        <span className="absolute bottom-1/3 left-[8%] w-1 h-1 bg-teal-400 rounded-full opacity-70" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="rounded-3xl border border-slate-200 dark:border-emerald-500/30 bg-white/95 dark:bg-card/75 backdrop-blur-2xl p-8 sm:p-12 lg:p-14 shadow-xl shadow-slate-200/50 dark:shadow-2xl dark:shadow-emerald-500/10 hover:border-emerald-500/40 hover:shadow-2xl transition-all duration-500 relative overflow-hidden text-center max-w-4xl mx-auto group">
            
            {/* Top Galactic Edge Glow */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
            
            {/* Ambient internal light */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 dark:group-hover:bg-emerald-500/30 transition-all duration-500" />

            <div className="space-y-4 max-w-2xl mx-auto relative z-10">
              <Badge variant="emerald" className="mx-auto gap-1.5 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300">
                <Sparkles className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400 animate-pulse" />
                <span>{t.ctaBanner.badge}</span>
              </Badge>

              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white tracking-tight">
                {t.ctaBanner.title} <span className="gradient-text">{t.ctaBanner.highlight}</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mx-auto">
                {t.ctaBanner.subtitle}
              </p>

              {/* Main Action CTAs with Adaptive Buttons */}
              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.ctaBanner.button}</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </Link>

                <button
                  onClick={openCvModal}
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border border-slate-300 dark:border-border/80 bg-white dark:bg-secondary/60 text-slate-800 dark:text-foreground hover:bg-slate-100 dark:hover:bg-card/90 hover:border-emerald-500/40 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <FileText className="w-4 h-4 text-emerald-600 dark:text-cyan-400" />
                  <span>{t.ctaBanner.viewCvBtn}</span>
                </button>
              </div>

              {/* Direct Quick Contact Badges */}
              <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 dark:text-slate-400">
                <a
                  href="mailto:minhngothien1@gmail.com"
                  className="flex items-center gap-2 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors font-mono"
                >
                  <Mail className="w-4 h-4 text-emerald-600 dark:text-cyan-400" />
                  <span>minhngothien1@gmail.com</span>
                </a>
                <span className="hidden sm:inline text-slate-300 dark:text-emerald-400">•</span>
                <a
                  href="tel:0987176434"
                  className="flex items-center gap-2 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors font-mono"
                >
                  <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>0987 176 434</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
