import React from "react";
import { Briefcase, GraduationCap, Calendar, CheckCircle2, Building2 } from "lucide-react";
import { Badge } from "../ui/Badge";
import { usePortfolioStore, useT } from "../../stores/usePortfolioStore";
import { ScrollReveal } from "../ui/ScrollReveal";
import type { ExperienceItem } from "../../types";

interface JourneyTimelineProps {
  journey?: ExperienceItem[];
}

export const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ journey }) => {
  const language = usePortfolioStore((s) => s.language);
  const isEn = language === "en";
  const t = useT();

  const workExp = journey?.find((j) => j.type === "work");
  const eduExp = journey?.find((j) => j.type === "education");

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-muted/10 border-t border-border/40">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Title */}
        <ScrollReveal animation="fade-up">
          <div className="space-y-3 mb-20 text-center max-w-3xl mx-auto">
            <Badge variant="emerald" className="mx-auto">
              {t.journey.sectionBadge}
            </Badge>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-foreground">
              {t.pages.journey.title} <span className="gradient-text">{t.pages.journey.highlight}</span>
            </h2>
            <p className="text-base text-slate-600 dark:text-muted-foreground leading-relaxed">
              {t.pages.journey.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute top-4 bottom-4 left-4 md:left-1/2 md:-translate-x-1/2 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-transparent opacity-40 pointer-events-none" />

          {/* Timeline Milestones */}
          <div className="space-y-16">
            
            {/* Milestone 1: AITC - Enterprise Experience */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 group">
              {/* Center Dot Indicator */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-emerald-500 dark:border-cyan-400 bg-white dark:bg-background flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)] z-20 group-hover:scale-110 transition-transform">
                <Briefcase className="w-4 h-4 text-emerald-600 dark:text-cyan-400" />
              </div>

              {/* Left Side (Desktop: Summary Card) */}
              <div className="pl-12 md:pl-0 md:w-1/2 md:pr-12 md:text-right">
                <ScrollReveal animation="fade-right">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/30">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{workExp?.period || "08/2025 – 06/2026"}</span>
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-foreground">
                      {isEn ? t.journey.companyAitc : (workExp?.company_or_institution || t.journey.companyAitc)}
                    </h3>
                    <div className="flex items-center gap-2 md:justify-end text-sm font-semibold text-emerald-700 dark:text-cyan-400">
                      <Building2 className="w-4 h-4" />
                      <span>{isEn ? t.journey.roleAitc : (workExp?.role_or_degree || t.journey.roleAitc)}</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-muted-foreground">
                      {workExp?.location || "TP. Hồ Chí Minh"} • {isEn ? "Full-Time Position" : "Chính thức"}
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Side (Desktop: Detailed Achievements Card) */}
              <div className="pl-12 md:pl-12 md:w-1/2">
                <ScrollReveal animation="fade-left">
                  <div className="rounded-3xl border border-slate-200 dark:border-border/70 bg-white dark:bg-card/70 backdrop-blur-xl p-6 sm:p-7 space-y-4 hover:border-emerald-500/50 hover:shadow-lg transition-all shadow-sm">
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-muted-foreground leading-relaxed">
                      {workExp?.summary || t.journey.descAitc}
                    </p>

                    {/* Highlights List */}
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span>{isEn ? "Engineered real-time logs dashboard with sub-second latency and automated data filtering." : "Xây dựng Dashboard giám sát log thời gian thực với độ trễ phản hồi cực thấp."}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span>{isEn ? "Deployed 4 core enterprise solutions: AITC Portal, QR Code E-Card, Asset Management." : "Trực tiếp thiết kế và triển khai 4 giải pháp: Website AITC, E-Card QR Code, Hệ thống quản lý thiết bị."}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span>{isEn ? "Maintained strict Clean Code, type-safety, and query optimization on MongoDB/MySQL." : "Tập trung chuẩn hóa Clean Code, tối ưu truy vấn cơ sở dữ liệu MongoDB/MySQL và quy trình Docker CI/CD."}</span>
                      </li>
                    </ul>

                    {/* Tech Stack Chips */}
                    <div className="pt-2 flex flex-wrap gap-1.5 border-t border-slate-200 dark:border-border/50">
                      {(workExp?.tech_stack || ["React", "FastAPI", "Python", "MongoDB", "MySQL", "Docker", "Tailwind CSS"]).map((t) => (
                        <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-muted text-slate-700 dark:text-muted-foreground border border-slate-200 dark:border-border/40">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Milestone 2: University Formal Education */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 group">
              {/* Center Dot Indicator */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-indigo-500 bg-white dark:bg-background flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)] z-20 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </div>

              {/* Left Side (Desktop: Detailed Education Card) */}
              <div className="pl-12 md:pl-0 md:w-1/2 md:pr-12 order-2 md:order-1">
                <ScrollReveal animation="fade-right">
                  <div className="rounded-3xl border border-slate-200 dark:border-border/70 bg-white dark:bg-card/70 backdrop-blur-xl p-6 sm:p-7 space-y-4 hover:border-indigo-500/50 hover:shadow-lg transition-all shadow-sm">
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-muted-foreground leading-relaxed">
                      {eduExp?.summary || t.journey.descEdu}
                    </p>

                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <span>{isEn ? "Core foundations in OOP, Data Structures, Algorithms, Software Architectures (Java, C#, JavaScript, PHP)." : "Nền tảng vững chắc về OOP, cấu trúc dữ liệu, giải thuật và kiến trúc phần mềm (Java, C#, JavaScript, PHP)."}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <span>{isEn ? "Relational (MySQL) and Document-based (MongoDB) database design, concurrency and network programming." : "Thiết kế cơ sở dữ liệu quan hệ (MySQL) và phi quan hệ (MongoDB), lập trình mạng và phân tán."}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <span>{isEn ? "Agile/Scrum workflows, automated testing frameworks, CI/CD pipelines, and Clean Architecture standards." : "Áp dụng quy trình Agile/Scrum, kiểm thử tự động, CI/CD và chuẩn hóa Clean Architecture."}</span>
                      </li>
                    </ul>

                    <div className="pt-2 flex flex-wrap gap-1.5 border-t border-slate-200 dark:border-border/50">
                      {(eduExp?.tech_stack || ["Software Engineering", "OOP", "Data Structures", "Algorithms", "Java", "C#", "JavaScript", "HTML", "PHP"]).map((t) => (
                        <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-secondary text-slate-700 dark:text-secondary-foreground border border-slate-200 dark:border-border/40">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Side (Desktop: Institution Header) */}
              <div className="pl-12 md:pl-12 md:w-1/2 order-1 md:order-2">
                <ScrollReveal animation="fade-left">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/30">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{eduExp?.period || "2021 – 2025"}</span>
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-foreground">
                      {isEn ? t.journey.schoolEdu : (eduExp?.company_or_institution || t.journey.schoolEdu)}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-semibold text-indigo-700 dark:text-indigo-400">
                      <GraduationCap className="w-4 h-4" />
                      <span>{isEn ? t.journey.roleEdu : (eduExp?.role_or_degree || t.journey.roleEdu)}</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-muted-foreground">
                      {eduExp?.location || "TP. Hồ Chí Minh"} • {isEn ? "Regular Degree Program • Graduated 2025" : "Hệ Cử nhân chính quy • Tốt nghiệp 2025"}
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
