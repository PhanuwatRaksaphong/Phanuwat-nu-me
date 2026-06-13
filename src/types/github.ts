export interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  homepage: string | null;
  updated_at: string;
  fork: boolean;
}

export interface GitHubStats {
  user: GitHubUser | null;
  repos: GitHubRepo[];
  totalStars: number;
  totalForks: number;
  languages: { name: string; percentage: number; color: string }[];
}
