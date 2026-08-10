import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, PhoneCall, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function CTA({ onOpenQuote }) {
  return (
    <section className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#C9A45C]/15 to-[#E6C982]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="p-8 sm:p-14 rounded-3xl bg-[#111111]/90 border border-[#C9A45C]/40 backdrop-blur-xl text-center shadow-2xl relative overflow-hidden">
          
          {/* Subtle gold line geometry */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#171717] border border-[#C9A45C]/30 text-xs font-bold text-[#E6C982] tracking-wider uppercase mb-6">
              <Sparkles className="w-4 h-4 text-[#C9A45C]" />
              <span>GET IN TOUCH TODAY</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight mb-6">
              Ready to Transform Your Space?
            </h2>

            <p className="text-base sm:text-lg text-gray-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Talk to <strong className="text-white">SUN Mats Works</strong> today for premium mats, wallpapers, carpets, artificial grass and professional installation services in Tirunelveli.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenQuote}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#E6C982] via-[#C9A45C] to-[#9A7B39] text-black font-display font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-3 shadow-gold-glow hover:shadow-gold-glow-lg hover:scale-[1.02] transition-all"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 font-display font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 hover:bg-emerald-900/80 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="mt-10 pt-6 border-t border-[#262626] flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-[#C9A45C]" /> Call: {BUSINESS_INFO.phone}
              </span>
              <span>•</span>
              <span>Melapalayam, Tirunelveli</span>
              <span>•</span>
              <span>Fast Response Guaranteed</span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
