import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare } from "lucide-react";
import { ProjectsShowcase } from "../components/sections/ProjectsShowcase";
import { useT } from "../stores/usePortfolioStore";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { useProjects } from "../hooks/usePortfolioData";

export const ProjectsPage: React.FC = () => {
  const { data: projects } = useProjects();
  const t = useT();

  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Page Header */}
        <ScrollReveal animation="fade-up">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-cyan-400 uppercase tracking-widest">
              <Link to="/" className="hover:underline">{t.pages.common.home}</Link>
              <span>/</span>
              <span className="text-slate-900 dark:text-foreground">{t.nav.projects}</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-foreground tracking-tight">
              {t.pages.projects.title} <span className="gradient-text">{t.pages.projects.highlight}</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-muted-foreground leading-relaxed">
              {t.pages.projects.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Full Interactive Projects Showcase */}
        <ProjectsShowcase projects={projects} />

        {/* Bottom CTA */}
        <ScrollReveal animation="fade-up">
          <div className="pt-8 border-t border-slate-200 dark:border-border/60 flex flex-wrap items-center justify-between gap-4">
            <Link to="/contact">
              <button className="inline-flex items-center gap-2 h-11 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/25 hover:shadow-lg transition-all">
                <MessageSquare className="w-4 h-4" />
                <span>{t.pages.projects.contactBtn}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </Link>
            <Link to="/journey">
              <button className="inline-flex items-center gap-2 h-11 px-6 rounded-xl font-semibold text-sm border border-slate-300 dark:border-emerald-500/40 bg-white dark:bg-emerald-500/10 text-slate-800 dark:text-emerald-300 hover:bg-slate-100 transition-all shadow-sm">
                <span>{t.journey.viewFullBtn}</span>
              </button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
