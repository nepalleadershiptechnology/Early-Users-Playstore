import React from 'react';
import {
  ExternalLink,
  ArrowLeft,
  Download,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';
import {
  GOOGLE_PLAY_STORE_APP_URL,
  APP_METADATA,
} from '../config/constants.ts';
import { ProgressIndicator } from './ProgressIndicator.tsx';

interface AlphaStep3InstallAppProps {
  onBack: () => void;
  onProceedToSuccess: () => void;
}

export const AlphaStep3InstallApp: React.FC<AlphaStep3InstallAppProps> = ({
  onBack,
  onProceedToSuccess,
}) => {
  const handleInstallClick = () => {
    // Open Play Store link: https://play.google.com/store/apps/details?id=com.sindhulibazar.ride
    window.open(GOOGLE_PLAY_STORE_APP_URL, '_blank', 'noopener,noreferrer');
    // Proceed to final success screen
    onProceedToSuccess();
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto space-y-2.5">
      {/* Compact 3-Step Progress Indicator */}
      <ProgressIndicator currentStep={3} />

      {/* Main Card - Compact & Screen-Fit */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-orange-100">
        {/* Top Header */}
        <div className="flex items-center justify-between mb-2">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-slate-900 transition-colors py-0.5 px-1.5 -ml-1.5 rounded-lg cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>
          <span className="text-[10px] font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
            Step 3 of 3
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-xl sm:text-[22px] font-black text-slate-900 tracking-tight leading-tight">
          Download Yatayat Sewa App 🚀
        </h2>

        {/* Subtitle */}
        <p className="mt-1 text-xs text-slate-600 leading-snug">
          Continue to Google Play to download the early release app.
        </p>

        {/* Compact App Card */}
        <div className="mt-2.5 p-3.5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-xl shadow-xs border border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-white text-xl shadow-sm shrink-0">
              🚗
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold text-white truncate">
                Yatayat Sewa App
              </div>
              <div className="text-[11px] text-slate-300">
                by sindhulibazar.com · Sindhuli
              </div>
              <div className="text-[10px] text-orange-400 flex items-center gap-1 mt-0.5">
                <ShieldCheck className="w-3 h-3" />
                <span>Google Play Early Access</span>
              </div>
            </div>
          </div>
        </div>

        {/* Primary CTA Button */}
        <div className="mt-3.5 space-y-1.5">
          <button
            type="button"
            onClick={handleInstallClick}
            className="w-full min-h-[50px] px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-[0.99] text-white font-black text-sm shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download on Google Play</span>
            <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
          </button>

          <p className="text-center text-[10px] text-slate-500">
            Make sure you're using the same Gmail that joined the group.
          </p>
        </div>
      </div>
    </div>
  );
};
