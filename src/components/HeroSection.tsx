import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeroSectionProps {
  onOpenBooking: (serviceId?: string) => void;
  onExploreServices: () => void;
  onExploreGallery: () => void;
  onExploreLocation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onExploreServices,
  onExploreGallery,
  onExploreLocation,
}) => {
  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `¡Hola Yanely! 🌸 Vi la página de Lunara y quiero consultar disponibilidad para una cita.`
    );
    window.open(`https://wa.me/${STUDIO_INFO.phoneClean}?text=${text}`, '_blank');
  };

  return (
    <section id="inicio" className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden pink-hero-gradient">
      {/* Decorative Organic Ambient Blobs */}
      <div className="absolute top-12 left-[-80px] w-96 h-96 bg-[#ffd9df]/50 rounded-full blur-3xl pointer-events-none organic-blob" />
      <div className="absolute bottom-10 right-[-100px] w-[460px] h-[460px] bg-[#fedad8]/60 rounded-full blur-3xl pointer-events-none organic-blob" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#fceeee]/70 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Story & Call to Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Studio Badge & Advance Booking Notice */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#ffd9df] text-[#a23255] text-xs sm:text-sm font-semibold shadow-2xs">
                <span className="material-symbols-outlined text-base text-[#a23255]">spa</span>
                <span>Estudio Profesional de Uñas</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#a23255]"></span>
                <span className="text-[#631928] font-bold">Yanely (~Yos)</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ffd9df] text-[#761e33] text-xs font-bold shadow-2xs border border-[#ffb1c1]">
                <span className="material-symbols-outlined text-sm text-[#a23255]">event_available</span>
                <span>Reserva con 2 días de anticipación</span>
              </div>
            </div>

            {/* Slogan & Main Headline */}
            <div className="space-y-2">
              <p className="font-script-accent text-3xl sm:text-4xl text-[#a23255] font-normal">
                {STUDIO_INFO.slogan}
              </p>
              <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold text-[#400012] leading-[1.15] tracking-tight">
                El arte y la elegancia que <span className="text-[#a23255] underline decoration-[#ffb1c1] decoration-wavy decoration-2">tus manos</span> merecen.
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#564145] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Especialistas en acrílicas sobre tip y esculpidas, kapping nivelador, rubber base, poligel y diseños artísticos a mano alzada. Cuidamos la salud de tus uñas con manicura rusa profesional y atención 100% personalizada.
            </p>

            {/* Notice Bar */}
            <div className="p-3.5 bg-white/90 rounded-2xl border border-[#ffd9df] shadow-2xs flex items-center justify-center lg:justify-start gap-2.5 text-xs text-[#564145] max-w-xl mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-[#a23255] shrink-0 animate-pulse"></span>
              <span>
                <strong>Nota Importante:</strong> Para asegurarte el mejor turno y espacio, <strong className="text-[#a23255]">agenda tu cita con 2 días de anticipación</strong>.
              </span>
            </div>

            {/* Specialties Badges Grid */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1">
              {[
                '⭐ Acrílicas sobre tip & esculpidas',
                '⭐ Kapping nivelador natural',
                '⭐ Esmaltado en gel duradero',
                '⭐ Rubber base elástica',
                '⭐ Poligel resistente',
                '🎨 Mano alzada artística',
              ].map((spec, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white/80 border border-[#fbdbe1] rounded-lg text-xs font-medium text-[#761e33] shadow-2xs"
                >
                  {spec}
                </span>
              ))}
            </div>

            {/* Quick Action Navigation Grid */}
            <div className="space-y-3 pt-2">
              {/* Primary Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <button
                  onClick={() => onOpenBooking()}
                  id="hero-agendar-cta-btn"
                  className="px-6 py-3.5 bg-[#a23255] hover:bg-[#861b40] text-white font-bold rounded-2xl shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 text-sm sm:text-base"
                >
                  <span className="material-symbols-outlined text-xl">calendar_month</span>
                  <span>Agendar Cita</span>
                </button>

                <button
                  onClick={onExploreServices}
                  id="hero-explore-services-btn"
                  className="px-5 py-3.5 bg-white hover:bg-[#fff0f3] text-[#a23255] border-2 border-[#a23255] font-bold rounded-2xl shadow-2xs flex items-center justify-center gap-2 transition-all text-sm sm:text-base"
                >
                  <span className="material-symbols-outlined text-xl">receipt_long</span>
                  <span>Servicios & Precios</span>
                </button>

                <button
                  onClick={onExploreLocation}
                  id="hero-explore-location-btn"
                  className="px-4 py-3.5 bg-white hover:bg-[#ffeef2] text-[#564145] hover:text-[#a23255] border border-[#ffd9df] font-semibold rounded-2xl shadow-2xs flex items-center justify-center gap-1.5 transition-all text-xs sm:text-sm"
                >
                  <span className="material-symbols-outlined text-lg text-[#a23255]">pin_drop</span>
                  <span>Ubicación & Mapa</span>
                </button>

                <button
                  onClick={onExploreGallery}
                  id="hero-explore-gallery-btn"
                  className="px-4 py-3.5 bg-white hover:bg-[#ffeef2] text-[#564145] hover:text-[#a23255] border border-[#ffd9df] font-semibold rounded-2xl shadow-2xs flex items-center justify-center gap-1.5 transition-all text-xs sm:text-sm"
                >
                  <span className="material-symbols-outlined text-lg text-[#a23255]">photo_library</span>
                  <span>Galería</span>
                </button>
              </div>

              {/* Direct Social Networks Row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <span className="text-xs font-bold text-[#705554] uppercase tracking-wider mr-1">
                  Redes:
                </span>

                <a
                  href={STUDIO_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-black hover:bg-zinc-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-transform active:scale-95"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003 15.28 6.34 6.34 0 009.34 21.6c3.5 0 6.34-2.84 6.34-6.34V8.71a8.21 8.21 0 004.81 1.54V6.8a4.81 4.81 0 01-.9-.11z" />
                  </svg>
                  <span>TikTok (Videos)</span>
                </a>

                <a
                  href={STUDIO_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#fff0f3] hover:bg-[#ffd9df] text-[#a23255] border border-[#ffb1c1] rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>

                <button
                  onClick={openWhatsApp}
                  className="px-3 py-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-transform active:scale-95"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Clean Trust Indicators */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#ffd9df]/80 max-w-lg mx-auto lg:mx-0">
              <div className="bg-white/80 p-3 rounded-2xl border border-[#ffd9df]/60 text-center">
                <span className="block text-sm sm:text-base font-bold text-[#a23255]">2 Días Antes</span>
                <span className="text-[11px] text-[#705554]">Reserva tu cita previa</span>
              </div>
              <div className="bg-white/80 p-3 rounded-2xl border border-[#ffd9df]/60 text-center">
                <span className="block text-sm sm:text-base font-bold text-[#a23255]">~2 Horas</span>
                <span className="text-[11px] text-[#705554]">Dedicación y detalle</span>
              </div>
              <div className="bg-white/80 p-3 rounded-2xl border border-[#ffd9df]/60 text-center">
                <span className="block text-sm sm:text-base font-bold text-[#a23255]">9am - 8pm</span>
                <span className="text-[11px] text-[#705554]">Lunes a Sábado</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Bento Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Featured Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl rose-shadow-lg border-4 border-white bg-white group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKmnUE-hrhygRyzg2V5fJAkFyZ--GJ3B1C8MJE6gdYllKKmvczzV69NdR-g1IHmjVQkuCe19bWVt2JKQX9IJECwETQJxJpTlt7sw1AgVL0YtKhujlYpdK_UDm6rtmJAsv1z93d4Z1_79B4EBFtfatUfSTnH9L4a6bojlwpXhvXqXLi68v1sfGFo_ba3UoT6Fb6sZRmqcekC1DYyYRt9G3dgc79UBSe4HXiMZUXUj7HS5FA51krc_eFbYkTozOaE6mAMg"
                  alt="Lunara Nail Art - Pink Girl con Lazo Dorado"
                  className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#3f0017]/90 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold">
                      💅 Tendencia Coquette & French
                    </span>
                    <a
                      href={STUDIO_INFO.tiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-black/60 hover:bg-black/80 backdrop-blur-md rounded-full text-[11px] font-bold text-[#25f4ee] border border-white/20 transition-transform active:scale-95"
                    >
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003 15.28 6.34 6.34 0 009.34 21.6c3.5 0 6.34-2.84 6.34-6.34V8.71a8.21 8.21 0 004.81 1.54V6.8a4.81 4.81 0 01-.9-.11z" />
                      </svg>
                      <span>TikTok @lunara_aqp</span>
                    </a>
                  </div>
                  
                  <h3 className="font-serif-luxury text-xl font-bold">Pink Girl & Lazo Dorado 3D</h3>
                  <p className="text-xs text-white/90 mt-1">Esmaltado en gel con técnica rusa de cutículas impecables.</p>
                  
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm font-bold text-[#ffd9df]">Desde S/ 35.00</span>
                    <button
                      onClick={() => onOpenBooking('esmalte-gel')}
                      className="px-3.5 py-1.5 bg-[#ffd9df] text-[#631928] text-xs font-bold rounded-full hover:bg-white transition-colors"
                    >
                      Pedir este estilo
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Mini Badge Left */}
              <div className="absolute -bottom-5 -left-5 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#ffd9df] shadow-lg hidden sm:flex items-center gap-3 max-w-[210px]">
                <div className="w-10 h-10 rounded-full bg-[#e94e77] text-white flex items-center justify-center font-bold shrink-0">
                  <span className="material-symbols-outlined text-xl">verified</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#400012]">100% Personalizado</p>
                  <p className="text-[11px] text-[#705554]">Citas exclusivas para tu comodidad</p>
                </div>
              </div>

              {/* Floating Mini Badge Right */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#a23255] to-[#c24b6d] text-white p-3 rounded-2xl shadow-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-lg text-yellow-300">location_on</span>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold tracking-wider opacity-80">Local en</p>
                  <p className="text-xs font-bold">Av. Estados Unidos 118, JLByR</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
