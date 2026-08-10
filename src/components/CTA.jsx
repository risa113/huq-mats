import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, PhoneCall, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function CTA({ onOpenQuote }) {
  return (
    <section className="py-20 sm:py-28 bg-slate-100/60 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#D4AF37]/15 to-[#F5D77F]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="p-8 sm:p-14 rounded-3xl bg-white border border-slate-300 backdrop-blur-xl text-center shadow-2xl relative overflow-hidden">
          
          {/* Subtle gold line geometry */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#EAB308] to-transparent"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-xs font-black text-amber-950 tracking-wider uppercase mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#854D0E]" />
              <span>GET IN TOUCH TODAY</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-6">
              Ready to Transform Your Space?
            </h2>

            <p className="text-base sm:text-lg text-slate-700 font-semibold max-w-2xl mx-auto mb-10 leading-relaxed">
              Talk to <strong className="text-slate-950 font-black">SUN Mats Works</strong> today for premium mats, wallpapers, carpets, artificial grass and professional installation services in Tirunelveli.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenQuote}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#FDE047] via-[#EAB308] to-[#B48608] text-slate-950 font-display font-black text-xs sm:text-sm tracking-wider uppercase flex items-center gap-3 shadow-gold-glow hover:shadow-gold-glow-lg hover:scale-[1.02] transition-all"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-emerald-100 border border-emerald-400 text-emerald-950 font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 hover:bg-emerald-200 transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-700" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-700 font-bold">
              <span className="flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-[#854D0E]" /> Call: {BUSINESS_INFO.phone}
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
