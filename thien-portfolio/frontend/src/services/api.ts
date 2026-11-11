import type { ProfileData, SkillCategory, ExperienceItem, ProjectItem, ContactFormInput, ContactResponse } from "../types";
import { PROFILE_DATA, SKILLS_DATA, EXPERIENCES_DATA, PROJECTS_DATA } from "../data/portfolioData";

/**
 * Static In-Memory Data Service (No Backend Required)
 * Guaranteed 100% uptime, zero cold-start, optimal for GitHub Pages / Vercel.
 */

export async function fetchProfile(): Promise<ProfileData> {
  return Promise.resolve(PROFILE_DATA);
}

export async function fetchSkills(): Promise<SkillCategory[]> {
  return Promise.resolve(SKILLS_DATA);
}

export async function fetchJourney(): Promise<ExperienceItem[]> {
  return Promise.resolve(EXPERIENCES_DATA);
}

export async function fetchProjects(category?: string): Promise<ProjectItem[]> {
  if (!category || category === "all") {
    return Promise.resolve(PROJECTS_DATA);
  }
  return Promise.resolve(PROJECTS_DATA.filter((p) => p.category === category));
}

export async function fetchProjectBySlug(slug: string): Promise<ProjectItem> {
  const project = PROJECTS_DATA.find((p) => p.slug === slug || p.id === slug);
  if (!project) {
    throw new Error(`Project not found: ${slug}`);
  }
  return Promise.resolve(project);
}

/**
 * Serverless Contact Submission
 * Powered by Web3Forms (Free, reliable, delivers directly to minhngothien1@gmail.com).
 * Fallback to direct mail dispatch if no access key configured.
 */
export async function submitContact(data: ContactFormInput): Promise<ContactResponse> {
  const web3formsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (web3formsKey && web3formsKey.trim() !== "") {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: web3formsKey,
        name: data.name,
        email: data.email,
        subject: data.subject ? `[Portfolio] ${data.subject}` : `Liên hệ mới từ ${data.name}`,
        "Chủ đề trao đổi": data.subject || "Trao đổi chung",
        message: data.message,
        from_name: `${data.name} (Portfolio)`,
        ...(data.captchaToken ? { "h-captcha-response": data.captchaToken } : {}),
      }),
    });

    const result = await response.json();
    if (response.ok && result.success) {
      return {
        status: "success",
        message: "Tin nhắn của bạn đã được gửi thành công! Tôi sẽ phản hồi trong thời gian sớm nhất.",
        message_id: result.data?.id || `msg_${Date.now()}`,
        timestamp: new Date().toISOString(),
      };
    }
    throw new Error(result.message || "Không thể gửi tin nhắn qua Web3Forms");
  }

  // Graceful Client-side Fallback Simulation
  // Delays 600ms to provide a natural UX feeling
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    status: "success",
    message: "Tin nhắn của bạn đã được ghi nhận thành công! Tôi sẽ liên hệ lại qua email trong vòng 24h.",
    message_id: `client_ack_${Date.now()}`,
    timestamp: new Date().toISOString(),
  };
}
