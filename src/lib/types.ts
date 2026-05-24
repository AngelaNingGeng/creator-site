export interface PortfolioItem {
  slug: string;
  title: string;
  description: string;
  category: 'video' | 'image' | 'collab' | 'tutorial';
  thumbnail: string;
  douyinUrl?: string;
  douyinVideoId?: string;
  selfHostedVideo?: string;
  images?: string[];
  publishedAt: string;
  featured: boolean;
  stats?: {
    likes?: number;
    comments?: number;
    shares?: number;
  };
  tags: string[];
}

export interface SiteConfig {
  name: string;
  douyinHandle: string;
  douyinProfileUrl: string;
  description: string;
  email: string;
  avatar: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface AboutData {
  bio: string[];
  timeline: TimelineEvent[];
  stats: Stat[];
  equipment: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
