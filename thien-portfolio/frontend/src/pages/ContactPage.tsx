import React from "react";
import { Link } from "react-router-dom";
import { ContactSection } from "../components/sections/ContactSection";
import { Clock, ShieldCheck, Zap } from "lucide-react";
import { usePortfolioStore } from "../stores/usePortfolioStore";
import { ScrollReveal } from "../components/ui/ScrollReveal";

export const ContactPage: React.FC = () => {
  const language = usePortfolioStore((s) => s.language);
  const isEn = language === "en";

  const highlights = [
    {
      icon: Clock,
      title: isEn ? "Swift Response Time" : "Phản hồi nhanh chóng",
      desc: isEn
        ? "Committed to acknowledging recruitment inquiries, interview requests, or messages within 24 business hours."
        : "Cam kết phản hồi thông tin hoặc lời mời phỏng vấn trong vòng 24 giờ làm việc.",
    },
    {
      icon: Zap,
      title: isEn ? "Solutions-Driven Mindset" : "Tư duy giải pháp thực tiễn",
      desc: isEn
        ? "Ready for deep technical dive on software architecture, AI Multi-Agent orchestration, or database optimization."
        : "Sẵn sàng trao đổi sâu về bài toán kiến trúc phần mềm, tích hợp AI hoặc tối ưu hóa hệ thống hiện tại.",
    },
    {
      icon: ShieldCheck,
      title: isEn ? "Direct & Confidential" : "Bảo mật & Trực tiếp",
      desc: isEn
        ? "Form submissions are securely stored in MongoDB and directly handled by Ngo Minh Thien."
        : "Toàn bộ thông tin gửi qua biểu mẫu được lưu trữ bảo mật trực tiếp trên MongoDB thông qua FastAPI backend.",
    },
  ];

  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Page Header */}
        <ScrollReveal animation="fade-up">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-cyan-400 uppercase tracking-widest">
              <Link to="/" className="hover:underline">{isEn ? "Home" : "Trang chủ"}</Link>
              <span>/</span>
              <span className="text-slate-900 dark:text-foreground">{isEn ? "Contact" : "Liên hệ"}</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-foreground tracking-tight">
              {isEn ? "Connect & " : "Kết Nối & "}<span className="gradient-text">{isEn ? "Collaborate" : "Hợp Tác Kỹ Thuật"}</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-muted-foreground leading-relaxed">
              {isEn
                ? "Open for Software Engineer career opportunities, AI system integrations, and technical discussions."
                : "Tôi luôn sẵn sàng đón nhận các cơ hội việc làm Software Engineer Full-Stack, dự án chuyển đổi AI & Multi-Agent, hoặc các lời mời trao đổi chuyên môn."}
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <ScrollReveal key={i} animation="fade-up" delay={i * 120}>
                <div
                  className="rounded-2xl border border-slate-200 dark:border-border/70 bg-white dark:bg-card/60 backdrop-blur-md p-5 space-y-2 hover:border-emerald-500/40 hover:shadow-md transition-all shadow-sm h-full"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 dark:bg-cyan-500/10 dark:text-cyan-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-foreground">{h.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-muted-foreground leading-relaxed">{h.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Full Interactive Contact Form Connected to MongoDB */}
        <ContactSection />
      </div>
    </div>
  );
};
