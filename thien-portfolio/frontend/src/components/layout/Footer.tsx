import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Terminal,
  Code2,
  Home,
  User,
  Route,
  Cpu,
  FolderKanban,
  ChevronRight,
} from "lucide-react";
import { ModernDockSocials } from "../ui/ModernDockSocials";
import { useT } from "../../stores/usePortfolioStore";

export const Footer: React.FC = () => {
  const t = useT();
  const location = useLocation();

  const navLinks = [
    { to: "/", label: t.nav.home, icon: Home, index: "01" },
    { to: "/about", label: t.nav.about, icon: User, index: "02" },
    { to: "/journey", label: t.nav.journey, icon: Route, index: "03" },
    { to: "/skills", label: t.nav.skills, icon: Cpu, index: "04" },
    { to: "/projects", label: t.nav.projects, icon: FolderKanban, index: "05" },
    { to: "/contact", label: t.nav.contact, icon: Mail, index: "06" },
  ];

  return (
    <footer className="relative border-t border-slate-200/80 dark:border-emerald-500/20 bg-slate-100/70 dark:bg-card/40 backdrop-blur-2xl text-slate-700 dark:text-slate-200 overflow-hidden transition-colors duration-300 pt-16 pb-12">
      {/* 1. Cosmic Horizon Gradient Beam on Top Edge */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent shadow-[0_0_12px_rgba(16,185,129,0.3)]" />

      {/* 2. Ambient Deep Space Nebula Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[220px] bg-gradient-to-b from-emerald-500/10 via-cyan-500/5 to-transparent dark:from-emerald-500/15 dark:via-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Grid: 3 Cột Chia Đều Nhau (grid-cols-1 md:grid-cols-3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 pb-12 border-b border-slate-200 dark:border-white/[0.08]">
          {/* Cột 1: Thông tin Kỹ sư & Nhận diện */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative group shrink-0">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-400 flex items-center justify-center font-display font-black text-slate-950 text-base shadow-[0_0_25px_rgba(16,185,129,0.45)] transition-transform duration-300 group-hover:scale-105">
                  NM
                </div>
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-40 blur transition-opacity pointer-events-none" />
              </div>
              <div className="space-y-1">
                <span className="font-display font-extrabold text-xl text-slate-900 dark:text-white tracking-tight block">
                  NGÔ MINH THIÊN
                </span>
                <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-medium flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  Software Engineer
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
              {t.footer.roleDesc}
            </p>
          </div>

          {/* Cột 2: Điều Hướng Hệ Thống */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/[0.06]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>{t.footer.pagesTitle}</span>
              </h4>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                6 Routes
              </span>
            </div>

            <div className="space-y-1.5">
              {navLinks.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`group relative flex items-center justify-between px-3 py-2 rounded-xl border transition-all duration-200 overflow-hidden ${
                      isActive
                        ? "bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-500/50 text-slate-900 dark:text-white shadow-sm"
                        : "border-slate-200/80 dark:border-white/[0.04] bg-white/80 dark:bg-white/[0.02] hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:border-emerald-500/30 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-xs"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    <div className="flex items-center gap-2.5 truncate relative z-10">
                      <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors w-4">
                        {item.index}
                      </span>
                      <div
                        className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? "bg-emerald-500/20 dark:bg-emerald-500/30 text-emerald-700 dark:text-emerald-300"
                            : "bg-slate-100 dark:bg-white/5 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/20 text-slate-500 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-medium truncate">{item.label}</span>
                    </div>

                    {isActive ? (
                      <span className="text-[9px] font-mono font-bold tracking-wider uppercase px-1.5 py-0.5 rounded bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 relative z-10 shrink-0">
                        ACT
                      </span>
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all shrink-0 relative z-10 opacity-60 group-hover:opacity-100" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Cột 3: Liên Hệ & Kết Nối Trực Tiếp */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/[0.06]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>{t.footer.contactTitle}</span>
              </h4>
            </div>

            {/* Social Squircle Dock */}
            <div className="py-0.5">
              <ModernDockSocials />
            </div>

            {/* Direct Contact Details */}
            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400 font-mono">
              <div className="flex items-center gap-2.5 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">
                <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <a href="mailto:minhngothien1@gmail.com" className="hover:underline truncate text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-300">
                  minhngothien1@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">
                <Phone className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <a href="tel:0987176434" className="hover:underline text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-300">
                  (+84) 0987 176 434
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>{t.footer.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
          <div>
            <span>© {new Date().getFullYear()} {t.footer.copyright}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
