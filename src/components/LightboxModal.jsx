import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin, Tag, ShieldCheck } from 'lucide-react';
import { getImageUrl } from '../data/businessData';

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
          className="absolute inset-0 bg-slate-950/85 backdrop-blur-2xl"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-5xl bg-white rounded-3xl border border-[#D4AF37]/40 shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[90vh]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-3 rounded-full bg-white/90 text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-[#D4AF37] transition-colors focus:outline-none shadow-md"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Column: Image Viewer */}
          <div className="relative lg:w-3/5 bg-slate-950 flex items-center justify-center min-h-[250px] lg:min-h-[500px]">
            <img
              src={getImageUrl(project.image)}
              alt={project.title}
              className="w-full h-full object-contain max-h-[60vh] lg:max-h-[70vh]"
            />

            {/* Previous Button */}
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 text-slate-800 hover:text-[#B48608] border border-slate-200 hover:border-[#D4AF37] transition-colors shadow-md"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 text-slate-800 hover:text-[#B48608] border border-slate-200 hover:border-[#D4AF37] transition-colors shadow-md"
              aria-label="Next Project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Client Badge if real photo */}
            {project.isClientPhoto && (
              <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-white/95 border border-[#D4AF37] text-[11px] font-bold text-[#B48608] tracking-wider uppercase flex items-center gap-1.5 shadow-md">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B48608]" /> Real Client Showroom Photo
              </div>
            )}
          </div>

          {/* Right Column: Details */}
          <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-white">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-xs font-bold text-[#B48608] tracking-wider uppercase flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" /> {project.category}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-slate-900 mb-4 leading-snug">
                {project.title}
              </h3>

              <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 pb-4 border-b border-slate-100">
                <MapPin className="w-4 h-4 text-[#B48608]" />
                <span>{project.location}</span>
              </div>

              <p className="text-sm text-slate-600 font-normal leading-relaxed mb-6">
                {project.details}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <a
                href={`https://wa.me/919087368191?text=${encodeURIComponent(`Hi SUN Mats Works, I am interested in this project: ${project.title} (${project.category}). Please provide pricing details.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B48608] text-slate-950 font-display font-bold text-xs tracking-wider uppercase text-center block shadow-gold-glow hover:shadow-gold-glow-lg transition-all"
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
