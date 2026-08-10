import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, ShieldCheck, Tag, ArrowRight } from 'lucide-react';
import { PROJECTS_GALLERY, getImageUrl } from '../data/businessData';
import LightboxModal from './LightboxModal';

export default function Gallery({ selectedCategory, onSelectCategory }) {
  const [activeFilter, setActiveFilter] = useState(selectedCategory || 'All');
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);

  const categories = [
    'All',
    'Floor Mats',
    'Wallpaper',
    'Artificial Grass',
    'Carpet',
    'Car Mats',
    'Interior Flooring',
    'Wall Design',
    'Custom Installation'
  ];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS_GALLERY
    : PROJECTS_GALLERY.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());

  const handleFilterClick = (cat) => {
    setActiveFilter(cat);
    if (onSelectCategory) onSelectCategory(cat);
  };

  const handleOpenLightbox = (project) => {
    const idx = PROJECTS_GALLERY.findIndex(p => p.id === project.id);
    setActiveProjectIndex(idx);
  };

  const handlePrevLightbox = () => {
    setActiveProjectIndex(prev => (prev > 0 ? prev - 1 : PROJECTS_GALLERY.length - 1));
  };

  const handleNextLightbox = () => {
    setActiveProjectIndex(prev => (prev < PROJECTS_GALLERY.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="projects" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C9A45C]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-black text-[#854D0E] tracking-widest uppercase block mb-3">
            PORTFOLIO & WORK SHOWCASE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Our Recent Work
          </h2>
          <p className="text-base sm:text-lg text-slate-700 mt-4 font-semibold max-w-2xl mx-auto">
            Explore authentic client installations and premium interior transformations across Tirunelveli.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FDE047] via-[#EAB308] to-[#B48608] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 sm:mb-14 scrollbar-none sm:flex-wrap sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => {
            const isActive = activeFilter.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                onClick={() => handleFilterClick(cat)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#FDE047] via-[#EAB308] to-[#B48608] text-slate-950 shadow-gold-glow scale-105 font-black'
                    : 'bg-white border border-slate-300 text-slate-800 font-extrabold hover:border-[#854D0E] hover:text-slate-950 shadow-sm'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Perfectly Arranged 3x3 Grid (3 columns on desktop = 3 complete rows of 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => handleOpenLightbox(project)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-300 hover:border-[#854D0E] hover:shadow-2xl cursor-pointer transition-all duration-500 flex flex-col h-full shadow-md hover:-translate-y-1.5"
            >
              {/* Image Container with Uniform Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src={getImageUrl(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-100 group-hover:brightness-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                {/* Top Category Badge */}
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 border border-amber-300 text-[11px] font-black text-amber-950 tracking-wider uppercase backdrop-blur-md shadow-sm">
                  {project.category}
                </div>

                {/* Real Photo Tag */}
                {project.isClientPhoto && (
                  <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-white border border-amber-400 text-[10px] font-black text-amber-950 tracking-wider uppercase flex items-center gap-1.5 backdrop-blur-md shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#854D0E]" /> Real Client Photo
                  </div>
                )}

                {/* Hover Expand Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/30 backdrop-blur-[2px]">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-[#854D0E] flex items-center justify-center text-[#854D0E] shadow-xl transform group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Card Meta Content with Fixed Title Alignment */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow bg-white">
                <div className="mb-4">
                  <div className="min-h-[3.25rem] flex items-center">
                    <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-950 group-hover:text-[#854D0E] transition-colors leading-snug line-clamp-2">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="pt-3.5 border-t border-slate-200 mt-auto flex items-center justify-between gap-2">
                  <span className="text-xs text-slate-700 font-extrabold truncate max-w-[65%] flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5 text-[#854D0E] shrink-0" />
                    {project.location}
                  </span>
                  
                  <span className="px-3 py-1.5 rounded-lg bg-amber-100/80 border border-amber-300 text-xs font-black text-[#854D0E] group-hover:bg-gradient-to-r group-hover:from-[#FDE047] group-hover:to-[#B48608] group-hover:text-slate-950 group-hover:border-transparent transition-all flex items-center gap-1 shadow-sm">
                    View <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeProjectIndex !== null && (
        <LightboxModal
          project={PROJECTS_GALLERY[activeProjectIndex]}
          projects={PROJECTS_GALLERY}
          onClose={() => setActiveProjectIndex(null)}
          onPrev={handlePrevLightbox}
          onNext={handleNextLightbox}
        />
      )}
    </section>
  );
}
