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

      // Update active section based on scroll position
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
        isScrolled ? 'glass-nav-solid py-3 shadow-2xl' : 'glass-nav py-5'
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
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E6C982] via-[#C9A45C] to-[#9A7B39] flex items-center justify-center shadow-gold-glow group-hover:scale-105 transition-transform duration-300">
              <span className="font-display font-extrabold text-black text-xl tracking-tighter">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-wider text-white group-hover:text-[#E6C982] transition-colors">
                SUN <span className="text-[#C9A45C] font-normal">MATS WORKS</span>
              </span>
              <span className="text-[10px] text-gray-400 tracking-widest uppercase font-medium">
                Tirunelveli • Melapalayam
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#111111]/70 border border-[#262626] px-4 py-1.5 rounded-full">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-300 rounded-full ${
                    isActive
                      ? 'text-[#E6C982]'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#C9A45C] rounded-full shadow-[0_0_8px_#C9A45C]"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-[#E6C982] transition-colors px-3 py-2 border border-[#262626] rounded-full hover:border-[#C9A45C]/40"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#E6C982] via-[#C9A45C] to-[#9A7B39] rounded-full"></span>
              <span className="relative block px-5 py-2.5 bg-[#080808] group-hover:bg-transparent transition-colors duration-300 rounded-full font-display font-semibold text-xs text-[#E6C982] group-hover:text-black tracking-wider uppercase">
                Get a Free Quote
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="px-3 py-1.5 bg-[#C9A45C] text-black text-xs font-bold uppercase rounded-full tracking-wider hover:bg-[#E6C982] transition-colors"
            >
              Quote
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-[#171717] border border-[#262626] text-gray-300 hover:text-[#E6C982] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0E0E0E] border-b border-[#262626] py-6 px-6 shadow-2xl backdrop-blur-2xl animate-fadeIn">
          <div className="flex flex-col gap-4">
            <div className="pb-3 border-b border-[#262626] flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                Navigation
              </span>
              <span className="flex items-center gap-1 text-[11px] text-[#C9A45C]">
                <ShieldCheck className="w-3.5 h-3.5" /> 4.9★ Rated Local Business
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between text-base font-medium text-gray-200 hover:text-[#E6C982] py-2 border-b border-[#1A1A1A]"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#C9A45C]" />
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 bg-gradient-to-r from-[#E6C982] via-[#C9A45C] to-[#9A7B39] text-black font-display font-bold text-sm tracking-wider uppercase rounded-xl shadow-gold-glow"
              >
                Get a Free Quote
              </button>

              <div className="flex items-center justify-between pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center gap-2 text-xs text-gray-300 hover:text-[#E6C982]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C9A45C]" /> {BUSINESS_INFO.phone}
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
