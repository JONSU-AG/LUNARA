import React, { useState, useEffect } from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const text = encodeURIComponent(
      `¡Hola Yanely! 🌸 Quiero agendar una cita en Lunara Estudio de Uñas. ¿Tienes horarios disponibles?`
    );
    window.open(`https://wa.me/${STUDIO_INFO.phoneClean}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {showTooltip && (
        <div className="bg-[#400012] text-white text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-[#ffb1c1] animate-bounce duration-1000 flex items-center gap-2 max-w-[210px] relative">
          <span className="text-sm">💅</span>
          <span>¿Lista para tus uñas? ¡Agenda tu cita aquí!</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-white/70 hover:text-white ml-1 text-xs"
          >
            ✕
          </button>
        </div>
      )}

      <button
        onClick={handleClick}
        id="floating-whatsapp-btn"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl shadow-emerald-600/40 hover:scale-110 active:scale-95 transition-all group relative border-2 border-white focus:outline-none"
        aria-label="Abrir WhatsApp para agendar cita"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#e94e77] rounded-full border-2 border-white animate-pulse"></span>
        <WhatsAppIcon className="w-8 h-8 sm:w-9 sm:h-9 fill-current" />
      </button>
    </div>
  );
};
