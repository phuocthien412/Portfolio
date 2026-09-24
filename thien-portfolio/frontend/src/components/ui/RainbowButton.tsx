import React from "react";

interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "dark" | "emerald" | "glass";
  className?: string;
  innerClassName?: string;
  glow?: boolean;
}

export const RainbowButton = React.forwardRef<HTMLButtonElement, RainbowButtonProps>(
  (
    {
      children,
      variant = "dark",
      className = "",
      innerClassName = "",
      glow = true,
      ...props
    },
    ref
  ) => {
    const innerBgClasses =
      variant === "emerald"
        ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500"
        : variant === "glass"
        ? "bg-white/95 dark:bg-slate-900/90 text-slate-800 dark:text-white backdrop-blur-xl"
        : "bg-slate-950 dark:bg-[#091512] text-white hover:bg-slate-900 dark:hover:bg-[#0d1d19]";

    return (
      <div className={`relative inline-flex group ${className}`}>
        {/* Ambient Neon Rainbow Glow */}
        {glow && (
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-rose-500 via-emerald-400 to-cyan-500 opacity-40 blur-md group-hover:opacity-80 transition duration-500 group-hover:duration-200 pointer-events-none" />
        )}

        {/* Outer border wrapper with overflow-hidden to clip the spinning conic gradient */}
        <div className="relative inline-flex p-[2px] overflow-hidden rounded-2xl w-full h-full">
          {/* Continuously running rainbow border */}
          <span className="absolute inset-[-1000%] animate-rainbow-spin rainbow-conic" />

          {/* Button core surface */}
          <button
            ref={ref}
            className={`relative inline-flex items-center justify-center gap-2 h-12 px-6 rounded-[14px] text-sm font-bold transition-all duration-300 w-full active:scale-[0.98] ${innerBgClasses} ${innerClassName}`}
            {...props}
          >
            {children}
          </button>
        </div>
      </div>
    );
  }
);

RainbowButton.displayName = "RainbowButton";
