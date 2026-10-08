import React from 'react';
import { APP_METADATA } from '../config/constants.ts';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-orange-100/90 bg-white/70 py-5 px-4 text-xs text-slate-500">
      <div className="max-w-md mx-auto flex flex-col items-center justify-center gap-1.5 text-center">
        <div className="font-bold text-slate-800 text-[11px]">
          {APP_METADATA.name} · {APP_METADATA.edition}
        </div>
        <p className="text-[10px] text-slate-500">
          Powered by{' '}
          <a
            href={APP_METADATA.parentPlatformUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 font-semibold hover:underline"
          >
            {APP_METADATA.parentPlatform}
          </a>{' '}
          · {APP_METADATA.holdingCompany}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 text-slate-400 text-[10px] mt-0.5">
          <a
            href={APP_METADATA.parentPlatformUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-600 transition-colors"
          >
            sindhulibazar.com
          </a>
          <span>·</span>
          <a
            href={APP_METADATA.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-600 transition-colors"
          >
            Google Play App
          </a>
          <span>·</span>
          <span>© 2026 Sindhuli</span>
        </div>
      </div>
    </footer>
  );
};
