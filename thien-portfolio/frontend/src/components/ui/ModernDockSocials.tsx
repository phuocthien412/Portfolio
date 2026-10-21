import React from "react";
import { Mail, Phone } from "lucide-react";
import { GithubIcon } from "./Icons";

interface ModernDockSocialsProps {
  className?: string;
}

export const ModernDockSocials: React.FC<ModernDockSocialsProps> = ({
  className = "",
}) => {

  const dockItems = [
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/phuocthien412",
      icon: <GithubIcon className="w-5 h-5 text-white" />,
      gradient: "from-slate-800 via-slate-900 to-black hover:from-emerald-950 hover:to-slate-900",
      border: "border-slate-700/60 hover:border-emerald-500/50",
      tooltip: "GitHub Repository",
    },
    {
      id: "gmail",
      label: "Gmail",
      href: "mailto:minhngothien1@gmail.com",
      icon: <Mail className="w-5 h-5 text-white" />,
      gradient: "from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600",
      border: "border-emerald-500/40 hover:border-emerald-400",
      tooltip: "minhngothien1@gmail.com",
    },
    {
      id: "phone",
      label: "Hotline",
      href: "tel:0987176434",
      icon: <Phone className="w-5 h-5 text-white" />,
      gradient: "from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600",
      border: "border-cyan-500/40 hover:border-cyan-400",
      tooltip: "0987 176 434",
    },
  ];

  return (
    <div className={`inline-flex items-center gap-3 p-2 rounded-2xl bg-white/80 dark:bg-card/40 backdrop-blur-2xl border border-slate-200 dark:border-border/60 shadow-md ${className}`}>
      {dockItems.map((item) => {
        const itemBody = (
          <div
            title={item.tooltip}
            className={`squircle-dock-item bg-gradient-to-br ${item.gradient} border ${item.border} group`}
          >
            {item.icon}
            {/* Tooltip on top */}
            <span className="absolute -top-9 px-2.5 py-1 rounded-md text-[11px] font-mono text-white bg-slate-900/90 border border-slate-700/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md">
              {item.label}
            </span>
          </div>
        );

        return (
          <a
            key={item.id}
            href={item.href}
            target={item.href?.startsWith("http") ? "_blank" : undefined}
            rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={item.label}
            className="focus:outline-none"
          >
            {itemBody}
          </a>
        );
      })}
    </div>
  );
};
