import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles, FolderGit2, User, Cpu, Route, MessageSquare, Home, FileText } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { usePortfolioStore, useT } from "../../stores/usePortfolioStore";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isMobileMenuOpen, setMobileMenuOpen, openCvModal } = usePortfolioStore();
  const t = useT();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, setMobileMenuOpen]);

  const navItems = [
    { label: t.nav.home, href: "/", icon: Home },
    { label: t.nav.about, href: "/about", icon: User },
    { label: t.nav.journey, href: "/journey", icon: Route },
    { label: t.nav.skills, href: "/skills", icon: Cpu },
    { label: t.nav.projects, href: "/projects", icon: FolderGit2 },
    { label: t.nav.contact, href: "/contact", icon: MessageSquare },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/85 dark:bg-background/85 backdrop-blur-xl border-b border-border/70 shadow-lg shadow-black/5 dark:shadow-black/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo with Rich Interactive Hover Effects */}
          <Link
            to="/"
            className="flex items-center gap-3 group relative cursor-pointer"
            aria-label="Ngô Minh Thiên - Trang chủ"
          >
            {/* Square Rounded NM Logo with 3D Tilt, Neon Glow & Shimmer */}
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-400 p-[1.5px] transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.7)] shadow-md shadow-emerald-500/25 overflow-hidden">
              {/* Internal Badge */}
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-display font-black text-emerald-400 group-hover:text-emerald-300 transition-colors relative overflow-hidden">
                <span className="text-sm tracking-tight font-extrabold select-none">NM</span>
                {/* Shimmer sweep effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              </div>
            </div>

            {/* Title & Role with Hover Interaction */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-base sm:text-lg tracking-tight text-foreground group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                  MINH THIÊN
                </span>
                
                {/* Status Dot with Radar Pulse on Hover */}
                <div className="relative flex items-center justify-center w-2.5 h-2.5 ml-0.5">
                  <span className="absolute w-full h-full rounded-full bg-emerald-400 opacity-75 group-hover:animate-radar" />
                  <span className="relative w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_8px_#10b981]" title={t.hero.availableBadge} />
                </div>
              </div>

              <span className="text-[10px] font-mono text-muted-foreground -mt-0.5 tracking-wider uppercase group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                SOFTWARE ENGINEER
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with React Router NavLink */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-border/70 bg-card/70 backdrop-blur-md px-3 py-1.5 shadow-sm">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-semibold border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.25)]"
                        : "text-foreground/75 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-500/10"
                    }`
                  }
                >
                  <Icon className="w-3.5 h-3.5 opacity-80" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <LanguageToggle />

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Quick CV Viewer Button */}
            <button
              onClick={openCvModal}
              className="hidden sm:inline-flex items-center gap-1.5 h-9 px-3.5 rounded-xl text-xs font-semibold border border-emerald-500/40 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-500 transition-all active:scale-95"
              title="Xem và tải CV Ngô Minh Thiên"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.nav.viewCv}</span>
            </button>

            {/* Quick Contact CTA */}
            <Link to="/contact" className="hidden lg:inline-flex">
              <button className="inline-flex items-center justify-center gap-1.5 h-9 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_25px_rgba(16,185,129,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.nav.contactNow}</span>
              </button>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 md:hidden rounded-xl border border-border/70 bg-card/60 text-foreground/80 hover:text-emerald-500 transition-colors"
              aria-label={t.nav.menuTitle}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-2xl pt-24 px-6 pb-8 flex flex-col justify-between animate-in fade-in duration-200">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-border/60">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                {t.nav.menuTitle}
              </span>
              <LanguageToggle />
            </div>

            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                    isActive
                      ? "border-emerald-500/60 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-semibold"
                      : "border-border/60 bg-card/40 text-foreground text-sm font-medium hover:border-emerald-500/50 hover:text-emerald-500"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{item.label}</span>
                  </div>
                  {isActive && (
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">Active</span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-border/60 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openCvModal();
              }}
              className="w-full py-3 rounded-xl font-semibold text-sm border border-emerald-500/50 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>{t.nav.viewCv}</span>
            </button>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block"
            >
              <button className="w-full py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                {t.nav.contactNow}
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
