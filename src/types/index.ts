export interface Project {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  image: string;
  tech: string[];
  skills: string[];
  liveUrl: string;
  githubUrl: string;
  keyFeatures: string[];
  challenges?: string;
  futurePlans?: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    icon: string;
    highlight?: boolean;
  }[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  details: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  theme?: string;
  date: string;
  image?: string;
  description: string;
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  type: string;
  description: string[];
}
