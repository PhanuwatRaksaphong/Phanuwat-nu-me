"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Globe, Database, Settings, Terminal, Layers } from 'lucide-react';
import { Skill } from '../types/portfolio';
import { skillsData } from '../data/portfolioData';

interface SkillsProps {
  skills?: Skill[];
}

const categories = [
  { id: 'all', name: 'ทั้งหมด', icon: Layers },
  { id: 'frontend', name: 'Frontend', icon: Globe },
  { id: 'backend', name: 'Backend', icon: Cpu },
  { id: 'database', name: 'Database', icon: Database },
  { id: 'devops', name: 'DevOps', icon: Settings },
  { id: 'tools', name: 'Tools', icon: Terminal },
];

export default function Skills({ skills = skillsData }: SkillsProps) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  // Map proficiency to percentage width
  const getProficiencyPercentage = (level: Skill['proficiency']) => {
    switch (level) {
      case 'Beginner': return '30%';
      case 'Intermediate': return '60%';
      case 'Advanced': return '85%';
      case 'Expert': return '100%';
      default: return '0%';
    }
  };

  // Map proficiency to custom text color
  const getProficiencyBadgeStyles = (level: Skill['proficiency']) => {
    switch (level) {
      case 'Beginner': return 'bg-stone-800 text-stone-300 border-stone-700';
      case 'Intermediate': return 'bg-emerald-500/10 text-emerald-300 border-emerald-400/20';
      case 'Advanced': return 'bg-amber-500/10 text-amber-200 border-amber-400/20';
      case 'Expert': return 'bg-stone-100 text-stone-950 border-stone-100';
      default: return '';
    }
  };

  const getProgressColor = (level: Skill['proficiency']) => {
    switch (level) {
      case 'Beginner': return 'from-stone-600 to-stone-500';
      case 'Intermediate': return 'from-emerald-500 to-emerald-300';
      case 'Advanced': return 'from-amber-500 to-amber-200';
      case 'Expert': return 'from-stone-200 to-white';
      default: return 'from-stone-600 to-stone-500';
    }
  };

  const getProficiencyLabel = (level: Skill['proficiency']) => {
    switch (level) {
      case 'Beginner': return 'เริ่มต้น';
      case 'Intermediate': return 'พอใช้คล่อง';
      case 'Advanced': return 'ถนัด';
      case 'Expert': return 'ใช้บ่อย';
      default: return level;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#0b0f0e] border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-emerald-300 uppercase">ทักษะ</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-stone-50">
            เครื่องมือที่หยิบมาใช้จริง
          </p>
          <p className="mt-3 text-sm text-stone-500">
            ระดับความถนัดเป็นภาพรวมตอนนี้ ไม่ใช่เหรียญเกียรติยศตลอดชีวิต
          </p>
          <div className="w-12 h-px bg-emerald-300/70 mx-auto mt-4" />
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? 'bg-emerald-300 border-emerald-300 text-stone-950'
                    : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-white hover:border-stone-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                key={skill.name}
                className="p-5 rounded-md bg-stone-900/45 border border-stone-800 hover:border-stone-700 transition-colors duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-lg font-semibold text-stone-50">{skill.name}</span>
                    <span className={`text-xs px-2.5 py-1 rounded-md font-semibold border ${getProficiencyBadgeStyles(skill.proficiency)}`}>
                      {getProficiencyLabel(skill.proficiency)}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <div className="flex justify-between items-center text-xs text-stone-500">
                    <span>ความถนัดตอนนี้</span>
                    <span>{getProficiencyPercentage(skill.proficiency)}</span>
                  </div>
                  <div className="w-full h-2 bg-stone-950 rounded-full overflow-hidden border border-stone-800/70">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: getProficiencyPercentage(skill.proficiency) }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className={`h-full bg-gradient-to-r ${getProgressColor(skill.proficiency)} rounded-full`}
                    />
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
