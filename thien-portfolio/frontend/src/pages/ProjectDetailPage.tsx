import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Building2,
  Calendar,
  CheckCircle2,
  TrendingUp,
  Layers,
  Cpu,
  ArrowRight,
  MessageSquare,
  Bot,
  QrCode,
  Globe2,
} from "lucide-react";
import { GithubIcon } from "../components/ui/Icons";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { usePortfolioStore } from "../stores/usePortfolioStore";
import { PROJECTS_DATA } from "../data/portfolioData";
import type { ProjectItem } from "../types";

const getCategoryIcon = (category: string) => {
  if (category.toLowerCase().includes("ai")) return Bot;
  if (category.toLowerCase().includes("qr")) return QrCode;
  if (category.toLowerCase().includes("enterprise")) return Cpu;
  return Globe2;
};

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const language = usePortfolioStore((s) => s.language);
  const isEn = language === "en";

  const currentIndex = PROJECTS_DATA.findIndex(
    (p) => p.id === id || p.slug === id
  );
  const project: ProjectItem | undefined = PROJECTS_DATA[currentIndex];

  if (!project) {
    return (
      <div className="pt-32 pb-24 min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-foreground mb-4">
          {isEn ? "Project Not Found" : "Không Tìm Thấy Dự Án"}
        </h2>
        <p className="text-slate-600 dark:text-muted-foreground mb-8 max-w-md">
          {isEn
            ? "The requested project could not be found or has been moved."
            : "Dự án bạn tìm kiếm không tồn tại hoặc đã được cập nhật lại đường dẫn."}
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-lg shadow-emerald-500/25 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isEn ? "Back to Projects List" : "Quay lại danh sách dự án"}</span>
        </Link>
      </div>
    );
  }

  const prevProject =
    currentIndex > 0 ? PROJECTS_DATA[currentIndex - 1] : PROJECTS_DATA[PROJECTS_DATA.length - 1];
  const nextProject =
    currentIndex < PROJECTS_DATA.length - 1 ? PROJECTS_DATA[currentIndex + 1] : PROJECTS_DATA[0];

  const IconComp = getCategoryIcon(project.category);

  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Top Breadcrumb & Back Bar */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-border/60">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{isEn ? "Back to All Projects" : "Quay lại danh sách dự án"}</span>
            </Link>
          </div>
        </ScrollReveal>

        {/* Project Hero Header */}
        <ScrollReveal animation="fade-up">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-600 text-white shadow-sm inline-flex items-center gap-1.5">
                <IconComp className="w-3.5 h-3.5" />
                <span>{project.category}</span>
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-card/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-border/60 inline-flex items-center gap-1.5 shadow-xs">
                <Building2 className="w-3.5 h-3.5 text-emerald-600 dark:text-cyan-400" />
                <span>{project.company || "AITC"}</span>
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-card/90 border border-slate-200 dark:border-border/60 inline-flex items-center gap-1.5 shadow-xs">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>{project.period}</span>
              </span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white leading-tight sm:leading-snug lg:leading-[1.2] pb-1">
              {project.title}
            </h1>

            {project.tagline && (
              <p className="text-base sm:text-lg font-medium text-emerald-700 dark:text-emerald-400 italic">
                {project.tagline.startsWith('"') ? project.tagline : `"${project.tagline}"`}
              </p>
            )}

            {/* Action Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {project.demo_url && (
                <a
                  href={project.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/25 hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{isEn ? "Live Demo" : "Xem trang trực tiếp"}</span>
                </a>
              )}

              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-xl font-semibold text-xs sm:text-sm border border-slate-300 dark:border-border/80 bg-white dark:bg-card/80 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-card transition-all shadow-sm active:scale-95 cursor-pointer"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>{isEn ? "GitHub Source" : "Mã nguồn GitHub"}</span>
                </a>
              )}

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-xl font-semibold text-xs sm:text-sm border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 transition-all shadow-xs cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isEn ? "Discuss This Project" : "Thảo luận về dự án"}</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Big Project Showcase Image */}
        {project.image_url && (
          <ScrollReveal animation="fade-up">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-border/70 shadow-2xl bg-slate-900 group">
              <img
                src={project.image_url}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-64 sm:h-96 md:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white pointer-events-none">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-emerald-400/30">
                  Production Enterprise System
                </span>
                <span className="text-xs font-mono text-slate-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  {project.company} • {project.period}
                </span>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Section 1: Overview & Solution */}
        <ScrollReveal animation="fade-up">
          <div className="rounded-3xl border border-slate-200 dark:border-border/70 bg-white/95 dark:bg-card/75 backdrop-blur-xl p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-white/5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <h2 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                {isEn ? "Project Overview & Engineering Solution" : "Tổng quan bối cảnh & Giải pháp kỹ thuật"}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Section 2: Technical Metrics & Key Achievements */}
        {project.metrics && project.metrics.length > 0 && (
          <ScrollReveal animation="fade-up">
            <div className="rounded-3xl border border-emerald-200 dark:border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 backdrop-blur-xl p-6 sm:p-8 space-y-5 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider">
                <TrendingUp className="w-5 h-5" />
                <span>{isEn ? "Performance Impact & Technical Metrics" : "Chỉ số hiệu năng & Thành tựu kỹ thuật"}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border border-emerald-300/60 dark:border-emerald-500/20 bg-white/90 dark:bg-card/90 shadow-xs flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug">
                      {metric}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Section 3: Deep Architecture & Implementation Features */}
        {project.features && project.features.length > 0 && (
          <ScrollReveal animation="fade-up">
            <div className="rounded-3xl border border-slate-200 dark:border-border/70 bg-white/95 dark:bg-card/75 backdrop-blur-xl p-6 sm:p-8 space-y-5 shadow-sm">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-white/5">
                <div className="w-9 h-9 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <h2 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                  {isEn ? "Core Architecture & Implementation Highlights" : "Kiến trúc hệ thống & Điểm nhấn triển khai"}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] flex items-start gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 shrink-0 mt-2 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Section 4: Tech Stack Breakdown */}
        <ScrollReveal animation="fade-up">
          <div className="rounded-3xl border border-slate-200 dark:border-border/70 bg-white/95 dark:bg-card/75 backdrop-blur-xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h2 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white uppercase tracking-wider">
              {isEn ? "Full Technology Stack" : "Công nghệ & Thư viện sử dụng"}
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {project.tech_stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-xl font-mono text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30 shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Project-to-Project Navigation */}
        <ScrollReveal animation="fade-up">
          <div className="pt-6 border-t border-slate-200 dark:border-border/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to={`/projects/${prevProject.id}`}
              className="p-5 rounded-2xl border border-slate-200 dark:border-border/60 bg-white/90 dark:bg-card/70 hover:border-emerald-500/50 transition-all flex items-center justify-between group shadow-xs"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{isEn ? "Previous Project" : "Dự án trước"}</span>
                </span>
                <span className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                  {prevProject.title}
                </span>
              </div>
            </Link>

            <Link
              to={`/projects/${nextProject.id}`}
              className="p-5 rounded-2xl border border-slate-200 dark:border-border/60 bg-white/90 dark:bg-card/70 hover:border-emerald-500/50 transition-all flex items-center justify-between group shadow-xs text-right"
            >
              <div className="space-y-1 ml-auto">
                <span className="text-[11px] font-mono text-slate-400 flex items-center justify-end gap-1">
                  <span>{isEn ? "Next Project" : "Dự án tiếp theo"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                  {nextProject.title}
                </span>
              </div>
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};
