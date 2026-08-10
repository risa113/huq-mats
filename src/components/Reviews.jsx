import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../data/businessData';

export default function Reviews() {
  const googleReviewsUrl = `https://www.google.com/search?q=SUN+Mats+Works+Melapalayam+Tirunelveli+reviews`;

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black text-[#854D0E] tracking-widest uppercase block mb-3">
            TESTIMONIALS & RATING
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            What Our Customers Say
          </h2>

          {/* Rating Summary Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border-2 border-amber-400 mt-6 shadow-md">
            <div className="flex items-center text-amber-500 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-display font-black text-slate-950 text-lg">
              {BUSINESS_INFO.googleRating} / 5
            </span>
            <span className="text-slate-600 text-xs font-bold">
              ({BUSINESS_INFO.reviewCount} Google Reviews)
            </span>
          </div>

          <div className="w-16 h-1 bg-gradient-to-r from-[#FDE047] via-[#EAB308] to-[#B48608] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {REVIEWS.map((rev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-2xl bg-white border border-slate-300 hover:border-[#854D0E] hover:shadow-2xl shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-black text-amber-950 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-300">
                    {rev.tag}
                  </span>
                </div>

                <blockquote className="text-sm text-slate-800 font-semibold leading-relaxed italic mb-6">
                  "{rev.quote}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-extrabold text-slate-950">
                  {rev.author}
                </span>
                <span className="text-[11px] text-slate-600 font-bold">
                  Melapalayam
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Button */}
        <div className="text-center">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border-2 border-amber-500/50 text-amber-950 hover:text-slate-950 hover:border-amber-600 hover:bg-amber-50 font-display font-extrabold text-xs tracking-wider uppercase transition-all duration-300 shadow-sm"
          >
            <span>View All Reviews on Google</span>
            <ExternalLink className="w-4 h-4 text-[#854D0E]" />
          </a>
        </div>

      </div>
    </section>
  );
}
