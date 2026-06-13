"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight, MessageSquare, NotebookTabs } from 'lucide-react';
import { GithubIcon as Github } from './BrandIcons';
import { motion } from 'framer-motion';
import { CreatorProfile } from '../types/portfolio';

interface HeroProps {
  profile: CreatorProfile;
}

export default function Hero({ profile }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  };

  const avatarVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 80, damping: 12 },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-[92vh] flex items-center justify-center pt-24 pb-16 relative overflow-hidden bg-[#0b0f0e]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14">
          
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left space-y-6 max-w-2xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-stone-900/70 border border-stone-800 text-stone-300 text-xs sm:text-sm font-medium">
              <NotebookTabs className="w-4 h-4 text-emerald-300" />
              <span>บันทึก โปรเจกต์ และสิ่งที่กำลังเรียนรู้</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants} 
              className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-stone-50 leading-[1.08]"
            >
              สวัสดีครับ ผม <span className="text-emerald-200">{profile.name}</span>
            </motion.h1>

            <motion.h2 
              variants={itemVariants} 
              className="text-xl sm:text-2xl md:text-3xl font-medium text-stone-200"
            >
              {profile.title}
            </motion.h2>

            <motion.p 
              variants={itemVariants} 
              className="text-stone-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {profile.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-3 rounded-md bg-emerald-300 text-stone-950 font-semibold transition-all duration-200 hover:bg-emerald-200 group"
              >
                <span>ดูโปรเจกต์</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3 rounded-md bg-stone-900/70 border border-stone-800 hover:border-stone-700 text-stone-300 hover:text-white font-medium transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4" />
                <span>ติดต่อผม</span>
              </a>

              <a
                href="https://github.com/phanuwat-nu-me"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-md bg-stone-900/70 border border-stone-800 hover:border-stone-700 text-stone-300 hover:text-white font-medium transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                <span>เปิด GitHub</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Photo / Avatar Frame */}
          <motion.div
            variants={avatarVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 sm:w-80">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-stone-900 border border-stone-800 shadow-2xl">
                <Image
                  src={profile.avatarUrl || 'https://cdn.discordapp.com/attachments/1209086416680779787/1515012924605730937/IMG_20260612_222003.jpg?ex=6a2d753c&is=6a2c23bc&hm=1fc854d2c0f8d55a1049180f61a861cd320ca09e6db4cc993dfe2a97cf145f9b&'}
                  alt={profile.name}
                  fill
                  priority
                  sizes="(max-width: 640px) 256px, 320px"
                  className="object-cover grayscale-[15%]"
                />
              </div>

              <div className="absolute -right-4 top-8 bg-[#0b0f0e] border border-stone-700 rounded-md px-3 py-2 shadow-lg">
                <span className="block text-[10px] uppercase tracking-wider text-stone-500">ถนัด</span>
                <span className="text-sm font-semibold text-amber-200">Git / VS Code</span>
              </div>
              <div className="absolute -left-4 bottom-8 bg-[#0b0f0e] border border-stone-700 rounded-md px-3 py-2 shadow-lg">
                <span className="block text-[10px] uppercase tracking-wider text-stone-500">ตอนนี้</span>
                <span className="text-sm font-semibold text-emerald-200">CS @ SSKRU</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
