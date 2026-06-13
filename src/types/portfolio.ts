export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'other';
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  icon: string; // Lucide icon name
}

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  duration: string;
  description: string;
  type: 'education' | 'experience' | 'certification' | 'award';
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  facebook?: string;
  discord?: string;
}

export interface CreatorProfile {
  name: string;
  title: string;
  subTitle: string;
  avatarUrl?: string; // Fallback if github fails
  bio: string;
  detailedIntro: string;
  interests: string[];
  goals: string[];
}
