import React, { useEffect } from "react";
import { X, Download, ExternalLink, FileText, Sparkles } from "lucide-react";
import { usePortfolioStore, useT } from "../../stores/usePortfolioStore";

export const CvViewerModal: React.FC = () => {
  const { isCvModalOpen, closeCvModal } = usePortfolioStore();
  const t = useT();

  const cvPdfUrl = "/cv/CV_NGOMINHTHIEN.pdf";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCvModal();
    };

    if (isCvModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCvModalOpen, closeCvModal]);

  if (!isCvModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-3 sm:p-6 md:p-8 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/75 dark:bg-black/85 backdrop-blur-md transition-opacity"
        onClick={closeCvModal}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-5xl h-[92vh] flex flex-col rounded-3xl border border-slate-200 dark:border-border/80 bg-white dark:bg-[#0c141d] shadow-[0_20px_60px_rgba(0,0,0,0.4)] z-10 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-4 border-b border-slate-200 dark:border-border/70 bg-slate-50/80 dark:bg-card/70 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-foreground">
                  {t.cvModal.title}
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                  <Sparkles className="w-3 h-3" /> PDF 2026
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-muted-foreground hidden sm:block">
                {t.cvModal.subtitle}
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            {/* Download PDF button */}
            <a
              href={cvPdfUrl}
              download="CV_NGOMINHTHIEN.pdf"
              className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow-md transition-all active:scale-95"
              title={t.cvModal.downloadBtn}
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.cvModal.downloadBtn}</span>
            </a>

            {/* Open in new tab button */}
            <a
              href={cvPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 h-9 px-3 rounded-xl text-xs font-semibold border border-slate-300 dark:border-border/80 bg-white dark:bg-card/70 text-slate-700 dark:text-foreground hover:bg-slate-100 dark:hover:bg-muted transition-all active:scale-95"
              title={t.cvModal.openTabBtn}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.cvModal.openTabBtn}</span>
            </a>

            {/* Close Button */}
            <button
              onClick={closeCvModal}
              className="p-2 rounded-xl border border-slate-200 dark:border-border/80 text-slate-500 hover:text-slate-900 dark:text-muted-foreground dark:hover:text-foreground hover:bg-slate-100 dark:hover:bg-card transition-colors"
              aria-label={t.cvModal.closeBtn}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 w-full bg-slate-100 dark:bg-slate-950 p-2 sm:p-4 overflow-hidden">
          <iframe
            src={`${cvPdfUrl}#toolbar=1&navpanes=0`}
            className="w-full h-full rounded-2xl border border-slate-300 dark:border-border/60 bg-white shadow-inner"
            title="CV Ngô Minh Thiên - Software Engineer"
          />
        </div>
      </div>
    </div>
  );
};
