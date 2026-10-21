import React, { useState } from "react";
import {
  ExternalLink,
  Layers,
  CircleCheck,
  Building2,
  Bot,
  Cpu,
  QrCode,
  Globe2,
  RotateCw,
  RotateCcw,
} from "lucide-react";
import { GithubIcon } from "../ui/Icons";
import { useT } from "../../stores/usePortfolioStore";
import type { ProjectItem } from "../../types";

interface ProjectFlipCardProps {
  project: ProjectItem;
  index: number;
  onSelectProject: (p: ProjectItem) => void;
}

const getCategoryIcon = (category: string) => {
  if (category.toLowerCase().includes("ai")) return Bot;
  if (category.toLowerCase().includes("qr")) return QrCode;
  if (category.toLowerCase().includes("enterprise")) return Cpu;
  return Globe2;
};

export const ProjectFlipCard: React.FC<ProjectFlipCardProps> = ({
  project,
  index,
  onSelectProject,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const t = useT();
  const IconComp = getCategoryIcon(project.category);

  return (
    <div
      className="perspective-1000 h-[570px] sm:h-[590px] w-full group cursor-pointer select-none"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-3d transition-transform ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT FACE (MẶT TRƯỚC LÁ BÀI) */}
        <div className="glow-hover-card absolute inset-0 w-full h-full backface-hidden rounded-2xl border border-slate-200 dark:border-border/70 bg-white dark:bg-[#0c141d] flex flex-col shadow-sm hover:shadow-[0_15px_35px_rgba(16,185,129,0.2)] dark:hover:shadow-[0_0_35px_rgba(16,185,129,0.25)] hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300 overflow-hidden">
          {/* Top Image Preview */}
          <div className="relative w-full h-48 overflow-hidden rounded-t-2xl bg-slate-100 dark:bg-secondary/50 shrink-0">
            {project.image_url ? (
              <img
                src={project.image_url}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <IconComp className="w-12 h-12 opacity-40" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />

            {/* Top Badges */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-600 text-white shadow-sm">
                {project.category}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-white/95 dark:bg-slate-900/90 text-slate-800 dark:text-foreground shadow-sm">
                <Building2 className="w-3 h-3 text-emerald-600 dark:text-cyan-400" />
                {project.company || "AITC"}
              </span>
            </div>

            {/* Card Rank Pill */}
            <div className="absolute top-3 right-3 z-10">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-black/75 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                ★ #{index + 1}
              </span>
            </div>
          </div>

          {/* Front Body */}
          <div className="p-6 flex flex-col flex-1 justify-between">
            <div>
              {/* Category Icon Badge */}
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center mb-3">
                <IconComp className="w-5 h-5" />
              </div>

              {/* Project Title */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-foreground mb-1.5 leading-snug line-clamp-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>

              {/* Italic Tagline */}
              {project.tagline && (
                <p className="text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-2.5 italic line-clamp-1">
                  {project.tagline.startsWith('"') ? project.tagline : `"${project.tagline}"`}
                </p>
              )}

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-border/50">
                  {project.metrics.slice(0, 2).map((metric, mIdx) => (
                    <div key={mIdx} className="text-xs text-slate-700 dark:text-foreground/80 flex items-start gap-1.5">
                      <CircleCheck className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="leading-snug line-clamp-1">{metric}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Flip Prompt Footer Bar */}
            <div className="pt-3 border-t border-slate-100 dark:border-border/40 flex items-center justify-between mt-auto">
              <span className="text-[11px] font-mono text-slate-500 dark:text-muted-foreground">
                {project.period || "2025 - 2026"}
              </span>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                <RotateCw className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 animate-spin-slow" />
                <span>{t.projects.flipToBack}</span>
              </div>
            </div>
          </div>
        </div>

        {/* BACK FACE (MẶT SAU LÁ BÀI: KIẾN TRÚC & TÍNH NĂNG CHUYÊN SÂU) */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl border-2 border-emerald-500 dark:border-emerald-400/80 bg-slate-950 dark:bg-[#06120e] flex flex-col p-6 shadow-2xl shadow-emerald-500/20 text-white overflow-hidden justify-between">
          {/* Subtle Cyber Grid Background & Ambient Light */}
          <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

          {/* Back Header */}
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shrink-0">
                  <IconComp className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold block">
                    {project.category}
                  </span>
                  <h4 className="text-base font-bold text-white line-clamp-1">
                    {project.title}
                  </h4>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors border border-white/10 text-xs flex items-center gap-1 shrink-0"
                title={t.projects.flipToFront}
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-emerald-500/50 via-teal-500/20 to-transparent my-2.5" />

            <p className="text-[11px] font-mono text-emerald-300 font-semibold uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.projects.deepArchitecture}</span>
            </p>

            {/* Features Bullet List */}
            <div className="space-y-2 mb-4">
              {(project.features && project.features.length > 0
                ? project.features.slice(0, 4)
                : [
                    "Kiến trúc chịu tải cao & tối ưu độ trễ",
                    "Tích hợp AI phân tích & tự động hóa",
                    "Chuẩn hóa dữ liệu theo thời gian thực",
                    "Giao diện hiện đại & tương thích 100% thiết bị",
                  ]
              ).map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0 shadow-[0_0_8px_#34d399]" />
                  <span className="leading-snug">{feat}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="mb-4">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.tech_stack
                  .filter((tech) => !tech.toLowerCase().includes("zustand") && !tech.toLowerCase().includes("tanstack"))
                  .map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-950/70 border border-emerald-500/30 text-emerald-300"
                    >
                      {tech}
                    </span>
                  ))}
              </div>
            </div>
          </div>

          {/* Back Action Buttons */}
          <div className="relative z-10 pt-3 border-t border-white/10 flex items-center gap-2 mt-auto">
            {project.demo_url ? (
              <a
                href={project.demo_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 inline-flex items-center justify-center gap-1.5 h-10 px-3 rounded-xl text-xs sm:text-sm font-semibold bg-[#10b981] hover:bg-[#059669] text-white shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all active:scale-95"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{t.projects.liveDemo}</span>
              </a>
            ) : null}

            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectProject(project);
              }}
              className="flex-1 inline-flex items-center justify-center gap-1.5 h-10 px-3 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/50 text-emerald-300 hover:text-white transition-all active:scale-95"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{t.projects.viewDetails}</span>
            </button>

            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center justify-center h-10 px-3.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white transition-all active:scale-95"
                title="GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
