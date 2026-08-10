import React from 'react';
import { MapPin, Navigation, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function MapSection() {
  const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.location)}`;

  return (
    <section id="map" className="py-20 bg-slate-100/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black text-[#854D0E] tracking-widest uppercase block mb-3">
            INTERACTIVE LOCATION MAP
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Find SUN Mats Works in Melapalayam
          </h2>
          <p className="text-sm sm:text-base text-slate-700 mt-2 font-semibold">
            Located near Engineers Colony & Nethaji Road, Melapalayam, Tirunelveli.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FDE047] via-[#EAB308] to-[#B48608] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Map Container */}
        <div className="rounded-3xl overflow-hidden border border-slate-300 shadow-2xl bg-white relative">
          
          {/* Header Bar overlay */}
          <div className="p-4 sm:p-6 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-100 border border-amber-300 text-[#854D0E]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-slate-950 text-base">
                  SUN Mats Works Showroom
                </h3>
                <p className="text-xs text-slate-700 font-semibold">
                  Engineers Colony, Melapalayam, Tirunelveli, Tamil Nadu 627005
                </p>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FDE047] via-[#EAB308] to-[#B48608] text-slate-950 font-display font-black text-xs tracking-wider uppercase flex items-center gap-2 shadow-gold-glow hover:shadow-gold-glow-lg transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-900 hover:border-[#D4AF37] flex items-center gap-2 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#B48608]" />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-50 border border-emerald-300 text-xs font-bold text-emerald-700 hover:bg-emerald-100 flex items-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="h-[400px] w-full bg-slate-100 relative">
            <iframe
              title="SUN Mats Works Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.8344607759885!2d77.7289!3d8.7032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411a0c8b209b5%3A0x6b4a3a30283c79a0!2sMelapalayam%2C%20Tirunelveli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
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
