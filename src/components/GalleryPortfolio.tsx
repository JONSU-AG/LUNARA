import React, { useState } from 'react';
import { GALLERY_ITEMS, STUDIO_INFO } from '../data/studioData';
import { GalleryItem } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';

interface GalleryPortfolioProps {
  onSelectDesign: (item: GalleryItem) => void;
}

export const GalleryPortfolio: React.FC<GalleryPortfolioProps> = ({
  onSelectDesign,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos los Trabajos' },
    { id: 'francesa', label: 'Francesa Coquette & Lazos' },
    { id: 'poligel', label: 'Acrílico & Poligel' },
    { id: 'mano-alzada', label: 'Mano Alzada & 3D' },
    { id: 'encapsulado', label: 'Baby Boomer & Encapsulado' },
    { id: 'kapping', label: 'Kapping & Natural' },
    { id: 'rubber', label: 'Rubber Base' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleWhatsAppForDesign = (item: GalleryItem) => {
    const text = encodeURIComponent(
      `¡Hola Yanely! 🌸 Me encantó este modelo de uñas de tu catálogo: *${item.title}*. ¿Te puedo consultar para cotizarlo y ver disponibilidad? ✨`
    );
    window.open(`https://wa.me/${STUDIO_INFO.phoneClean}?text=${text}`, '_blank');
  };

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-[#fff9fa] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffd9df]/60 text-[#a23255] text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">photo_library</span>
            <span>Modelos de Inspiración</span>
          </div>
          
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#400012]">
            Modelos de Uñas & Referencias
          </h2>
          
          <p className="text-base sm:text-lg text-[#564145] leading-relaxed">
            Explora modelos de inspiración para tu próxima cita. Si tienes una foto de TikTok, Instagram o Pinterest, envíanosla por WhatsApp para cotizarla y recrearla a tu gusto.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[#a23255] text-white font-semibold shadow-md shadow-[#a23255]/20 scale-105'
                    : 'bg-white text-[#564145] hover:bg-[#ffeef2] border border-[#ffd9df]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#ffd9df]/70 shadow-sm hover:shadow-xl rose-shadow-md transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-[#ffd9df]/20 cursor-pointer" onClick={() => onSelectDesign(item)}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#400012]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-bold flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="material-symbols-outlined text-sm">visibility</span>
                    <span>Ver en grande</span>
                  </span>
                </div>

                {/* Badge Category */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-bold text-[#a23255] shadow-xs">
                  {item.categoryLabel}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1 justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-bold text-[#a23255] uppercase tracking-wider">
                      Modelo de referencia
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-lg font-bold text-[#400012] group-hover:text-[#a23255] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#564145] mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-[#fff0f3] text-[#861b40] px-2 py-0.5 rounded-md border border-[#ffd9df]/50"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-3 border-t border-[#ffd9df]/40 flex items-center gap-2">
                  <button
                    onClick={() => onSelectDesign(item)}
                    className="flex-1 py-2 px-2.5 bg-[#fff0f3] hover:bg-[#ffd9df] text-[#a23255] text-xs font-bold rounded-xl transition-colors text-center cursor-pointer"
                  >
                    Ver modelo
                  </button>
                  <button
                    onClick={() => handleWhatsAppForDesign(item)}
                    title="Consultar este modelo por WhatsApp"
                    className="py-2 px-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs active:scale-95 shrink-0 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    <span>Consultar</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TikTok & Social Callout - TikTok as Primary */}
        <div className="mt-16 bg-gradient-to-br from-[#1c1917] via-[#2a171c] to-[#1a050d] rounded-3xl p-8 sm:p-10 border border-[#ffd9df]/20 text-center max-w-3xl mx-auto shadow-xl text-white relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#e94e77]/20 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-[#00f2fe]/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-[#ffd9df] mb-4">
            <svg className="w-3.5 h-3.5 fill-current text-[#ffb1c1]" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003 15.28 6.34 6.34 0 009.34 21.6c3.5 0 6.34-2.84 6.34-6.34V8.71a8.21 8.21 0 004.81 1.54V6.8a4.81 4.81 0 01-.9-.11z" />
            </svg>
            <span>Nuestro Canal Principal de Videos</span>
          </div>

          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mb-2">
            ¿Quieres ver videos y el paso a paso de nuestros sets?
          </h3>
          <p className="text-sm text-[#ffd9df]/90 max-w-xl mx-auto mb-6">
            Síguenos en <strong className="text-white">TikTok ({STUDIO_INFO.tiktok})</strong> para descubrir transformaciones en vivo, técnicas de manicura rusa, tendencias y promociones exclusivas.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Primary TikTok Button */}
            <a
              href={STUDIO_INFO.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] hover:opacity-95 text-black font-bold rounded-full text-sm shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5 fill-black shrink-0" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003 15.28 6.34 6.34 0 009.34 21.6c3.5 0 6.34-2.84 6.34-6.34V8.71a8.21 8.21 0 004.81 1.54V6.8a4.81 4.81 0 01-.9-.11z" />
              </svg>
              <span>Ver TikTok de Lunara ({STUDIO_INFO.tiktok})</span>
              <span className="material-symbols-outlined text-base">open_in_new</span>
            </a>

            {/* Secondary Instagram Button */}
            <a
              href={STUDIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-semibold border border-white/20 transition-all hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current text-[#ffb1c1]" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
