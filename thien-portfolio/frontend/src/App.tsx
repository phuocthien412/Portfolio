import React, { Suspense, lazy, useEffect, type ComponentType } from "react";
import { BrowserRouter, HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { MouseSpotlight } from "./components/ui/MouseSpotlight";
import { ScrollProgressBar } from "./components/ui/ScrollProgressBar";
import { CvViewerModal } from "./components/ui/CvViewerModal";
import { ScrollToTopButton } from "./components/ui/ScrollToTopButton";
import { ThemeSceneTransition } from "./components/ui/ThemeSceneTransition";
import { CosmicSpaceAtmosphere } from "./components/ui/CosmicSpaceAtmosphere";
import { ProjectDetailModal } from "./components/sections/ProjectDetailModal";
import { HomePage } from "./pages/HomePage";
import { usePortfolioStore } from "./stores/usePortfolioStore";

/** Wraps named-export modules for React.lazy route code-splitting. */
function lazyNamed<T extends Record<string, ComponentType<any>>, K extends keyof T>(
  loader: () => Promise<T>,
  exportName: K
) {
  return lazy(async () => {
    const mod = await loader();
    return { default: mod[exportName] };
  });
}

const AboutPage = lazyNamed(() => import("./pages/AboutPage"), "AboutPage");
const JourneyPage = lazyNamed(() => import("./pages/JourneyPage"), "JourneyPage");
const SkillsPage = lazyNamed(() => import("./pages/SkillsPage"), "SkillsPage");
const ProjectsPage = lazyNamed(() => import("./pages/ProjectsPage"), "ProjectsPage");
const ProjectDetailPage = lazyNamed(() => import("./pages/ProjectDetailPage"), "ProjectDetailPage");
const ContactPage = lazyNamed(() => import("./pages/ContactPage"), "ContactPage");

const PageLoader: React.FC = () => (
  <div className="min-h-[60vh] flex items-center justify-center" aria-busy="true" aria-label="Loading page">
    <div className="w-8 h-8 rounded-full border-2 border-emerald-500/30 border-t-emerald-400 animate-spin" />
  </div>
);

// Component to scroll to top whenever route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

// Detect GitHub Pages environment (hash router needed) vs Custom Domain / Cloudflare (clean browser router)
const isGitHubPages = typeof window !== "undefined" && window.location.hostname.includes("github.io");
const RouterComponent = isGitHubPages ? HashRouter : BrowserRouter;

export const AppContent: React.FC = () => {
  const { selectedProject, setSelectedProject, theme, language } = usePortfolioStore();

  useEffect(() => {
    // Sync theme class to documentElement
    if (typeof document !== "undefined") {
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  useEffect(() => {
    // Sync language attribute and title for SEO
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("lang", language);
      if (language === "en") {
        document.title = "Ngo Minh Thien - Software Engineer";
      } else {
        document.title = "Ngô Minh Thiên - Software Engineer";
      }
    }
  }, [language]);

  return (
    <RouterComponent>
      <ScrollToTop />
      {/* Top Reading / Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Cinematic Scene Transition Overlay when toggling Dark/Light Mode */}
      <ThemeSceneTransition />

      {/* Interactive Cursor Spotlight / Flashlight that illuminates wherever the mouse moves */}
      <MouseSpotlight />

      <div className="relative min-h-screen bg-background dark:bg-galaxy-cosmos text-foreground transition-colors duration-300 flex flex-col justify-between overflow-x-hidden w-full max-w-full">
        {/* Cosmic Space Nebula & Twinkling Constellations Atmosphere */}
        <CosmicSpaceAtmosphere />

        {/* Sticky Header Navigation */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/journey" element={<JourneyPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Fallback to Home */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Interactive Architecture Modal */}
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* Full-Featured CV Viewer Modal */}
        <CvViewerModal />

        {/* Floating Scroll To Top Button */}
        <ScrollToTopButton />
      </div>
    </RouterComponent>
  );
};

export default AppContent;
