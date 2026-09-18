export interface ProjectBadge {
  label: string;
  type: 'app-store' | 'github' | 'live' | 'pub' | 'award' | 'agent';
  url?: string;
}

export interface MetricStat {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  context: string;
  highlight: string;
  architectureDetails: string[];
  techStack: string[];
  badges: ProjectBadge[];
  metrics?: MetricStat[];
  githubUrl?: string;
  liveUrl?: string;
  appStoreUrl?: string;
  images: string[];
  featured?: boolean;
  hasNoUi?: boolean;
}

export interface DeveloperProfile {
  name: string;
  role: string;
  subRole: string;
  availability: string;
  bio: string;
  contactEmail: string;
  githubUrl: string;
  linkedinUrl: string;
}
