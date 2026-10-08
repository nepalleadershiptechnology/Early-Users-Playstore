import React, { useState } from 'react';
import { ExternalLink, RotateCcw, Copy, Check, Clock } from 'lucide-react';
import { GOOGLE_PLAY_STORE_APP_URL } from '../config/constants.ts';
import { ProgressIndicator } from './ProgressIndicator.tsx';

interface AlphaFinalSuccessProps {
  onBackToStart: () => void;
  onOpenHelpModal?: () => void;
}

export const AlphaFinalSuccess: React.FC<AlphaFinalSuccessProps> = ({
  onBackToStart,
  onOpenHelpModal,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleOpenGooglePlay = () => {
    window.open(GOOGLE_PLAY_STORE_APP_URL, '_blank', 'noopener,noreferrer');
  };

  const handleCopyPlayLink = () => {
    navigator.clipboard.writeText(GOOGLE_PLAY_STORE_APP_URL);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto space-y-2.5">
      {/* Compact 3-Step Progress Indicator (Completed) */}
      <ProgressIndicator currentStep={4} />

      {/* Main Success Card - Compact & Screen-Fit */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-orange-100 text-center">
        {/* Celebration Badge */}
        <div className="w-12 h-12 mx-auto rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-2xl shadow-2xs">
          <span>🎉</span>
        </div>

        {/* Headline */}
        <h1 className="mt-2.5 text-xl sm:text-[22px] font-black text-slate-900 tracking-tight leading-tight">
          🎉 Welcome to Yatayat Sewa!
        </h1>

        {/* Subtitle */}
        <p className="mt-1 text-xs text-slate-600 font-medium">
          Thank you for joining the early release.
        </p>

        {/* Ready Statement */}
        <p className="mt-0.5 text-xs text-orange-600 font-bold">
          You're ready to explore the Passenger App. 🚗🏍️
        </p>

        {/* Action Buttons */}
        <div className="mt-3.5 space-y-2">
          <button
            type="button"
            onClick={handleOpenGooglePlay}
            className="w-full min-h-[48px] px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-[0.99] text-white font-bold text-sm shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>📱 Open on Google Play</span>
            <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
          </button>

          <button
            type="button"
            onClick={onBackToStart}
            className="w-full min-h-[42px] px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
            <span>Back to Start</span>
          </button>
        </div>

        {/* Sync Delay Tip */}
        <div className="mt-3 p-2 bg-amber-50/80 border border-amber-200/70 rounded-xl text-[10px] text-amber-900 text-left flex items-start gap-1.5 leading-tight">
          <Clock className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
          <p>
            If Google Play takes a moment to recognize your account, wait 1–2 minutes
            and reopen the link.
          </p>
        </div>

        {/* Secondary Links */}
        <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <button
            type="button"
            onClick={handleCopyPlayLink}
            className="hover:text-slate-800 flex items-center gap-1 transition-colors cursor-pointer"
          >
            {copiedLink ? (
              <>
                <Check className="w-3 h-3 text-orange-600" />
                <span className="text-orange-600 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy Link</span>
              </>
            )}
          </button>

          {onOpenHelpModal && (
            <button
              type="button"
              onClick={onOpenHelpModal}
              className="hover:text-slate-800 transition-colors cursor-pointer"
            >
              Need Help?
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
