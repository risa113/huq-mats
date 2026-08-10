import React from 'react';
import { MapPin, Navigation, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function MapSection() {
  const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.location)}`;

  return (
    <section className="py-20 bg-[#080808] relative border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-[#111111] border border-[#C9A45C]/30 overflow-hidden shadow-2xl">
          
          {/* Header Bar above map */}
          <div className="p-6 sm:p-8 bg-[#171717] border-b border-[#262626] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#C9A45C] uppercase tracking-wider mb-1">
                <MapPin className="w-4 h-4 text-[#C9A45C]" /> FIND US IN TIRUNELVELI
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                SUN Mats Works Showroom
              </h3>
              <p className="text-xs text-gray-400 font-light mt-1">
                Engineers Colony, Raja Nagar, Melapalayam, Tirunelveli
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E6C982] via-[#C9A45C] to-[#9A7B39] text-black font-display font-bold text-xs tracking-wider uppercase flex items-center gap-2 shadow-gold-glow hover:scale-105 transition-all"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-4 py-2.5 rounded-xl bg-[#080808] border border-[#262626] text-xs font-semibold text-white hover:border-[#C9A45C] flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-xs font-semibold text-emerald-400 hover:bg-emerald-900/70 flex items-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="h-[400px] w-full bg-[#171717] relative">
            <iframe
              title="SUN Mats Works Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.8344607759885!2d77.7289!3d8.7032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411a0c8b209b5%3A0x6b4a3a30283c79a0!2sMelapalayam%2C%20Tirunelveli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2) opacity(0.95)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
