import React from "react";
import { Briefcase, GraduationCap, Calendar, CheckCircle2, Building2 } from "lucide-react";
import { Badge } from "../ui/Badge";
import { usePortfolioStore } from "../../stores/usePortfolioStore";
import { ScrollReveal } from "../ui/ScrollReveal";
import type { ExperienceItem } from "../../types";

interface JourneyTimelineProps {
  journey?: ExperienceItem[];
}

export const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ journey }) => {
  const language = usePortfolioStore((s) => s.language);
  const isEn = language === "en";

  const workExp = journey?.find((j) => j.type === "work");
  const eduExp = journey?.find((j) => j.type === "education");

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-muted/10 border-t border-border/40">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Title */}
        <ScrollReveal animation="fade-up">
          <div className="space-y-3 mb-20 text-center max-w-3xl mx-auto">
            <Badge variant="emerald" className="mx-auto">
              {isEn ? "Career Timeline" : "Timeline Sự Nghiệp"}
            </Badge>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-foreground">
              {isEn ? "Professional " : "Hành Trình "}<span className="gradient-text">{isEn ? "Journey & Pedigree" : "Kinh Nghiệm & Học Tập"}</span>
            </h2>
            <p className="text-base text-slate-600 dark:text-muted-foreground leading-relaxed">
              {isEn
                ? "Milestones from foundational academic education at HUTECH to production enterprise solutions at AITC."
                : "Dấu ấn từ môi trường giảng đường đại học đến môi trường doanh nghiệp thực chiến tại AITC."}
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
                      {workExp?.company_or_institution || "AITC - Asia Information Technology Center"}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-cyan-400 md:justify-end">
                      <Building2 className="w-4 h-4" />
                      <span>{workExp?.role_or_degree || "Full-Stack Developer"}</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-muted-foreground">
                      {workExp?.location || "TP. Hồ Chí Minh"} • {isEn ? "Enterprise IT Solutions" : "Doanh nghiệp Công Nghệ Thông Tin"}
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Side (Desktop: Detailed Achievements) */}
              <div className="pl-12 md:pl-12 md:w-1/2">
                <ScrollReveal animation="fade-left">
                  <div className="rounded-2xl border border-slate-200 dark:border-border/80 bg-white dark:bg-card/70 backdrop-blur-md p-6 space-y-4 hover:border-emerald-500/40 transition-all duration-300 shadow-sm hover:shadow-md">
                    <p className="text-sm text-slate-800 dark:text-foreground/90 leading-relaxed font-medium">
                      {isEn
                        ? "At AITC, I spearheaded engineering across mission-critical enterprise systems:"
                        : (workExp?.summary || "Tại AITC, tôi khẳng định năng lực của một Full-Stack Developer qua việc xây dựng và vận hành các hệ sinh thái phần mềm doanh nghiệp ổn định:")}
                    </p>

                    <ul className="space-y-2.5 text-xs text-slate-600 dark:text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong className="text-slate-900 dark:text-foreground">Tân Hòa Chatbot Dashboard:</strong> {isEn ? "Engineered real-time analytics dashboard visualizing conversation flows and automated anomaly detection." : "Thiết kế bảng điều khiển dashboard thời gian thực giúp trực quan hóa logs tương tác và phát hiện cảnh báo bất thường."}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong className="text-slate-900 dark:text-foreground">AITC Official Portal:</strong> {isEn ? "Delivered official company web application (aitc-jsc.com) with top-tier SEO and responsive performance." : "Triển khai website chính thức (aitc-jsc.com) với hiệu ứng JavaScript cao cấp, chuẩn SEO và tương thích tối đa."}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong className="text-slate-900 dark:text-foreground">QR CODE - ECARD:</strong> {isEn ? "Guest management platform automating personalized digital greeting cards and instant check-in verification." : "Nền tảng quản lý khách sự kiện, tự động hóa tạo thiệp điện tử cá nhân hóa và popup check-in thông minh."}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong className="text-slate-900 dark:text-foreground">Hardware Lifecycle Manager:</strong> {isEn ? "Enterprise asset lifecycle tracking with AI-powered spec matching and intelligent spreadsheet parsing." : "Hệ thống quản lý vòng đời thiết bị, công cụ so sánh thông số phần cứng và lọc dữ liệu Excel thông minh bằng AI."}</span>
                      </li>
                    </ul>

                    {/* Tech tags */}
                    <div className="pt-2 flex flex-wrap gap-1.5 border-t border-slate-200 dark:border-border/50">
                      {(workExp?.tech_stack || ["React", "FastAPI", "Python", "MongoDB", "Node.js", "Docker", "Tailwind CSS", "WordPress"]).map((t) => (
                        <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-secondary text-slate-700 dark:text-secondary-foreground border border-slate-200 dark:border-border/40">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Milestone 2: University Education */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 group">
              {/* Center Dot Indicator */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-indigo-500 dark:border-indigo-400 bg-white dark:bg-background flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)] z-20 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </div>

              {/* Left Side (Desktop: Detailed Studies) */}
              <div className="pl-12 md:pl-0 md:w-1/2 md:pr-12 order-2 md:order-1">
                <ScrollReveal animation="fade-right">
                  <div className="rounded-2xl border border-slate-200 dark:border-border/80 bg-white dark:bg-card/70 backdrop-blur-md p-6 space-y-4 hover:border-indigo-500/40 transition-all duration-300 shadow-sm hover:shadow-md">
                    <p className="text-sm text-slate-800 dark:text-foreground/90 leading-relaxed font-medium">
                      {isEn
                        ? "Rigorous Computer Science & Software Engineering curriculum equipping disciplined problem solving:"
                        : (eduExp?.summary || "Chương trình đào tạo Kỹ thuật Phần mềm chính quy trang bị tư duy giải quyết vấn đề có hệ thống và phương pháp luận kỹ thuật phần mềm chuẩn:")}
                    </p>

                    <ul className="space-y-2 text-xs text-slate-600 dark:text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <span>{isEn ? "Proficient in Algorithms, Data Structures, OOP principles with C#, Java, and Python." : "Thành thạo cấu trúc dữ liệu, giải thuật, lập trình hướng đối tượng (OOP) với C#, Java và Python."}</span>
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
                      {(eduExp?.tech_stack || ["Software Engineering", "OOP", "Data Structures", "Algorithms", "C#", "Java", "Python"]).map((t) => (
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
                      {eduExp?.company_or_institution || "University of Technology Ho Chi Minh City (HUTECH)"}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-semibold text-indigo-700 dark:text-indigo-400">
                      <GraduationCap className="w-4 h-4" />
                      <span>{eduExp?.role_or_degree || (isEn ? "Bachelor of Science in Software Engineering" : "Major: Software Engineering (Kỹ thuật phần mềm)")}</span>
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
