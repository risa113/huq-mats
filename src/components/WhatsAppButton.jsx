import React from 'react';
import { MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SUN Mats Works on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 p-3.5 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_10px_25px_rgba(16,185,129,0.4)] hover:shadow-[0_15px_35px_rgba(16,185,129,0.6)] hover:scale-105 transition-all duration-300 focus:outline-none"
    >
      <div className="relative">
        <MessageSquare className="w-6 h-6 fill-white text-emerald-600" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full"></span>
      </div>

      <span className="hidden sm:inline font-display font-semibold text-xs tracking-wider uppercase">
        WhatsApp Us
      </span>
    </a>
  );
}
