import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const LocationAndContact: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(STUDIO_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 3000);
  };

  const openWhatsAppLocationHelp = () => {
    const text = encodeURIComponent(
      `¡Hola Yanely! 🌸 Estoy por el Óvalo Apacheta / Av. Estados Unidos y deseo consultar indicaciones para llegar a Lunara.`
    );
    window.open(`https://wa.me/${STUDIO_INFO.phoneClean}?text=${text}`, '_blank');
  };

  return (
    <section id="ubicacion" className="py-12 lg:py-16 bg-[#fff9fa] relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Single Unified Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ffd9df] shadow-md space-y-6">
          
          {/* Header Info */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#ffd9df]/70 pb-5">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffd9df]/60 text-[#a23255] text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm">location_on</span>
                <span>Ubicación en Arequipa</span>
              </div>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#400012]">
                ¿Dónde encontrarnos?
              </h2>
              <p className="text-sm text-[#564145]">
                <strong className="text-[#a23255]">Av. Estados Unidos 118</strong>, José Luis Bustamante y Rivero (a solo <strong>86 metros / 1 min a pie del Óvalo Apacheta</strong>).
              </p>
            </div>

            {/* Direct Map & Contact Actions */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 bg-[#a23255] hover:bg-[#861b40] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-xs transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-base">navigation</span>
                <span>Abrir Google Maps</span>
              </a>

              <button
                onClick={copyAddress}
                className="py-2.5 px-3.5 bg-[#fff0f3] hover:bg-[#ffd9df] text-[#a23255] text-xs font-bold rounded-xl border border-[#ffb1c1] flex items-center gap-1.5 transition-colors"
                title="Copiar dirección exacta"
              >
                <span className="material-symbols-outlined text-base">
                  {copiedAddress ? 'check' : 'content_copy'}
                </span>
                <span>{copiedAddress ? '¡Copiado!' : 'Copiar'}</span>
              </button>
            </div>
          </div>

          {/* Integrated Interactive Google Maps View with Pointer */}
          <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-[#ffd9df] shadow-inner bg-[#f8f9fa]">
            <iframe
              title="Mapa de Ubicación Lunara - Av. Estados Unidos 118"
              src="https://maps.google.com/maps?q=Av.+Estados+Unidos+118,+Jos%C3%A9+Luis+Bustamante+y+Rivero,+Arequipa&t=&z=17&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Floating Pointer Pill Badge */}
            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-[#ffd9df] shadow-md flex items-center gap-2.5 pointer-events-none max-w-[280px]">
              <div className="relative flex items-center justify-center shrink-0">
                <span className="w-3.5 h-3.5 rounded-full bg-[#dc2626] animate-ping absolute"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#dc2626] relative"></span>
              </div>
              <div>
                <span className="text-xs font-bold text-[#400012] block leading-tight">Lunara Estudio de Uñas</span>
                <span className="text-[11px] text-[#a23255] font-semibold block">Av. Estados Unidos N° 118</span>
                <span className="text-[10px] text-[#705554] block">86 m del Óvalo Apacheta</span>
              </div>
            </div>
          </div>

          {/* Bottom Quick Reference Bar (Hours, Walk Ref, WhatsApp Help) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
            <div className="p-3 bg-[#fff5f7] rounded-xl border border-[#ffd9df]/70 flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#a23255] text-lg shrink-0">directions_walk</span>
              <div className="text-xs">
                <span className="font-bold text-[#400012] block">Referencia a pie:</span>
                <span className="text-[#564145]">A 1-2 min del Óvalo Apacheta</span>
              </div>
            </div>

            <div className="p-3 bg-[#fff5f7] rounded-xl border border-[#ffd9df]/70 flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#a23255] text-lg shrink-0">schedule</span>
              <div className="text-xs">
                <span className="font-bold text-[#400012] block">Horario de Atención:</span>
                <span className="text-[#564145]">Lun a Sáb: 9:00 am - 8:00 pm (Cita previa)</span>
              </div>
            </div>

            <button
              onClick={openWhatsAppLocationHelp}
              className="p-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#128C7E] rounded-xl flex items-center justify-center gap-2 text-xs font-bold transition-colors text-center"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current text-[#25D366]" />
              <span>¿Ayuda para llegar? Escríbenos</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
