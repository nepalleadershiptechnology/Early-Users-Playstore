import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const iconSizes = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Yatayat Sewa Mobility Icon */}
      <div
        className={`${iconSizes[size]} rounded-2xl bg-gradient-to-tr from-orange-600 via-amber-500 to-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-900/20 shrink-0 relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5.5 h-5.5 text-white relative z-10"
        >
          {/* Transit ride & road icon */}
          <path
            d="M6 22L12 11L18 20L23 13L27 22H6Z"
            fill="white"
            fillOpacity="0.25"
          />
          <path
            d="M8 24C12 18 16 11 24 8"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="24" cy="8" r="3.2" fill="#FDBA74" stroke="white" strokeWidth="1.5" />
          <circle cx="12" cy="18" r="1.8" fill="white" />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-black tracking-tight text-slate-900 ${textSizes[size]}`}
          >
            Yatayat Sewa
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 bg-orange-50 border border-orange-200 px-1.5 py-0.5 rounded-full">
            Early Release
          </span>
        </div>
        {showSubtitle && (
          <div className="flex items-center gap-1 text-[11px] font-medium text-slate-500 leading-none mt-0.5">
            <span>यातयात सेवा</span>
            <span className="text-slate-300">·</span>
            <span className="text-orange-600 font-semibold">sindhulibazar.com</span>
          </div>
        )}
      </div>
    </div>
  );
};
