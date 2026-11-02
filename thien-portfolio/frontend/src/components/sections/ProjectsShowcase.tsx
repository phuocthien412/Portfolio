import React, { useState } from "react";
import { usePortfolioStore } from "../../stores/usePortfolioStore";
import { ScrollReveal } from "../ui/ScrollReveal";
import { ProjectFlipCard } from "./ProjectFlipCard";
import type { ProjectItem } from "../../types";

interface ProjectsShowcaseProps {
  projects?: ProjectItem[];
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ projects }) => {
  const [filter, setFilter] = useState<string>("all");
  const language = usePortfolioStore((s) => s.language);
  const isEn = language === "en";

  const filterTabs = [
    { id: "all", label: isEn ? "All Projects" : "Tất cả dự án" },
    { id: "AI & Automation", label: isEn ? "AI & Automation" : "AI & Tự Động Hóa" },
    { id: "Enterprise System", label: isEn ? "Enterprise Systems" : "Hệ Thống Doanh Nghiệp" },
    { id: "Web Platform", label: isEn ? "Web Platforms" : "Web Nền Tảng" },
  ];

  const filteredProjects = !projects
    ? []
    : filter === "all"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-6 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Category Filters */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
            {filterTabs.map((tab) => {
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/25 scale-105"
                      : "bg-white dark:bg-card/70 border border-slate-200 dark:border-border/60 text-slate-700 dark:text-foreground/80 hover:border-emerald-500/40 hover:text-emerald-700 dark:hover:text-cyan-400 shadow-sm"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Projects Grid with detailMode="page" linking to separate project detail pages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} animation="fade-up" delay={idx * 100}>
              <ProjectFlipCard
                project={project}
                index={idx}
                detailMode="page"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
