"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, Award, FileCheck, Calendar } from 'lucide-react';
import { TimelineItem } from '../types/portfolio';
import { timelineData } from '../data/portfolioData';

interface TimelineProps {
  items?: TimelineItem[];
}

const filterTabs = [
  { id: 'all', name: 'ทั้งหมด' },
  { id: 'experience', name: 'ประสบการณ์' },
  { id: 'education', name: 'การศึกษา' },
  { id: 'certification_award', name: 'คอร์สและรางวัล' },
];

export default function Timeline({ items = timelineData }: TimelineProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = items.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'experience') return item.type === 'experience';
    if (activeFilter === 'education') return item.type === 'education';
    if (activeFilter === 'certification_award') {
      return item.type === 'certification' || item.type === 'award';
    }
    return true;
  });

  const getIcon = (type: TimelineItem['type']) => {
    switch (type) {
      case 'education': return GraduationCap;
      case 'experience': return Briefcase;
      case 'award': return Award;
      case 'certification': return FileCheck;
      default: return FileCheck;
    }
  };

  const getIconColor = (type: TimelineItem['type']) => {
    switch (type) {
      case 'education': return 'text-emerald-300 bg-emerald-500/10 border-emerald-400/20';
      case 'experience': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'award': return 'text-amber-200 bg-amber-500/10 border-amber-400/20';
      case 'certification': return 'text-stone-300 bg-stone-800 border-stone-700';
      default: return 'text-stone-400 bg-stone-800 border-stone-700';
    }
  };

  const getTypeLabel = (type: TimelineItem['type']) => {
    switch (type) {
      case 'education': return 'การศึกษา';
      case 'experience': return 'ประสบการณ์';
      case 'award': return 'รางวัล';
      case 'certification': return 'คอร์ส';
      default: return type;
    }
  };

  return (
    <section id="experience" className="py-24 bg-[#0b0f0e] border-t border-stone-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-emerald-300 uppercase">เส้นทาง</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-stone-50">
            เรียน ฝึกทำ และหมุดหมายระหว่างทาง
          </p>
          <div className="w-12 h-px bg-emerald-300/70 mx-auto mt-4" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2.5 rounded-md text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                activeFilter === tab.id
                  ? 'bg-emerald-300 border-emerald-300 text-stone-950'
                  : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-white hover:border-stone-700'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-stone-800 ml-4 sm:ml-6 space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => {
              const Icon = getIcon(item.type);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  key={item.id}
                  className="relative pl-8 sm:pl-10"
                >
                  {/* Timeline Node Icon */}
                  <span className={`absolute left-0 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-md border ${getIconColor(item.type)}`}>
                    <Icon className="w-5 h-5" />
                  </span>

                  {/* Content Card */}
                  <div className="p-6 rounded-md bg-stone-900/45 border border-stone-800 hover:border-stone-700 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-emerald-300 font-bold bg-emerald-950/25 border border-emerald-900/30 px-2 py-0.5 rounded">
                          {getTypeLabel(item.type)}
                        </span>
                        <h3 className="text-lg sm:text-xl font-semibold text-stone-50 mt-2">
                          {item.title}
                        </h3>
                        <p className="text-sm font-semibold text-stone-400 mt-1">
                          {item.organization}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium sm:self-start bg-stone-950 px-2.5 py-1.5 border border-stone-800 rounded-md">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.duration}</span>
                      </div>
                    </div>

                    <p className="text-sm text-stone-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
