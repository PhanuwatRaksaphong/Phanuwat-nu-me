"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, GitFork, Star, BookOpen, BarChart3, CalendarRange } from 'lucide-react';
import { GitHubStats as GitHubStatsType } from '../types/github';

interface GithubStatsProps {
  stats: GitHubStatsType;
}

export default function GithubStats({ stats }: GithubStatsProps) {
  const { user, totalStars, totalForks, languages } = stats;

  if (!user) return null;

  return (
    <section id="github" className="py-24 bg-[#0b0f0e] border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-emerald-300 uppercase">GitHub</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-stone-50">
            ภาพรวมสิ่งที่กำลังเขียนอยู่
          </p>
          <div className="w-12 h-px bg-emerald-300/70 mx-auto mt-4" />
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Card 1: User Info Profile Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-md bg-stone-900/45 border border-stone-800 flex flex-col justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-md overflow-hidden border border-stone-700">
                <Image
                  src={user.avatar_url}
                  alt={user.name || user.login}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-stone-50">{user.name || user.login}</h3>
                <a 
                  href={user.html_url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs text-emerald-300 hover:text-emerald-200 font-semibold transition-colors"
                >
                  @{user.login}
                </a>
              </div>
            </div>

            <p className="text-sm text-stone-400 mt-4">
              {user.bio || "นักศึกษา CS ที่กำลังเรียนรู้ผ่านการลงมือทำโปรเจกต์จริง"}
            </p>

            <div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-stone-800 text-center">
              <div>
                <span className="block text-xl font-bold text-stone-50">{user.followers}</span>
                <span className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">ผู้ติดตาม</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-stone-50">{user.following}</span>
                <span className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">กำลังติดตาม</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-stone-50">{user.public_repos}</span>
                <span className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">Repo</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Cumulative Repositories Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-md bg-stone-900/45 border border-stone-800"
          >
            <div className="flex items-center gap-2 mb-6 text-emerald-300">
              <BarChart3 className="w-5 h-5" />
              <h3 className="text-base font-semibold text-stone-200">สถิติ repository</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between p-3 rounded-md bg-stone-950/50 border border-stone-800">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-amber-400" />
                  <span className="text-sm text-stone-400">Stars ที่ได้รับ</span>
                </div>
                <span className="text-lg font-bold text-stone-50">{totalStars}</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-md bg-stone-950/50 border border-stone-800">
                <div className="flex items-center gap-3">
                  <GitFork className="w-5 h-5 text-emerald-300" />
                  <span className="text-sm text-stone-400">Forks</span>
                </div>
                <span className="text-lg font-bold text-stone-50">{totalForks}</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-md bg-stone-950/50 border border-stone-800">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-emerald-300" />
                  <span className="text-sm text-stone-400">Public repositories</span>
                </div>
                <span className="text-lg font-bold text-stone-50">{user.public_repos}</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Language Usage Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-md bg-stone-900/45 border border-stone-800"
          >
            <div className="flex items-center gap-2 mb-6 text-amber-200">
              <Users className="w-5 h-5" />
              <h3 className="text-base font-semibold text-stone-200">ภาษาที่ใช้</h3>
            </div>

            {languages.length > 0 ? (
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-stone-300 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                        {lang.name}
                      </span>
                      <span className="text-stone-500">{lang.percentage}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-stone-950 rounded-full overflow-hidden border border-stone-800">
                      <div 
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-stone-500 text-center py-8">ยังไม่มีข้อมูลสัดส่วนภาษา</p>
            )}
          </motion.div>

        </div>

        {/* Contribution Calendar Graph */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-6 rounded-md bg-stone-900/45 border border-stone-800 overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-6 text-emerald-300">
            <CalendarRange className="w-5 h-5" />
            <h3 className="text-base font-semibold text-stone-200">กราฟ contribution</h3>
          </div>

          <div className="flex justify-center items-center w-full overflow-x-auto select-none bg-stone-950/40 p-4 border border-stone-800 rounded-md">
            {/* SVG graph embedding matching the theme color */}
            <div className="relative min-w-[700px] h-32 flex justify-center items-center">
              <Image
                src={`https://ghchart.rshah.org/34d399/${user.login}`}
                alt={`${user.login} Github Contribution Chart`}
                width={700}
                height={128}
                unoptimized
                className="opacity-90 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />
            </div>
          </div>
          <div className="mt-3 text-center text-xs text-stone-500">
            กราฟ contribution จาก github.com/{user.login}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
