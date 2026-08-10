import React, { useState } from 'react';
import { Phone, MapPin, Instagram, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO, getImageUrl } from '../data/businessData';

export default function Footer() {
  const [modalType, setModalType] = useState(null); // 'privacy' | 'terms'

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="p-1.5 rounded-2xl bg-white border border-amber-300 shadow-md">
                <img
                  src={getImageUrl('./images/sun_mats_logo.jpg')}
                  alt="SUN Mats Works Official Logo"
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xl text-white tracking-wider">
                  SUN <span className="text-[#FDE047]">MATS WORKS</span>
                </span>
                <span className="text-[10px] text-amber-400 font-extrabold tracking-widest uppercase">
                  WALLPAPER • CAR MAT • FLOOR MAT
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mb-6 font-normal">
              Premium mats, wallpapers and interior surface solutions in Melapalayam, Tirunelveli. Trusted local craftsmanship, high durability, and professional fitting.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-800 border border-slate-700 text-[#FDE047] hover:text-white hover:border-[#EAB308] transition-colors shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="p-2.5 rounded-full bg-slate-800 border border-slate-700 text-[#FDE047] hover:text-white hover:border-[#EAB308] transition-colors shadow-sm"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, `#${item.toLowerCase()}`)}
                    className="hover:text-[#FDE047] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest mb-4">
              Our Products
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                'Car Mats (7D/9D)',
                'Floor Mats & Rubber Rolls',
                'Wallpaper & 3D Wall Finishing',
                'Plush & Mosque Carpets',
                'Artificial Grass & Turf',
                'Interior Surface Solutions'
              ].map((service) => (
                <li key={service} className="hover:text-[#FDE047] transition-colors">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary Column */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest mb-4">
              Visit Showroom
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FDE047] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-300">
                  MPR9+P2W, Nethaji Rd, Engineers Colony, Raja Nagar, Melapalayam, Tirunelveli 627005
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FDE047] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:underline text-white font-medium">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-1.5 text-amber-400 font-semibold pt-1">
                <ShieldCheck className="w-4 h-4" />
                <span>4.9★ Google Business Rating</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Developer Credit */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400 text-center md:text-left">
            © 2026 SUN Mats Works. All Rights Reserved.
          </p>

          {/* Prominent TM Digital Marketing Credit Badge */}
          <div className="px-4 py-2 rounded-full bg-slate-800/90 border border-amber-400/40 text-slate-300 font-semibold text-xs flex items-center gap-2 shadow-md hover:border-amber-400 transition-colors">
            <span>Website Built by</span>
            <span className="font-black text-[#FDE047] tracking-wide uppercase">
              TM Digital Marketing
            </span>
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setModalType('terms')}
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>

      {/* Policy Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white border border-slate-200 p-6 rounded-2xl max-w-lg w-full text-left shadow-2xl">
            <h3 className="font-display font-bold text-lg text-slate-900 mb-2 capitalize">
              {modalType === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
              {modalType === 'privacy'
                ? 'At SUN Mats Works, we respect your privacy. All customer contact information collected through our website is strictly used for quote processing and direct communication regarding interior flooring and wallpaper services in Tirunelveli.'
                : 'All services, product pricing, and installation terms offered by SUN Mats Works are subject to site measurement and material availability. Estimates provided online are valid for 30 days.'}
            </p>
            <button
              onClick={() => setModalType(null)}
              className="px-5 py-2 rounded-xl bg-[#D4AF37] text-slate-950 font-bold text-xs uppercase hover:bg-[#B48608] hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </footer>
  );
}
