import React, { useState } from "react";
import { Cpu, Terminal, Database, Wrench, Sparkles, Layers, CheckCircle2 } from "lucide-react";
import { Badge } from "../ui/Badge";
import { usePortfolioStore } from "../../stores/usePortfolioStore";
import { ScrollReveal } from "../ui/ScrollReveal";
import type { SkillCategory, SkillItem } from "../../types";

interface SkillsMatrixProps {
  skillsCategories?: SkillCategory[];
}

export const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ skillsCategories }) => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const language = usePortfolioStore((s) => s.language);
  const isEn = language === "en";

  const categories = [
    { id: "all", label: isEn ? "All Skills" : "Tất cả kỹ năng", icon: Sparkles },
    { id: "languages", label: isEn ? "Languages" : "Ngôn ngữ", icon: Terminal },
    { id: "frontend", label: isEn ? "Frontend & UI" : "Frontend & UI", icon: Layers },
    { id: "backend", label: isEn ? "Backend & API" : "Backend & API", icon: Cpu },
    { id: "database", label: isEn ? "Databases" : "Cơ sở dữ liệu", icon: Database },
    { id: "devops_tools", label: isEn ? "DevOps & AI" : "DevOps & AI", icon: Wrench },
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
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          {isEn ? "Proficient" : "Thành thạo"}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-200 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/30">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
        {isEn ? "Intermediate" : "Trung cấp"}
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
              {isEn ? "Technology Stack" : "Stack Công Nghệ"}
            </Badge>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-foreground">
              {isEn ? "Comprehensive " : "Ma Trận Kỹ Năng "}<span className="gradient-text">{isEn ? "Skill Matrix" : "Chuyên Sâu"}</span>
            </h2>
            <p className="text-base text-slate-600 dark:text-muted-foreground leading-relaxed">
              {isEn
                ? "Technology stack mastered, hardened, and actively deployed across enterprise systems."
                : "Hệ thống công nghệ được tôi vận hành, làm chủ và liên tục nâng cấp trong các dự án thực tế."}
            </p>

            {/* Level Legend */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                {isEn ? "Proficient (Advanced / Production)" : "Thành thạo (Advanced / Production)"}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 dark:bg-cyan-500/10 dark:text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                {isEn ? "Intermediate (Applied / Competent)" : "Trung cấp (Proficient / Applied)"}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill, idx) => (
            <ScrollReveal key={`${skill.name}-${idx}`} animation="fade-up" delay={idx * 60}>
              <div
                className="rounded-2xl border border-slate-200 dark:border-border/70 bg-white dark:bg-card/60 backdrop-blur-md p-5 flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-md transition-all duration-300 group hover:-translate-y-1 shadow-sm h-full"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-muted/60 border border-slate-200 dark:border-border/50 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <span className="font-mono font-bold text-xs text-emerald-700 dark:text-cyan-400">
                          {skill.name.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-foreground group-hover:text-emerald-700 dark:group-hover:text-cyan-400 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-[10px] font-mono text-slate-500 dark:text-muted-foreground uppercase">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                    {getLevelBadge(skill.level)}
                  </div>

                  {skill.description && (
                    <p className="text-xs text-slate-600 dark:text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  )}
                </div>

                {/* Bottom tag indicator */}
                <div className="pt-3 mt-3 border-t border-slate-200 dark:border-border/40 flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-muted-foreground">
                  <span className="flex items-center gap-1 text-emerald-700 dark:text-cyan-400/80 font-medium">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                  <span>{skill.category_title || skill.category}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
