import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ShieldCheck, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-nav-solid py-3 shadow-2xl' : 'glass-nav py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="h-11 sm:h-13 flex items-center justify-center p-1 rounded-xl bg-white border border-amber-400/60 shadow-md group-hover:scale-105 transition-transform duration-300">
              <img
                src={getImageUrl('./images/sun_mats_logo.jpg')}
                alt="SUN Mats Works Official Logo"
                className="h-9 sm:h-11 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-base sm:text-lg tracking-wider text-slate-950 group-hover:text-[#854D0E] transition-colors">
                SUN <span className="text-[#854D0E] font-bold">MATS WORKS</span>
              </span>
              <span className="text-[10px] text-slate-600 tracking-widest uppercase font-extrabold">
                Tirunelveli • Melapalayam
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100 border border-slate-300/80 px-4 py-1.5 rounded-full shadow-inner">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-1.5 text-sm transition-all duration-300 rounded-full ${
                    isActive
                      ? 'text-[#854D0E] font-extrabold bg-white shadow-sm'
                      : 'text-slate-700 hover:text-slate-950 font-semibold'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#854D0E] rounded-full shadow-[0_0_8px_#854D0E]"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-[#854D0E] transition-colors px-3.5 py-2 bg-white border border-slate-300 rounded-full hover:border-[#854D0E]/50 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#854D0E]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FDE047] via-[#EAB308] to-[#B48608] text-slate-950 font-display font-extrabold text-xs tracking-wider uppercase shadow-gold-glow hover:shadow-gold-glow-lg hover:scale-105 transition-all duration-300"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2.5">
            <button
              onClick={onOpenQuote}
              className="px-3.5 py-1.5 bg-gradient-to-r from-[#FDE047] to-[#EAB308] text-slate-950 text-xs font-black uppercase rounded-full tracking-wider hover:scale-105 transition-all shadow-gold-glow"
            >
              Quote
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-slate-300 text-slate-900 hover:text-[#854D0E] focus:outline-none shadow-sm"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-300 py-6 px-6 shadow-2xl backdrop-blur-2xl animate-fadeIn">
          <div className="flex flex-col gap-4">
            <div className="pb-3 border-b border-slate-200 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">
                Navigation
              </span>
              <span className="flex items-center gap-1 text-[11px] text-[#854D0E] font-bold">
                <ShieldCheck className="w-3.5 h-3.5" /> 4.9★ Rated Local Shop
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between text-base font-bold text-slate-900 hover:text-[#854D0E] py-2 border-b border-slate-100"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#854D0E]" />
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 bg-gradient-to-r from-[#FDE047] via-[#EAB308] to-[#B48608] text-slate-950 font-display font-extrabold text-sm tracking-wider uppercase rounded-xl shadow-gold-glow"
              >
                Get a Free Quote
              </button>

              <div className="flex items-center justify-between pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center gap-2 text-xs text-slate-800 font-bold hover:text-[#854D0E]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#854D0E]" /> {BUSINESS_INFO.phone}
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-emerald-700 font-extrabold hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Us
                </a>
              </div>

              {/* Developer Credit in Mobile Drawer */}
              <div className="mt-2 text-center text-[11px] font-bold text-slate-700 pt-2 border-t border-slate-200">
                Built by <span className="text-[#854D0E] font-black">TM Digital Marketing</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
