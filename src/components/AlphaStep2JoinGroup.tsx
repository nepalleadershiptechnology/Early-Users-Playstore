import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  ArrowLeft,
  Copy,
  Check,
  ArrowRight,
  Mail,
  Sparkles,
} from 'lucide-react';
import { GOOGLE_GROUP_URL, GOOGLE_GROUP_EMAIL } from '../config/constants.ts';
import { ProgressIndicator } from './ProgressIndicator.tsx';

interface AlphaStep2JoinGroupProps {
  onBack: () => void;
  onProceedToStep3: () => void;
}

export const AlphaStep2JoinGroup: React.FC<AlphaStep2JoinGroupProps> = ({
  onBack,
  onProceedToStep3,
}) => {
  const [copied, setCopied] = useState(false);
  const [returnedFromTab, setReturnedFromTab] = useState(false);
  const [checklist, setChecklist] = useState({
    opened: true,
    joined: false,
    returned: true,
  });

  // Detect when user returns from the Google Groups tab
  useEffect(() => {
    const handleFocus = () => {
      setReturnedFromTab(true);
      setChecklist((prev) => ({ ...prev, returned: true }));
    };
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  const handleOpenGroupAgain = () => {
    window.open(GOOGLE_GROUP_URL, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(GOOGLE_GROUP_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleCheck = (key: 'opened' | 'joined' | 'returned') => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto space-y-2.5">
      {/* Compact 3-Step Progress Indicator */}
      <ProgressIndicator currentStep={2} />

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
            Step 2 of 3
          </span>
        </div>

        {/* Dynamic Welcome Back Banner if returned from tab */}
        {returnedFromTab && (
          <div className="mb-2 p-2 bg-emerald-50 border border-emerald-200/80 rounded-xl flex items-center gap-2 text-[11px] text-emerald-900 font-semibold animate-in fade-in">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Welcome back! Joined the group? Tap continue below.</span>
          </div>
        )}

        {/* Heading */}
        <h2 className="text-xl sm:text-[22px] font-black text-slate-900 tracking-tight leading-tight">
          Join Yatayat Sewa Group
        </h2>

        {/* Gmail Reminder */}
        <div className="mt-1.5 p-2 bg-amber-50/90 border border-amber-200/80 rounded-xl text-[11px] text-amber-950 flex items-center gap-2">
          <Mail className="w-3.5 h-3.5 text-amber-700 shrink-0" />
          <p className="leading-tight">
            Use the <strong>same Gmail</strong> logged into your Google Play Store.
          </p>
        </div>

        {/* 3 Quick Action Points */}
        <div className="mt-2.5 space-y-1.5 text-[11px] text-slate-800 font-medium">
          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
            <span>1. Open group in browser tab</span>
            <button
              type="button"
              onClick={handleOpenGroupAgain}
              className="text-[10px] font-bold text-orange-600 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-md flex items-center gap-1 cursor-pointer"
            >
              <span>Re-open</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </button>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
            <span className="w-4 h-4 rounded-full bg-slate-900 text-white font-bold text-[10px] flex items-center justify-center shrink-0">
              2
            </span>
            <span>Tap the blue <strong>"Join group"</strong> button</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-xl bg-orange-50/80 border border-orange-200/70 text-orange-950 font-bold">
            <span className="w-4 h-4 rounded-full bg-orange-500 text-white font-bold text-[10px] flex items-center justify-center shrink-0">
              3
            </span>
            <span>Return to this page & continue below</span>
          </div>
        </div>

        {/* Quick Check Confirmation */}
        <div className="mt-2.5 p-2 bg-slate-50/80 rounded-xl border border-slate-100">
          <button
            type="button"
            onClick={() => toggleCheck('joined')}
            className="w-full flex items-center gap-2 text-left cursor-pointer select-none"
          >
            <div
              className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                checklist.joined
                  ? 'bg-orange-500 text-white'
                  : 'border border-slate-300 text-transparent'
              }`}
            >
              {checklist.joined ? '✓' : ''}
            </div>
            <span className="text-[11px] text-slate-700 font-medium">
              I tapped "Join group" with my Play Store Gmail
            </span>
          </button>
        </div>

        {/* Primary CTA Button */}
        <div className="mt-3.5 space-y-1.5">
          <button
            type="button"
            onClick={onProceedToStep3}
            className="w-full min-h-[48px] px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 active:scale-[0.99] text-white font-bold text-sm shadow-md shadow-slate-900/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>I've Joined — Download App</span>
            <ArrowRight className="w-4 h-4 text-orange-400" />
          </button>

          <p className="text-center text-[10px] text-slate-500">
            Next: Download Yatayat Sewa App directly from Google Play.
          </p>
        </div>
      </div>
    </div>
  );
};
