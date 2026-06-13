import { GitHubUser, GitHubRepo, GitHubStats } from '../types/github';

const DEFAULT_USERNAME = 'phanuwat-nu-me';

const emptyGitHubStats = (): GitHubStats => ({
  user: null,
  repos: [],
  totalStars: 0,
  totalForks: 0,
  languages: [],
});

export async function getGitHubStats(): Promise<GitHubStats> {
  const username = process.env.GITHUB_USERNAME || DEFAULT_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  const headers: HeadersInit = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'phanwat-nu-me-portfolio',
  };

  if (token) {
    headers.Authorization = `token ${token}`;
  }

  try {
    // Fetch user profile
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers,
      next: { revalidate: 3600 }, // Cache response for 1 hour on server
    });

    if (!userRes.ok) {
      return emptyGitHubStats();
    }

    const user: GitHubUser = await userRes.json();

    // Fetch repositories (up to 100)
    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers,
        next: { revalidate: 3600 }, // Cache response for 1 hour on server
      }
    );

    if (!reposRes.ok) {
      return {
        user,
        repos: [],
        totalStars: 0,
        totalForks: 0,
        languages: [],
      };
    }

    const reposData: GitHubRepo[] = await reposRes.json();

    // Filter out forks from main display, keep original repos
    const repos = reposData.filter((repo) => !repo.fork);

    let totalStars = 0;
    let totalForks = 0;
    const langCounts: Record<string, number> = {};

    repos.forEach((repo) => {
      totalStars += repo.stargazers_count;
      totalForks += repo.forks_count;
      if (repo.language) {
        langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
      }
    });

    // Compute language percentages
    const totalReposWithLang = Object.values(langCounts).reduce((a, b) => a + b, 0);
    const languageColors: Record<string, string> = {
      TypeScript: '#3178c6',
      JavaScript: '#f1e05a',
      HTML: '#e34c26',
      CSS: '#563d7c',
      Python: '#3572A5',
      Go: '#00ADD8',
      Rust: '#dea584',
      Zig: '#ec915c',
      C: '#555555',
      'C++': '#f34b7d',
    };

    const languages = Object.entries(langCounts)
      .map(([name, count]) => ({
        name,
        percentage: totalReposWithLang > 0 ? Math.round((count / totalReposWithLang) * 100) : 0,
        color: languageColors[name] || '#8b8b8b',
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 5); // top 5 languages

    return {
      user,
      repos: repos.sort((a, b) => b.stargazers_count - a.stargazers_count), // Sort by stars desc
      totalStars,
      totalForks,
      languages,
    };
  } catch {
    // Keep the page honest if GitHub is unavailable or the username is wrong.
    return emptyGitHubStats();
  }
}
