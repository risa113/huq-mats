import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Sparkles, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO, HERO_DATA, getImageUrl } from '../data/businessData';

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
      
      {/* Background Image with Luxury Light Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={getImageUrl(HERO_DATA.bgImage)}
          alt="SUN Mats Works Luxury Interior Surface Showcase"
          className="w-full h-full object-cover object-center filter brightness-105"
        />
        {/* Gradient light overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/98 via-slate-50/90 to-slate-50/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-slate-50/80"></div>
      </div>

      {/* Decorative Gold Radial Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#F3D379]/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Animated Subtle Gold Frame Geometry Lines */}
      <div className="absolute inset-x-8 top-32 bottom-12 border border-[#D4AF37]/20 pointer-events-none rounded-2xl hidden lg:block">
        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#B48608]"></div>
        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#B48608]"></div>
        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#B48608]"></div>
        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#B48608]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">

          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-[#D4AF37]/40 backdrop-blur-md mb-6 shadow-gold-glow"
          >
            <Sparkles className="w-4 h-4 text-[#B48608] animate-pulse" />
            <span className="text-xs sm:text-xs font-bold text-[#B48608] tracking-widest uppercase">
              {HERO_DATA.eyebrow}
            </span>
          </motion.div>

          {/* Main Display Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-4"
          >
            Premium Surfaces.<br />
            <span className="gold-text-gradient">Beautiful Spaces.</span>
          </motion.h1>

          {/* Supporting Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl font-semibold text-slate-700 mb-4"
          >
            {HERO_DATA.headingSub}
          </motion.p>

          {/* Body Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base text-slate-600 max-w-2xl leading-relaxed mb-8 font-normal"
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
              className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B48608] text-slate-950 font-display font-bold text-sm tracking-wider uppercase flex items-center gap-3 shadow-gold-glow hover:shadow-gold-glow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Quote Action */}
            <button
              onClick={onOpenQuote}
              className="px-7 py-4 rounded-xl bg-white border border-[#D4AF37]/50 text-slate-900 font-display font-semibold text-sm tracking-wider uppercase hover:border-[#B48608] hover:bg-slate-50 transition-all duration-300 shadow-sm"
            >
              Get a Free Quote
            </button>

            {/* WhatsApp Direct Link */}
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-700 font-semibold text-xs tracking-wide hover:bg-emerald-100 hover:border-emerald-400 transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Chat on WhatsApp</span>
            </a>
          </motion.div>

          {/* Trust Highlights under Hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-200"
          >
            <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
              <ShieldCheck className="w-4 h-4 text-[#B48608]" />
              <span>Trusted Local Experts</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
              <MapPin className="w-4 h-4 text-[#B48608]" />
              <span>Engineers Colony, Melapalayam</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-amber-700 font-bold">
              <span>★ 4.9/5 Rating</span>
              <span className="text-slate-500 font-normal">(19 Google Reviews)</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
