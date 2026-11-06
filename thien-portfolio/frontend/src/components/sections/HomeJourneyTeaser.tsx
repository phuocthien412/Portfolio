import React, { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Milestone,
  Rocket,
  ChevronDown,
} from "lucide-react";
import { Badge } from "../ui/Badge";
import { usePortfolioStore, useT } from "../../stores/usePortfolioStore";
import { ScrollReveal } from "../ui/ScrollReveal";

export const HomeJourneyTeaser: React.FC = () => {
  const t = useT();
  const language = usePortfolioStore((s) => s.language);
  const isEn = language === "en";
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const pathwayStages = [
    {
      step: "01",
      icon: GraduationCap,
      period: "2021-2025",
      badge: isEn ? "Academic Foundation" : "Nền tảng đại học",
      title: isEn ? t.journey.roleEdu : "Cử nhân Kỹ thuật Phần mềm",
      institution: isEn ? t.journey.schoolEdu : "Đại học Công nghệ TP.HCM",
      desc: isEn
        ? "Computer Science fundamentals, OOP & relational/NoSQL databases"
        : "Nền tảng khoa học máy tính, OOP và cơ sở dữ liệu",
      bullets: isEn
        ? [
            "Pick the optimal data structures before writing code, as algorithmic complexity defines performance.",
            "Apply OOP principles to decouple responsibilities, maximize extensibility and testability.",
            "Use MySQL for strict relational integrity, and MongoDB for dynamic, flexible schemas.",
          ]
        : [
            "Chọn đúng cấu trúc dữ liệu trước khi viết code, vì độ phức tạp quyết định hiệu năng.",
            "OOP để tách trách nhiệm, dễ mở rộng và dễ kiểm thử.",
            "Dữ liệu ràng buộc chặt đi với MySQL, dữ liệu linh hoạt đi với MongoDB.",
          ],
      techPills: ["Java", "PHP", "MySQL", "MongoDB", "OOP"],
      theme: {
        iconBg: "bg-sky-500/20 text-sky-400 border border-sky-500/30",
        label: "text-sky-400",
        pinBorder: "border-sky-400 text-sky-400",
        pinDot: "bg-sky-400",
        pinShadow: "shadow-[0_0_20px_rgba(56,189,248,0.7)]",
        activeBorder: "border-sky-500/90 shadow-[0_0_25px_rgba(56,189,248,0.25)]",
        dropDot: "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]",
        thoughtBorder: "border-sky-500/60 shadow-[0_10px_30px_rgba(56,189,248,0.15)]",
        bulletIcon: "bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.6)]",
      },
    },
    {
      step: "02",
      icon: Briefcase,
      period: "08/2025-06/2026",
      badge: isEn ? "Enterprise Experience" : "Thực chiến doanh nghiệp",
      title: isEn ? t.journey.roleAitc : "Software Engineer",
      institution: isEn ? t.journey.companyAitc : "Công ty CP Công nghệ AITC",
      desc: isEn
        ? "Shipped 4 production enterprise systems with high throughput"
        : "Bàn giao 4 hệ thống phần mềm doanh nghiệp",
      bullets: isEn
        ? [
            "FastAPI with async workers eliminates I/O bottlenecks, delivering real-time log responses < 150ms.",
            "WebSocket two-way streaming synchronization reduces bandwidth overhead by 90% compared to polling.",
            "Standardized Dockerization across dev and production with automated CI/CD deployment pipelines.",
          ]
        : [
            "FastAPI kết hợp async worker giải phóng nghẽn I/O, phản hồi log real-time < 150ms.",
            "WebSocket đồng bộ dữ liệu hai chiều liên tục, giảm thiểu 90% overhead so với HTTP polling.",
            "Docker hóa đồng bộ từ môi trường dev sang production, CI/CD tự động hóa kiểm thử.",
          ],
      techPills: ["React", "FastAPI", "MongoDB", "Docker", "Tailwind CSS"],
      theme: {
        iconBg: "bg-teal-500/20 text-teal-400 border border-teal-500/30",
        label: "text-teal-400",
        pinBorder: "border-teal-400 text-teal-400",
        pinDot: "bg-teal-400",
        pinShadow: "shadow-[0_0_20px_rgba(20,184,166,0.7)]",
        activeBorder: "border-teal-500/90 shadow-[0_0_25px_rgba(20,184,166,0.25)]",
        dropDot: "bg-teal-400 shadow-[0_0_8px_rgba(20,184,166,0.8)]",
        thoughtBorder: "border-teal-500/60 shadow-[0_10px_30px_rgba(20,184,166,0.15)]",
        bulletIcon: "bg-teal-400 shadow-[0_0_6px_rgba(20,184,166,0.6)]",
      },
    },
    {
      step: "03",
      icon: Rocket,
      period: isEn ? "Present, Open" : "Hiện tại, đang mở",
      badge: isEn ? "Ready for Impact" : "Sẵn sàng bứt phá",
      title: isEn ? "Software Engineer" : "Kỹ Sư Phần Mềm",
      institution: isEn ? "Open for Opportunities / Projects" : "Sẵn sàng đón nhận cơ hội mới",
      desc: isEn
        ? "Systems thinking, Clean Code principles and high adaptability"
        : "Tư duy hệ thống, Clean Code và thích ứng nhanh",
      bullets: isEn
        ? [
            "Clean Code standards and modular architecture ensure high maintainability and team scalability.",
            "User-centric mindset: prioritize solving real-world business problems over merely writing code.",
            "Rapid tech adoption, proactive learning attitude and eagerness to tackle challenging initiatives.",
          ]
        : [
            "Chuẩn mực Clean Code, kiến trúc module hóa giúp dễ bảo trì và mở rộng lâu dài.",
            "Tư duy tối ưu hóa giá trị kinh doanh và trải nghiệm người dùng cuối là ưu tiên hàng đầu.",
            "Thích ứng nhanh với công nghệ mới, tinh thần cầu thị và sẵn sàng nhận mọi thử thách.",
          ],
      techPills: ["Clean Architecture", "FastAPI", "React", "TypeScript", "Tailwind CSS"],
      theme: {
        iconBg: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
        label: "text-emerald-400",
        pinBorder: "border-emerald-400 text-emerald-400",
        pinDot: "bg-emerald-400",
        pinShadow: "shadow-[0_0_20px_rgba(16,185,129,0.7)]",
        activeBorder: "border-emerald-500/90 shadow-[0_0_25px_rgba(16,185,129,0.25)]",
        dropDot: "bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]",
        thoughtBorder: "border-emerald-500/60 shadow-[0_10px_30px_rgba(16,185,129,0.15)]",
        bulletIcon: "bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.6)]",
      },
    },
  ];

  return (
    <section
      id="experience"
      aria-label={isEn ? "Career Journey Roadmap" : "Sơ đồ hành trình sự nghiệp"}
      className="py-14 sm:py-20 relative bg-slate-50/70 dark:bg-transparent border-t border-border/40 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[350px] bg-sky-500/5 dark:bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[450px] h-[350px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <header className="mb-8 sm:mb-10 max-w-3xl">
            <div className="space-y-2.5">
              <Badge variant="emerald" className="gap-2 px-3.5 py-1.5 text-xs sm:text-sm font-bold tracking-wide shadow-xs">
                <Milestone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{isEn ? "CAREER PIPELINE" : "HÀNH TRÌNH SỰ NGHIỆP"}</span>
              </Badge>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-foreground tracking-tight leading-tight sm:leading-snug lg:leading-[1.2]">
                {isEn ? "Engineering Journey:" : "Hành Trình Kỹ Sư:"}{" "}
                <span className="gradient-text">{isEn ? "Foundation to Production" : "Từ Nền Tảng Đến Thực Chiến"}</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-muted-foreground leading-relaxed">
                {isEn
                  ? "Interactive milestone pathway. Hover on desktop or tap on mobile to inspect real-world engineering takeaways."
                  : "Sơ đồ trạm đường đi tuần tự: Rê chuột hoặc chạm vào từng cột mốc để mở rộng tư duy kỹ thuật thực chiến."}
              </p>
            </div>
          </header>
        </ScrollReveal>

        {/* WAVY PATHWAY HIGHWAY (DESKTOP) */}
        <div className="relative pt-2 pb-8 sm:pb-12 overflow-hidden lg:overflow-visible">
          
          {/* Top Undulating Glowing Path SVG with co-linear gap-free connection (Desktop) */}
          <div className="hidden lg:block relative w-full h-[80px] mb-2 pointer-events-none select-none">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1200 80"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="journeyHighwayGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.95" />
                  <stop offset="85%" stopColor="#10b981" stopOpacity="0.95" />
                </linearGradient>
                <filter id="highwayGlow" x="-10%" y="-30%" width="120%" height="160%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Segment 0: From left edge (0) to Pin 1 left edge (182) */}
              <path
                d="M 0 40 C 60 38, 120 40, 182 40"
                stroke="url(#journeyHighwayGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#highwayGlow)"
                className="opacity-60"
              />
              <path
                d="M 0 40 C 60 38, 120 40, 182 40"
                stroke="url(#journeyHighwayGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Segment 1: From Pin 1 right edge (218) to Pin 2 left edge (582) */}
              <path
                d="M 218 40 C 290 40, 330 62, 400 62 C 470 62, 510 40, 582 40"
                stroke="url(#journeyHighwayGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#highwayGlow)"
                className="opacity-60"
              />
              <path
                d="M 218 40 C 290 40, 330 62, 400 62 C 470 62, 510 40, 582 40"
                stroke="url(#journeyHighwayGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Segment 2: From Pin 2 right edge (618) to Pin 3 left edge (982) */}
              <path
                d="M 618 40 C 690 40, 730 62, 800 62 C 870 62, 910 40, 982 40"
                stroke="url(#journeyHighwayGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#highwayGlow)"
                className="opacity-60"
              />
              <path
                d="M 618 40 C 690 40, 730 62, 800 62 C 870 62, 910 40, 982 40"
                stroke="url(#journeyHighwayGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Segment 3: From Pin 3 right edge (1018) to right edge (1200) - Future dashed trail */}
              <path
                d="M 1018 40 C 1080 40, 1140 32, 1200 32"
                stroke="#10b981"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                strokeLinecap="round"
                className="opacity-75"
              />
            </svg>

            {/* 3 Interactive Milestone Pins: Perfectly Co-linear on string + Fixed unscaled hitboxes to eliminate all hover stutter */}
            <div className="absolute inset-0 pointer-events-auto">
              
              {/* Pin 1: (left 16.666%, top 50%) */}
              <div
                onMouseEnter={() => setHoveredIdx(0)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => setHoveredIdx(hoveredIdx === 0 ? null : 0)}
                className="absolute left-[16.666%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center cursor-pointer z-30"
                title={pathwayStages[0].badge}
              >
                <div
                  className={`w-9 h-9 rounded-full border-2 ${
                    pathwayStages[0].theme.pinBorder
                  } bg-[#071318] dark:bg-[#071318] flex items-center justify-center transition-all duration-300 pointer-events-none ${
                    hoveredIdx === 0 ? pathwayStages[0].theme.pinShadow + " scale-110" : "opacity-90"
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full ${pathwayStages[0].theme.pinDot} pointer-events-none`} />
                </div>
              </div>

              {/* Pin 2: (left 50.000%, top 50%) */}
              <div
                onMouseEnter={() => setHoveredIdx(1)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => setHoveredIdx(hoveredIdx === 1 ? null : 1)}
                className="absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center cursor-pointer z-30"
                title={pathwayStages[1].badge}
              >
                <div
                  className={`w-9 h-9 rounded-full border-2 ${
                    pathwayStages[1].theme.pinBorder
                  } bg-[#071318] dark:bg-[#071318] flex items-center justify-center transition-all duration-300 pointer-events-none ${
                    hoveredIdx === 1 ? pathwayStages[1].theme.pinShadow + " scale-110" : "opacity-90"
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full ${pathwayStages[1].theme.pinDot} pointer-events-none`} />
                </div>
              </div>

              {/* Pin 3: (left 83.333%, top 50%) */}
              <div
                onMouseEnter={() => setHoveredIdx(2)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => setHoveredIdx(hoveredIdx === 2 ? null : 2)}
                className="absolute left-[83.333%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center cursor-pointer z-30"
                title={pathwayStages[2].badge}
              >
                <div
                  className={`w-9 h-9 rounded-full border-2 ${
                    pathwayStages[2].theme.pinBorder
                  } bg-[#071318] dark:bg-[#071318] flex items-center justify-center transition-all duration-300 pointer-events-none ${
                    hoveredIdx === 2 ? pathwayStages[2].theme.pinShadow + " scale-110" : "opacity-90"
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full ${pathwayStages[2].theme.pinDot} pointer-events-none`} />
                </div>
              </div>

            </div>
          </div>

          {/* 3-COLUMN CARDS WITH EQUAL HEIGHT & NATIVE MOBILE POLISH */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch relative z-10">
            {pathwayStages.map((stage, idx) => {
              const Icon = stage.icon;
              const isHovered = hoveredIdx === idx;

              return (
                <div
                  key={stage.step}
                  className="flex flex-col h-full"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onClick={() => setHoveredIdx(hoveredIdx === idx ? null : idx)}
                >
                  {/* MAIN MILESTONE CARD: EQUAL HEIGHT & TOUCH-FRIENDLY */}
                  <div
                    className={`rounded-2xl p-5 sm:p-6 transition-all duration-500 cursor-pointer select-none backdrop-blur-xl flex flex-col justify-between min-h-[310px] sm:min-h-[330px] active:scale-[0.99] touch-manipulation ${
                      isHovered
                        ? `${stage.theme.activeBorder} bg-white dark:bg-[#08151d] shadow-xl -translate-y-1`
                        : "border border-slate-200 dark:border-[#172e38] bg-white/90 dark:bg-[#071318]/90 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm"
                    }`}
                  >
                    <div>
                      {/* Card Header Row with Step indicator on mobile */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                          <div
                            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 ${stage.theme.iconBg} transition-transform duration-500 ${
                              isHovered ? "scale-105" : ""
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="min-w-0">
                            <span className={`text-xs sm:text-sm font-semibold block truncate ${stage.theme.label}`}>
                              {stage.badge}
                            </span>
                            <span className="text-[11px] sm:text-xs font-mono text-slate-500 dark:text-slate-400 block mt-0.5">
                              {stage.period}
                            </span>
                          </div>
                        </div>

                        {/* Step Pill (Always visible, prominent on mobile) */}
                        <div className="shrink-0 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                          <span className={stage.theme.label}>#{stage.step}</span>
                        </div>
                      </div>

                      {/* Title & Organization */}
                      <div className="space-y-1 mb-2">
                        <h3 className="font-display font-bold text-base sm:text-lg lg:text-xl text-slate-900 dark:text-white leading-snug">
                          {stage.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                          {stage.institution}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>

                    {/* Bottom Area: Tech Stack Pills & Mobile Native Tap Trigger */}
                    <div className="mt-auto pt-4 space-y-3">
                      {/* Tech Stack Pills at bottom */}
                      <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-1.5 sm:gap-2">
                        {stage.techPills.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-mono font-medium bg-slate-100 dark:bg-[#11222c] border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Mobile Native Tap Pill (Visible on small screens) */}
                      <div className="lg:hidden flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-1">
                        <span className={isHovered ? stage.theme.label : ""}>
                          {isHovered ? (isEn ? "Tap to close thoughts" : "Chạm để đóng tư duy") : (isEn ? "Tap to inspect thinking" : "Chạm mở tư duy kỹ sư")}
                        </span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isHovered ? "rotate-180 " + stage.theme.label : ""}`} />
                      </div>
                    </div>
                  </div>

                  {/* THINKING DROP BOX: GENTLE EXPANSION & FADE */}
                  <div
                    className={`transition-all duration-500 ease-out overflow-hidden ${
                      isHovered
                        ? "max-h-[500px] opacity-100 translate-y-0 mt-2 pointer-events-auto"
                        : "max-h-0 opacity-0 -translate-y-2 mt-0 pointer-events-none"
                    }`}
                  >
                    <div className="flex flex-col items-center pt-1 pb-1">
                      {/* Connecting Thought Droplet */}
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${stage.theme.dropDot} mb-2 transition-all duration-500 ${
                          isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"
                        }`}
                      />

                      {/* Thought Box */}
                      <div
                        className={`w-full rounded-2xl border ${stage.theme.thoughtBorder} bg-white/95 dark:bg-[#07131b]/95 backdrop-blur-xl p-4 sm:p-5 shadow-2xl text-slate-800 dark:text-slate-200 transition-all duration-500`}
                      >
                        <ul className="space-y-2.5 sm:space-y-3 list-none p-0 m-0">
                          {stage.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                              <span className={`w-1.5 h-1.5 rounded-xs shrink-0 mt-2 ${stage.theme.bulletIcon}`} />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
