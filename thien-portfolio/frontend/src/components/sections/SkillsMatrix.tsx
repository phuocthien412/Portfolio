import React, { useState } from "react";
import { Terminal, Database, Wrench, Sparkles, Layers, CheckCircle2 } from "lucide-react";
import { Badge } from "../ui/Badge";
import { useT, usePortfolioStore } from "../../stores/usePortfolioStore";
import { ScrollReveal } from "../ui/ScrollReveal";
import type { SkillCategory, SkillItem } from "../../types";

const SKILL_ICONS: Record<string, string> = {
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  FastAPI: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  ".NET Core": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
  "ASP.NET Core": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
  "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  WordPress: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
  "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  Redis: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  Postman: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
};

interface SkillsMatrixProps {
  skillsCategories?: SkillCategory[];
}

export const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ skillsCategories }) => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const language = usePortfolioStore((s) => s.language);
  const isEn = language === "en";
  const t = useT();

  const categories = [
    { id: "all", label: isEn ? "All Skills" : "Tất cả kỹ năng", icon: Sparkles },
    { id: "languages", label: t.skills.langTitle, icon: Terminal },
    { id: "framework", label: t.skills.frameworkTitle, icon: Layers },
    { id: "database", label: t.skills.dbTitle, icon: Database },
    { id: "devops_tools", label: t.skills.toolsTitle, icon: Wrench },
  ];

  // Flatten or filter
  const allSkills: (SkillItem & { category_title?: string })[] = [];
  skillsCategories?.forEach((cat) => {
    cat.skills.forEach((skill) => {
      allSkills.push({ ...skill, category_title: cat.title });
    });
  });

  const filteredSkills = activeTab === "all"
    ? allSkills
    : allSkills.filter((s) => {
        const cat = skillsCategories?.find((c) => c.category_id === activeTab);
        return cat?.skills.some((item) => item.name === s.name);
      });

  const getLevelBadge = (level: string) => {
    if (level === "Thành thạo" || level === "Proficient") {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-500/40 whitespace-nowrap shrink-0 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
          {t.skills.proficient}
        </span>
      );
    }
    if (level === "Trung cấp" || level === "Intermediate") {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-200 dark:bg-cyan-500/15 dark:text-cyan-300 dark:border-cyan-500/40 whitespace-nowrap shrink-0 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
          {t.skills.intermediate}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200 dark:bg-secondary dark:text-muted-foreground dark:border-border/50 whitespace-nowrap shrink-0 select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
        {t.skills.beginner}
      </span>
    );
  };

  return (
    <section id="skills" className="py-12 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="space-y-3 mb-12 text-center max-w-3xl mx-auto">
            <Badge variant="emerald" className="mx-auto">
              {t.skills.sectionBadge}
            </Badge>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-foreground">
              {t.pages.skills.title} <span className="gradient-text">{t.pages.skills.highlight}</span>
            </h2>
            <p className="text-base text-slate-600 dark:text-muted-foreground leading-relaxed">
              {t.pages.skills.subtitle}
            </p>

            {/* Level Legend */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                {t.skills.proficient} (Advanced / Production)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 dark:bg-cyan-500/10 dark:text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                {t.skills.intermediate} (Competent / Applied)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 dark:bg-secondary dark:text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-slate-400" />
                {t.skills.beginner} (Foundational)
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/25 scale-105"
                      : "bg-white dark:bg-card/70 border border-slate-200 dark:border-border/60 text-slate-700 dark:text-foreground/80 hover:border-emerald-500/40 hover:text-emerald-700 dark:hover:text-cyan-400 shadow-sm"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Skills Grid with Staggered ScrollReveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => {
            const iconUrl = SKILL_ICONS[skill.name] || (skill.icon ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-original.svg` : null);
            return (
              <ScrollReveal key={`${skill.name}-${idx}`} animation="fade-up" delay={idx * 30}>
                <div
                  className="glow-hover-card rounded-2xl border border-slate-200 dark:border-border/70 bg-white dark:bg-card/75 backdrop-blur-md p-5 flex flex-col justify-between shadow-sm h-full"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-muted/60 border border-slate-200 dark:border-border/50 flex items-center justify-center p-2.5 shrink-0 group-hover:scale-110 group-hover:border-emerald-500/40 transition-all shadow-sm">
                          {iconUrl ? (
                            <img
                              src={iconUrl}
                              alt={skill.name}
                              className="w-6 h-6 object-contain"
                              onError={(e) => {
                                (e.target as HTMLElement).style.display = "none";
                              }}
                            />
                          ) : (
                            <span className="font-mono font-bold text-xs text-emerald-700 dark:text-cyan-400">
                              {skill.name.slice(0, 2).toUpperCase()}
                            </span>
                          )}
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-bold text-base text-slate-900 dark:text-foreground group-hover:text-emerald-700 dark:group-hover:text-cyan-400 transition-colors whitespace-nowrap">
                            {skill.name}
                          </h4>
                          <span className="text-[10px] font-mono text-slate-500 dark:text-muted-foreground uppercase block">
                            {skill.category}
                          </span>
                        </div>
                      </div>
                      <div className="shrink-0">
                        {getLevelBadge(skill.level)}
                      </div>
                    </div>

                    {skill.description && (
                      <p className="text-xs text-slate-600 dark:text-muted-foreground leading-relaxed line-clamp-3">
                        {skill.description}
                      </p>
                    )}
                  </div>

                  {/* Bottom tag indicator */}
                  <div className="pt-3 mt-3 border-t border-slate-200 dark:border-border/40 flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-muted-foreground">
                    <span className="flex items-center gap-1 text-emerald-700 dark:text-cyan-400/80 font-medium whitespace-nowrap shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      {t.pages.common.verified}
                    </span>
                    <span className="truncate ml-2 text-right">{skill.category_title || skill.category}</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
