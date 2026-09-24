import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp, Mail, Phone, MapPin, Terminal, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "../ui/Icons";
import { useT } from "../../stores/usePortfolioStore";

export const Footer: React.FC = () => {
  const t = useT();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/70 bg-slate-100/80 dark:bg-card/40 backdrop-blur-lg pt-16 pb-12 overflow-hidden">
      {/* Subtle Aurora Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-emerald-500/10 blur-[90px] pointer-events-none rounded-full" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-border/60">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center font-display font-black text-white text-xs shadow-sm">
                NM
              </div>
              <span className="font-display font-bold text-lg text-slate-900 dark:text-foreground">
                NGÔ MINH THIÊN
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-muted-foreground leading-relaxed max-w-md">
              {t.footer.roleDesc}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-cyan-400 font-semibold">
              {t.footer.pagesTitle}
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-foreground/75">
              <li>
                <Link to="/" className="hover:text-emerald-600 dark:hover:text-cyan-400 transition-colors">{t.nav.home}</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-600 dark:hover:text-cyan-400 transition-colors">{t.nav.about}</Link>
              </li>
              <li>
                <Link to="/journey" className="hover:text-emerald-600 dark:hover:text-cyan-400 transition-colors">{t.nav.journey}</Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-emerald-600 dark:hover:text-cyan-400 transition-colors">{t.nav.skills}</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-emerald-600 dark:hover:text-cyan-400 transition-colors">{t.nav.projects}</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-600 dark:hover:text-cyan-400 transition-colors">{t.nav.contact}</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-cyan-400 font-semibold">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-600 dark:text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-600 dark:text-cyan-400 shrink-0" />
                <a href="mailto:minhngothien1@gmail.com" className="hover:text-slate-900 dark:hover:text-foreground transition-colors">
                  minhngothien1@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600 dark:text-cyan-400 shrink-0" />
                <a href="tel:0987176434" className="hover:text-slate-900 dark:hover:text-foreground transition-colors">
                  0987 176 434
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 dark:text-cyan-400 shrink-0" />
                <span>Phường Phú Thuận, Quận 7, TP. HCM</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <GithubIcon className="w-4 h-4 text-emerald-600 dark:text-cyan-400 shrink-0" />
                <a
                  href="https://github.com/phuocthien412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 dark:hover:text-foreground transition-colors"
                >
                  github.com/phuocthien412
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {t.footer.copyright}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-border/60 bg-white dark:bg-background/50 text-slate-700 dark:text-foreground/80 hover:text-emerald-600 dark:hover:text-cyan-400 hover:border-emerald-500/40 shadow-sm transition-all group"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
