import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin, Tag, ShieldCheck } from 'lucide-react';

export default function LightboxModal({ project, projects, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrev, onNext]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
        
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#080808]/95 backdrop-blur-2xl"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-5xl bg-[#171717] rounded-3xl border border-[#C9A45C]/40 shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[90vh]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-3 rounded-full bg-[#080808]/80 text-gray-300 hover:text-white border border-[#262626] hover:border-[#C9A45C] transition-colors focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Column: Image Viewer */}
          <div className="relative lg:w-3/5 bg-black flex items-center justify-center min-h-[300px] lg:min-h-[500px]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain max-h-[70vh]"
            />

            {/* Previous Button */}
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#080808]/80 text-gray-200 hover:text-[#E6C982] border border-[#262626] hover:border-[#C9A45C] transition-colors"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#080808]/80 text-gray-200 hover:text-[#E6C982] border border-[#262626] hover:border-[#C9A45C] transition-colors"
              aria-label="Next Project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Client Badge if real photo */}
            {project.isClientPhoto && (
              <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-[#111111]/90 border border-[#C9A45C]/50 text-[11px] font-bold text-[#E6C982] tracking-wider uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C9A45C]" /> Real Client Showroom Photo
              </div>
            )}
          </div>

          {/* Right Column: Details */}
          <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-[#171717]">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#111111] border border-[#C9A45C]/30 text-xs font-bold text-[#C9A45C] tracking-wider uppercase flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" /> {project.category}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white mb-4 leading-snug">
                {project.title}
              </h3>

              <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 pb-4 border-b border-[#262626]">
                <MapPin className="w-4 h-4 text-[#C9A45C]" />
                <span>{project.location}</span>
              </div>

              <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                {project.details}
              </p>
            </div>

            <div className="pt-6 border-t border-[#262626]">
              <a
                href={`https://wa.me/919087368191?text=${encodeURIComponent(`Hi SUN Mats Works, I am interested in this project: ${project.title} (${project.category}). Please provide pricing details.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#E6C982] via-[#C9A45C] to-[#9A7B39] text-black font-display font-bold text-xs tracking-wider uppercase text-center block shadow-gold-glow hover:shadow-gold-glow-lg transition-all"
              >
                Inquire About This Project
              </a>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
