import React from "react";
import { Link } from "react-router-dom";
import {
  Briefcase,
  GraduationCap,
  Sparkles,
  ChevronRight,
  Milestone,
  CheckCircle2,
  Building2,
  Calendar,
  Layers,
  Rocket,
} from "lucide-react";
import { Badge } from "../ui/Badge";
import { usePortfolioStore, useT } from "../../stores/usePortfolioStore";
import { ScrollReveal } from "../ui/ScrollReveal";

export const HomeJourneyTeaser: React.FC = () => {
  const t = useT();
  const language = usePortfolioStore((s) => s.language);
  const isEn = language === "en";

  const pipelineStages = [
    {
      step: "01",
      icon: GraduationCap,
      period: "2021 – 2025",
      badge: isEn ? "Academic Foundation" : "Nền Tảng Đại Học",
      title: isEn ? t.journey.roleEdu : "Cử nhân Kỹ thuật Phần mềm",
      institution: isEn ? t.journey.schoolEdu : "Đại học Công nghệ TP.HCM",
      keyTakeaways: isEn
        ? [
            "Data Structures & Algorithms Mastery",
            "Object-Oriented Software Design (OOP)",
            "Relational (MySQL) & NoSQL (MongoDB) Databases",
          ]
        : [
            "Cấu trúc dữ liệu & Tư duy Giải thuật",
            "Kiến trúc Hướng đối tượng (OOP)",
            "Cơ sở dữ liệu quan hệ (MySQL) & NoSQL (MongoDB)",
          ],
      techPills: ["Java", "PHP", "MongoDB", "MySQL", "OOP"],
      theme: {
        node: "from-indigo-600 to-cyan-500 text-white shadow-indigo-500/25",
        badge: "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20",
        borderHover: "hover:border-indigo-400/50 hover:shadow-indigo-500/10",
        activeDot: "bg-indigo-500",
      },
    },
    {
      step: "02",
      icon: Briefcase,
      period: "08/2025 – 06/2026",
      badge: isEn ? "Enterprise Production" : "Thực Chiến AITC",
      title: isEn ? t.journey.roleAitc : "Software Engineer • Full-Stack",
      institution: isEn ? t.journey.companyAitc : "Công ty CP Công nghệ AITC",
      keyTakeaways: isEn
        ? [
            "Shipped 4 Core Enterprise Solutions",
            "High-Throughput FastAPI & Real-time WebSockets",
            "Responsive React/TypeScript & Dockerized CI/CD",
          ]
        : [
            "Bàn giao 4 hệ thống phần mềm doanh nghiệp",
            "Backend FastAPI hiệu năng cao & Real-time Logs",
            "Giao diện React/TypeScript & Docker CI/CD",
          ],
      techPills: ["React", "FastAPI", "MongoDB", "Docker", "Tailwind CSS"],
      theme: {
        node: "from-emerald-600 to-teal-500 text-white shadow-emerald-500/25",
        badge: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
        borderHover: "hover:border-emerald-400/50 hover:shadow-emerald-500/10",
        activeDot: "bg-emerald-500",
      },
    },
    {
      step: "03",
      icon: Rocket,
      period: isEn ? "Present • Ready" : "Hiện Tại • Đang Mở",
      badge: isEn ? "Ready for Impact" : "Sẵn Sàng Bứt Phá",
      title: isEn ? "Software Engineer" : "Kỹ Sư Phần Mềm",
      institution: isEn ? "Open for Opportunities / Projects" : "Sẵn sàng đón nhận cơ hội mới",
      keyTakeaways: isEn
        ? [
            "Clean Code & Solid System Thinking",
            "High Adaptability & Fast Technology Adoption",
            "User-Centric & Business Value Mindset",
          ]
        : [
            "Chuẩn mực Clean Code & Tư duy hệ thống",
            "Thích ứng công nghệ nhanh & Tinh thần cầu thị",
            "Tập trung trải nghiệm người dùng & Giá trị thực tế",
          ],
      techPills: ["Full-Stack", "FastAPI", "React", "TypeScript", "Tailwind CSS"],
      theme: {
        node: "from-teal-600 to-emerald-400 text-white shadow-teal-500/25",
        badge: "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-500/10 dark:text-cyan-300 dark:border-teal-500/20",
        borderHover: "hover:border-teal-400/50 hover:shadow-teal-500/10",
        activeDot: "bg-cyan-400",
      },
    },
  ];

  return (
    <section
      id="experience"
      aria-label={isEn ? "Career Journey Roadmap" : "Sơ đồ hành trình sự nghiệp"}
      className="py-16 sm:py-20 relative overflow-hidden bg-slate-50/70 dark:bg-card/20 border-t border-border/40 transition-colors duration-300"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[350px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[450px] h-[350px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header: Gọn Gàng & Chuẩn SEO */}
        <ScrollReveal animation="fade-up">
          <header className="mb-10 max-w-3xl">
            <div className="space-y-2.5">
              <Badge variant="emerald" className="gap-2 px-3.5 py-1.5 text-xs sm:text-sm font-bold tracking-wide shadow-xs">
                <Milestone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{isEn ? "CAREER PIPELINE" : "SƠ ĐỒ LỘ TRÌNH PHÁT TRIỂN"}</span>
              </Badge>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-foreground tracking-tight">
                {isEn ? "Engineering Journey:" : "Hành Trình Kỹ Sư:"}{" "}
                <span className="gradient-text">{isEn ? "Foundation to Production" : "Từ Nền Tảng Đến Thực Chiến"}</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-muted-foreground leading-relaxed">
                {isEn
                  ? "A progressive roadmap from academic rigor at university to enterprise production software delivery at AITC."
                  : "Sơ đồ chuyển hóa tuần tự: kết hợp nền tảng đào tạo chính quy với kinh nghiệm thực chiến phát triển giải pháp phần mềm doanh nghiệp."}
              </p>
            </div>
          </header>
        </ScrollReveal>

        {/* Sơ Đồ Lộ Trình 3 Chặng (Interactive Pipeline Flowchart) */}
        <div className="relative">
          {/* Trục nối giữa các chặng trên Desktop (Connecting Pipeline Line) */}
          <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-indigo-400/40 via-emerald-400/60 to-teal-400/40 z-0 pointer-events-none" />

          {/* Semantic Ordered List for SEO and Screen Readers */}
          <ol className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10 list-none p-0 m-0">
            {pipelineStages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <ScrollReveal key={stage.step} animation="fade-up" delay={idx * 100}>
                  <li className="h-full">
                    <article
                      className={`group relative rounded-2xl border border-slate-200/90 dark:border-border/80 bg-white/95 dark:bg-card/75 backdrop-blur-xl p-5 sm:p-6 transition-all duration-300 shadow-xs hover:shadow-md ${stage.theme.borderHover} h-full flex flex-col justify-between overflow-hidden`}
                    >
                      {/* Top Node Header */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            {/* Visual Node Pin Circle */}
                            <div
                              className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${stage.theme.node} flex items-center justify-center font-bold text-sm shadow-md transition-transform duration-300 group-hover:scale-110`}
                            >
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500">
                                  #{stage.step}
                                </span>
                                <span
                                  className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider border ${stage.theme.badge}`}
                                >
                                  {stage.badge}
                                </span>
                              </div>
                              <span className="text-[11px] font-mono text-slate-500 dark:text-muted-foreground flex items-center gap-1 mt-0.5">
                                <Calendar className="w-3 h-3 text-slate-400" />
                                <span>{stage.period}</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Title & Institution */}
                        <div className="space-y-1">
                          <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-foreground group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                            {stage.title}
                          </h3>
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                            <Building2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            <span className="truncate">{stage.institution}</span>
                          </div>
                        </div>

                        {/* Concise Takeaway Points */}
                        <ul className="space-y-1.5 pt-1 list-none p-0 m-0">
                          {stage.keyTakeaways.map((point, pIdx) => (
                            <li
                              key={pIdx}
                              className="flex items-start gap-2 text-xs text-slate-600 dark:text-foreground/80 leading-relaxed"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Pills at Bottom */}
                      <div className="pt-3.5 mt-4 border-t border-slate-100 dark:border-border/50 flex flex-wrap items-center gap-1">
                        {stage.techPills.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-secondary/60 text-slate-700 dark:text-secondary-foreground border border-slate-200/80 dark:border-border/40"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </article>
                  </li>
                </ScrollReveal>
              );
            })}
          </ol>
        </div>

        {/* Bottom Compact Gateway Banner (Gọn Gàng & Tối Ưu SEO CTA) */}
        <ScrollReveal animation="fade-up" delay={150}>
          <aside className="mt-8 p-4 sm:p-5 rounded-2xl border border-dashed border-emerald-500/30 bg-emerald-500/[0.04] dark:bg-emerald-950/20 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                <Layers className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <p className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-foreground flex items-center gap-1.5">
                  <span>
                    {isEn
                      ? "Looking for detailed architectural breakdowns and 4 enterprise projects?"
                      : "Tìm hiểu chi tiết các giải pháp kỹ thuật & 4 hệ thống phần mềm thực tế tại AITC"}
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-emerald-500 shrink-0 hidden sm:inline" />
                </p>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-muted-foreground">
                  {isEn
                    ? "Full logs dashboard, AITC portal, QR Code platform, and asset management system documented in depth."
                    : "Hệ thống Chatbot logs, website công ty, QR E-Card và quản lý thiết bị được tổng hợp và phân tích chuyên sâu."}
                </p>
              </div>
            </div>

            <Link to="/journey" className="shrink-0 w-full sm:w-auto">
              <button
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-sm shadow-emerald-500/20 hover:shadow-md hover:shadow-emerald-500/30 transition-all active:scale-95 whitespace-nowrap cursor-pointer"
              >
                <span>{isEn ? "View Journey Details" : "Xem chi tiết tại /journey"}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
          </aside>
        </ScrollReveal>

      </div>
    </section>
  );
};
