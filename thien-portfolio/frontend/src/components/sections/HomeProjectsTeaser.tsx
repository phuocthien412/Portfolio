import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layers, Sparkles } from "lucide-react";
import { Badge } from "../ui/Badge";
import { usePortfolioStore, useT } from "../../stores/usePortfolioStore";
import { ScrollReveal } from "../ui/ScrollReveal";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { ProjectFlipCard } from "./ProjectFlipCard";
import type { ProjectItem } from "../../types";

interface HomeProjectsTeaserProps {
  projects?: ProjectItem[];
}

export const HomeProjectsTeaser: React.FC<HomeProjectsTeaserProps> = ({ projects }) => {
  const t = useT();
  const language = usePortfolioStore((s) => s.language);
  const isEn = language === "en";
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Fallback top 3 projects if not loaded from API yet
  const defaultProjects: ProjectItem[] = [
    {
      id: "tan-hoa-chatbot",
      slug: "tan-hoa-chatbot-logs-dashboard",
      title: isEn ? "Tan Hoa Real-time Chatbot & Log Dashboard" : "Tân Hòa Chatbot & Log Monitoring Dashboard",
      tagline: isEn
        ? "\"Empowering real-time AI observability with sub-150ms latency.\""
        : "\"Giám sát và phân tích log tương tác Chatbot thông minh theo thời gian thực.\"",
      description: isEn
        ? "High-performance enterprise dashboard built to observe and analyze thousands of daily chatbot interactions in real-time, leveraging AI intent analysis."
        : "Bảng điều khiển hiệu năng cao giúp phân tích, trực quan hóa và giám sát tức thì toàn bộ tương tác và log vận hành của Chatbot Tân Hòa.",
      category: "AI & Automation",
      featured: true,
      company: "AITC",
      period: "2025 - 2026",
      metrics: isEn
        ? ["Sub-150ms real-time log event streaming", "Automated anomaly & sentiment detection"]
        : ["Thời gian phản hồi log thời gian thực dưới 150ms", "Tự động phát hiện bất thường & phân loại hội thoại"],
      features: [
        "WebSocket real-time streaming",
        "AI sentiment & intent tagging",
        "Instant error alerting",
        "Sub-150ms latency architecture",
      ],
      tech_stack: ["React", "Tailwind CSS", "Python", "FastAPI", "WebSockets", "MongoDB"],
      image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      github_url: "https://github.com/phuocthien412",
      demo_url: undefined,
    },
    {
      id: "equipment-management",
      slug: "equipment-management-system",
      title: isEn ? "Equipment Lifecycle & Smart Spec Comparison" : "Equipment Management & Smart Spec Comparison",
      tagline: isEn
        ? "\"AI-driven Excel normalization and automated lifecycle maintenance.\""
        : "\"Quản lý vòng đời thiết bị và so sánh cấu hình thông minh tích hợp AI.\"",
      description: isEn
        ? "End-to-end enterprise hardware management platform featuring automated maintenance scheduling and AI-assisted Excel data ingestion."
        : "Hệ thống quản trị vòng đời thiết bị, theo dõi lịch bảo trì tự động và công cụ so sánh cấu hình phần cứng tích hợp trí tuệ nhân tạo.",
      category: "Enterprise System",
      featured: true,
      company: "AITC",
      period: "2025 - 2026",
      metrics: isEn
        ? ["80% faster batch hardware import via AI", "Zero data conflict across maintenance lifecycles"]
        : ["Rút ngắn 80% thời gian nhập liệu phần cứng nhờ AI", "Bảo trì chính xác 100% không trùng lặp"],
      features: [
        "AI-assisted Excel bulk ingestion",
        "Hardware spec differential engine",
        "Automated maintenance notification schedules",
        "Clean RBAC permissions for enterprise staff",
      ],
      tech_stack: ["React", "FastAPI", "Python", "MySQL", "OpenAI API", "Tailwind CSS", "Docker"],
      image_url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      github_url: "https://github.com/phuocthien412",
      demo_url: undefined,
    },
    {
      id: "aitc-portal",
      slug: "aitc-official-portal",
      title: isEn ? "AITC Technology Official Portal & Showcase" : "AITC Official Portal & Technology Showcase",
      tagline: isEn
        ? "\"Enterprise-grade design system with 98+ Core Web Vitals score.\""
        : "\"Cổng thông tin doanh nghiệp chuẩn SEO, tối ưu tốc độ và nhận diện thương hiệu.\"",
      description: isEn
        ? "Official digital hub representing AITC Technology. Built with cutting-edge responsive UI, deep SEO architecture, and dynamic content management."
        : "Cổng thông tin doanh nghiệp chính thức đại diện cho AITC. Giao diện hiện đại, tối ưu SEO toàn diện và trải nghiệm mượt mà trên mọi thiết bị.",
      category: "Web Engineering",
      featured: true,
      company: "AITC",
      period: "2025 - 2026",
      metrics: isEn
        ? ["98+ Lighthouse Performance Score", "100% Mobile Responsive UX/UI compliance"]
        : ["Điểm Lighthouse Performance đạt 98+", "Tối ưu hiển thị hoàn hảo trên 100% thiết bị di động"],
      features: [
        "Headless CMS integration via REST",
        "Sub-second First Contentful Paint (FCP)",
        "Structured Schema.org JSON-LD SEO",
        "Accessible, high-contrast dark/light design system",
      ],
      tech_stack: ["React", "TypeScript", "Tailwind CSS", "WordPress REST", "FastAPI"],
      image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      github_url: "https://github.com/phuocthien412",
      demo_url: "https://aitc-jsc.com",
    },
  ];

  const displayProjects = projects && projects.length > 0 ? projects.slice(0, 3) : defaultProjects;

  return (
    <>
      <section id="projects" className="py-20 sm:py-28 relative overflow-hidden bg-background border-t border-border/40">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Section Header matching reference */}
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div className="space-y-3">
                <Badge variant="emerald">
                  <Sparkles className="w-3.5 h-3.5 mr-1" />
                  {t.projects.sectionBadge}
                </Badge>
                <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-foreground">
                  {t.projects.title} <span className="gradient-text">{t.projects.highlight}</span>
                </h2>
                <p className="text-base text-slate-600 dark:text-muted-foreground leading-relaxed max-w-2xl">
                  {t.projects.subtitle}
                </p>
              </div>
              <Link to="/projects">
                <button className="inline-flex items-center gap-2 h-10 px-5 rounded-xl text-xs sm:text-sm font-semibold border border-slate-300 dark:border-emerald-500/40 bg-white dark:bg-emerald-500/10 text-slate-800 dark:text-emerald-300 hover:bg-slate-100 dark:hover:bg-emerald-500/20 shadow-sm transition-all whitespace-nowrap active:scale-[0.98]">
                  <Layers className="w-4 h-4" />
                  <span>{t.projects.viewAllBtn}</span>
                </button>
              </Link>
            </div>
          </ScrollReveal>

          {/* 3D Playing Card Flip Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProjects.map((project, idx) => (
              <ScrollReveal key={project.id} animation="fade-up" delay={idx * 130}>
                <ProjectFlipCard
                  project={project}
                  index={idx}
                  onSelectProject={setSelectedProject}
                />
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

