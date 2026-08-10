import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Sparkles, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO, HERO_DATA } from '../data/businessData';

export default function Hero({ onOpenQuote }) {
  const handleScrollToServices = (e) => {
    e.preventDefault();
    const el = document.getElementById('services');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Background Image with Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_DATA.bgImage}
          alt="SUN Mats Works Luxury Interior Surface Showcase"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-subtle filter brightness-90"
        />
        {/* Gradient dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/95 via-[#080808]/80 to-[#080808]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/70"></div>
      </div>

      {/* Decorative Gold Radial Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#C9A45C]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#E6C982]/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Animated Subtle Gold Frame Geometry Lines */}
      <div className="absolute inset-x-8 top-32 bottom-12 border border-[#C9A45C]/10 pointer-events-none rounded-2xl hidden lg:block">
        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#C9A45C]"></div>
        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#C9A45C]"></div>
        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#C9A45C]"></div>
        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#C9A45C]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">

          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#171717]/90 border border-[#C9A45C]/30 backdrop-blur-md mb-6 shadow-gold-glow"
          >
            <Sparkles className="w-4 h-4 text-[#E6C982] animate-pulse" />
            <span className="text-xs sm:text-xs font-semibold text-[#E6C982] tracking-widest uppercase">
              {HERO_DATA.eyebrow}
            </span>
          </motion.div>

          {/* Main Display Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-4"
          >
            Premium Surfaces.<br />
            <span className="gold-text-gradient">Beautiful Spaces.</span>
          </motion.h1>

          {/* Supporting Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl font-medium text-gray-200 mb-4"
          >
            {HERO_DATA.headingSub}
          </motion.p>

          {/* Body Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base text-gray-300 max-w-2xl leading-relaxed mb-8 font-light"
          >
            {HERO_DATA.paragraph}
          </motion.p>

          {/* CTA Buttons Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            {/* Primary Action */}
            <a
              href="#services"
              onClick={handleScrollToServices}
              className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#E6C982] via-[#C9A45C] to-[#9A7B39] text-black font-display font-bold text-sm tracking-wider uppercase flex items-center gap-3 shadow-gold-glow hover:shadow-gold-glow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Quote Action */}
            <button
              onClick={onOpenQuote}
              className="px-7 py-4 rounded-xl bg-[#171717] border border-[#C9A45C]/40 text-[#E6C982] font-display font-semibold text-sm tracking-wider uppercase hover:border-[#C9A45C] hover:bg-[#222222] transition-all duration-300"
            >
              Get a Free Quote
            </button>

            {/* WhatsApp Direct Link */}
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-4 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-medium text-xs tracking-wide hover:bg-emerald-900/60 hover:border-emerald-400 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </motion.div>

          {/* Trust Highlights under Hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10"
          >
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <ShieldCheck className="w-4 h-4 text-[#C9A45C]" />
              <span>Trusted Local Experts</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <MapPin className="w-4 h-4 text-[#C9A45C]" />
              <span>Engineers Colony, Melapalayam</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
              <span>★ 4.9/5 Rating</span>
              <span className="text-gray-400 font-normal">(19 Google Reviews)</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
