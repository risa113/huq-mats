import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../data/businessData';

export default function Reviews() {
  const googleReviewsUrl = `https://www.google.com/search?q=SUN+Mats+Works+Melapalayam+Tirunelveli+reviews`;

  return (
    <section className="py-24 bg-[#111111] relative overflow-hidden border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#C9A45C] tracking-widest uppercase block mb-3">
            TESTIMONIALS & RATING
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            What Our Customers Say
          </h2>

          {/* Rating Summary Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#171717] border border-[#C9A45C]/40 mt-6 shadow-gold-glow">
            <div className="flex items-center text-amber-400 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-display font-bold text-white text-lg">
              {BUSINESS_INFO.googleRating} / 5
            </span>
            <span className="text-gray-400 text-xs font-light">
              ({BUSINESS_INFO.reviewCount} Google Reviews)
            </span>
          </div>

          <div className="w-16 h-1 bg-gradient-to-r from-[#E6C982] to-[#C9A45C] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Reviews Cards Carousel / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {REVIEWS.map((rev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-2xl bg-[#171717] border border-[#262626] hover:border-[#C9A45C]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold text-[#E6C982] bg-[#111111] px-2.5 py-1 rounded-full border border-[#262626]">
                    {rev.tag}
                  </span>
                </div>

                <blockquote className="text-sm text-gray-200 font-light leading-relaxed italic mb-6">
                  "{rev.quote}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[#262626] flex items-center justify-between">
                <span className="text-xs font-semibold text-white">
                  {rev.author}
                </span>
                <span className="text-[11px] text-gray-500">
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
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#171717] border border-[#C9A45C]/40 text-[#E6C982] hover:text-white hover:border-[#C9A45C] font-display font-semibold text-xs tracking-wider uppercase transition-all duration-300"
          >
            <span>View All Reviews on Google</span>
            <ExternalLink className="w-4 h-4 text-[#C9A45C]" />
          </a>
        </div>

      </div>
    </section>
  );
}
