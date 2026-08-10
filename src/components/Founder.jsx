import React from 'react';
import { motion } from 'framer-motion';
import { BUSINESS_INFO } from '../data/businessData';
import { Quote, Award, ShieldCheck } from 'lucide-react';

export default function Founder() {
  return (
    <section id="founder" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle gold backdrop glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#C9A45C]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Founder Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#C9A45C]/40 shadow-xl group">
              <img
                src="/images/founder_varudhan.jpg"
                alt="Varudhan - Founder of SUN Mats Works"
                className="w-full h-[450px] sm:h-[520px] object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-70"></div>
              
              {/* Founder Name Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 border border-slate-200 backdrop-blur-md shadow-lg">
                <h4 className="font-display font-bold text-slate-900 text-xl">
                  {BUSINESS_INFO.founderName}
                </h4>
                <p className="text-xs text-[#B48608] font-bold tracking-wider uppercase">
                  {BUSINESS_INFO.founderRole}
                </p>
              </div>
            </div>

            {/* Decorative Gold Frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#B48608] rounded-tl-2xl pointer-events-none hidden sm:block"></div>
          </motion.div>

          {/* Right Founder Information */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="text-xs font-bold text-[#B48608] tracking-widest uppercase mb-3 block">
              LEADERSHIP & VISION
            </span>

            <h2 className="font-display text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Meet the Founder
            </h2>

            <div className="w-16 h-1 bg-gradient-to-r from-[#F5D77F] to-[#D4AF37] mb-8 rounded-full"></div>

            <p className="text-base text-slate-600 font-normal leading-relaxed mb-6">
              Built with dedication, attention to detail and a passion for quality, SUN Mats Works focuses on delivering products and installations that customers can trust throughout Melapalayam and Tirunelveli.
            </p>

            <p className="text-base text-slate-600 font-normal leading-relaxed mb-8">
              Every project is approached with care — from initial product selection to custom cutting and final on-site finishing. We take pride in transforming vehicle interiors, residences, and commercial venues into functional, stylish spaces.
            </p>

            {/* Founder Quote Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#D4AF37]/30 shadow-md relative mb-8">
              <Quote className="w-8 h-8 text-[#B48608]/20 absolute top-4 right-4" />
              
              <blockquote className="font-display italic text-lg text-[#B48608] font-semibold leading-snug mb-3">
                "{BUSINESS_INFO.founderQuote}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="h-0.5 w-8 bg-[#B48608]"></div>
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  — Varudhan, SUN Mats Works
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-[#B48608]" />
                <span>100% Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Award className="w-4 h-4 text-[#B48608]" />
                <span>100+ Completed Projects</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
