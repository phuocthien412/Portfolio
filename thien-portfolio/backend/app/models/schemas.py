from typing import List, Optional, Dict, Any
from datetime import datetime
from pydantic import BaseModel, EmailStr, Field

class SocialLinks(BaseModel):
    github: str = "https://github.com/phuocthien412"
    linkedin: Optional[str] = "https://linkedin.com/in/phuocthien412"
    email: str = "minhngothien1@gmail.com"
    phone: str = "0987176434"

class Profile(BaseModel):
    id: Optional[str] = None
    name: str = "NGÔ MINH THIÊN"
    title: str = "SOFTWARE ENGINEER"
    tagline: str = "Full-Stack Developer & AI Systems Integrator"
    phone: str = "0987176434"
    email: str = "minhngothien1@gmail.com"
    address: str = "Phu Thuan ward, Ho Chi Minh City, Vietnam"
    github: str = "https://github.com/phuocthien412"
    career_objective: str
    bio: str
    status: str = "Available for Opportunities"
    avatar_url: Optional[str] = None
    socials: SocialLinks = Field(default_factory=SocialLinks)
    stats: Dict[str, Any] = Field(default_factory=dict)

class SkillItem(BaseModel):
    name: str
    level: str  # "Thành thạo", "Trung cấp", "Sơ cấp" / "Advanced", "Proficient", "Familiar"
    icon: str  # devicon name or lucide icon name
    category: str  # Frontend, Backend, Database, Tools, Languages, AI
    featured: bool = False
    description: Optional[str] = None

class SkillCategory(BaseModel):
    category_id: str
    title: str
    description: str
    skills: List[SkillItem]

class ExperienceItem(BaseModel):
    id: str
    company_or_institution: str
    role_or_degree: str
    period: str
    location: str = "Ho Chi Minh City"
    type: str  # "work" or "education"
    summary: str
    highlights: List[str]
    tech_stack: List[str]
    link: Optional[str] = None

class ProjectItem(BaseModel):
    id: str
    slug: str
    title: str
    tagline: str
    description: str
    category: str  # "Full-Stack", "AI & Automation", "Enterprise System", "Web Platform"
    featured: bool = True
    company: Optional[str] = "AITC"
    period: str
    metrics: List[str]
    features: List[str]
    tech_stack: List[str]
    image_url: Optional[str] = None
    demo_url: Optional[str] = None
    github_url: Optional[str] = None
    stars: Optional[int] = 0

class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=3, max_length=200)
    message: str = Field(..., min_length=10, max_length=5000)

class ContactMessage(BaseModel):
    id: Optional[str] = None
    name: str
    email: str
    subject: str
    message: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = "unread"
