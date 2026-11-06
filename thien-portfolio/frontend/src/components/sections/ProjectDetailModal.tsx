import React, { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, TrendingUp, Layers, Building2 } from "lucide-react";
import { GithubIcon } from "../ui/Icons";
import { usePortfolioStore } from "../../stores/usePortfolioStore";
import type { ProjectItem } from "../../types";

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const language = usePortfolioStore((s) => s.language);
  const isEn = language === "en";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 dark:bg-background/85 backdrop-blur-xl transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog Card (Outer container with overflow-hidden to strictly clip scrollbars within rounded-3xl) */}
      <div className="relative w-full max-w-3xl max-h-[90vh] rounded-3xl border border-slate-200 dark:border-border/80 bg-white dark:bg-card/95 shadow-2xl flex flex-col z-10 animate-in zoom-in-95 duration-200 text-slate-900 dark:text-foreground overflow-hidden">
        
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 p-2 rounded-xl border border-slate-200 dark:border-border/60 bg-white/90 dark:bg-background/80 backdrop-blur-md text-slate-500 hover:text-slate-900 dark:text-muted-foreground dark:hover:text-foreground hover:border-emerald-500/50 transition-colors shadow-sm cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Inner Container with padded custom scrollbar */}
        <div className="overflow-y-auto max-h-[90vh] p-6 sm:p-8 space-y-6 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-300 dark:[&::-webkit-scrollbar-thumb]:bg-slate-700 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-emerald-500 pr-5 sm:pr-8">
          
          {/* Header Information */}
          <div className="space-y-3 pr-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-600 text-white shadow-sm">
                {project.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-muted-foreground bg-slate-100 dark:bg-muted/50 px-2.5 py-0.5 rounded-full">
                <Building2 className="w-3.5 h-3.5 text-emerald-600 dark:text-cyan-400" />
                <span>{project.company || "AITC"}</span>
                <span>•</span>
                <span>{project.period}</span>
              </div>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-foreground">
              {project.title}
            </h3>
            <p className="text-sm font-semibold text-emerald-700 dark:text-cyan-400">
              {project.tagline}
            </p>
          </div>

          {/* Project Image */}
          {project.image_url && (
            <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden border border-slate-200 dark:border-border/60 shadow-xs">
              <img
                src={project.image_url}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>
          )}

          {/* Narrative Description */}
          <div className="space-y-2">
            <h4 className="font-display font-semibold text-xs font-mono text-emerald-700 dark:text-cyan-400 uppercase tracking-wider">
              {isEn ? "Project Overview & Engineering Solution" : "Tổng quan dự án & Giải pháp"}
            </h4>
            <p className="text-sm text-slate-600 dark:text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Highlight Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="space-y-3 rounded-2xl border border-emerald-200 dark:border-cyan-500/20 bg-emerald-50/70 dark:bg-cyan-500/5 p-4 sm:p-5">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-cyan-400 font-mono text-xs font-semibold uppercase">
                <TrendingUp className="w-4 h-4" />
                <span>{isEn ? "Impact & Technical Metrics" : "Chỉ số hiệu quả & Thành tựu kỹ thuật"}</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-foreground/90">
                {project.metrics.map((metric, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Features / Architecture Highlights */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-display font-semibold text-xs font-mono text-emerald-700 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                <span>{isEn ? "Key Architectural Features & Capabilities" : "Tính năng kỹ thuật & Điểm nhấn triển khai"}</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl border border-slate-200 dark:border-border/60 bg-slate-50 dark:bg-muted/20 text-xs text-slate-700 dark:text-foreground/90 flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-cyan-400 shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Stack Full Tag List */}
          <div className="space-y-2">
            <h4 className="font-display font-semibold text-xs font-mono text-slate-500 dark:text-muted-foreground uppercase tracking-wider">
              {isEn ? "Full Technology Stack:" : "Công nghệ & Thư viện sử dụng:"}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech_stack
                .filter((tech) => !tech.toLowerCase().includes("zustand") && !tech.toLowerCase().includes("tanstack"))
                .map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 dark:bg-secondary text-slate-700 dark:text-secondary-foreground border border-slate-200 dark:border-border/40 font-medium"
                  >
                    {tech}
                  </span>
                ))}
            </div>
          </div>

          {/* Modal Footer CTAs */}
          <div className="pt-4 border-t border-slate-200 dark:border-border/60 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {project.demo_url && (
                <a
                  href={project.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <span>{isEn ? "Live Demo" : "Xem trang trực tiếp"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <a
                href={project.github_url || "https://github.com/phuocthien412"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border border-slate-300 dark:border-border/80 bg-white dark:bg-card text-slate-800 dark:text-foreground hover:bg-slate-100 transition-all shadow-sm cursor-pointer"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>{isEn ? "Source Code" : "Mã nguồn GitHub"}</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-muted-foreground hover:text-slate-900 dark:hover:text-foreground transition-colors cursor-pointer"
            >
              {isEn ? "Close" : "Đóng"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
