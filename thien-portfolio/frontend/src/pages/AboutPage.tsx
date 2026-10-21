import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Award, ShieldCheck, Cpu, Code, Layers, Zap, Mail, Phone, ArrowRight } from "lucide-react";
import { GithubIcon } from "../components/ui/Icons";
import { Badge } from "../components/ui/Badge";
import { useT, usePortfolioStore } from "../stores/usePortfolioStore";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { useProfile } from "../hooks/usePortfolioData";

export const AboutPage: React.FC = () => {
  const { data: profile } = useProfile();
  const language = usePortfolioStore((s) => s.language);
  const isEn = language === "en";
  const t = useT();
  const avatarUrl = profile?.avatar_url || "/avatar-thien.jpg";

  const stats = [
    {
      label: isEn ? "Practical Experience" : "Kinh nghiệm thực tế",
      value: "1+ " + (isEn ? "Years" : "Năm"),
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
      desc: "TypeScript, Python, JavaScript, C#, Java, PHP",
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
      icon: Layers,
      title: isEn ? "Clean Code & Modular Structure" : "Clean Code & Cấu Trúc Mã Nguồn Rõ Ràng",
      description: isEn
        ? "Focusing on readability, modular project organization (routes, services, schemas), clean naming conventions, and reusable React components over premature complexity."
        : "Ưu tiên code dễ đọc, dễ bảo trì với cấu trúc phân tách rõ ràng giữa Routes, Services và Schemas. Tận dụng tính tái sử dụng của React Component và TypeScript chặt chẽ thay vì làm phức tạp hóa vấn đề.",
    },
    {
      icon: Zap,
      title: isEn ? "Async Thinking & Query Awareness" : "Tư Duy Bất Đồng Bộ & Tối Ưu Truy Vấn",
      description: isEn
        ? "Leveraging non-blocking async/await in Python FastAPI and Node.js. Applying proper database indexes on primary query fields in MongoDB and MySQL to maintain responsive APIs."
        : "Vận dụng cơ chế bất đồng bộ (async/await) trong Python FastAPI và Node.js; chủ động thiết lập chỉ mục (index) cho các trường truy vấn thường xuyên trên MongoDB và MySQL để API luôn phản hồi nhanh.",
    },
    {
      icon: Cpu,
      title: isEn ? "Pragmatic Automation & Real-world Workflows" : "Thực Chiến & Tự Động Hóa Thực Tế",
      description: isEn
        ? "Solving practical product challenges: building data handling workflows, normalizing inputs, seamless API integrations, and intuitive monitoring dashboards."
        : "Tập trung giải quyết bài toán thực tế của sản phẩm: xây dựng pipeline xử lý dữ liệu, chuẩn hóa biểu mẫu Excel, tích hợp API mượt mà và dựng dashboard trực quan để theo dõi log hiệu quả.",
    },
    {
      icon: ShieldCheck,
      title: isEn ? "Disciplined Workflow & Environment Parity" : "Kỷ Luật Quy Trình & Tính Ổn Định",
      description: isEn
        ? "Maintaining disciplined Git practices, containerizing apps with Docker for environment parity, safeguarding environment variables (.env), and handling edge cases with care."
        : "Tuân thủ quy trình Git khoa học, đóng gói ứng dụng với Docker để đảm bảo môi trường dev/staging đồng nhất, quản lý biến môi trường (.env) an toàn và cẩn trọng trong từng khâu xử lý ngoại lệ.",
    },
  ];

  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Page Header */}
        <ScrollReveal animation="fade-up">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-cyan-400 uppercase tracking-widest">
              <Link to="/" className="hover:underline">{t.pages.common.home}</Link>
              <span>/</span>
              <span className="text-slate-900 dark:text-foreground">{t.nav.about}</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-foreground tracking-tight">
              {t.pages.about.title} <span className="gradient-text">{t.pages.about.highlight}</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-muted-foreground leading-relaxed">
              {t.pages.about.subtitle}
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
                    {t.hero.role}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-muted-foreground">
                    {t.contact.addressValue}
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
                  <Badge variant="emerald">{t.pages.about.storyTitle}</Badge>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-foreground">
                    {t.pages.about.storyP1}
                  </h3>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-muted-foreground leading-relaxed">
                  <p>
                    {t.pages.about.storyP2}
                  </p>
                  <p>
                    {t.about.bio1}
                  </p>
                  <p>
                    {t.about.bio2}
                  </p>
                </div>

                {/* Education In-depth */}
                <div className="pt-6 border-t border-slate-200 dark:border-border/60 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-700 dark:text-cyan-400 font-semibold">
                    <GraduationCap className="w-4 h-4" />
                    <span>{t.pages.about.educationTitle}</span>
                  </div>
                  <div className="rounded-2xl border border-slate-200 dark:border-border/60 bg-slate-50 dark:bg-muted/20 p-5 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="font-display font-bold text-lg text-slate-900 dark:text-foreground">
                        {t.pages.about.institution}
                      </h4>
                      <span className="text-xs font-mono text-emerald-700 dark:text-cyan-400 bg-emerald-50 dark:bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-cyan-500/25">
                        {t.pages.about.eduPeriod}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-700 dark:text-cyan-400">
                      {t.pages.about.degree}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-muted-foreground leading-relaxed">
                      {t.pages.about.eduDesc}
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
              <Badge variant="emerald" className="mx-auto">{t.pages.about.pillarsTitle}</Badge>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-foreground">
                <span className="gradient-text">{t.about.philosophyTitle}</span>
              </h2>
              <p className="text-sm text-slate-600 dark:text-muted-foreground">
                {t.about.philosophyText}
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
                <span>{t.journey.viewFullBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="inline-flex items-center gap-2 h-11 px-6 rounded-xl font-semibold text-sm border border-slate-300 dark:border-emerald-500/40 bg-white dark:bg-emerald-500/10 text-slate-800 dark:text-emerald-300 hover:bg-slate-100 transition-all shadow-sm">
                <span>{t.pages.about.contactBtn}</span>
              </button>
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};
