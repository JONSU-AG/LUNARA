import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesPricing } from './components/ServicesPricing';
import { BookingSection } from './components/BookingSection';
import { TikTokShowcase } from './components/TikTokShowcase';
import { LocationAndContact } from './components/LocationAndContact';
import { GalleryPortfolio } from './components/GalleryPortfolio';
import { Footer } from './components/Footer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { DesignDetailModal } from './components/DesignDetailModal';
import { WhatsAppIcon } from './components/WhatsAppIcon';
import { STUDIO_INFO } from './data/studioData';
import { GalleryItem } from './types';

export function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);

  // Scroll listener to update active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'agendar', 'ubicacion', 'servicios', 'galeria'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBookingWithService = (serviceId?: string) => {
    if (serviceId) {
      setPreselectedServiceId(serviceId);
    }
    scrollToSection('agendar');
  };

  const handleSelectDesignFromModal = (category?: string) => {
    if (category === 'francesa' || category === 'gel') {
      setPreselectedServiceId('esmalte-gel');
    } else if (category === 'poligel') {
      setPreselectedServiceId('acrilico-set-nuevo');
    } else if (category === 'kapping') {
      setPreselectedServiceId('kapping-natural');
    } else if (category === 'rubber') {
      setPreselectedServiceId('rubber-base');
    }
    scrollToSection('agendar');
  };

  return (
    <div className="min-h-screen bg-[#fff9fa] text-[#2b181e] selection:bg-[#ffb3c6] selection:text-[#5e1227] flex flex-col font-sans">
      {/* Top Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenBooking={handleOpenBookingWithService}
      />

      {/* Main Content Flow: Hero -> Booking -> Location -> Services -> Gallery -> FAQs */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenBooking={handleOpenBookingWithService}
          onExploreServices={() => scrollToSection('servicios')}
          onExploreGallery={() => scrollToSection('galeria')}
          onExploreLocation={() => scrollToSection('ubicacion')}
        />

        {/* 2. Unified Booking & Appointment Process Section */}
        <BookingSection
          initialServiceId={preselectedServiceId}
          onClearInitialService={() => setPreselectedServiceId(undefined)}
        />

        {/* 3. TikTok Videos & Process Showcase */}
        <TikTokShowcase />

        {/* 4. Location, Google Maps & Pointer Graphic (Av. Estados Unidos 118) */}
        <LocationAndContact />

        {/* 5. Services & Pricing Section */}
        <ServicesPricing
          onSelectServiceForBooking={(serviceId) => handleOpenBookingWithService(serviceId)}
        />

        {/* 6. Gallery & Portfolio Section */}
        <GalleryPortfolio
          onSelectDesign={(item) => setSelectedGalleryItem(item)}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsAppButton />

      {/* Lightbox / Design Detail Modal */}
      <DesignDetailModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
        onSelectForBooking={handleSelectDesignFromModal}
      />
    </div>
  );
}

export default App;
