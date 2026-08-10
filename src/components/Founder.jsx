import React from 'react';
import { motion } from 'framer-motion';
import { BUSINESS_INFO } from '../data/businessData';
import { Quote, Award, ShieldCheck } from 'lucide-react';

export default function Founder() {
  return (
    <section id="founder" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Subtle gold backdrop glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#C9A45C]/5 rounded-full blur-3xl pointer-events-none"></div>

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
            <div className="relative rounded-2xl overflow-hidden border border-[#C9A45C]/40 shadow-2xl group">
              <img
                src="/images/founder_varudhan.jpg"
                alt="Varudhan - Founder of SUN Mats Works"
                className="w-full h-[450px] sm:h-[520px] object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80"></div>
              
              {/* Founder Name Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#171717]/90 border border-[#262626] backdrop-blur-md">
                <h4 className="font-display font-bold text-white text-xl">
                  {BUSINESS_INFO.founderName}
                </h4>
                <p className="text-xs text-[#E6C982] font-medium tracking-wider uppercase">
                  {BUSINESS_INFO.founderRole}
                </p>
              </div>
            </div>

            {/* Decorative Gold Frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#C9A45C] rounded-tl-2xl pointer-events-none hidden sm:block"></div>
          </motion.div>

          {/* Right Founder Information */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="text-xs font-bold text-[#C9A45C] tracking-widest uppercase mb-3 block">
              LEADERSHIP & VISION
            </span>

            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              Meet the Founder
            </h2>

            <div className="w-16 h-1 bg-gradient-to-r from-[#E6C982] to-[#C9A45C] mb-8 rounded-full"></div>

            <p className="text-base text-gray-300 font-light leading-relaxed mb-6">
              Built with dedication, attention to detail and a passion for quality, SUN Mats Works focuses on delivering products and installations that customers can trust throughout Melapalayam and Tirunelveli.
            </p>

            <p className="text-base text-gray-300 font-light leading-relaxed mb-8">
              Every project is approached with care — from initial product selection to custom cutting and final on-site finishing. We take pride in transforming vehicle interiors, residences, and commercial venues into functional, stylish spaces.
            </p>

            {/* Founder Quote Card */}
            <div className="p-6 rounded-2xl bg-[#171717] border border-[#C9A45C]/30 relative mb-8">
              <Quote className="w-8 h-8 text-[#C9A45C]/40 absolute top-4 right-4" />
              
              <blockquote className="font-display italic text-lg text-[#E6C982] leading-snug mb-3">
                "{BUSINESS_INFO.founderQuote}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="h-0.5 w-8 bg-[#C9A45C]"></div>
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  — Varudhan, SUN Mats Works
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <ShieldCheck className="w-4 h-4 text-[#C9A45C]" />
                <span>100% Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <Award className="w-4 h-4 text-[#C9A45C]" />
                <span>100+ Completed Projects</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
