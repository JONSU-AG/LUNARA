import React from 'react';
import { GalleryItem } from '../types';
import { STUDIO_INFO } from '../data/studioData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface DesignDetailModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onSelectForBooking: (serviceCategory?: string) => void;
}

export const DesignDetailModal: React.FC<DesignDetailModalProps> = ({
  item,
  onClose,
  onSelectForBooking,
}) => {
  if (!item) return null;

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `¡Hola Yanely! 🌸 Me encantó este diseño: *${item.title}* de tu galería. ¿Tienes fecha disponible para realizarme este estilo? ✨`
    );
    window.open(`https://wa.me/${STUDIO_INFO.phoneClean}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full border border-[#ffd9df] shadow-2xl rose-shadow-lg relative animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-[#400012] hover:bg-[#ffd9df] flex items-center justify-center shadow-md transition-colors"
          aria-label="Cerrar"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Image Container */}
          <div className="relative h-72 sm:h-full bg-[#fdf2f4] overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#a23255]">
              {item.categoryLabel}
            </div>
          </div>

          {/* Details Column */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#a23255]">
                Lunara Estudio de Uñas
              </span>
              
              <h3 className="font-serif-luxury text-2xl font-bold text-[#400012]">
                {item.title}
              </h3>

              {item.priceEstimate && (
                <div className="inline-block px-3 py-1 bg-[#fff0f3] rounded-xl border border-[#ffd9df] text-sm font-bold text-[#a23255]">
                  Precio Estimado: {item.priceEstimate}
                </div>
              )}

              <p className="text-xs sm:text-sm text-[#564145] leading-relaxed">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] bg-[#fff5f7] text-[#761e33] px-2.5 py-1 rounded-lg border border-[#ffd9df]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2.5 pt-4 border-t border-[#ffd9df]">
              <button
                onClick={handleWhatsAppInquiry}
                className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-bold rounded-xl shadow-md flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                <span>Pedir este diseño por WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  onSelectForBooking(item.category);
                  onClose();
                }}
                className="w-full py-2.5 px-4 bg-[#fff0f3] hover:bg-[#ffd9df] text-[#a23255] text-xs font-bold rounded-xl transition-colors text-center"
              >
                Elegir este estilo
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
