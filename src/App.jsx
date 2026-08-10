import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import FeaturedProject from './components/FeaturedProject';
import Reviews from './components/Reviews';
import CTA from './components/CTA';
import Contact from './components/Contact';
import MapSection from './components/MapSection';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState('All');

  const handleOpenQuote = () => {
    setQuoteModalOpen(true);
  };

  const handleSelectServiceCategory = (serviceTitle) => {
    // Map service title to gallery category
    const titleMap = {
      'CAR MATS': 'Car Mats',
      'FLOOR MATS': 'Floor Mats',
      'WALLPAPER': 'Wallpaper',
      'CARPET': 'Carpet',
      'ARTIFICIAL GRASS': 'Artificial Grass',
      'INTERIOR SURFACE SOLUTIONS': 'Interior Flooring'
    };
    setSelectedGalleryCategory(titleMap[serviceTitle] || 'All');
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col selection:bg-[#C9A45C] selection:text-black">
      {/* Sticky Global Navigation */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Hero Section */}
      <Hero onOpenQuote={handleOpenQuote} />

      {/* Trust & Stats Bar */}
      <TrustBar />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services
        onSelectServiceCategory={handleSelectServiceCategory}
        onOpenQuote={handleOpenQuote}
      />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Projects Gallery */}
      <Gallery
        selectedCategory={selectedGalleryCategory}
        onSelectCategory={setSelectedGalleryCategory}
      />

      {/* Featured Project */}
      <FeaturedProject />

      {/* Customer Reviews */}
      <Reviews />

      {/* Call to Action Banner */}
      <CTA onOpenQuote={handleOpenQuote} />

      {/* Contact Form Section */}
      <Contact />

      {/* Google Maps Section */}
      <MapSection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Quote Pop-up Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}
