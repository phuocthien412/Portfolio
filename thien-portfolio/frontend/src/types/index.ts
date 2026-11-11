export interface SocialLinks {
  github: string;
  linkedin?: string;
  email: string;
  phone: string;
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  github: string;
  career_objective: string;
  bio: string;
  status: string;
  avatar_url?: string;
  socials: SocialLinks;
  stats: {
    years_experience?: string;
    projects_completed?: string;
    core_languages?: string;
    production_uptime?: string;
    [key: string]: any;
  };
}

export interface SkillItem {
  name: string;
  level: string; // "Thành thạo", "Trung cấp", "Sơ cấp"
  icon: string;
  category: string;
  featured: boolean;
  description?: string;
}

export interface SkillCategory {
  category_id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  company_or_institution: string;
  role_or_degree: string;
  period: string;
  location: string;
  type: "work" | "education";
  summary: string;
  highlights: string[];
  tech_stack: string[];
  link?: string | null;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  featured: boolean;
  company?: string;
  period: string;
  metrics: string[];
  features: string[];
  tech_stack: string[];
  image_url?: string;
  demo_url?: string | null;
  github_url?: string | null;
  stars?: number;
}

export interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
  captchaToken?: string;
}

export interface ContactResponse {
  status: string;
  message: string;
  message_id: string;
  timestamp: string;
}
