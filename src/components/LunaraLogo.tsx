import React from 'react';

interface LunaraLogoProps {
  variant?: 'full' | 'emblem' | 'square';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  textColor?: string;
  className?: string;
}

export const LunaraLogo: React.FC<LunaraLogoProps> = ({
  size = 'md',
  textColor = '#400012',
  className = '',
}) => {
  const isDarkBg = textColor === '#ffffff' || textColor === 'white';

  // Sizing definitions for purely typographic luxury logo
  const sizes = {
    sm: {
      title: 'text-xl tracking-[0.2em]',
      sub: 'text-[9px] tracking-[0.3em] mt-0.5',
      sparkle: 'text-[10px]',
    },
    md: {
      title: 'text-2xl sm:text-[26px] tracking-[0.22em]',
      sub: 'text-[10px] tracking-[0.32em] mt-1',
      sparkle: 'text-xs',
    },
    lg: {
      title: 'text-3xl sm:text-4xl tracking-[0.24em]',
      sub: 'text-xs tracking-[0.36em] mt-1.5',
      sparkle: 'text-sm',
    },
    xl: {
      title: 'text-4xl sm:text-5xl tracking-[0.26em]',
      sub: 'text-sm tracking-[0.4em] mt-2',
      sparkle: 'text-base',
    },
  };

  const current = sizes[size];

  return (
    <div className={`flex flex-col text-left justify-center select-none ${className}`}>
      {/* Brand Title (Wordmark) */}
      <div className="flex items-center gap-1.5 leading-none">
        <span
          className={`font-serif-luxury font-bold uppercase transition-colors ${current.title}`}
          style={{ color: textColor }}
        >
          LUNARA
        </span>
        <span className="text-[#f59e0b] leading-none" aria-hidden="true">
          ✦
        </span>
      </div>

      {/* Tagline / Subtitle */}
      <div className="flex items-center gap-2">
        <span
          className={`uppercase font-semibold transition-colors ${current.sub} ${
            isDarkBg ? 'text-[#ffd9df]' : 'text-[#a23255]'
          }`}
        >
          Estudio de Uñas
        </span>
      </div>
    </div>
  );
};
