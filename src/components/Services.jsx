import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { SERVICES, getImageUrl } from '../data/businessData';

export default function Services({ onSelectServiceCategory, onOpenQuote }) {
  const handleViewProjects = (categoryTitle) => {
    onSelectServiceCategory(categoryTitle);
    const el = document.getElementById('projects');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C9A45C]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black text-[#854D0E] tracking-widest uppercase block mb-3">
            OUR EXPERTISE & PRODUCTS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            What We Do
          </h2>
          <p className="text-base sm:text-lg text-slate-700 mt-4 font-semibold max-w-2xl mx-auto">
            Premium materials and professional finishing for cars, homes, offices and commercial spaces.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FDE047] via-[#EAB308] to-[#B48608] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Services Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-300 hover:border-[#854D0E] hover:shadow-2xl transition-all duration-500 shadow-md h-full"
            >
              {/* Image Container */}
              <div className="relative h-52 sm:h-60 overflow-hidden">
                <img
                  src={getImageUrl(service.image)}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-100 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent opacity-60"></div>
                
                {/* Gold Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 backdrop-blur-md shadow-sm">
                  <span className="text-[11px] font-black text-amber-950 tracking-wider uppercase">
                    SUN MATS
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-display font-extrabold text-xl text-slate-950 group-hover:text-[#854D0E] transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-700 font-medium leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-800 font-semibold">
                        <Check className="w-3.5 h-3.5 text-[#854D0E] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Links */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between mt-auto">
                  <button
                    onClick={() => handleViewProjects(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#854D0E] hover:text-slate-950 transition-colors group/btn"
                  >
                    <span>View Projects</span>
                    <ArrowUpRight className="w-4 h-4 text-[#854D0E] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={onOpenQuote}
                    className="text-xs text-slate-700 font-bold hover:text-[#854D0E] transition-colors"
                  >
                    Get Quote
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
