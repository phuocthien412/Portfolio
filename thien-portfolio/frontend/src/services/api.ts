import type { ProfileData, SkillCategory, ExperienceItem, ProjectItem, ContactFormInput, ContactResponse } from "../types";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

export async function fetchProfile(): Promise<ProfileData> {
  const res = await fetch(`${API_BASE_URL}/profile`);
  if (!res.ok) {
    throw new Error(`Failed to fetch profile: ${res.statusText}`);
  }
  return res.json();
}

export async function fetchSkills(): Promise<SkillCategory[]> {
  const res = await fetch(`${API_BASE_URL}/skills`);
  if (!res.ok) {
    throw new Error(`Failed to fetch skills: ${res.statusText}`);
  }
  return res.json();
}

export async function fetchJourney(): Promise<ExperienceItem[]> {
  const res = await fetch(`${API_BASE_URL}/journey`);
  if (!res.ok) {
    throw new Error(`Failed to fetch journey: ${res.statusText}`);
  }
  return res.json();
}

export async function fetchProjects(category?: string): Promise<ProjectItem[]> {
  const url = category && category !== "all" 
    ? `${API_BASE_URL}/projects?category=${encodeURIComponent(category)}`
    : `${API_BASE_URL}/projects`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch projects: ${res.statusText}`);
  }
  return res.json();
}

export async function fetchProjectBySlug(slug: string): Promise<ProjectItem> {
  const res = await fetch(`${API_BASE_URL}/projects/${slug}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch project ${slug}: ${res.statusText}`);
  }
  return res.json();
}

export async function submitContact(data: ContactFormInput): Promise<ContactResponse> {
  const res = await fetch(`${API_BASE_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.detail?.[0]?.msg || errorData.detail || "Không thể gửi tin nhắn. Vui lòng thử lại!");
  }
  return res.json();
}
