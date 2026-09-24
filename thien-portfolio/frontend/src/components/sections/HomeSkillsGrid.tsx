import React from "react";
import { Link } from "react-router-dom";
import { Code2, Zap, Database, Wrench, ArrowRight } from "lucide-react";
import { useT } from "../../stores/usePortfolioStore";
import { ScrollReveal } from "../ui/ScrollReveal";

interface SkillPill {
  name: string;
  level: "Thành thạo" | "Trung cấp" | "Sơ cấp";
  icon: string;
}

const LANGUAGES: SkillPill[] = [
  { name: "JavaScript", level: "Thành thạo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", level: "Thành thạo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Python", level: "Thành thạo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Java", level: "Trung cấp", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "C#", level: "Trung cấp", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
  { name: "PHP", level: "Trung cấp", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
];

const FRAMEWORKS: SkillPill[] = [
  { name: "React", level: "Thành thạo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "FastAPI", level: "Thành thạo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: "Node.js", level: "Thành thạo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: ".NET Core", level: "Trung cấp", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" },
  { name: "Spring Boot", level: "Trung cấp", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
  { name: "Tailwind CSS", level: "Thành thạo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "WordPress", level: "Thành thạo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" },
];

const DATABASES: SkillPill[] = [
  { name: "MongoDB", level: "Thành thạo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", level: "Thành thạo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "Redis", level: "Trung cấp", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
];

const TOOLS: SkillPill[] = [
  { name: "Docker", level: "Thành thạo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Git", level: "Thành thạo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "AI Multi-Agent", level: "Thành thạo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Postman", level: "Thành thạo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  { name: "Figma", level: "Trung cấp", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
];

export const HomeSkillsGrid: React.FC = () => {
  const t = useT();

  const renderLevelBadge = (level: SkillPill["level"]) => {
    if (level === "Thành thạo") {
      return (
        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-500/10 border-emerald-500/25 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20 px-2 py-0.5 rounded border whitespace-nowrap">
          {t.skills.proficient}
        </span>
      );
    }
    if (level === "Trung cấp") {
      return (
        <span className="text-[10px] font-bold text-blue-700 bg-blue-500/10 border-blue-500/25 dark:text-blue-400 dark:bg-blue-500/10 dark:border-blue-500/20 px-2 py-0.5 rounded border whitespace-nowrap">
          {t.skills.intermediate}
        </span>
      );
    }
    return (
      <span className="text-[10px] font-bold text-slate-700 bg-slate-100 border-slate-200 dark:text-muted-foreground dark:bg-muted/60 dark:border-border/40 px-2 py-0.5 rounded border whitespace-nowrap">
        {t.skills.beginner}
      </span>
    );
  };

  const renderSection = (title: string, icon: React.ReactNode, items: SkillPill[], delay: number) => (
    <ScrollReveal animation="fade-up" delay={delay} className="space-y-4">
      <div className="flex items-center gap-2.5 text-slate-900 dark:text-foreground font-bold text-lg sm:text-xl border-b border-border/60 pb-3">
        {icon}
        <h3>{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {items.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-slate-200/90 dark:border-border/60 bg-white/80 dark:bg-card/50 shadow-sm hover:bg-white dark:hover:bg-card hover:shadow-md hover:border-emerald-500/50 dark:hover:border-emerald-500/40 hover:-translate-y-0.5 transition-all duration-200 group cursor-default"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-200"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />
            <span className="text-sm font-semibold text-slate-800 dark:text-foreground/90">
              {skill.name}
            </span>
            {renderLevelBadge(skill.level)}
          </div>
        ))}
      </div>
    </ScrollReveal>
  );

  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden bg-background border-t border-border/40">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Block matching Xuan Quang Dev */}
        <ScrollReveal animation="fade-up">
          <div className="mb-14 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-foreground">
              {t.about.title} <span className="gradient-text">{t.about.highlight}</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-700 dark:text-muted-foreground leading-relaxed max-w-4xl">
              {t.about.subtitle}
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-muted-foreground/90 leading-relaxed max-w-4xl">
              {t.about.bio1}
            </p>

            {/* Level indicators legend */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 border border-emerald-500/25 dark:text-emerald-400 dark:border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                {t.skills.proficient}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-700 border border-blue-500/25 dark:text-blue-400 dark:border-blue-500/30">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                {t.skills.intermediate}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200 dark:bg-secondary dark:text-muted-foreground dark:border-border/50">
                <span className="w-2 h-2 rounded-full bg-slate-400" />
                {t.skills.beginner}
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Categorized Columns in 2x2 grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {renderSection(
            t.skills.langTitle,
            <Code2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
            LANGUAGES,
            100
          )}
          {renderSection(
            t.skills.frameworkTitle,
            <Zap className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
            FRAMEWORKS,
            200
          )}
          {renderSection(
            t.skills.dbTitle,
            <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
            DATABASES,
            300
          )}
          {renderSection(
            t.skills.toolsTitle,
            <Wrench className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
            TOOLS,
            400
          )}
        </div>

        {/* CTA to Dedicated Skills & About Page */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="mt-14 pt-8 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-slate-500 dark:text-muted-foreground">
              {t.about.philosophyText}
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-muted-foreground hover:text-emerald-600 dark:hover:text-foreground transition-colors"
              >
                <span>{t.about.detailsBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/skills"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-700 dark:text-cyan-400 hover:underline transition-colors"
              >
                <span>{t.about.skillsBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
