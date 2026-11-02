import React from "react";
import { Link } from "react-router-dom";
import { ContactSection } from "../components/sections/ContactSection";
import { useT } from "../stores/usePortfolioStore";

export const ContactPage: React.FC = () => {
  const t = useT();

  return (
    <div className="pt-24 pb-16 min-h-[calc(100vh-80px)] flex flex-col justify-center">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Compact Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-cyan-400 uppercase tracking-widest mb-4">
          <Link to="/" className="hover:underline">{t.pages.common.home}</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-foreground">{t.nav.contact}</span>
        </div>

        {/* 2 Cột: Thông tin liên lạc & Biểu mẫu tương tác nằm gọn gàng trên 1 trang */}
        <ContactSection isCompact={true} />
      </div>
    </div>
  );
};
