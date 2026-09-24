import React from "react";
import { GraduationCap, Award, ShieldCheck, Cpu, Code, Layers, Zap, CheckCircle2 } from "lucide-react";
import { Badge } from "../ui/Badge";
import type { ProfileData } from "../../types";

interface AboutSectionProps {
  profile?: ProfileData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  const avatarUrl = profile?.avatar_url || "/avatar-thien.jpg";

  const stats = [
    {
      label: "Kinh nghiệm thực chiến",
      value: profile?.stats?.years_experience || "2+ Năm",
      desc: "Nghiên cứu và phát triển phần mềm doanh nghiệp",
      icon: Award,
    },
    {
      label: "Dự án trọng điểm",
      value: profile?.stats?.projects_completed || "4+ Dự án",
      desc: "Triển khai thực tế tại AITC (Chatbot, Quản lý thiết bị, E-Card, Web)",
      icon: Layers,
    },
    {
      label: "Ngôn ngữ lập trình",
      value: profile?.stats?.core_languages || "6+ Ngôn ngữ",
      desc: "Python, JavaScript, TypeScript, C#, Java, PHP",
      icon: Code,
    },
    {
      label: "Chuẩn kiến trúc",
      value: profile?.stats?.production_uptime || "100%",
      desc: "Ưu tiên Clean Code, Type Safety & Scalability",
      icon: ShieldCheck,
    },
  ];

  const pillars = [
    {
      icon: Cpu,
      title: "Tích hợp AI & Multi-Agent",
      description: "Ứng dụng các mô hình LLM và kiến trúc đa tác nhân nhằm tự động hóa quy trình, trích xuất dữ liệu thông minh và phân tích log thời gian thực.",
    },
    {
      icon: Layers,
      title: "Kiến trúc hệ thống chuẩn mực",
      description: "Phân tách rõ ràng giữa Routes, Services, Database Models; kết hợp state management hiện đại (Zustand, TanStack Query) cho frontend mượt mà.",
    },
    {
      icon: Zap,
      title: "Hiệu năng & Tối ưu hóa",
      description: "Tận dụng Async I/O (FastAPI, Motor), lập chỉ mục MongoDB thông minh, WebSockets giảm thiểu độ trễ xuống dưới 150ms.",
    },
    {
      icon: ShieldCheck,
      title: "Bền bỉ trong môi trường Production",
      description: "Đóng gói container hóa với Docker, quản lý biến môi trường (.env) an toàn, xử lý ngoại lệ chặt chẽ và theo dõi sức khỏe hệ thống (Health Check).",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
          <Badge variant="cyan" className="mx-auto">
            Về Bản Thân & Tầm Nhìn
          </Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Kỹ Sư Phần Mềm Hướng Tới <span className="gradient-text">Sự Hoàn Thiện</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Hành trình chuyển hóa những bài toán kỹ thuật phức tạp thành các hệ thống phần mềm tinh gọn, ổn định và có khả năng mở rộng cao.
          </p>
        </div>

        {/* Narrative & Objective Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Main Story */}
          <div className="lg:col-span-7 rounded-3xl border border-border/80 bg-card/60 backdrop-blur-md p-8 flex flex-col justify-between space-y-6">
            {/* Author Profile Header */}
            <div className="flex items-center gap-4 pb-5 border-b border-border/60">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-lg shadow-cyan-500/10 shrink-0">
                <img
                  src={avatarUrl}
                  alt="Ngô Minh Thiên"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h4 className="font-display font-bold text-lg text-foreground">
                    Ngô Minh Thiên
                  </h4>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>
                <p className="text-xs font-mono text-cyan-400">
                  Full-Stack Software Engineer • AITC (2025 - 2026)
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Mục tiêu sự nghiệp (Career Objective)
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground">
                Tạo dựng giá trị từ kỹ thuật xuất sắc & tư duy tự động hóa
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Là một Full-Stack developer có khả năng làm chủ cả frontend tương tác cao lẫn backend hiệu năng lớn, 
                tôi luôn tìm kiếm cách thức tối ưu hóa công việc thông qua việc tích hợp trí tuệ nhân tạo (AI) và kiến trúc Multi-Agent. 
                Mục tiêu dài hạn của tôi là đóng góp và thúc đẩy tiêu chuẩn kỹ thuật xuất sắc trong các dự án phần mềm quy mô lớn của doanh nghiệp.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Với nền tảng đào tạo chính quy về Kỹ thuật Phần mềm và kinh nghiệm làm việc thực tế tại trung tâm công nghệ thông tin AITC, 
                tôi tự tin vận hành các hệ thống từ cơ sở dữ liệu MongoDB/MySQL, API FastAPI/Node.js cho đến giao diện React/Tailwind mượt mà.
              </p>
            </div>

            {/* Education Highlight */}
            <div className="pt-4 border-t border-border/60 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">
                    University of Technology Ho Chi Minh City
                  </h4>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                    2021 – 2025
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Chuyên ngành: <strong>Kỹ thuật Phần mềm (Software Engineering)</strong>
                </p>
                <p className="text-xs text-muted-foreground">
                  Trọng tâm: Cấu trúc dữ liệu & giải thuật, kiến trúc phần mềm, hệ thống hướng đối tượng OOP và bảo mật ứng dụng web.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-border/70 bg-card/60 backdrop-blur-md p-6 flex flex-col justify-between hover:border-cyan-500/50 hover:bg-card/80 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="mt-6 space-y-1">
                    <span className="font-display font-extrabold text-2xl sm:text-3xl text-foreground group-hover:text-cyan-400 transition-colors">
                      {stat.value}
                    </span>
                    <h4 className="font-medium text-xs sm:text-sm text-foreground/90">
                      {stat.label}
                    </h4>
                    <p className="text-[11px] text-muted-foreground leading-snug">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Technical Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-border/60 bg-muted/20 backdrop-blur-sm p-6 space-y-3 hover:border-border transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h4 className="font-display font-bold text-base text-foreground">
                  {pillar.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
