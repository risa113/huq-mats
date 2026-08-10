import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, ShieldCheck, Tag } from 'lucide-react';
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
    <section id="projects" className="py-24 bg-[#080808] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#C9A45C] tracking-widest uppercase block mb-3">
            PORTFOLIO & WORK SHOWCASE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Our Recent Work
          </h2>
          <p className="text-base sm:text-lg text-gray-400 mt-4 font-light">
            Explore our work across wallpapers, mats, carpets and interior surfaces in Tirunelveli.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#E6C982] to-[#C9A45C] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => {
            const isActive = activeFilter.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                onClick={() => handleFilterClick(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#E6C982] via-[#C9A45C] to-[#9A7B39] text-black shadow-gold-glow scale-105'
                    : 'bg-[#171717] border border-[#262626] text-gray-300 hover:border-[#C9A45C]/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid: Desktop 3 cols, Tablet 2 cols, Mobile 1 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              onClick={() => handleOpenLightbox(project)}
              className="group relative bg-[#171717] rounded-2xl overflow-hidden border border-[#262626] hover:border-[#C9A45C]/60 hover:shadow-gold-glow cursor-pointer transition-all duration-500 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-56 sm:h-72 overflow-hidden bg-black">
                <img
                  src={getImageUrl(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                {/* Real Photo Tag */}
                {project.isClientPhoto && (
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-[#080808]/90 border border-[#C9A45C]/40 text-[10px] font-bold text-[#E6C982] tracking-wider uppercase flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#C9A45C]" /> Real Photo
                  </div>
                )}

                {/* Hover Expand Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#080808]/80 border border-[#C9A45C] flex items-center justify-center text-[#E6C982] shadow-gold-glow transform group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold text-[#C9A45C] uppercase tracking-wider flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {project.category}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white group-hover:text-[#E6C982] transition-colors leading-snug">
                    {project.title}
                  </h3>
                </div>

                <div className="pt-4 border-t border-[#262626] mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-light">
                    {project.location}
                  </span>
                  <span className="text-xs font-semibold text-[#E6C982] group-hover:underline">
                    View Project →
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
