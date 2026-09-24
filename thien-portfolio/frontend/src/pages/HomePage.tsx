import React from "react";
import { HeroSection } from "../components/sections/HeroSection";
import { TechMarquee } from "../components/sections/TechMarquee";
import { HomeSkillsGrid } from "../components/sections/HomeSkillsGrid";
import { HomeJourneyTeaser } from "../components/sections/HomeJourneyTeaser";
import { HomeProjectsTeaser } from "../components/sections/HomeProjectsTeaser";
import { HomeCtaBanner } from "../components/sections/HomeCtaBanner";
import { useProfile, useProjects } from "../hooks/usePortfolioData";

export const HomePage: React.FC = () => {
  const { data: profile } = useProfile();
  const { data: projects } = useProjects();

  return (
    <div>
      {/* 1. Hero Section with Avatar & Quick Actions */}
      <HeroSection profile={profile} />

      {/* 2. Infinite Tech Ribbon */}
      <TechMarquee />

      {/* 3. Về Tôi & Kỹ Năng Cốt Lõi (id="about") */}
      <HomeSkillsGrid />

      {/* 4. Kinh Nghiệm Làm Việc (id="experience" - positioned immediately after Skills as in reference) */}
      <HomeJourneyTeaser />

      {/* 5. Dự Án Tiêu Biểu (id="projects") */}
      <HomeProjectsTeaser projects={projects} />

      {/* 6. Call To Action Banner (Contact form is isolated on /contact page as requested) */}
      <HomeCtaBanner />
    </div>
  );
};
