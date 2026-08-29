import React, { useState } from 'react';
import { FAQS, STUDIO_INFO } from '../data/studioData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ReviewsAndFaqs: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section id="preguntas" className="py-16 lg:py-24 bg-[#fff5f7] relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ffd9df] text-[#a23255] text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">help_outline</span>
            <span>Preguntas Frecuentes</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#400012]">
            Dudas Frecuentes
          </h2>
          <p className="text-sm text-[#564145]">
            Todo lo que necesitas saber antes de tu cita en Lunara.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#ffd9df] overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left font-serif-luxury text-sm sm:text-base font-bold text-[#400012] flex items-center justify-between hover:text-[#a23255] transition-colors focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <span
                    className="material-symbols-outlined text-xl text-[#a23255] transition-transform duration-200"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                  >
                    keyboard_arrow_down
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#564145] leading-relaxed border-t border-[#ffd9df]/40 bg-[#fffafb]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick WhatsApp Support Box */}
        <div className="mt-8 bg-white rounded-2xl p-5 sm:p-6 border-2 border-[#ffd9df] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-serif-luxury text-base font-bold text-[#400012]">
              ¿Tienes otra duda o deseas cotizar tu diseño?
            </h4>
            <p className="text-xs text-[#705554]">
              Escríbenos directamente y te ayudamos con mucho gusto sin compromiso.
            </p>
          </div>
          <a
            href={`https://wa.me/${STUDIO_INFO.phoneClean}?text=${encodeURIComponent('¡Hola Yanely! 🌸 Tengo una consulta sobre los servicios de uñas.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold rounded-xl flex items-center gap-2 shadow-md transition-all active:scale-95 shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current" />
            <span>Escribir al WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
