import { create } from "zustand";
import type { ProjectItem } from "../types";
import { translations, type TranslationSchema } from "../i18n/translations";

interface PortfolioStoreState {
  theme: "dark" | "light";
  language: "vi" | "en";
  selectedProject: ProjectItem | null;
  activeSection: string;
  activeProjectCategory: string;
  isMobileMenuOpen: boolean;
  isCvModalOpen: boolean;

  // Actions
  toggleTheme: () => void;
  setTheme: (theme: "dark" | "light") => void;
  setLanguage: (lang: "vi" | "en") => void;
  toggleLanguage: () => void;
  setSelectedProject: (project: ProjectItem | null) => void;
  setActiveSection: (section: string) => void;
  setActiveProjectCategory: (category: string) => void;
  setMobileMenuOpen: (open: boolean) => void;
  openCvModal: () => void;
  closeCvModal: () => void;
}

// Initial theme determination (persisted or defaults to dark)
const getInitialTheme = (): "dark" | "light" => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("thien_portfolio_theme");
    if (saved === "light" || saved === "dark") return saved;
  }
  return "dark";
};

// Initial language determination (persisted or defaults to vi)
const getInitialLang = (): "vi" | "en" => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("thien_portfolio_lang");
    if (saved === "en" || saved === "vi") return saved;
  }
  return "vi";
};

export const usePortfolioStore = create<PortfolioStoreState>((set, get) => ({
  theme: getInitialTheme(),
  language: getInitialLang(),
  selectedProject: null,
  activeSection: "hero",
  activeProjectCategory: "all",
  isMobileMenuOpen: false,
  isCvModalOpen: false,

  toggleTheme: () => {
    const current = get().theme;
    const next = current === "dark" ? "light" : "dark";

    if (typeof document !== "undefined") {
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(next);
      localStorage.setItem("thien_portfolio_theme", next);
    }

    set({ theme: next });
  },

  setTheme: (theme) => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(theme);
      localStorage.setItem("thien_portfolio_theme", theme);
    }
    set({ theme });
  },

  setLanguage: (language) => {
    if (typeof document !== "undefined") {
      localStorage.setItem("thien_portfolio_lang", language);
      document.documentElement.setAttribute("lang", language);
    }
    set({ language });
  },

  toggleLanguage: () => {
    const next = get().language === "vi" ? "en" : "vi";
    if (typeof document !== "undefined") {
      localStorage.setItem("thien_portfolio_lang", next);
      document.documentElement.setAttribute("lang", next);
    }
    set({ language: next });
  },

  setSelectedProject: (project) => set({ selectedProject: project }),
  setActiveSection: (section) => set({ activeSection: section }),
  setActiveProjectCategory: (category) => set({ activeProjectCategory: category }),
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  openCvModal: () => set({ isCvModalOpen: true }),
  closeCvModal: () => set({ isCvModalOpen: false }),
}));

// Convenient hook to get translations
export const useT = (): TranslationSchema => {
  const lang = usePortfolioStore((s) => s.language);
  return translations[lang];
};
