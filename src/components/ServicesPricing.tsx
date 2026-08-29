import React, { useState } from 'react';
import { SERVICES, STUDIO_INFO } from '../data/studioData';
import { ServiceCategory } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ServicesPricingProps {
  onSelectServiceForBooking?: (serviceId: string) => void;
}

export const ServicesPricing: React.FC<ServicesPricingProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'Todos los Servicios', icon: 'auto_awesome' },
    { id: 'acrilico-poligel', label: 'Acrílico & Poligel', icon: 'brush' },
    { id: 'rubber-gel', label: 'Rubber & Gel (Kapping)', icon: 'spa' },
    { id: 'extras', label: 'Extras & Diseños', icon: 'palette' },
  ];

  const getCategoryLabel = (category: ServiceCategory) => {
    switch (category) {
      case 'acrilico-poligel':
        return 'Acrílico / Poligel';
      case 'rubber-gel':
        return 'Rubber / Gel';
      case 'extras':
        return 'Extras & Diseños';
      default:
        return 'Servicio';
    }
  };

  return (
    <section id="servicios" className="py-14 lg:py-20 bg-[#fff9fa] relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffd9df]/60 text-[#a23255] text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">receipt_long</span>
            <span>Lista Oficial de Precios</span>
          </div>
          
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#400012]">
            Servicios & Tarifas
          </h2>
          
          <p className="text-sm sm:text-base text-[#564145] leading-relaxed">
            Precios transparentes y técnica profesional. Todos los sets incluyen <strong>manicura rusa higiénica</strong> para un acabado limpio y durabilidad de 3 a 4 semanas.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8" id="service-category-tabs">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as ServiceCategory)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-2xs ${
                  isActive
                    ? 'bg-[#a23255] text-white shadow-sm scale-105'
                    : 'bg-white text-[#564145] hover:bg-[#ffeef2] border border-[#ffd9df]'
                }`}
              >
                <span className="material-symbols-outlined text-base">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Sleek Linear Services List */}
        <div className="space-y-2.5" id="services-list-container">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 border border-[#ffd9df] hover:border-[#a23255]/40 shadow-2xs hover:shadow-xs transition-all duration-150 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
            >
              {/* Left Details: Name + Category badge + Description */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-[#400012] group-hover:text-[#a23255] transition-colors">
                    {service.name}
                  </h3>

                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#a23255] bg-[#ffd9df]/60 px-2 py-0.5 rounded-md">
                    {getCategoryLabel(service.category)}
                  </span>

                  {service.badge && (
                    <span className="bg-[#a23255] text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-2xs">
                      {service.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#564145] mt-0.5 line-clamp-1 sm:line-clamp-none">
                  {service.description}
                </p>
              </div>

              {/* Right Side: Clean Price Display */}
              <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#ffd9df]/50 shrink-0">
                <div className="text-left sm:text-right">
                  <span className="text-lg sm:text-xl font-black text-[#a23255] block leading-none">
                    {service.priceDisplay || `S/ ${service.price}.00`}
                  </span>
                  {service.priceNote && (
                    <span className="text-[10px] text-[#705554] block mt-0.5">{service.priceNote}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Design Consultation Strip */}
        <div className="mt-8 bg-gradient-to-r from-[#ffeef2] via-white to-[#ffeef2] rounded-2xl p-4 sm:p-5 border border-[#ffd9df] shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-0.5">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-white rounded-full text-[11px] font-semibold text-[#a23255] border border-[#ffd9df]">
              <span>🎨 ¿Tienes un diseño de referencia?</span>
            </div>
            <p className="font-serif-luxury text-base font-bold text-[#400012]">
              ¿Viste una foto en TikTok, Instagram o Pinterest?
            </p>
            <p className="text-xs text-[#564145]">
              Envíanosla por WhatsApp para cotizarte al instante sin ningún compromiso.
            </p>
          </div>

          <a
            href={`https://wa.me/${STUDIO_INFO.phoneClean}?text=${encodeURIComponent('¡Hola Yanely! 🌸 Quiero enviarte una foto de diseño que me gusta para consultar cotización.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#a23255] hover:bg-[#861b40] text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-2 shrink-0 transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current" />
            <span>Consultar con mi foto</span>
          </a>
        </div>

      </div>
    </section>
  );
};

