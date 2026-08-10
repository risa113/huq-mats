import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Shield, Award, MapPin } from 'lucide-react';
import { BUSINESS_INFO, getImageUrl } from '../data/businessData';

export default function About() {
  const highlights = [
    "Premium Quality Materials",
    "Professional Installation",
    "Stylish Designs",
    "Reliable Service",
    "Competitive Pricing",
    "Customer-Focused Support"
  ];

  const handleScrollToServices = (e) => {
    e.preventDefault();
    const el = document.getElementById('services');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#C9A45C]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#B48608] tracking-widest uppercase block mb-3">
            ABOUT SUN MATS WORKS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Built on Quality.<br />
            <span className="gold-text-gradient">Driven by Detail.</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#F5D77F] to-[#D4AF37] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#C9A45C]/30 shadow-xl group">
              <img
                src={getImageUrl('./images/client_wallpaper_rolls.png')}
                alt="SUN Mats Works Wallpaper & Material Inventory Showcase"
                className="w-full h-[280px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80"></div>
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-white/95 border border-slate-200 backdrop-blur-md shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#F5D77F] to-[#D4AF37] flex items-center justify-center text-slate-950 font-bold font-display text-xl shadow-md">
                    S
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-base">
                      Authentic Showroom Selection
                    </h4>
                    <p className="text-xs text-slate-600">
                      Engineers Colony, Nethaji Rd, Melapalayam, Tirunelveli
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Gold Corner Frame Accent */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 border-r-2 border-b-2 border-[#B48608] rounded-br-2xl pointer-events-none hidden sm:block"></div>
          </motion.div>

          {/* Right Column: Text & Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B48608] tracking-wider uppercase mb-3">
              <Shield className="w-4 h-4 text-[#B48608]" />
              <span>Trusted Local Surface Specialists</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-6 leading-snug">
              Melapalayam's Premier Destination for Premium Wallpapers, Custom Car Mats & Floor Fitting
            </h3>

            <p className="text-base text-slate-600 leading-relaxed mb-4 font-normal">
              <strong className="text-slate-900 font-semibold">SUN Mats Works</strong> is a trusted interior surface and mat solutions business based in Melapalayam, Tirunelveli. We specialize in premium wallpapers, car mats, floor mats, carpets, artificial grass and stylish interior surface solutions.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-8 font-normal">
              From selecting the right material to professional installation, our focus is on quality, finish, durability and customer satisfaction. Whether you are upgrading your vehicle interior or styling a residence or commercial space, we deliver flawless results.
            </p>

            {/* Checkmark Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-200 hover:border-[#D4AF37]/50 transition-colors shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#B48608] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Discover CTA Button */}
            <div className="flex items-center gap-4">
              <a
                href="#services"
                onClick={handleScrollToServices}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B48608] text-slate-950 font-display font-bold text-xs tracking-wider uppercase flex items-center gap-2 shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300"
              >
                <span>Discover Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <MapPin className="w-4 h-4 text-[#B48608]" />
                <span>Visit Store in Melapalayam</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
