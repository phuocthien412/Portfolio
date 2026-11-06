import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import { AboutPage } from "./pages/AboutPage";
import { JourneyPage } from "./pages/JourneyPage";
import { SkillsPage } from "./pages/SkillsPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { ContactPage } from "./pages/ContactPage";
import { usePortfolioStore } from "./stores/usePortfolioStore";

// Component to scroll to top whenever route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

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
        document.title = "Ngo Minh Thien - Software Engineer | Full-Stack ";
      } else {
        document.title = "Ngô Minh Thiên - Software Engineer | Full-Stack ";
      }
    }
  }, [language]);

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default AppContent;
