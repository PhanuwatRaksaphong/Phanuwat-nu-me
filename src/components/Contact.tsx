"use client";

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin, FacebookIcon as Facebook } from './BrandIcons';
import { motion } from 'framer-motion';
import { ContactInfo } from '../types/portfolio';
import { contactInfo } from '../data/portfolioData';

interface ContactProps {
  info?: ContactInfo;
}

export default function Contact({ info = contactInfo }: ContactProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'กรุณากรอกชื่อ';
      valid = false;
    } else if (formData.name.length < 2) {
      newErrors.name = 'ชื่อควรมีอย่างน้อย 2 ตัวอักษร';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'กรุณากรอกอีเมล';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'รูปแบบอีเมลไม่ถูกต้อง';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'กรุณาเขียนข้อความ';
      valid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'ข้อความควรมีอย่างน้อย 10 ตัวอักษร';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call or call local Next.js route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Contact submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors as user type
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0b0f0e] border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-emerald-300 uppercase">ติดต่อ</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-stone-50">
            ฝากข้อความไว้ได้เลย
          </p>
          <div className="w-12 h-px bg-emerald-300/70 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Information & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-stone-50">เปิดรับโปรเจกต์เล็ก ๆ ที่มีประโยชน์</h3>
              <p className="mt-3 text-stone-400 leading-relaxed">
                ถ้ามีโปรเจกต์ในมหาวิทยาลัย โอกาส internship ไอเดียเว็บ หรือคำถามเรื่องโค้ด ส่งมาคุยกันได้ ข้อความสั้น ๆ ก็ได้ครับ
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${info.email}`}
                className="flex items-center gap-4 p-4 rounded-md bg-stone-900/45 border border-stone-800 hover:border-stone-700 text-stone-300 hover:text-white transition-all group"
              >
                <div className="p-3 rounded-md bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-stone-500 font-bold uppercase tracking-wider">อีเมล</span>
                  <span className="text-sm font-semibold">{info.email}</span>
                </div>
              </a>

              <a
                href={info.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-md bg-stone-900/45 border border-stone-800 hover:border-stone-700 text-stone-300 hover:text-white transition-all group"
              >
                <div className="p-3 rounded-md bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-stone-500 font-bold uppercase tracking-wider">GitHub</span>
                  <span className="text-sm font-semibold">github.com/phanuwat-nu-me</span>
                </div>
              </a>

              <a
                href={info.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-md bg-stone-900/45 border border-stone-800 hover:border-stone-700 text-stone-300 hover:text-white transition-all group"
              >
                <div className="p-3 rounded-md bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-stone-500 font-bold uppercase tracking-wider">LinkedIn</span>
                  <span className="text-sm font-semibold">Phanuwat Raksaphong</span>
                </div>
              </a>

              {info.facebook && (
                <a
                  href={info.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-md bg-stone-900/45 border border-stone-800 hover:border-stone-700 text-stone-300 hover:text-white transition-all group"
                >
                  <div className="p-3 rounded-md bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-stone-500 font-bold uppercase tracking-wider">Facebook</span>
                    <span className="text-sm font-semibold">Phanuwat Raksaphong</span>
                  </div>
                </a>
              )}
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-md bg-stone-900/45 border border-stone-800 space-y-6">
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-stone-300 mb-2">
                  ชื่อ
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md bg-stone-950 border text-stone-200 placeholder-stone-600 focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-colors ${
                    errors.name ? 'border-red-500/55 focus:ring-red-500' : 'border-stone-800 focus:border-emerald-400'
                  }`}
                  placeholder="ชื่อของคุณ"
                />
                {errors.name && <p className="mt-1 text-xs text-red-400 font-semibold">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-stone-300 mb-2">
                  อีเมล
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md bg-stone-950 border text-stone-200 placeholder-stone-600 focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-colors ${
                    errors.email ? 'border-red-500/55 focus:ring-red-500' : 'border-stone-800 focus:border-emerald-400'
                  }`}
                  placeholder="name@example.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-400 font-semibold">{errors.email}</p>}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-stone-300 mb-2">
                  ข้อความ
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md bg-stone-950 border text-stone-200 placeholder-stone-600 focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-colors resize-none ${
                    errors.message ? 'border-red-500/55 focus:ring-red-500' : 'border-stone-800 focus:border-emerald-400'
                  }`}
                  placeholder="เขียนข้อความของคุณที่นี่..."
                />
                {errors.message && <p className="mt-1 text-xs text-red-400 font-semibold">{errors.message}</p>}
              </div>

              {/* Feedback States */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-3 p-4 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-semibold">ส่งข้อความสำเร็จแล้วครับ เดี๋ยวผมจะตอบกลับให้เร็วที่สุด</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-3 p-4 rounded-md bg-red-500/10 border border-red-500/25 text-red-400">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-semibold">มีบางอย่างผิดพลาด ลองเช็กอินเทอร์เน็ตแล้วส่งใหม่อีกครั้งครับ</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-emerald-300 hover:bg-emerald-200 text-stone-950 font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>กำลังส่ง...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>ส่งข้อความ</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
