import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Instagram, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/businessData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Wallpaper',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

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

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#B48608] tracking-widest uppercase block mb-3">
            CONTACT & LOCATION
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-base text-slate-600 mt-4 font-normal max-w-2xl mx-auto">
            Visit our Melapalayam store or send an inquiry for instant pricing and consultation.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#F5D77F] to-[#D4AF37] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Business Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white p-7 sm:p-9 rounded-3xl border border-slate-200 flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F5D77F] via-[#D4AF37] to-[#B48608] flex items-center justify-center font-display font-extrabold text-slate-950 text-xl shadow-gold-glow">
                  S
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-xs text-[#B48608] font-semibold">
                    {BUSINESS_INFO.brandSubtitle}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed mb-8 border-b border-slate-100 pb-6 font-normal">
                {BUSINESS_INFO.categories}
              </p>

              {/* Info Items */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-[#B48608] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Store Address
                    </h4>
                    <p className="text-sm text-slate-800 font-normal leading-relaxed">
                      {BUSINESS_INFO.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-[#B48608] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Phone Numbers
                    </h4>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-sm font-bold text-[#B48608] hover:underline block"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <a
                      href={`tel:${BUSINESS_INFO.secondaryPhone}`}
                      className="text-xs text-slate-600 hover:underline block mt-0.5"
                    >
                      {BUSINESS_INFO.secondaryPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-[#B48608] shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Instagram Page
                    </h4>
                    <a
                      href={BUSINESS_INFO.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#B48608] hover:underline font-bold"
                    >
                      @sun_mats_works
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-[#B48608] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Working Hours
                    </h4>
                    <p className="text-sm text-slate-800 font-normal">
                      Monday – Saturday: 9:00 AM – 9:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <div className="p-4 rounded-xl bg-slate-50 border border-[#D4AF37]/30 flex items-center justify-between">
                <span className="text-xs text-slate-600 font-medium">Google Rating</span>
                <span className="text-xs font-bold text-amber-600">★ 4.9 / 5.0 (19 Reviews)</span>
              </div>
            </div>

          </motion.div>

          {/* Right Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-[#D4AF37]/40 shadow-xl relative"
          >
            <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">
              Request a Free Quote
            </h3>
            <p className="text-xs text-slate-500 font-normal mb-8">
              Fill out the form below and our team will get back to you with custom estimates.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-50 border border-emerald-300 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
                <h4 className="font-display font-bold text-2xl text-slate-900 mb-2">
                  Opening WhatsApp...
                </h4>
                <p className="text-sm text-slate-600 font-normal mb-6">
                  Your quote details have been pre-filled. If WhatsApp didn't open automatically, click the button below to send your request.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(`*New Quote Request - SUN Mats Works*\n\n👤 *Name:* ${formData.name.trim()}\n📞 *Phone:* ${formData.phone.trim()}\n🛠️ *Service:* ${formData.service}\n📝 *Details:* ${formData.message.trim() || 'N/A'}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
                  >
                    <span>Send on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', service: 'Wallpaper', message: '' });
                    }}
                    className="px-6 py-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-[#B48608] hover:border-[#D4AF37]"
                  >
                    Fill Form Again
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-300 text-red-600 text-xs flex items-center gap-2 font-medium">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-base sm:text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 90000 00000"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-base sm:text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-base sm:text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                  >
                    <option value="Wallpaper">Wallpaper Installation</option>
                    <option value="Car Mats">Custom Car Mats (7D/9D)</option>
                    <option value="Floor Mats">Commercial & Home Floor Mats</option>
                    <option value="Carpet">Plush & Mosque Carpet</option>
                    <option value="Artificial Grass">Artificial Grass Turf</option>
                    <option value="Interior Solutions">Interior Surface Solutions / Flooring</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Project Details / Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your room size, car model, or installation preferences..."
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-base sm:text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B48608] text-slate-950 font-display font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-gold-glow hover:shadow-gold-glow-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Request a Quote</span>
                </button>
              </form>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
}
