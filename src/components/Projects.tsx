"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star, GitFork, FolderGit2 } from 'lucide-react';
import { GithubIcon as Github } from './BrandIcons';
import { GitHubRepo } from '../types/github';

interface ProjectsProps {
  repos: GitHubRepo[];
}

export default function Projects({ repos }: ProjectsProps) {
  const [selectedLanguage, setSelectedLanguage] = useState('ทั้งหมด');

  // Extract unique languages present in repos
  const languagesSet = new Set<string>();
  repos.forEach((repo) => {
    if (repo.language) {
      languagesSet.add(repo.language);
    }
  });
  const uniqueLanguages = ['ทั้งหมด', ...Array.from(languagesSet)];

  const filteredRepos = selectedLanguage === 'ทั้งหมด'
    ? repos
    : repos.filter((repo) => repo.language === selectedLanguage);

  return (
    <section id="projects" className="py-24 bg-[#0b0f0e] border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-emerald-300 uppercase">โปรเจกต์</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-stone-50">
            งานที่มีร่องรอยของการฝึกจริง
          </p>
          <div className="w-12 h-px bg-emerald-300/70 mx-auto mt-4" />
        </div>

        {/* Filter Navigation */}
        {uniqueLanguages.length > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {uniqueLanguages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-4 py-2 rounded-md text-xs font-semibold border transition-all duration-200 ${
                  selectedLanguage === lang
                    ? 'bg-emerald-300 border-emerald-300 text-stone-950'
                    : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-white hover:border-stone-700'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredRepos.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:col-span-2 lg:col-span-3 rounded-md border border-stone-800 bg-stone-900/45 p-8 text-center"
              >
                <h3 className="text-lg font-semibold text-stone-100">โปรเจกต์จะแสดงที่นี่หลังเชื่อม GitHub สำเร็จ</h3>
                <p className="mt-2 text-sm text-stone-500">
                  ตั้งค่า GitHub username ให้ถูกต้องใน environment เพื่อโหลด repository จริง แทนการใช้การ์ดตัวอย่าง
                </p>
              </motion.div>
            ) : filteredRepos.map((repo) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={repo.id}
                className="group relative flex flex-col justify-between p-6 rounded-md bg-stone-900/45 border border-stone-800 hover:border-stone-700 transition-all duration-200 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-emerald-300/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                <div>
                  {/* Top Bar: Icon and Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-md bg-emerald-500/10 border border-emerald-400/20 text-emerald-300">
                      <FolderGit2 className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-3 text-xs text-stone-500 font-semibold">
                      {repo.stargazers_count > 0 && (
                        <div className="flex items-center gap-1 bg-stone-950 px-2 py-1 rounded-md border border-stone-800">
                          <Star className="w-3.5 h-3.5 text-amber-500" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                      )}
                      {repo.forks_count > 0 && (
                        <div className="flex items-center gap-1 bg-stone-950 px-2 py-1 rounded-md border border-stone-800">
                          <GitFork className="w-3.5 h-3.5 text-emerald-300" />
                          <span>{repo.forks_count}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-stone-50 group-hover:text-emerald-200 transition-colors duration-200">
                    {repo.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-stone-400 leading-relaxed min-h-[4rem]">
                    {repo.description || "ยังไม่มีคำอธิบายใน README ลิงก์ repo มี source และ commit history ล่าสุด"}
                  </p>
                </div>

                {/* Footer: Tech Stack and Links */}
                <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between">
                  {/* Tech stack badge */}
                  <div>
                    {repo.language ? (
                      <span className="inline-flex items-center gap-1.5 text-xs text-stone-400 font-semibold">
                        <span 
                          className="w-2.5 h-2.5 rounded-full" 
                          style={{
                            backgroundColor: repo.language === 'TypeScript' ? '#3178c6' : 
                                            repo.language === 'JavaScript' ? '#f1e05a' : 
                                            repo.language === 'C++' ? '#f34b7d' : '#8b8b8b'
                          }} 
                        />
                        {repo.language}
                      </span>
                    ) : (
                      <span className="text-xs text-stone-500">อื่น ๆ</span>
                    )}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-md bg-stone-950 border border-stone-800 text-stone-400 hover:text-white hover:border-stone-700 transition-all"
                      title="เปิด GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-md bg-stone-950 border border-stone-800 text-stone-400 hover:text-white hover:border-stone-700 transition-all"
                        title="เปิดเดโม"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
