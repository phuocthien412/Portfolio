import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone, Sparkles, MessageSquare, FileText } from "lucide-react";
import { Badge } from "../ui/Badge";
import { usePortfolioStore, useT } from "../../stores/usePortfolioStore";
import { ScrollReveal } from "../ui/ScrollReveal";
import { RainbowButton } from "../ui/RainbowButton";

export const HomeCtaBanner: React.FC = () => {
  const t = useT();
  const openCvModal = usePortfolioStore((s) => s.openCvModal);

  return (
    <section className="py-20 relative overflow-hidden bg-background border-t border-border/40">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="rounded-3xl border border-slate-200 dark:border-border/80 bg-white dark:bg-card/75 backdrop-blur-xl p-8 sm:p-12 lg:p-14 shadow-lg hover:shadow-2xl hover:border-emerald-500/40 transition-all duration-300 relative overflow-hidden text-center max-w-4xl mx-auto">
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />

            <div className="space-y-4 max-w-2xl mx-auto">
              <Badge variant="emerald" className="mx-auto">
                <Sparkles className="w-3.5 h-3.5 mr-1" />
                {t.ctaBanner.badge}
              </Badge>

              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-foreground tracking-tight">
                {t.ctaBanner.title} <span className="gradient-text">{t.ctaBanner.highlight}</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-muted-foreground leading-relaxed">
                {t.ctaBanner.subtitle}
              </p>

              {/* Main Action CTAs with Running Rainbow Border */}
              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="w-full sm:w-auto">
                  <RainbowButton
                    variant="emerald"
                    className="w-full sm:w-auto"
                    innerClassName="w-full sm:w-auto px-7"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t.ctaBanner.button}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </RainbowButton>
                </Link>

                <RainbowButton
                  variant="glass"
                  onClick={openCvModal}
                  className="w-full sm:w-auto"
                  innerClassName="w-full sm:w-auto px-7 border border-slate-200 dark:border-border/70 text-slate-900 dark:text-foreground"
                >
                  <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{t.ctaBanner.viewCvBtn}</span>
                </RainbowButton>
              </div>

              {/* Direct Quick Badges */}
              <div className="pt-6 border-t border-slate-200 dark:border-border/60 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 dark:text-muted-foreground">
                <a
                  href="mailto:minhngothien1@gmail.com"
                  className="flex items-center gap-2 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-emerald-600 dark:text-cyan-400" />
                  <span>minhngothien1@gmail.com</span>
                </a>
                <span className="hidden sm:inline opacity-40">•</span>
                <a
                  href="tel:0987176434"
                  className="flex items-center gap-2 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-600 dark:text-cyan-400" />
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
