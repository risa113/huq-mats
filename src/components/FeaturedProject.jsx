import React from 'react';
import { motion } from 'framer-motion';
import { FEATURED_PROJECT, getImageUrl } from '../data/businessData';
import { ArrowRight, CheckCircle, MapPin, Wrench } from 'lucide-react';

export default function FeaturedProject() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-white border border-[#D4AF37]/40 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Image Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 relative group rounded-2xl overflow-hidden shadow-md"
            >
              <img
                src={getImageUrl(FEATURED_PROJECT.image)}
                alt="SUN Mats Works Showcase Project"
                className="w-full h-[280px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
              
              <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-white/95 border border-[#D4AF37] text-xs font-bold text-[#B48608] tracking-widest uppercase shadow-sm">
                FEATURED INSTALLATION
              </div>
            </motion.div>

            {/* Right Project Meta & Story */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              <span className="text-xs font-bold text-[#B48608] tracking-widest uppercase mb-2">
                PROJECT SPOTLIGHT
              </span>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                {FEATURED_PROJECT.title}
              </h2>

              <p className="text-sm text-slate-600 font-normal leading-relaxed mb-8">
                {FEATURED_PROJECT.description}
              </p>

              {/* Specifications Box */}
              <div className="space-y-4 mb-8 bg-slate-50 p-5 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Project Type</span>
                  <span className="font-semibold text-slate-900">{FEATURED_PROJECT.projectType}</span>
                </div>
                <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Service</span>
                  <span className="font-semibold text-[#B48608]">{FEATURED_PROJECT.service}</span>
                </div>
                <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Location</span>
                  <span className="font-semibold text-slate-900">{FEATURED_PROJECT.location}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Execution</span>
                  <span className="font-semibold text-slate-900">{FEATURED_PROJECT.installation}</span>
                </div>
              </div>

              {/* Action Button */}
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B48608] text-slate-950 font-display font-bold text-xs tracking-wider uppercase text-center flex items-center justify-center gap-3 shadow-gold-glow hover:shadow-gold-glow-lg transition-all"
              >
                <span>View More Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
