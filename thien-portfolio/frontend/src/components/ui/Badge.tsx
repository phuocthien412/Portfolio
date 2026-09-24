import React from "react";
import { cn } from "../../lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "cyan" | "emerald" | "purple" | "outline" | "subtle";
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "default",
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide transition-colors";

  const variants = {
    default: "bg-primary/10 text-primary border border-primary/20",
    cyan: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30",
    emerald: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",
    purple: "bg-purple-500/10 text-purple-400 border border-purple-500/30",
    outline: "border border-border text-foreground/80 bg-background/50",
    subtle: "bg-secondary text-secondary-foreground border border-border/40",
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </div>
  );
};
