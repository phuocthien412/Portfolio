import React from "react";
import { Link } from "react-router-dom";
import { Briefcase, GraduationCap, Calendar, CheckCircle2, Building2, ArrowRight, Layers } from "lucide-react";
import { usePortfolioStore } from "../stores/usePortfolioStore";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { useJourney } from "../hooks/usePortfolioData";

export const JourneyPage: React.FC = () => {
  const { data: journey } = useJourney();
  const language = usePortfolioStore((s) => s.language);
  const isEn = language === "en";

  const workExp = journey?.find((j) => j.type === "work");
  const eduExp = journey?.find((j) => j.type === "education");

  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Page Header */}
        <ScrollReveal animation="fade-up">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-cyan-400 uppercase tracking-widest">
              <Link to="/" className="hover:underline">{isEn ? "Home" : "Trang chủ"}</Link>
              <span>/</span>
              <span className="text-slate-900 dark:text-foreground">{isEn ? "Journey" : "Hành trình"}</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-foreground tracking-tight">
              {isEn ? "Career & Educational " : "Hành Trình "}<span className="gradient-text">{isEn ? "Evolution" : "Sự Nghiệp & Đào Tạo"}</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-muted-foreground leading-relaxed">
              {isEn
                ? "Milestones charting progression from academic excellence to engineering enterprise systems at AITC."
                : "Dấu ấn phát triển từ môi trường giảng đường đại học chính quy đến quá trình trực tiếp xây dựng và vận hành các hệ thống phần mềm doanh nghiệp tại AITC."}
            </p>
          </div>
        </ScrollReveal>

        {/* In-depth Milestone 1: AITC Enterprise */}
        <ScrollReveal animation="fade-up">
          <div className="rounded-3xl border border-slate-200 dark:border-border/80 bg-white dark:bg-card/70 backdrop-blur-xl p-8 sm:p-10 space-y-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Milestone Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-border/60">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-cyan-500/10 dark:text-cyan-400">
                  <Briefcase className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-foreground">
                    {workExp?.company_or_institution || "AITC - Asia Information Technology Center"}
                  </h2>
                  <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-cyan-400">
                    <Building2 className="w-4 h-4" />
                    <span>{workExp?.role_or_degree || "Full-Stack Developer"}</span>
                    <span className="text-slate-500 dark:text-muted-foreground font-normal">• TP. Hồ Chí Minh</span>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/30 whitespace-nowrap">
                <Calendar className="w-4 h-4" />
                <span>{workExp?.period || "08/2025 – 06/2026"}</span>
              </div>
            </div>

            {/* Narrative Overview */}
            <div className="space-y-4">
              <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-foreground">
                {isEn ? "Role Overview & Strategic Impact" : "Tổng Quan Vai Trò & Đóng Góp"}
              </h3>
              <p className="text-sm sm:text-base text-slate-700 dark:text-muted-foreground leading-relaxed">
                {isEn
                  ? "At AITC, I established high-throughput full-stack architectures for corporate clients. I actively integrated AI into development cycles to automate anomaly detection, optimize database queries, and streamline API deployment."
                  : (workExp?.summary || "Tại AITC, tôi khẳng định giá trị của một Full-Stack Developer có tư duy hệ thống vững vàng thông qua việc thiết kế, xây dựng và vận hành các hệ sinh thái phần mềm cấp doanh nghiệp hoạt động ổn định và bền bỉ.")}
              </p>
            </div>

            {/* 4 Core Projects Delivered Breakdown */}
            <div className="space-y-4 pt-2">
              <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-foreground flex items-center gap-2">
                <Layers className="w-5 h-5 text-emerald-600 dark:text-cyan-400" />
                <span>{isEn ? "4 Production Systems Delivered at AITC" : "4 Dự Án Trọng Điểm Trực Tiếp Phát Triển Tại AITC"}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Project 1 */}
                <div className="p-5 rounded-2xl border border-slate-200 dark:border-border/60 bg-slate-50 dark:bg-muted/20 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-base text-slate-900 dark:text-foreground">1. Tân Hòa Chatbot Project</h4>
                    <span className="text-[10px] font-mono text-emerald-700 dark:text-cyan-400 bg-emerald-50 dark:bg-cyan-500/10 px-2 py-0.5 rounded">Real-time Logs</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-muted-foreground leading-relaxed">
                    {isEn
                      ? "Core engineer designing a low-latency dashboard visualizing chatbot interaction logs and live anomaly detection with sub-second feedback."
                      : "Là thành viên chủ chốt, tôi tận dụng AI để nhanh chóng tiếp cận và làm chủ ngôn ngữ mới, thiết kế thành công bảng điều khiển Dashboard hiệu năng cao giúp trực quan hóa toàn bộ logs tương tác của Chatbot Tân Hòa theo thời gian thực với độ trễ phản hồi cực thấp."}
                  </p>
                </div>

                {/* Project 2 */}
                <div className="p-5 rounded-2xl border border-slate-200 dark:border-border/60 bg-slate-50 dark:bg-muted/20 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-base text-slate-900 dark:text-foreground">2. Official Website AITC</h4>
                    <span className="text-[10px] font-mono text-emerald-700 dark:text-cyan-400 bg-emerald-50 dark:bg-cyan-500/10 px-2 py-0.5 rounded">aitc-jsc.com</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-muted-foreground leading-relaxed">
                    {isEn
                      ? "Engineered the official enterprise portal (aitc-jsc.com) with high SEO scores, customized JavaScript visual effects, and fluid responsiveness."
                      : "Trực tiếp triển khai cổng thông tin chính thức của công ty (aitc-jsc.com) trên nền tảng WordPress kết hợp JavaScript hiện đại nhằm tạo ra các hiệu ứng thị giác tinh tế, đồng thời bảo đảm tiêu chuẩn tối ưu hóa công cụ tìm kiếm (SEO) và tương thích hoàn hảo trên mọi thiết bị."}
                  </p>
                </div>

                {/* Project 3 */}
                <div className="p-5 rounded-2xl border border-slate-200 dark:border-border/60 bg-slate-50 dark:bg-muted/20 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-base text-slate-900 dark:text-foreground">3. QR CODE - ECARD Platform</h4>
                    <span className="text-[10px] font-mono text-emerald-700 dark:text-cyan-400 bg-emerald-50 dark:bg-cyan-500/10 px-2 py-0.5 rounded">Event Tracking</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-muted-foreground leading-relaxed">
                    {isEn
                      ? "Automated event guest registration and digital invite delivery (E-Cards) paired with real-time QR code contactless check-in validation."
                      : "Phát triển nền tảng quản lý sự kiện thông minh tích hợp điểm danh khách mời bằng mã QR động và tự động tạo thiệp điện tử (E-card) cá nhân hóa. Thiết kế các Popup tương tác cao cấp mang lại trải nghiệm check-in không chạm, chính xác và chuyên nghiệp."}
                  </p>
                </div>

                {/* Project 4 */}
                <div className="p-5 rounded-2xl border border-slate-200 dark:border-border/60 bg-slate-50 dark:bg-muted/20 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-base text-slate-900 dark:text-foreground">4. Equipment Management System</h4>
                    <span className="text-[10px] font-mono text-emerald-700 dark:text-cyan-400 bg-emerald-50 dark:bg-cyan-500/10 px-2 py-0.5 rounded">AI Hardware Spec</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-muted-foreground leading-relaxed">
                    {isEn
                      ? "Enterprise hardware asset lifecycle platform featuring AI-assisted spec comparison, smart Excel filtering, and predictive maintenance schedules."
                      : "Triển khai hệ thống quản trị vòng đời thiết bị với công cụ so sánh cấu hình phần cứng và theo dõi lịch bảo trì tự động. Tích hợp AI thông minh để phân tích thông số kỹ thuật và lọc trường dữ liệu phức tạp trong quá trình nhập liệu file Excel lớn, chuyển đổi dữ liệu thô thành giao diện trực quan và dễ tìm kiếm."}
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Stack Used at AITC */}
            <div className="pt-4 border-t border-slate-200 dark:border-border/60 space-y-2">
              <span className="text-xs font-mono uppercase text-slate-600 dark:text-muted-foreground font-semibold">
                {isEn ? "Core Technologies Operated at AITC:" : "Hệ thống công nghệ đã vận hành tại AITC:"}
              </span>
              <div className="flex flex-wrap gap-2">
                {["React", "FastAPI (Python)", "Node.js", "MongoDB", "MySQL", "Docker", "Tailwind CSS", "WordPress", "WebSockets"].map((t) => (
                  <span key={t} className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 dark:bg-card border border-slate-200 dark:border-border/60 text-slate-800 dark:text-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* In-depth Milestone 2: University */}
        <ScrollReveal animation="fade-up">
          <div className="rounded-3xl border border-slate-200 dark:border-border/80 bg-white dark:bg-card/70 backdrop-blur-xl p-8 sm:p-10 space-y-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-border/60">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-foreground">
                    {eduExp?.company_or_institution || "University of Technology Ho Chi Minh City (HUTECH)"}
                  </h2>
                  <div className="flex items-center gap-2 text-sm font-semibold text-indigo-700 dark:text-indigo-400">
                    <GraduationCap className="w-4 h-4" />
                    <span>{eduExp?.role_or_degree || (isEn ? "Bachelor of Science in Software Engineering" : "Cử nhân Kỹ thuật Phần mềm (Software Engineering)")}</span>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/30 whitespace-nowrap">
                <Calendar className="w-4 h-4" />
                <span>{eduExp?.period || "2021 – 2025"}</span>
              </div>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-muted-foreground leading-relaxed">
              <p>
                {isEn
                  ? "Four years of rigorous Software Engineering education instilling systematic computer science fundamentals, algorithmic problem solving, and software quality assurance:"
                  : (eduExp?.summary || "Suốt 4 năm đào tạo chính quy, tôi tập trung rèn luyện tư duy thuật toán, phương pháp luận kỹ thuật phần mềm và khả năng nghiên cứu độc lập.")}
              </p>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>{isEn ? "Solid mastery of core object-oriented languages: C#, Java, Python, and full-stack web engineering." : "Nắm vững các ngôn ngữ nền tảng hướng đối tượng: C#, Java, Python và kỹ thuật lập trình web hiện đại."}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>{isEn ? "Relational database schema normalization (MySQL) and high-concurrency document stores (MongoDB)." : "Thiết kế và chuẩn hóa cơ sở dữ liệu quan hệ (ERD, Normalization) và phi quan hệ NoSQL."}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>{isEn ? "Standard development workflows: Agile/Scrum, CI/CD automation, unit testing, and Git version control." : "Thực hành các quy trình phát triển phần mềm chuẩn doanh nghiệp: Agile, Scrum, CI/CD và Git flow."}</span>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom CTA */}
        <ScrollReveal animation="fade-up">
          <div className="pt-8 border-t border-slate-200 dark:border-border/60 flex flex-wrap items-center justify-between gap-4">
            <Link to="/projects">
              <button className="inline-flex items-center gap-2 h-11 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/25 hover:shadow-lg transition-all">
                <span>{isEn ? "Discover Projects Built at AITC" : "Khám phá chi tiết các dự án đã làm"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link to="/skills">
              <button className="inline-flex items-center gap-2 h-11 px-6 rounded-xl font-semibold text-sm border border-slate-300 dark:border-emerald-500/40 bg-white dark:bg-emerald-500/10 text-slate-800 dark:text-emerald-300 hover:bg-slate-100 transition-all shadow-sm">
                <span>{isEn ? "View Skill Matrix" : "Xem ma trận kỹ năng"}</span>
              </button>
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};
