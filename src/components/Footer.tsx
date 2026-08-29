import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { LunaraLogo } from './LunaraLogo';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#380111] text-white pt-16 pb-12 border-t border-[#861b40]/60 relative overflow-hidden">
      {/* Decorative ambient subtle glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#861b40]/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center">
              <LunaraLogo variant="full" size="md" textColor="#ffffff" />
            </div>

            <p className="font-script-accent text-xl text-[#ffd9df]">
              "{STUDIO_INFO.slogan}"
            </p>

            <p className="text-xs text-white/70 leading-relaxed">
              Atención personalizada por Yanely (~Yos). Cuidado minucioso de uñas naturales, acrílicas y esculpidas en Arequipa, Perú.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-base font-bold text-[#ffd9df] uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <button
                  onClick={() => onNavigate('inicio')}
                  className="hover:text-[#ffb1c1] transition-colors focus:outline-none"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('servicios')}
                  className="hover:text-[#ffb1c1] transition-colors focus:outline-none"
                >
                  Servicios & Precios
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('agendar')}
                  className="hover:text-[#ffb1c1] transition-colors focus:outline-none"
                >
                  Cómo Pedir Cita
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ubicacion')}
                  className="hover:text-[#ffb1c1] transition-colors focus:outline-none"
                >
                  Ubicación & Mapa
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('galeria')}
                  className="hover:text-[#ffb1c1] transition-colors focus:outline-none"
                >
                  Fotos & Trabajos
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Business Information */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-base font-bold text-[#ffd9df] uppercase tracking-wider">
              Estudio & Citas
            </h4>
            <div className="space-y-2 text-xs text-white/80">
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-sm text-[#ffb1c1] shrink-0 mt-0.5">location_on</span>
                <span>{STUDIO_INFO.address}</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-sm text-[#ffb1c1] shrink-0 mt-0.5">schedule</span>
                <span>Lun - Sáb: 9:00 a. m. – 8:00 p. m.</span>
              </p>
              <p className="flex items-start gap-2">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <span>WhatsApp: {STUDIO_INFO.phoneFormatted}</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-sm text-[#ffb1c1] shrink-0 mt-0.5">verified</span>
                <span>Atención previa cita (2h de dedicación)</span>
              </p>
            </div>
          </div>

          {/* Col 4: Socials & WhatsApp direct */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-base font-bold text-[#ffd9df] uppercase tracking-wider">
              Redes & Contacto
            </h4>
            <div className="space-y-2">
              {/* TikTok (Principal) */}
              <a
                href={STUDIO_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3.5 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-xs text-white transition-colors border border-white/10 font-medium"
              >
                <svg className="w-4 h-4 fill-current text-[#25f4ee]" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003 15.28 6.34 6.34 0 009.34 21.6c3.5 0 6.34-2.84 6.34-6.34V8.71a8.21 8.21 0 004.81 1.54V6.8a4.81 4.81 0 01-.9-.11z" />
                </svg>
                <div className="flex flex-col text-left leading-tight">
                  <span className="font-bold text-white">TikTok: {STUDIO_INFO.tiktok}</span>
                  <span className="text-[10px] text-[#ffd9df]">Canal de Videos & Procesos</span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3.5 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-xs text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current text-[#ffb1c1]" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram: {STUDIO_INFO.instagram}</span>
              </a>

              {/* Chat direct button */}
              <a
                href={`https://wa.me/${STUDIO_INFO.phoneClean}?text=${encodeURIComponent('¡Hola Yanely! 🌸 Quiero agendar mi cita en Lunara.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl text-xs font-bold transition-all shadow-md active:scale-95 mt-1"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Chat Directo de WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Lunara Estudio de Uñas. Todos los derechos reservados. Arequipa, Perú.</p>
          <p className="flex items-center gap-1">
            <span>Hecho con amor y pasión por el arte en uñas</span>
            <span className="text-[#e94e77]">💖</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
