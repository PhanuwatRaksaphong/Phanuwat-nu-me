import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import GithubStats from '../components/GithubStats';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { getGitHubStats } from '../services/github';
import { creatorProfile } from '../data/portfolioData';

export default async function Home() {
  const githubStats = await getGitHubStats();
  
  // Inject the dynamically fetched GitHub avatar if available
  const activeProfile = {
    ...creatorProfile,
    avatarUrl: githubStats.user?.avatar_url || creatorProfile.avatarUrl,
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0f0e] text-stone-100 font-sans selection:bg-emerald-500/25 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero profile={activeProfile} />
        <About profile={activeProfile} />
        <Skills />
        <Timeline />
        <GithubStats stats={githubStats} />
        <Projects repos={githubStats.repos} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
