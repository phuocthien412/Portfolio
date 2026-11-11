import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, MessageSquare, Copy, Check, Sparkles } from "lucide-react";
import { GithubIcon } from "../ui/Icons";
import { Badge } from "../ui/Badge";
import { ModernDockSocials } from "../ui/ModernDockSocials";
import { usePortfolioStore, useT } from "../../stores/usePortfolioStore";
import { ScrollReveal } from "../ui/ScrollReveal";
import { HCaptchaWidget } from "../ui/HCaptchaWidget";
import { useSubmitContact } from "../../hooks/usePortfolioData";
import type { ContactFormInput } from "../../types";

interface ContactSectionProps {
  isCompact?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isCompact = false }) => {
  const t = useT();
  const { language, theme } = usePortfolioStore();
  const isEn = language === "en";
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState<ContactFormInput>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaResetSignal, setCaptchaResetSignal] = useState(0);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const submitMutation = useSubmitContact();

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("minhngothien1@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    // 1. Honeypot check: If bot filled the hidden field, silently fake success without sending
    if (honeypot.trim() !== "") {
      setStatusMessage({
        type: "success",
        text: t.contact.successMessage,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      return;
    }

    // 2. Client-side Rate Limiting (60-second anti-flood cooldown)
    const lastSent = localStorage.getItem("last_contact_sent_timestamp");
    if (lastSent) {
      const elapsed = Date.now() - parseInt(lastSent, 10);
      const cooldownMs = 60000;
      if (elapsed < cooldownMs) {
        const remainingSec = Math.ceil((cooldownMs - elapsed) / 1000);
        setStatusMessage({
          type: "error",
          text: t.contact.cooldownWarning.replace("{sec}", remainingSec.toString()),
        });
        return;
      }
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatusMessage({ type: "error", text: t.contact.requiredWarning });
      return;
    }

    if (!captchaToken) {
      setStatusMessage({ type: "error", text: t.contact.captchaWarning });
      return;
    }

    try {
      const response = await submitMutation.mutateAsync({
        ...formData,
        captchaToken,
      });
      setStatusMessage({
        type: "success",
        text: response.message || t.contact.successMessage,
      });
      localStorage.setItem("last_contact_sent_timestamp", Date.now().toString());
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      setStatusMessage({
        type: "error",
        text: err.message || t.contact.errorMessage,
      });
    } finally {
      setCaptchaToken("");
      setCaptchaResetSignal((prev) => prev + 1);
    }
  };

  return (
    <section id="contact" className={isCompact ? "py-2 sm:py-4 relative overflow-hidden" : "py-16 sm:py-20 relative overflow-hidden"}>
      {/* Background Subtle Cyber Glow */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-emerald-500/10 dark:bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className={isCompact ? "space-y-2 mb-6 text-center max-w-3xl mx-auto" : "space-y-3 mb-10 sm:mb-14 text-center max-w-3xl mx-auto"}>
            <Badge variant="emerald" className="mx-auto">
              {t.contact.sectionBadge}
            </Badge>
            <h2 className={isCompact ? "font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-foreground" : "font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-foreground"}>
              {t.contact.title} <span className="gradient-text">{t.contact.highlight}</span>
            </h2>
            <p className={isCompact ? "text-xs sm:text-sm text-slate-600 dark:text-muted-foreground leading-relaxed" : "text-base text-slate-600 dark:text-muted-foreground leading-relaxed"}>
              {t.contact.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* 2 Cột Đối Xứng Cân Bằng 100% (Balanced Symmetric Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* CỘT 1 (BÊN TRÁI): Card Kênh Liên Hệ Trực Tiếp */}
          <div className="lg:col-span-5 h-full">
            <ScrollReveal animation="fade-right" className="h-full">
              <div className="rounded-3xl border border-slate-200 dark:border-border/80 bg-white dark:bg-card/75 backdrop-blur-xl p-5 sm:p-6 shadow-lg flex flex-col justify-between h-full">
                <div>
                  {/* Card Header Trái */}
                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-cyan-400 font-mono text-xs uppercase font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{isEn ? "Direct Channels" : "Kênh kết nối trực tiếp"}</span>
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-foreground">
                      {t.contact.directTitle}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-muted-foreground leading-relaxed">
                      {t.contact.directSubtitle}
                    </p>
                  </div>

                  {/* Modern Floating Squircle Dock */}
                  <div className="pt-1 pb-3">
                    <ModernDockSocials />
                  </div>

                  {/* Danh Sách Kênh Liên Hệ */}
                  <div className="space-y-2.5">
                    {/* Số điện thoại */}
                    <a
                      href="tel:0987176434"
                      className="rounded-2xl border border-slate-200 dark:border-border/80 bg-white/80 dark:bg-background/50 p-3.5 flex items-center gap-4 hover:border-emerald-500/50 hover:bg-slate-50 dark:hover:bg-card/90 transition-all shadow-xs group"
                    >
                      <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 dark:bg-cyan-500/10 dark:text-cyan-400 group-hover:scale-105 transition-transform">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-500 dark:text-muted-foreground uppercase">{t.contact.phoneLabel}</span>
                        <h4 className="font-semibold text-slate-900 dark:text-foreground text-sm group-hover:text-emerald-700 dark:group-hover:text-cyan-400 transition-colors">
                          0987 176 434
                        </h4>
                      </div>
                    </a>

                    {/* Email với nút Copy 1-Click */}
                    <div className="rounded-2xl border border-slate-200 dark:border-border/80 bg-white/80 dark:bg-background/50 p-3.5 flex items-center justify-between gap-3 hover:border-emerald-500/50 hover:bg-slate-50 dark:hover:bg-card/90 transition-all shadow-xs group">
                      <a
                        href="mailto:minhngothien1@gmail.com?subject=Trao%20đổi%20cơ%20hội%20việc%20làm"
                        className="flex items-center gap-4 flex-1 min-w-0"
                        title={t.contact.openEmailApp}
                      >
                        <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 dark:bg-cyan-500/10 dark:text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[10px] font-mono text-slate-500 dark:text-muted-foreground uppercase">{t.contact.emailLabel}</span>
                          <h4 className="font-semibold text-slate-900 dark:text-foreground text-sm group-hover:text-emerald-700 dark:group-hover:text-cyan-400 transition-colors truncate">
                            minhngothien1@gmail.com
                          </h4>
                        </div>
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border border-slate-200 dark:border-border bg-slate-50 dark:bg-card text-slate-700 dark:text-slate-300 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400 transition-all shrink-0 cursor-pointer"
                        title={isEn ? "Copy email address" : "Sao chép địa chỉ email"}
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold">{isEn ? "Copied" : "Đã chép"}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>{isEn ? "Copy" : "Sao chép"}</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Địa chỉ */}
                    <div className="rounded-2xl border border-slate-200 dark:border-border/80 bg-white/80 dark:bg-background/50 p-3.5 flex items-center gap-4 shadow-xs">
                      <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 dark:bg-cyan-500/10 dark:text-cyan-400">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-500 dark:text-muted-foreground uppercase">{t.contact.addressLabel}</span>
                        <h4 className="font-semibold text-slate-900 dark:text-foreground text-sm">
                          {t.contact.addressValue}
                        </h4>
                      </div>
                    </div>

                    {/* GitHub */}
                    <a
                      href="https://github.com/phuocthien412"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl border border-slate-200 dark:border-border/80 bg-white/80 dark:bg-background/50 p-3.5 flex items-center gap-4 hover:border-emerald-500/50 hover:bg-slate-50 dark:hover:bg-card/90 transition-all shadow-xs group"
                    >
                      <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 dark:bg-cyan-500/10 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                        <GithubIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-500 dark:text-muted-foreground uppercase">{t.contact.githubLabel}</span>
                        <h4 className="font-semibold text-slate-900 dark:text-foreground text-sm group-hover:text-emerald-700 dark:group-hover:text-cyan-400 transition-colors">
                          github.com/phuocthien412
                        </h4>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* CỘT 2 (BÊN PHẢI): Card Form Gửi Lời Nhắn Trực Tuyến */}
          <div className="lg:col-span-7 h-full">
            <ScrollReveal animation="fade-left" className="h-full">
              <div className="rounded-3xl border border-slate-200 dark:border-border/80 bg-white dark:bg-card/75 backdrop-blur-xl p-5 sm:p-6 shadow-lg flex flex-col justify-between h-full">
                <div>
                  {/* Card Header Phải */}
                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-cyan-400 font-mono text-xs uppercase font-semibold">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{t.contact.formOnlineBadge}</span>
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-foreground">
                      {t.contact.formTitle}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-muted-foreground">
                      {t.contact.formSubtitle}
                    </p>
                  </div>

                  {/* Status Alert */}
                  {statusMessage && (
                    <div
                      className={`p-3.5 rounded-xl text-xs sm:text-sm mb-4 flex items-start gap-2.5 ${
                        statusMessage.type === "success"
                          ? "bg-emerald-50 border border-emerald-200 text-emerald-800 dark:bg-emerald-500/10 dark:border-emerald-500/30 dark:text-emerald-400"
                          : "bg-rose-50 border border-rose-200 text-rose-800 dark:bg-rose-500/10 dark:border-rose-500/30 dark:text-rose-400"
                      }`}
                    >
                      {statusMessage.type === "success" ? (
                        <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      ) : (
                        <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                      )}
                      <span>{statusMessage.text}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-3">
                    {/* Invisible Honeypot field for anti-bot & anti-spam detection */}
                    <input
                      type="text"
                      name="_gotcha"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      style={{ display: "none" }}
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* Tên */}
                      <div className="space-y-1">
                        <label className="text-xs font-mono uppercase text-slate-700 dark:text-muted-foreground font-semibold">
                          {t.contact.nameLabel} <span className="text-emerald-600 dark:text-cyan-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t.contact.namePlaceholder}
                          required
                          className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-border/70 bg-white/80 dark:bg-background/60 text-slate-900 dark:text-foreground text-base sm:text-sm placeholder:text-slate-400 dark:placeholder:text-muted-foreground/60 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all shadow-xs"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1">
                        <label className="text-xs font-mono uppercase text-slate-700 dark:text-muted-foreground font-semibold">
                          {t.contact.emailFormLabel} <span className="text-emerald-600 dark:text-cyan-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t.contact.emailPlaceholder}
                          required
                          className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-border/70 bg-white/80 dark:bg-background/60 text-slate-900 dark:text-foreground text-base sm:text-sm placeholder:text-slate-400 dark:placeholder:text-muted-foreground/60 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all shadow-xs"
                        />
                      </div>
                    </div>

                    {/* Chủ đề */}
                    <div className="space-y-1">
                      <label className="text-xs font-mono uppercase text-slate-700 dark:text-muted-foreground font-semibold">
                        {t.contact.subjectLabel} <span className="text-emerald-600 dark:text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={t.contact.subjectPlaceholder}
                        required
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-border/70 bg-white/80 dark:bg-background/60 text-slate-900 dark:text-foreground text-base sm:text-sm placeholder:text-slate-400 dark:placeholder:text-muted-foreground/60 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all shadow-xs"
                      />
                    </div>

                    {/* Lời nhắn */}
                    <div className="space-y-1">
                      <label className="text-xs font-mono uppercase text-slate-700 dark:text-muted-foreground font-semibold">
                        {t.contact.messageLabel} <span className="text-emerald-600 dark:text-cyan-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={isCompact ? 3 : 4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t.contact.messagePlaceholder}
                        required
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-border/70 bg-white/80 dark:bg-background/60 text-slate-900 dark:text-foreground text-base sm:text-sm placeholder:text-slate-400 dark:placeholder:text-muted-foreground/60 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none shadow-xs"
                      />
                    </div>

                    {/* hCaptcha Widget */}
                    <div className="pt-1">
                      <HCaptchaWidget
                        theme={theme}
                        resetSignal={captchaResetSignal}
                        onVerify={(token) => {
                          setCaptchaToken(token);
                          setStatusMessage((prev) =>
                            prev?.type === "error" && prev.text === t.contact.captchaWarning ? null : prev
                          );
                        }}
                        onExpire={() => setCaptchaToken("")}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitMutation.isPending}
                      className="w-full py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/25 hover:shadow-lg hover:shadow-emerald-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer mt-2"
                    >
                      {submitMutation.isPending ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>{t.contact.sendingBtn}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{t.contact.sendBtn}</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
