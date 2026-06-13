"use client";

import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0f0e] border-t border-stone-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-stone-100">
            <Code2 className="w-5 h-5 text-emerald-300" />
            <span>Phanuwat.dev</span>
          </div>

          {/* Copyrights */}
          <p className="text-stone-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Phanuwat Raksaphong. All rights reserved.
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center p-3 rounded-md bg-stone-900 border border-stone-800 text-stone-400 hover:text-white hover:border-stone-700 transition-all duration-200 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
}
