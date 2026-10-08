import React from 'react';
import { ArrowRight, MapPin, Mail, ArrowDown, Sparkles } from 'lucide-react';
import { GOOGLE_GROUP_URL, APP_METADATA } from '../config/constants.ts';
import { ProgressIndicator } from './ProgressIndicator.tsx';

interface AlphaStep1WelcomeProps {
  userEmail: string;
  onProceedToStep2: () => void;
}

export const AlphaStep1Welcome: React.FC<AlphaStep1WelcomeProps> = ({
  userEmail,
  onProceedToStep2,
}) => {
  const handleJoinEarlyRelease = () => {
    // Open Google Group in a new tab
    window.open(GOOGLE_GROUP_URL, '_blank', 'noopener,noreferrer');
    // Proceed to Step 2
    onProceedToStep2();
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto space-y-2.5">
      {/* Compact 3-Step Progress Indicator */}
      <ProgressIndicator currentStep={1} />

      {/* Main Landing Card - Compact & Screen-Fit */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-orange-100">
        {/* Top Location & Track Tag */}
        <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
          <div className="flex items-center gap-1 text-slate-700 font-medium">
            <MapPin className="w-3 h-3 text-orange-600 shrink-0" />
            <span>Sindhuli · सिन्धुली</span>
          </div>
          <span className="text-[10px] font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
            Early Release
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-xl sm:text-[22px] font-black text-slate-900 tracking-tight leading-tight">
          🎉 Welcome to Yatayat Sewa
        </h1>

        {/* Brief Intro */}
        <p className="mt-1 text-xs text-slate-600 leading-snug">
          Join early to experience local ride-sharing in Sindhuli.
        </p>

        {/* Clear 2-Step Workflow Box - Compact & High-Impact */}
        <div className="mt-2.5 p-2.5 bg-gradient-to-r from-orange-50/90 via-amber-50/90 to-orange-50/90 border border-orange-200 rounded-xl space-y-1.5 text-xs">
          <div className="flex items-start gap-2">
            <span className="w-4 h-4 rounded-full bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
              1
            </span>
            <p className="text-slate-800 font-medium leading-tight text-[11px]">
              Tap below & join using your{' '}
              <strong className="text-orange-900 underline font-bold">
                Play Store Gmail
              </strong>
            </p>
          </div>

          <div className="flex items-start gap-2 pt-0.5 border-t border-orange-100">
            <span className="w-4 h-4 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
              2
            </span>
            <p className="text-slate-900 font-bold leading-tight text-[11px]">
              <span className="text-orange-700 underline">Return back to this page</span>{' '}
              to download the app!
            </p>
          </div>
        </div>

        {/* Primary CTA Button - Prominently in view above the fold */}
        <div className="mt-3.5 space-y-1.5">
          <button
            type="button"
            onClick={handleJoinEarlyRelease}
            className="w-full min-h-[48px] px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-[0.99] text-white font-bold text-sm shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>🚀 Join Early Release Group</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-center text-[10px] text-slate-500 leading-tight">
            Google Groups opens in a new tab. Return here right after tapping "Join group".
          </p>
        </div>
      </div>

      {/* Discrete Brand & Holding Info */}
      <div className="px-3 py-1.5 bg-white/80 border border-orange-100/80 rounded-xl text-[10px] text-slate-500 flex items-center justify-between">
        <div>
          <span className="font-bold text-slate-700">Yatayat Sewa App</span>
          <span> · </span>
          <span className="text-orange-600 font-semibold">sindhulibazar.com</span>
        </div>
        <div className="text-slate-400">Nepal Leadership Technology</div>
      </div>
    </div>
  );
};
