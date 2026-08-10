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
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#C9A45C]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black text-[#854D0E] tracking-widest uppercase block mb-3">
            ABOUT SUN MATS WORKS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Built on Quality.<br />
            <span className="gold-text-gradient">Driven by Detail.</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FDE047] via-[#EAB308] to-[#B48608] mx-auto mt-4 rounded-full"></div>
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
            <div className="relative rounded-2xl overflow-hidden border border-[#C9A45C]/40 shadow-xl group">
              <img
                src={getImageUrl('./images/client_wallpaper_rolls.png')}
                alt="SUN Mats Works Wallpaper & Material Inventory Showcase"
                className="w-full h-[280px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80"></div>
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-white border border-slate-300 backdrop-blur-md shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FDE047] via-[#EAB308] to-[#B48608] flex items-center justify-center text-slate-950 font-black font-display text-xl shadow-md">
                    S
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-slate-950 text-base">
                      Authentic Showroom Selection
                    </h4>
                    <p className="text-xs text-slate-700 font-medium">
                      Engineers Colony, Nethaji Rd, Melapalayam, Tirunelveli
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Gold Corner Frame Accent */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 border-r-2 border-b-2 border-[#854D0E] rounded-br-2xl pointer-events-none hidden sm:block"></div>
          </motion.div>

          {/* Right Column: Text & Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 text-xs font-black text-[#854D0E] tracking-wider uppercase mb-3">
              <Shield className="w-4 h-4 text-[#854D0E]" />
              <span>Trusted Local Surface Specialists</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 mb-6 leading-snug">
              Melapalayam's Premier Destination for Premium Wallpapers, Custom Car Mats & Floor Fitting
            </h3>

            <p className="text-base text-slate-700 leading-relaxed mb-4 font-medium">
              <strong className="text-slate-950 font-extrabold">SUN Mats Works</strong> is a trusted interior surface and mat solutions business based in Melapalayam, Tirunelveli. We specialize in premium wallpapers, car mats, floor mats, carpets, artificial grass and stylish interior surface solutions.
            </p>

            <p className="text-base text-slate-700 leading-relaxed mb-8 font-medium">
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
                  className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-300 hover:border-[#854D0E] transition-colors shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#854D0E] shrink-0" />
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900">
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
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FDE047] via-[#EAB308] to-[#B48608] text-slate-950 font-display font-black text-xs tracking-wider uppercase flex items-center gap-2 shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300"
              >
                <span>Discover Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-2 text-xs text-slate-700 font-bold">
                <MapPin className="w-4 h-4 text-[#854D0E]" />
                <span>Visit Store in Melapalayam</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
