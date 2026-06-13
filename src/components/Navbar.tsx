"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'หน้าแรก', href: '#hero' },
  { name: 'เกี่ยวกับ', href: '#about' },
  { name: 'ทักษะ', href: '#skills' },
  { name: 'เส้นทาง', href: '#experience' },
  { name: 'GitHub', href: '#github' },
  { name: 'โปรเจกต์', href: '#projects' },
  { name: 'ติดต่อ', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'backdrop-blur-md bg-[#0b0f0e]/85 border-b border-stone-800 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#hero" className="flex items-center gap-2 text-xl font-semibold tracking-tight text-stone-100">
              <Code2 className="w-6 h-6 text-emerald-300" />
              <span>Phanuwat.dev</span>
            </a>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                      isActive ? 'text-emerald-100' : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBg"
                        className="absolute inset-0 bg-stone-900 border border-stone-800 rounded-md -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-stone-200 hover:bg-stone-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-stone-800 bg-[#0b0f0e]/95 backdrop-blur-lg"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navItems.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                      isActive 
                        ? 'bg-stone-900 text-emerald-100 border-l-4 border-emerald-300' 
                        : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
