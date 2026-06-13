"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, GraduationCap } from 'lucide-react';
import { CreatorProfile } from '../types/portfolio';

interface AboutProps {
  profile: CreatorProfile;
}

export default function About({ profile }: AboutProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring' as const, stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="about" className="py-24 bg-[#0b0f0e] border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-emerald-300 uppercase">เกี่ยวกับ</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-stone-50">
            เล่าให้รู้จักแบบไม่ต้องเป็นโบรชัวร์
          </p>
          <div className="w-12 h-px bg-emerald-300/70 mx-auto mt-4" />
        </div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Introduction & Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">
              เป็นนักศึกษาก่อน และเป็นคนทำโปรเจกต์ทุกครั้งที่มีโอกาส
            </h3>
            <p className="text-stone-400 leading-relaxed text-lg">
              {profile.detailedIntro}
            </p>
            <p className="text-stone-400 leading-relaxed">
              ผมชอบโปรเจกต์ที่เล็กพอจะทำให้เสร็จ แต่จริงพอจะสอนอะไรบางอย่าง เช่น ฟอร์มที่ส่งข้อมูลได้จริง dashboard ที่ดึงข้อมูลสด และหน้าจอที่ยังอ่านง่ายบนมือถือ
            </p>

            <div className="p-6 rounded-md bg-stone-900/45 border border-stone-800">
              <div className="flex gap-4">
                <div className="flex-shrink-0 p-3 rounded-md bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 self-start">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-stone-100">สิ่งที่กำลังโฟกัส</h4>
                  <p className="mt-2 text-sm text-stone-400 leading-relaxed">
                    Programming methodology, discrete math, data structures และ computer systems นอกห้องเรียนผมใช้เว็บโปรเจกต์เป็นวิธีทดสอบว่าตัวเองเข้าใจไอเดียนั้นจริงหรือยัง
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Interests & Goals (Cards) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Interests Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 rounded-md bg-stone-900/45 border border-stone-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-5 h-5 text-amber-300" />
                <h4 className="text-lg font-semibold text-stone-100">สิ่งที่สนใจ</h4>
              </div>
              <ul className="space-y-2.5">
                {profile.interests.map((interest, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-stone-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Goals Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 rounded-md bg-stone-900/45 border border-stone-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 text-emerald-300" />
                <h4 className="text-lg font-semibold text-stone-100">เป้าหมายต่อไป</h4>
              </div>
              <ul className="space-y-2.5">
                {profile.goals.map((goal, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-stone-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
