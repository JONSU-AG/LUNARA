import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { LunaraLogo } from './LunaraLogo';
import { WhatsAppIcon } from './WhatsAppIcon';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'agendar', label: 'Pide tu Cita' },
    { id: 'ubicacion', label: 'Ubicación & Mapa' },
    { id: 'servicios', label: 'Servicios & Precios' },
    { id: 'galeria', label: 'Galería' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const openWhatsAppDirect = () => {
    const message = encodeURIComponent(
      `¡Hola Yanely! 🌸 Deseo consultar disponibilidad para una cita en Lunara Estudio de Uñas.`
    );
    window.open(`https://wa.me/${STUDIO_INFO.phoneClean}?text=${message}`, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fff9fa]/95 backdrop-blur-md border-b border-[#ffd9df]/70 shadow-xs transition-all duration-300">
      {/* Top clean micro banner */}
      <div className="bg-gradient-to-r from-[#9e2748] via-[#bd3860] to-[#9e2748] text-white text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-[#86efac] animate-pulse"></span>
        <span>🗓️ Reserva con 2 días de anticipación por WhatsApp</span>
        <span className="hidden sm:inline opacity-60">•</span>
        <span className="hidden sm:inline">Av. Estados Unidos 118, JLByR</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo with Official Typographic Aesthetic */}
        <button
          onClick={() => handleLinkClick('inicio')}
          className="text-left group focus:outline-none transition-transform hover:scale-[1.02]"
          id="nav-brand-logo"
        >
          <LunaraLogo variant="full" size="md" textColor="#50071c" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6" id="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                id={`nav-link-${link.id}`}
                className={`text-sm font-medium transition-all relative py-1 focus:outline-none ${
                  isActive
                    ? 'text-[#a23255] font-bold'
                    : 'text-[#564145] hover:text-[#a23255]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#a23255] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Trailing Actions */}
        <div className="hidden sm:flex items-center gap-2">
          {/* TikTok Link */}
          <a
            href={STUDIO_INFO.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="TikTok @lunara_aqp (Videos y procesos)"
            className="h-9 px-3 rounded-full border border-[#ffd9df] flex items-center justify-center gap-1.5 text-black hover:bg-[#ffeef2] transition-colors focus:outline-none text-xs font-bold shadow-2xs"
            id="nav-tiktok-btn"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003 15.28 6.34 6.34 0 009.34 21.6c3.5 0 6.34-2.84 6.34-6.34V8.71a8.21 8.21 0 004.81 1.54V6.8a4.81 4.81 0 01-.9-.11z" />
            </svg>
            <span>TikTok</span>
          </a>

          {/* Instagram Link */}
          <a
            href={STUDIO_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram @lunara.estudiode.unas"
            className="h-9 px-3 rounded-full border border-[#ffd9df] flex items-center justify-center gap-1.5 text-[#a23255] hover:bg-[#ffeef2] transition-colors focus:outline-none text-xs font-bold shadow-2xs"
            id="nav-instagram-btn"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Instagram</span>
          </a>

          {/* WhatsApp Direct Link */}
          <a
            href={`https://wa.me/${STUDIO_INFO.phoneClean}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Escribir a WhatsApp"
            className="w-9 h-9 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 text-[#128C7E] flex items-center justify-center hover:bg-[#25D366]/20 transition-colors shadow-2xs"
            id="nav-whatsapp-link"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current text-[#25D366]" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={STUDIO_INFO.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black p-2 rounded-full border border-[#ffd9df] bg-white flex items-center justify-center"
            aria-label="TikTok"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003 15.28 6.34 6.34 0 009.34 21.6c3.5 0 6.34-2.84 6.34-6.34V8.71a8.21 8.21 0 004.81 1.54V6.8a4.81 4.81 0 01-.9-.11z" />
            </svg>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#631928] p-2 rounded-lg hover:bg-[#ffd9df]/30 transition-colors focus:outline-none"
            aria-label="Menú"
            id="mobile-menu-toggle-btn"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fff5f7] border-b border-[#ffd9df] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#a23255] text-white font-semibold shadow-sm'
                    : 'bg-white/80 text-[#564145] hover:bg-[#ffd9df]/40'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-[#ffd9df]/60 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#a23255] hover:bg-[#861b40] text-white py-3 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 shadow-sm"
            >
              <span className="material-symbols-outlined text-lg">calendar_month</span>
              <span>Pide tu Cita Directa</span>
            </button>
            <button
              onClick={openWhatsAppDirect}
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 shadow-sm"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>Escribir al WhatsApp (+51 917 019 032)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
