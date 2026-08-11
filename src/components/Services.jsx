import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, ChevronLeft, ChevronRight, Sparkles, Link2 } from 'lucide-react';
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
      scrollRef.current.scrollBy({ left: -390, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 390, behavior: 'smooth' });
    }
  };

  // 3D Animatic Stagger Sequence
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 15, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 14
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background 3D Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FDE047]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#854D0E]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-100 to-amber-200 border border-amber-300 text-amber-950 font-black text-xs uppercase tracking-widest mb-3 shadow-md">
              <Sparkles className="w-4 h-4 text-[#854D0E] animate-pulse" />
              <span>3D THREAD-LINKED PRODUCT CARRIAGES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
              What We Do
            </h2>
            <p className="text-base sm:text-lg text-slate-700 mt-3 font-semibold max-w-xl">
              Explore our products linked together with glowing 3D thread connectors.
            </p>
          </div>

          {/* 3D Train Slider Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="p-4 rounded-2xl bg-white border border-slate-300 text-slate-900 hover:text-[#854D0E] hover:border-[#854D0E] hover:scale-108 active:scale-95 transition-all shadow-lg"
              aria-label="Previous Carriage"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollRight}
              className="p-4 rounded-2xl bg-gradient-to-r from-[#FDE047] via-[#EAB308] to-[#B48608] text-slate-950 font-black hover:scale-108 active:scale-95 transition-all shadow-gold-glow-lg"
              aria-label="Next Carriage"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Glowing 3D Main Thread Track Line Behind Cards */}
        <div className="relative mb-6 hidden md:block">
          <div className="w-full h-1.5 bg-gradient-to-r from-[#FDE047] via-[#EAB308] to-[#B48608] rounded-full shadow-[0_0_15px_#FDE047] opacity-80"></div>
        </div>

        {/* 3D Animatic Linked Thread Train Carousel */}
        <motion.div
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex items-center gap-0 overflow-x-auto pb-10 pt-4 scrollbar-none snap-x snap-mandatory perspective-1000"
        >
          {SERVICES.map((service, index) => (
            <React.Fragment key={service.id}>
              
              {/* 3D Train Card Carriage */}
              <motion.div
                variants={cardVariants}
                className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-300 hover:border-[#854D0E] hover:shadow-[0_25px_50px_rgba(133,77,14,0.22)] transition-all duration-500 shadow-xl min-w-[300px] sm:min-w-[350px] lg:min-w-[390px] max-w-[390px] snap-center shrink-0 hover:-translate-y-3 transform-gpu"
              >
                {/* 3D Carriage Header Bar */}
                <div className="px-5 py-3 bg-slate-950 text-amber-300 flex items-center justify-between text-xs font-black tracking-widest uppercase border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FDE047] animate-ping"></span>
                    <span>CARRIAGE 0{index + 1}</span>
                  </div>
                  <span className="text-[10px] text-amber-400 font-extrabold bg-slate-900 px-2.5 py-1 rounded-full border border-amber-400/30">
                    0{index + 1} / 0{SERVICES.length}
                  </span>
                </div>

                {/* Card Image Container */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
                  <img
                    src={getImageUrl(service.image)}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-112 transition-transform duration-700 filter brightness-100 group-hover:brightness-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-70"></div>
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 border border-amber-300 backdrop-blur-md shadow-md">
                    <span className="text-[11px] font-black text-amber-950 tracking-wider uppercase">
                      SUN MATS
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    <h3 className="font-display font-black text-xl text-slate-950 group-hover:text-[#854D0E] transition-colors mb-3 leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-700 font-semibold leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-900 font-extrabold">
                          <Check className="w-4 h-4 text-[#854D0E] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
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
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-[#FDE047] to-[#EAB308] text-slate-950 font-black text-xs hover:scale-105 transition-all shadow-gold-glow"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>

              </motion.div>

              {/* 3D Glowing Thread Connector Between Carriages (Except Last Card) */}
              {index < SERVICES.length - 1 && (
                <div className="flex items-center justify-center shrink-0 px-2 sm:px-3 relative z-20">
                  <div className="flex items-center gap-1">
                    {/* Glowing Left Cable */}
                    <div className="w-4 sm:w-6 h-1.5 bg-gradient-to-r from-[#FDE047] to-[#EAB308] rounded-full shadow-[0_0_10px_#FDE047]"></div>
                    
                    {/* 3D Thread Joint Hook Ring */}
                    <div className="w-8 h-8 rounded-full bg-slate-950 border-2 border-[#FDE047] text-[#FDE047] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Link2 className="w-4 h-4 animate-pulse" />
                    </div>

                    {/* Glowing Right Cable */}
                    <div className="w-4 sm:w-6 h-1.5 bg-gradient-to-r from-[#EAB308] to-[#FDE047] rounded-full shadow-[0_0_10px_#FDE047]"></div>
                  </div>
                </div>
              )}

            </React.Fragment>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
