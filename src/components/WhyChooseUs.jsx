import React from 'react';
import { motion } from 'framer-motion';
import { WHY_CHOOSE_US } from '../data/businessData';

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 bg-slate-100/70 relative overflow-hidden border-t border-b border-slate-200">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.1] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#B48608] tracking-widest uppercase block mb-3">
            THE SUN MATS DIFFERENCE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Why Choose SUN Mats Works?
          </h2>
          <p className="text-base text-slate-600 mt-4 font-normal max-w-2xl mx-auto">
            Delivering uncompromised craftsmanship, fair local pricing, and long-lasting surface beauty.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#F5D77F] to-[#D4AF37] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 6 Grid Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#D4AF37] transition-all duration-300 group relative shadow-md hover:shadow-xl"
            >
              {/* Large Gold Number */}
              <div className="font-display font-extrabold text-4xl sm:text-5xl gold-text-gradient mb-4 opacity-90 group-hover:opacity-100 transition-opacity">
                {item.num}
              </div>

              <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-[#B48608] transition-colors mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                {item.description}
              </p>

              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#D4AF37]/15 to-transparent rounded-tr-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
