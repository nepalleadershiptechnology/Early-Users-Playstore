import React from 'react';
import { HelpCircle, Smartphone, Monitor, ExternalLink } from 'lucide-react';
import { BrandLogo } from './BrandLogo.tsx';

interface HeaderProps {
  onOpenHelp: () => void;
  isMobileFrame: boolean;
  onToggleFrame: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenHelp,
  isMobileFrame,
  onToggleFrame,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-orange-100/90 px-4 sm:px-6 py-2.5 transition-all">
      <div className="max-w-md sm:max-w-xl mx-auto flex items-center justify-between gap-3">
        {/* Brand Zone */}
        <a href="/" className="flex items-center gap-2 group select-none">
          <BrandLogo size="sm" showSubtitle={true} />
        </a>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Official sindhulibazar.com link */}
          <a
            href="https://sindhulibazar.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-bold text-orange-700 hover:text-orange-800 bg-orange-50 hover:bg-orange-100/80 rounded-xl transition-colors"
          >
            <span>sindhulibazar.com</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          {/* Mobile frame preview toggle (desktop only) */}
          <button
            type="button"
            onClick={onToggleFrame}
            className="hidden md:flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
          >
            {isMobileFrame ? (
              <>
                <Monitor className="w-3 h-3 text-slate-500" />
                <span>Full View</span>
              </>
            ) : (
              <>
                <Smartphone className="w-3 h-3 text-slate-500" />
                <span>Phone View</span>
              </>
            )}
          </button>

          {/* Help & Support Button */}
          <button
            type="button"
            onClick={onOpenHelp}
            className="px-2.5 py-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center gap-1 cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
            <span>Help</span>
          </button>
        </div>
      </div>
    </header>
  );
};
