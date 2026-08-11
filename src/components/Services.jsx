import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { SERVICES, getImageUrl } from '../data/businessData';

export default function Services({ onSelectServiceCategory, onOpenQuote }) {
  const scrollRef = useRef(null);

  const handleViewProjects = (categoryTitle) => {
    onSelectServiceCategory(categoryTitle);
    const el = document.getElementById('projects');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  // Staggered sequential train animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.22,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 70, scale: 0.94 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C9A45C]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Train Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-950 font-black text-xs uppercase tracking-widest mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#854D0E]" />
              <span>OUR EXPERTISE & PRODUCTS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
              What We Do
            </h2>
            <p className="text-base sm:text-lg text-slate-700 mt-3 font-semibold max-w-xl">
              Swipe or click the train controls to explore our premium product carriages.
            </p>
          </div>

          {/* Train Controls (Previous & Next Buttons) */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="p-3.5 rounded-full bg-white border border-slate-300 text-slate-900 hover:text-[#854D0E] hover:border-[#854D0E] hover:scale-105 active:scale-95 transition-all shadow-md"
              aria-label="Previous Train Carriage"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-3.5 rounded-full bg-gradient-to-r from-[#FDE047] via-[#EAB308] to-[#B48608] text-slate-950 font-black hover:scale-105 active:scale-95 transition-all shadow-gold-glow"
              aria-label="Next Train Carriage"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Train Track Visual Connecting Line */}
        <div className="relative mb-6 hidden sm:block">
          <div className="w-full h-1 bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 rounded-full opacity-60"></div>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 rounded-full bg-[#854D0E] ring-4 ring-amber-200"></div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 rounded-full bg-[#854D0E] ring-4 ring-amber-200"></div>
        </div>

        {/* Sequential Staggered Train Carousel Container */}
        <motion.div
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex items-stretch gap-6 sm:gap-8 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-300 hover:border-[#854D0E] hover:shadow-2xl transition-all duration-500 shadow-md min-w-[290px] sm:min-w-[340px] lg:min-w-[380px] max-w-[380px] snap-center shrink-0 hover:-translate-y-2"
            >
              {/* Carriage Header Indicator */}
              <div className="px-5 py-2.5 bg-slate-900 text-amber-300 flex items-center justify-between text-xs font-black tracking-widest uppercase border-b border-slate-800">
                <span>CARRIAGE 0{index + 1}</span>
                <span className="text-[10px] text-slate-400 font-semibold">0{index + 1} / 0{SERVICES.length}</span>
              </div>

              {/* Image Container */}
              <div className="relative h-52 sm:h-60 overflow-hidden bg-slate-100">
                <img
                  src={getImageUrl(service.image)}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-100 group-hover:brightness-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                
                {/* Gold Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 border border-amber-300 backdrop-blur-md shadow-sm">
                  <span className="text-[11px] font-black text-amber-950 tracking-wider uppercase">
                    SUN MATS
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                <div>
                  <h3 className="font-display font-black text-xl text-slate-950 group-hover:text-[#854D0E] transition-colors mb-3 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-700 font-semibold leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-800 font-bold">
                        <Check className="w-4 h-4 text-[#854D0E] shrink-0" />
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
                    className="px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-950 font-extrabold text-xs hover:bg-[#854D0E] hover:text-white transition-all shadow-sm"
                  >
                    Get Quote
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
