import React from 'react';
import { STUDIO_INFO } from '../data/studioData';

export const TikTokShowcase: React.FC = () => {
  return (
    <section className="py-8 sm:py-10 bg-gradient-to-b from-[#fff5f7] via-white to-[#fff9fa] relative border-y border-[#ffd9df]/70 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Authentic TikTok Official Banner */}
        <div className="bg-[#121214] text-white rounded-3xl p-5 sm:p-7 shadow-lg flex flex-col md:flex-row items-center justify-between gap-5 border border-zinc-800">
          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            {/* TikTok Icon Badge */}
            <div className="w-14 h-14 rounded-2xl bg-black border-2 border-zinc-700 flex items-center justify-center text-[#25f4ee] shadow-md shrink-0 relative">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003 15.28 6.34 6.34 0 009.34 21.6c3.5 0 6.34-2.84 6.34-6.34V8.71a8.21 8.21 0 004.81 1.54V6.8a4.81 4.81 0 01-.9-.11z" />
              </svg>
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#fe2c55] rounded-full border-2 border-black animate-pulse"></span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#25f4ee]">
                  Canal Oficial de TikTok
                </span>
                <span className="text-[11px] bg-[#fe2c55]/20 text-[#fe2c55] border border-[#fe2c55]/30 px-2 py-0.5 rounded-full font-bold">
                  @lunara_aqp
                </span>
              </div>
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white">
                Mira nuestros videos reales y procesos en TikTok
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-xl">
                Visita nuestro perfil oficial para ver sets terminados, manicura rusa y tutoriales directamente en la app.
              </p>
            </div>
          </div>

          {/* Direct CTA to open TikTok */}
          <a
            href={STUDIO_INFO.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] text-black hover:opacity-95 font-black text-xs sm:text-sm rounded-xl shadow-md flex items-center gap-2 shrink-0 transition-transform hover:scale-105 active:scale-95"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003 15.28 6.34 6.34 0 009.34 21.6c3.5 0 6.34-2.84 6.34-6.34V8.71a8.21 8.21 0 004.81 1.54V6.8a4.81 4.81 0 01-.9-.11z" />
            </svg>
            <span>Ver @lunara_aqp en TikTok</span>
          </a>
        </div>

      </div>
    </section>
  );
};
