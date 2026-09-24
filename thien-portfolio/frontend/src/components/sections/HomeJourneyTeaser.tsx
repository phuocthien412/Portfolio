import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Route, Briefcase, GraduationCap } from "lucide-react";
import { Badge } from "../ui/Badge";
import { usePortfolioStore, useT } from "../../stores/usePortfolioStore";
import { ScrollReveal } from "../ui/ScrollReveal";

export const HomeJourneyTeaser: React.FC = () => {
  const t = useT();
  const language = usePortfolioStore((s) => s.language);
  const isEn = language === "en";

  const experiences = [
    {
      id: "aitc",
      icon: Briefcase,
      role: isEn ? "Software Engineer & AI Systems Integrator" : "Kỹ Sư Phần Mềm & Tích Hợp AI",
      company: isEn ? "AITC Technology Joint Stock Company" : "Công ty Cổ phần Công nghệ AITC",
      period: "08/2025 – 06/2026",
      bullets: isEn
        ? [
            "Architected and deployed full-stack Enterprise applications using React, TypeScript, FastAPI, and MongoDB.",
            "Pioneered AI Multi-Agent orchestration to automate business data processing, log analysis, and system monitoring.",
            "Standardized clean code practices, optimized database queries, and implemented Docker CI/CD pipelines ensuring high availability.",
          ]
        : [
            "Thiết kế & phát triển các hệ thống Enterprise web và kiến trúc Microservices FastAPI/Python và React, TypeScript.",
            "Nghiên cứu và triển khai giải pháp AI Multi-Agent, tự động hóa xử lý dữ liệu doanh nghiệp và phân tích log thời gian thực.",
            "Chuẩn hóa Clean Code, tối ưu hóa hiệu năng cơ sở dữ liệu MongoDB/MySQL và xây dựng quy trình CI/CD với Docker.",
          ],
      techStack: ["React", "FastAPI", "Python", "MongoDB", "Docker", "Tailwind CSS", "AI Multi-Agent"],
    },
    {
      id: "intern",
      icon: Briefcase,
      role: isEn ? "Full-Stack Software Engineering Intern" : "Lập Trình Viên Thực Tập (Software Intern)",
      company: isEn ? "Software Development & Solution Teams" : "Đội ngũ Phát triển Phần mềm & Giải pháp",
      period: "2024 – 2025",
      bullets: isEn
        ? [
            "Contributed to building internal CRM modules, optimizing RESTful APIs and database query performance.",
            "Developed responsive and accessible UI components with React, adhering strictly to modern UX/UI guidelines.",
            "Collaborated within Agile/Scrum sprints, maintaining rigorous Git workflows and unit test coverage.",
          ]
        : [
            "Đóng góp xây dựng các module backend API, quản lý dữ liệu và tối ưu tốc độ xử lý cơ sở dữ liệu.",
            "Phát triển giao diện web responsive với React và TypeScript, đảm bảo trải nghiệm người dùng mượt mà trên đa thiết bị.",
            "Làm quen và thích nghi nhanh với quy trình phát triển phần mềm theo mô hình Agile/Scrum và chuẩn Git flow.",
          ],
      techStack: ["React", "TypeScript", "Node.js", "MySQL", "RESTful API", "Git"],
    },
    {
      id: "hutech",
      icon: GraduationCap,
      role: isEn ? "Bachelor of Software Engineering" : "Sinh Viên Kỹ Sư Công Nghệ Thông Tin / Kỹ Thuật Phần Mềm",
      company: isEn ? "Ho Chi Minh City University of Technology (HUTECH)" : "Đại học Công nghệ TP.HCM (HUTECH)",
      period: "2021 – 2025",
      bullets: isEn
        ? [
            "Graduated with in-depth knowledge in software architecture, algorithms, data structures, and distributed systems.",
            "Conducted hands-on capstone projects integrating modern AI workflows and scalable cloud architectures.",
            "Maintained consistent self-driven learning, adopting cutting-edge web frameworks directly into production projects.",
          ]
        : [
            "Tốt nghiệp chuyên ngành Kỹ thuật Phần mềm với nền tảng vững vàng về giải thuật, cấu trúc dữ liệu và kiến trúc hệ thống.",
            "Thực hiện các đồ án chuyên sâu về ứng dụng web phân tán, cơ sở dữ liệu quy mô lớn và ứng dụng trí tuệ nhân tạo.",
            "Chủ động nghiên cứu và cập nhật liên tục các công nghệ web & AI thế hệ mới từ khi còn ngồi trên ghế nhà trường.",
          ],
      techStack: ["Software Architecture", "Algorithms", "C#", "Java", "Python", "Clean Code"],
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 relative overflow-hidden bg-slate-50/50 dark:bg-card/20 border-t border-border/40">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header matching reference */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="space-y-3">
              <Badge variant="emerald">{t.journey.sectionBadge}</Badge>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-foreground">
                {t.journey.title} <span className="gradient-text">{t.journey.highlight}</span>
              </h2>
              <p className="text-base text-slate-600 dark:text-muted-foreground leading-relaxed max-w-2xl">
                {t.journey.subtitle}
              </p>
            </div>
            <Link to="/journey">
              <button className="inline-flex items-center gap-2 h-10 px-5 rounded-xl text-xs sm:text-sm font-semibold border border-slate-300 dark:border-border/80 bg-white dark:bg-card/60 text-slate-800 dark:text-foreground hover:bg-slate-100 dark:hover:bg-card/90 shadow-sm transition-all whitespace-nowrap active:scale-[0.98]">
                <Route className="w-4 h-4 text-emerald-600 dark:text-cyan-400" />
                <span>{t.journey.viewFullBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </ScrollReveal>

        {/* Experience Cards List matching Xuan Quang Dev */}
        <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">
          {experiences.map((exp, idx) => (
            <ScrollReveal key={exp.id} animation="fade-up" delay={idx * 120}>
              <div className="rounded-2xl border border-slate-200 dark:border-border/60 bg-white dark:bg-card/80 backdrop-blur-sm p-7 sm:p-8 hover:border-emerald-500/50 dark:hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 group hover:-translate-y-1.5 relative overflow-hidden shadow-sm">
                
                {/* Left accent vertical line that glows on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-500 to-teal-400 opacity-60 group-hover:opacity-100 group-hover:w-2 transition-all duration-300" />

                {/* Header Row: Role & Company + Period Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-foreground mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-base sm:text-lg">
                      {exp.company}
                    </p>
                  </div>
                  <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-100 dark:bg-secondary/50 text-slate-800 dark:text-foreground/80 text-xs sm:text-sm font-mono font-medium border border-slate-200 dark:border-border/50 shadow-sm whitespace-nowrap self-start sm:self-auto">
                    {exp.period}
                  </div>
                </div>

                {/* Bullets List with Emerald Accent Dot */}
                <ul className="space-y-3 sm:space-y-3.5 mb-5">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-foreground/75 leading-relaxed text-sm sm:text-base">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills at Bottom */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-border/40">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-secondary/60 text-slate-700 dark:text-secondary-foreground border border-slate-200 dark:border-border/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
