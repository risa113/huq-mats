import React, { useState } from 'react';
import { Phone, MapPin, Instagram, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

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
    <footer className="bg-[#050505] text-gray-400 pt-16 pb-12 border-t border-[#1F1F1F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1A1A1A]">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#C9A45C] flex items-center justify-center font-display font-extrabold text-black text-lg">
                S
              </div>
              <span className="font-display font-bold text-lg text-white tracking-wider">
                SUN <span className="text-[#C9A45C]">MATS WORKS</span>
              </span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed mb-6 font-light">
              Premium mats, wallpapers and interior surface solutions in Melapalayam, Tirunelveli. Trusted local craftsmanship, high durability, and professional fitting.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#111111] border border-[#262626] text-[#C9A45C] hover:text-white hover:border-[#C9A45C] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="p-2.5 rounded-full bg-[#111111] border border-[#262626] text-[#C9A45C] hover:text-white hover:border-[#C9A45C] transition-colors"
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
                    className="hover:text-[#E6C982] transition-colors"
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
                <li key={service} className="hover:text-[#E6C982] transition-colors">
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
                <MapPin className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  MPR9+P2W, Nethaji Rd, Engineers Colony, Raja Nagar, Melapalayam, Tirunelveli 627005
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C9A45C] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:underline text-white">
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

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-gray-500">
            © 2026 SUN Mats Works. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-gray-500">
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setModalType('terms')}
              className="hover:text-gray-300 transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>

      {/* Policy Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#171717] border border-[#C9A45C]/40 p-6 rounded-2xl max-w-lg w-full text-left">
            <h3 className="font-display font-bold text-lg text-white mb-2 capitalize">
              {modalType === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed mb-6 font-light">
              {modalType === 'privacy'
                ? 'At SUN Mats Works, we respect your privacy. All customer contact information collected through our website is strictly used for quote processing and direct communication regarding interior flooring and wallpaper services in Tirunelveli.'
                : 'All services, product pricing, and installation terms offered by SUN Mats Works are subject to site measurement and material availability. Estimates provided online are valid for 30 days.'}
            </p>
            <button
              onClick={() => setModalType(null)}
              className="px-5 py-2 rounded-xl bg-[#C9A45C] text-black font-bold text-xs uppercase"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </footer>
  );
}
