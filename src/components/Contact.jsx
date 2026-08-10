import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Instagram, Clock, Send, CheckCircle2, AlertCircle, ShieldCheck, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Wallpaper',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide your name and phone number.');
      return;
    }

    const waMsg = `*New Quote Request - SUN Mats Works*\n\n` +
      `👤 *Name:* ${formData.name.trim()}\n` +
      `📞 *Phone:* ${formData.phone.trim()}\n` +
      `🛠️ *Service:* ${formData.service}\n` +
      `📝 *Details:* ${formData.message.trim() || 'N/A'}`;

    const waUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(waMsg)}`;
    window.open(waUrl, '_blank');
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black text-[#854D0E] tracking-widest uppercase block mb-3">
            VISIT OUR STORE OR CALL US
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Contact SUN Mats Works
          </h2>
          <p className="text-base sm:text-lg text-slate-700 mt-4 font-semibold max-w-2xl mx-auto">
            Get instant assistance, request custom quotes, or visit our showroom in Melapalayam.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FDE047] via-[#EAB308] to-[#B48608] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white p-7 sm:p-9 rounded-3xl border border-slate-300 flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FDE047] via-[#EAB308] to-[#B48608] flex items-center justify-center font-display font-black text-slate-950 text-xl shadow-gold-glow">
                  S
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-xl text-slate-950">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-xs text-[#854D0E] font-black">
                    {BUSINESS_INFO.brandSubtitle}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-700 font-semibold leading-relaxed mb-8 border-b border-slate-200 pb-6">
                {BUSINESS_INFO.categories}
              </p>

              {/* Info Items */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-100 border border-amber-300 text-[#854D0E] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1">
                      Showroom Address
                    </h4>
                    <p className="text-sm text-slate-800 font-bold leading-relaxed">
                      {BUSINESS_INFO.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-100 border border-amber-300 text-[#854D0E] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1">
                      Phone Numbers
                    </h4>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-sm font-black text-[#854D0E] hover:underline block"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <a
                      href={`tel:${BUSINESS_INFO.secondaryPhone}`}
                      className="text-xs font-bold text-slate-800 hover:underline block mt-0.5"
                    >
                      {BUSINESS_INFO.secondaryPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-100 border border-amber-300 text-[#854D0E] shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1">
                      Instagram Page
                    </h4>
                    <a
                      href={BUSINESS_INFO.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#854D0E] hover:underline font-black"
                    >
                      @sun_mats_works
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-100 border border-amber-300 text-[#854D0E] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1">
                      Working Hours
                    </h4>
                    <p className="text-sm text-slate-900 font-extrabold">
                      Monday – Saturday: 9:00 AM – 9:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Link Box */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-100 border border-emerald-400 text-emerald-950 font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-emerald-200 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-700" />
                <span>Chat Direct on WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Quote Request Form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-slate-300 shadow-xl"
          >
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-[#854D0E]" />
              <span className="text-xs font-black text-[#854D0E] tracking-wider uppercase">
                INSTANT INQUIRY
              </span>
            </div>

            <h3 className="font-display font-extrabold text-2xl text-slate-950 mb-2">
              Request a Custom Quote
            </h3>
            
            <p className="text-xs text-slate-700 font-semibold mb-6">
              Fill out the details below and we will automatically open WhatsApp with your pre-filled inquiry.
            </p>

            {formSubmitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-700" />
                </div>
                <h4 className="font-display font-black text-xl text-slate-950 mb-2">
                  Inquiry Submitted!
                </h4>
                <p className="text-xs text-slate-700 font-semibold mb-6">
                  WhatsApp is opening with your details. If it didn't open, click below.
                </p>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(`*New Quote Request - SUN Mats Works*\n\n👤 *Name:* ${formData.name.trim()}\n📞 *Phone:* ${formData.phone.trim()}\n🛠️ *Service:* ${formData.service}\n📝 *Details:* ${formData.message.trim() || 'N/A'}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase shadow-md"
                >
                  Open WhatsApp Chat
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-300 text-red-700 text-xs flex items-center gap-2 font-bold">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-extrabold text-slate-800 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Mohamed Ismail"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-950 text-xs font-semibold focus:border-[#854D0E] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-extrabold text-slate-800 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 90873 68191"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-950 text-xs font-semibold focus:border-[#854D0E] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold text-slate-800 uppercase tracking-wider mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-950 text-xs font-semibold focus:border-[#854D0E] focus:outline-none"
                  >
                    <option value="Car Mats">Custom 7D/9D Car Mats</option>
                    <option value="Floor Mats">Heavy Duty Floor Mats</option>
                    <option value="Wallpaper">Wallpaper & Wall Design</option>
                    <option value="Carpet">Plush & Mosque Carpet</option>
                    <option value="Artificial Grass">Artificial Grass Turf</option>
                    <option value="Interior Solutions">Interior Surface Solutions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold text-slate-800 uppercase tracking-wider mb-1.5">
                    Project Details / Requirements
                  </label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Car model, room dimensions, or custom preferences..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-950 text-xs font-semibold focus:border-[#854D0E] focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FDE047] via-[#EAB308] to-[#B48608] text-slate-950 font-display font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-gold-glow hover:shadow-gold-glow-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Quote Request</span>
                </button>
              </form>
            )}

          </motion.div>

        </div>
      </div>
    </section>
  );
}
