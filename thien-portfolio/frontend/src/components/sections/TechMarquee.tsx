import React from "react";
import { useT } from "../../stores/usePortfolioStore";

interface TechItem {
  name: string;
  icon: string;
}

const TECH_LIST: TechItem[] = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "C# (.NET)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
  { name: "Java (Spring)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
];

export const TechMarquee: React.FC = () => {
  const t = useT();

  return (
    <section aria-label={t.techMarquee.title} className="py-5 border-y border-border/70 bg-slate-100/70 dark:bg-muted/20 overflow-hidden relative backdrop-blur-sm">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="marquee-track flex items-center">
        {/* First track */}
        <div className="flex items-center shrink-0">
          {TECH_LIST.map((tech, idx) => (
            <div
              key={`tech-1-${idx}`}
              className="flex items-center gap-2.5 mx-6 text-xs sm:text-sm font-mono font-medium text-slate-700 dark:text-foreground/75 hover:text-emerald-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap cursor-default group"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                loading="lazy"
                className="w-5 h-5 object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-200"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Duplicate track for seamless infinite scroll loop */}
        <div className="flex items-center shrink-0" aria-hidden="true">
          {TECH_LIST.map((tech, idx) => (
            <div
              key={`tech-2-${idx}`}
              className="flex items-center gap-2.5 mx-6 text-xs sm:text-sm font-mono font-medium text-slate-700 dark:text-foreground/75 hover:text-emerald-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap cursor-default group"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                loading="lazy"
                className="w-5 h-5 object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-200"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
