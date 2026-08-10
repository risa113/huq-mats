import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Award, CheckCircle2, ThumbsUp } from 'lucide-react';

export default function TrustBar() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [counts, setCounts] = useState({ rating: 0, reviews: 0, projects: 0 });

  useEffect(() => {
    if (isInView) {
      let ratingInterval = setInterval(() => {
        setCounts(prev => {
          if (prev.rating < 4.9) {
            const next = parseFloat((prev.rating + 0.1).toFixed(1));
            return { ...prev, rating: next > 4.9 ? 4.9 : next };
          }
          clearInterval(ratingInterval);
          return prev;
        });
      }, 40);

      let reviewsInterval = setInterval(() => {
        setCounts(prev => {
          if (prev.reviews < 19) {
            return { ...prev, reviews: prev.reviews + 1 };
          }
          clearInterval(reviewsInterval);
          return prev;
        });
      }, 50);

      let projectsInterval = setInterval(() => {
        setCounts(prev => {
          if (prev.projects < 100) {
            return { ...prev, projects: Math.min(100, prev.projects + 5) };
          }
          clearInterval(projectsInterval);
          return prev;
        });
      }, 30);

      return () => {
        clearInterval(ratingInterval);
        clearInterval(reviewsInterval);
        clearInterval(projectsInterval);
      };
    }
  }, [isInView]);

  const statItems = [
    {
      icon: Star,
      display: `${counts.rating.toFixed(1)}★`,
      label: "Google Rating",
      subtext: "Highest rated in Melapalayam"
    },
    {
      icon: ThumbsUp,
      display: `${counts.reviews}+`,
      label: "Customer Reviews",
      subtext: "100% Genuine local feedback"
    },
    {
      icon: Award,
      display: `${counts.projects}+`,
      label: "Projects / Installations",
      subtext: "Cars, homes & commercial spaces"
    },
    {
      icon: CheckCircle2,
      display: "Professional",
      label: "Installation Service",
      subtext: "Master craftspeople & clean finish"
    }
  ];

  return (
    <section ref={ref} className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-[#D4AF37]/40 shadow-xl backdrop-blur-xl">
        {statItems.map((item, index) => {
          const IconComp = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center sm:items-start text-center sm:text-left p-3 rounded-xl hover:bg-amber-50/50 transition-colors group"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-2 rounded-lg bg-amber-100/70 border border-amber-300 group-hover:border-amber-500 transition-colors">
                  <IconComp className="w-5 h-5 text-[#854D0E]" />
                </div>
                <span className="font-display font-black text-xl sm:text-3xl text-slate-950 group-hover:text-[#854D0E] transition-colors">
                  {item.display}
                </span>
              </div>
              <h3 className="text-sm font-extrabold text-slate-900 tracking-wide">
                {item.label}
              </h3>
              <p className="text-xs text-slate-600 font-medium mt-0.5">
                {item.subtext}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
