import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Award, ShieldCheck, Cpu, Code, Layers, Zap, Mail, Phone, ArrowRight } from "lucide-react";
import { GithubIcon } from "../components/ui/Icons";
import { Badge } from "../components/ui/Badge";
import { usePortfolioStore } from "../stores/usePortfolioStore";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { useProfile } from "../hooks/usePortfolioData";

export const AboutPage: React.FC = () => {
  const { data: profile } = useProfile();
  const language = usePortfolioStore((s) => s.language);
  const isEn = language === "en";
  const avatarUrl = profile?.avatar_url || "/avatar-thien.jpg";

  const stats = [
    {
      label: isEn ? "Practical Experience" : "Kinh nghiệm thực tế",
      value: "2+ " + (isEn ? "Years" : "Năm"),
      desc: isEn ? "Enterprise software engineering & research" : "Nghiên cứu & phát triển phần mềm doanh nghiệp",
      icon: Award,
    },
    {
      label: isEn ? "Key Enterprise Systems" : "Dự án trọng điểm",
      value: "4+ " + (isEn ? "Systems" : "Hệ thống"),
      desc: isEn ? "Production deployment at AITC Center" : "Triển khai thực tế tại trung tâm CNTT AITC",
      icon: Layers,
    },
    {
      label: isEn ? "Languages Mastered" : "Ngôn ngữ làm chủ",
      value: "6+ " + (isEn ? "Languages" : "Ngôn ngữ"),
      desc: "Python, JavaScript, TypeScript, C#, Java, PHP",
      icon: Code,
    },
    {
      label: isEn ? "Engineering Standards" : "Tiêu chuẩn kỹ thuật",
      value: "100%",
      desc: isEn ? "Clean Code, Type Safety & Scalability" : "Ưu tiên Clean Code, Type Safety & Scalability",
      icon: ShieldCheck,
    },
  ];

  const pillars = [
    {
      icon: Cpu,
      title: isEn ? "AI & Multi-Agent System Integration" : "Tích hợp AI & Multi-Agent Architecture",
      description: isEn
        ? "Actively incorporating Large Language Models (LLMs), prompt engineering, and multi-agent coordination into production pipelines to automate complex workflows and accelerate software engineering cycles."
        : "Tôi chủ động áp dụng các mô hình ngôn ngữ lớn (LLMs), Prompt Engineering và kiến trúc đa tác nhân (Multi-Agent) nhằm tự động hóa quy trình phân tích dữ liệu, nhận diện bất thường và tăng tốc độ phát triển phần mềm gấp nhiều lần.",
    },
    {
      icon: Layers,
      title: isEn ? "System Architecture & Clean Code" : "Kiến trúc hệ thống chuẩn mực & Clean Code",
      description: isEn
        ? "Adhering strictly to SOLID, Clean Architecture, and clear separation of concerns across Routes, Controllers, Services, and Data Access Layers. Frontend built with modern React, Zustand, and TanStack Query patterns."
        : "Luôn áp dụng các nguyên tắc thiết kế phần mềm bền vững: Single Responsibility, Dependency Inversion, phân tách rõ ràng giữa Routes, Controller, Services và Data Access Layer. Frontend sử dụng các pattern tân tiến với React, Zustand và TanStack Query.",
    },
    {
      icon: Zap,
      title: isEn ? "High Performance & Low Latency" : "Hiệu năng cao & Độ trễ tối thiểu",
      description: isEn
        ? "Leveraging asynchronous I/O architectures in Python FastAPI and Node.js. Database query indexing optimizations in MongoDB and MySQL, paired with WebSockets for real-time streaming under 150ms."
        : "Khai thác tối đa cơ chế bất đồng bộ (Async I/O) trên Python FastAPI và Node.js. Thiết kế chỉ mục (Indexing) tối ưu trên cơ sở dữ liệu MongoDB và MySQL, kết hợp WebSockets cho dữ liệu streaming thời gian thực với độ trễ dưới 150ms.",
    },
    {
      icon: ShieldCheck,
      title: isEn ? "Production Stability & Observability" : "Bền bỉ trong môi trường Production",
      description: isEn
        ? "Dockerized reproducible runtime environments, secure secrets management (.env), automated health checks, structured error logging, and resilient fallback handling for maximum reliability."
        : "Đóng gói đồng nhất với Docker, quản lý cấu hình và biến môi trường (.env) an toàn, tích hợp hệ thống kiểm tra sức khỏe (Health Check) và xử lý ngoại lệ chặt chẽ, đảm bảo tính sẵn sàng cao (High Availability).",
    },
  ];

  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Page Header */}
        <ScrollReveal animation="fade-up">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-cyan-400 uppercase tracking-widest">
              <Link to="/" className="hover:underline">{isEn ? "Home" : "Trang chủ"}</Link>
              <span>/</span>
              <span className="text-slate-900 dark:text-foreground">{isEn ? "About Me" : "Về tôi"}</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-foreground tracking-tight">
              {isEn ? "Engineering Story & " : "Câu Chuyện & "}<span className="gradient-text">{isEn ? "Philosophy" : "Triết Lý Kỹ Thuật"}</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-muted-foreground leading-relaxed">
              {isEn
                ? "Explore the architectural mindset, educational pedigree, and growth trajectory of Ngo Minh Thien."
                : "Khám phá tư duy kiến trúc phần mềm, hành trình đào tạo chính quy và định hướng phát triển của Ngô Minh Thiên."}
            </p>
          </div>
        </ScrollReveal>

        {/* Main Profile Grid: Photo Column + Story Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Author Card & Quick Contact */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal animation="fade-right">
              <div className="rounded-3xl border border-slate-200 dark:border-border/80 bg-white dark:bg-card/70 backdrop-blur-xl p-6 sm:p-8 space-y-6 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* Portrait Frame */}
                <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-slate-100 dark:border-background shadow-xl p-[3px] bg-gradient-to-tr from-emerald-500 to-teal-500">
                  <img
                    src={avatarUrl}
                    alt="Ngô Minh Thiên"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Identity & Status */}
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-foreground">
                      Ngô Minh Thiên
                    </h2>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" title="Available" />
                  </div>
                  <p className="text-xs font-mono text-emerald-700 dark:text-cyan-400 font-semibold uppercase tracking-wider">
                    Software Engineer & AI Systems Integrator
                  </p>
                  <p className="text-xs text-slate-500 dark:text-muted-foreground">
                    Phường Phú Thuận, Quận 7, TP. Hồ Chí Minh
                  </p>
                </div>

                {/* Contact Chips */}
                <div className="pt-4 border-t border-slate-200 dark:border-border/60 space-y-2.5 text-xs text-slate-600 dark:text-muted-foreground">
                  <a
                    href="mailto:minhngothien1@gmail.com"
                    className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-200 dark:border-border/50 bg-slate-50 dark:bg-background/50 hover:text-emerald-700 dark:hover:text-cyan-400 hover:border-emerald-500/40 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-emerald-600 dark:text-cyan-400 shrink-0" />
                    <span className="truncate">minhngothien1@gmail.com</span>
                  </a>
                  <a
                    href="tel:0987176434"
                    className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-200 dark:border-border/50 bg-slate-50 dark:bg-background/50 hover:text-emerald-700 dark:hover:text-cyan-400 hover:border-emerald-500/40 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-emerald-600 dark:text-cyan-400 shrink-0" />
                    <span>0987 176 434</span>
                  </a>
                  <a
                    href="https://github.com/phuocthien412"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-200 dark:border-border/50 bg-slate-50 dark:bg-background/50 hover:text-emerald-700 dark:hover:text-cyan-400 hover:border-emerald-500/40 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-emerald-600 dark:text-cyan-400 shrink-0" />
                    <span>github.com/phuocthien412</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-3.5">
              {stats.map((s, i) => (
                <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                  <div className="p-4 rounded-2xl border border-slate-200 dark:border-border/60 bg-white dark:bg-card/50 backdrop-blur-md space-y-1 shadow-sm h-full">
                    <span className="font-display font-extrabold text-xl text-emerald-700 dark:text-cyan-400">{s.value}</span>
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-foreground">{s.label}</h4>
                    <p className="text-[10px] text-slate-500 dark:text-muted-foreground leading-tight">{s.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Column: In-depth Story & Career Objective */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal animation="fade-left">
              <div className="rounded-3xl border border-slate-200 dark:border-border/80 bg-white dark:bg-card/60 backdrop-blur-md p-7 sm:p-9 space-y-6 shadow-sm">
                <div className="space-y-3">
                  <Badge variant="emerald">{isEn ? "Career Objective" : "Mục Tiêu Sự Nghiệp"}</Badge>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-foreground">
                    {isEn ? "Pioneering AI Integration in Enterprise Systems" : "Tiên phong tích hợp AI vào giải pháp phần mềm cấp doanh nghiệp"}
                  </h3>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-muted-foreground leading-relaxed">
                  <p>
                    {isEn
                      ? "I am a Full-Stack Software Engineer proficient across the entire software development lifecycle: from requirements analysis and distributed architecture design to high-throughput backend APIs, database optimization, and intuitive frontend experiences."
                      : "Tôi là một Full-Stack Software Engineer có khả năng làm chủ cả chu kỳ phát triển phần mềm: từ giai đoạn khảo sát yêu cầu, thiết kế kiến trúc hệ thống, xây dựng backend API hiệu năng cao, tối ưu cơ sở dữ liệu cho tới phát triển giao diện người dùng mượt mà và trực quan."}
                  </p>
                  <p>
                    {isEn
                      ? "My key differentiator lies in harnessing the capabilities of Artificial Intelligence (AI) and Multi-Agent Systems. I actively integrate AI into systems to automate complex analytics, detect anomalies early, and deliver intelligent, scalable features directly to end-users."
                      : "Điểm khác biệt cốt lõi trong tư duy phát triển của tôi là tận dụng sức mạnh của trí tuệ nhân tạo (AI) và kiến trúc đa tác nhân (Multi-Agent). Thay vì phát triển phần mềm theo lối mòn truyền thống, tôi sử dụng AI để tự động hóa khâu nghiên cứu kỹ thuật, sinh mã nguồn chuẩn hóa, phát hiện sớm rủi ro hệ thống và trực tiếp nhúng các tính năng AI thông minh vào ứng dụng thực tế."}
                  </p>
                  <p>
                    {isEn
                      ? "I believe great software is measured not only by functionality, but by Clean Code quality, high maintainability, resilience under scale, and an exceptional user experience."
                      : "Tôi tin rằng một phần mềm tốt không chỉ dừng lại ở việc đáp ứng đúng tính năng, mà phải được viết bằng mã nguồn sạch (Clean Code), dễ bảo trì (Maintainable), có tính mở rộng cao (Scalable) và mang lại trải nghiệm thân thiện, mượt mà nhất cho người sử dụng cuối cùng."}
                  </p>
                </div>

                {/* Education In-depth */}
                <div className="pt-6 border-t border-slate-200 dark:border-border/60 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-700 dark:text-cyan-400 font-semibold">
                    <GraduationCap className="w-4 h-4" />
                    <span>{isEn ? "Formal Academic Foundation" : "Nền Tảng Học Vấn Chính Quy"}</span>
                  </div>
                  <div className="rounded-2xl border border-slate-200 dark:border-border/60 bg-slate-50 dark:bg-muted/20 p-5 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="font-display font-bold text-lg text-slate-900 dark:text-foreground">
                        University of Technology Ho Chi Minh City (HUTECH)
                      </h4>
                      <span className="text-xs font-mono text-emerald-700 dark:text-cyan-400 bg-emerald-50 dark:bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-cyan-500/25">
                        2021 – 2025
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-700 dark:text-cyan-400">
                      {isEn ? "Bachelor of Science in Software Engineering" : "Cử nhân Kỹ thuật Phần mềm (Software Engineering)"}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-muted-foreground leading-relaxed">
                      {isEn
                        ? "Rigorous curriculum encompassing Advanced Algorithms, Object-Oriented Design (OOP), Distributed Systems, Database Management Systems (RDBMS & NoSQL), Network Security, and Agile/Scrum methodologies."
                        : "Được đào tạo chính quy và bài bản theo các tiêu chuẩn quốc tế về kỹ thuật phần mềm: Cấu trúc dữ liệu và giải thuật nâng cao, Lập trình hướng đối tượng (OOP), Kiến trúc hệ thống phân tán, Hệ quản trị cơ sở dữ liệu (RDBMS & NoSQL), Bảo mật ứng dụng và Phương pháp luận Agile/Scrum."}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* 4 Technical Pillars Deep Dive */}
        <div className="space-y-8 pt-6">
          <ScrollReveal animation="fade-up">
            <div className="space-y-2 text-center max-w-2xl mx-auto">
              <Badge variant="emerald" className="mx-auto">{isEn ? "Core Pillars" : "Nguyên Tắc Cốt Lõi"}</Badge>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-foreground">
                {isEn ? "4 Technical Pillars of " : "4 Trụ Cột Kỹ Thuật Đảm Bảo "}<span className="gradient-text">{isEn ? "Excellence" : "Chất Lượng"}</span>
              </h2>
              <p className="text-sm text-slate-600 dark:text-muted-foreground">
                {isEn ? "Standards applied rigorously across every project and repository." : "Những tiêu chí bất di bất dịch tôi áp dụng trong từng dòng code và mọi dự án đảm nhận."}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 120}>
                  <div className="rounded-3xl border border-slate-200 dark:border-border/70 bg-white dark:bg-card/60 backdrop-blur-md p-7 space-y-3.5 hover:border-emerald-500/50 hover:shadow-md transition-all shadow-sm h-full">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-cyan-500/10 dark:text-cyan-400 flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Bottom Navigation CTA */}
        <ScrollReveal animation="fade-up">
          <div className="pt-8 border-t border-slate-200 dark:border-border/60 flex flex-wrap items-center justify-between gap-4">
            <Link to="/journey">
              <button className="inline-flex items-center gap-2 h-11 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/25 hover:shadow-lg transition-all">
                <span>{isEn ? "Explore Career Journey at AITC" : "Xem tiếp: Hành trình sự nghiệp tại AITC"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="inline-flex items-center gap-2 h-11 px-6 rounded-xl font-semibold text-sm border border-slate-300 dark:border-emerald-500/40 bg-white dark:bg-emerald-500/10 text-slate-800 dark:text-emerald-300 hover:bg-slate-100 transition-all shadow-sm">
                <span>{isEn ? "Schedule Interview or Collaboration" : "Liên hệ phỏng vấn & hợp tác"}</span>
              </button>
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};
