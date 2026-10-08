import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  ArrowLeft,
  Copy,
  Check,
  ArrowRight,
  Mail,
  Sparkles,
  Lock,
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
  const [hasTappedJoin, setHasTappedJoin] = useState(false);
  const [showValidationPrompt, setShowValidationPrompt] = useState(false);

  // Detect when user returns from the Google Groups tab
  useEffect(() => {
    const handleFocus = () => {
      setReturnedFromTab(true);
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

  const handleContinueClick = () => {
    if (!hasTappedJoin) {
      setShowValidationPrompt(true);
      return;
    }
    onProceedToStep3();
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
            <span>Welcome back! Check the box below once you tap "Join group".</span>
          </div>
        )}

        {/* Heading */}
        <h2 className="text-xl sm:text-[22px] font-black text-slate-900 tracking-tight leading-tight">
          Join Yatayat Sewa Group
        </h2>

        {/* Gmail Requirement Notice */}
        <div className="mt-1.5 p-2 bg-amber-50/90 border border-amber-200/80 rounded-xl text-[11px] text-amber-950 flex items-center gap-2">
          <Mail className="w-3.5 h-3.5 text-amber-700 shrink-0" />
          <p className="leading-tight">
            Use the <strong>same Gmail</strong> logged into your Google Play Store.
          </p>
        </div>

        {/* Quick Instructions & Re-open Trigger */}
        <div className="mt-2.5 space-y-1.5 text-[11px] text-slate-800 font-medium">
          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
            <span>1. Open tester group in browser</span>
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
            <span>
              Tap the blue <strong>"Join group"</strong> button on Google
            </span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-xl bg-orange-50/80 border border-orange-200/70 text-orange-950 font-bold">
            <span className="w-4 h-4 rounded-full bg-orange-500 text-white font-bold text-[10px] flex items-center justify-center shrink-0">
              3
            </span>
            <span>Return here, check the box below & continue</span>
          </div>
        </div>

        {/* PROMINENT, BIGGER MANDATORY CHECKBOX */}
        <div
          onClick={() => {
            setHasTappedJoin(!hasTappedJoin);
            setShowValidationPrompt(false);
          }}
          className={`mt-3.5 p-3 rounded-2xl border-2 transition-all cursor-pointer select-none flex items-center gap-3.5 ${
            hasTappedJoin
              ? 'bg-orange-50/90 border-orange-500 shadow-xs'
              : showValidationPrompt
              ? 'bg-red-50/80 border-red-400 ring-2 ring-red-200 animate-shake'
              : 'bg-slate-50 border-slate-200 hover:border-orange-300'
          }`}
          role="checkbox"
          aria-checked={hasTappedJoin}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === ' ' || e.key === 'Enter') {
              e.preventDefault();
              setHasTappedJoin(!hasTappedJoin);
              setShowValidationPrompt(false);
            }
          }}
        >
          {/* Big Checkbox Node */}
          <div
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center shrink-0 transition-all ${
              hasTappedJoin
                ? 'bg-orange-500 text-white shadow-xs scale-105'
                : 'bg-white border-2 border-slate-300 text-transparent shadow-2xs'
            }`}
          >
            {hasTappedJoin ? (
              <Check className="w-5 h-5 stroke-[3.5]" />
            ) : null}
          </div>

          {/* Clear Label & Status */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <span
                className={`text-xs sm:text-[13px] font-bold leading-tight ${
                  hasTappedJoin ? 'text-orange-950' : 'text-slate-900'
                }`}
              >
                I have tapped "Join group"
              </span>
              <span
                className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full tracking-wider ${
                  hasTappedJoin
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-red-100 text-red-700 border border-red-300 animate-pulse'
                }`}
              >
                {hasTappedJoin ? '✓ Confirmed' : 'Required'}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
              Using my Google Play Store Gmail account
            </p>
          </div>
        </div>

        {/* Validation warning if tried to click without checking */}
        {showValidationPrompt && !hasTappedJoin && (
          <div className="mt-1.5 px-2 text-[11px] font-bold text-red-600 flex items-center gap-1">
            <span>⚠️ Please check the box above first to confirm you tapped "Join group".</span>
          </div>
        )}

        {/* Primary CTA Button - Enabled only when checkbox is checked */}
        <div className="mt-3.5 space-y-1.5">
          <button
            type="button"
            onClick={handleContinueClick}
            disabled={!hasTappedJoin}
            className={`w-full min-h-[48px] px-5 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
              hasTappedJoin
                ? 'bg-orange-500 hover:bg-orange-600 active:scale-[0.99] text-white shadow-md shadow-orange-500/25 cursor-pointer'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
            }`}
          >
            {!hasTappedJoin && <Lock className="w-4 h-4 text-slate-400" />}
            <span>I've Joined — Download App</span>
            <ArrowRight
              className={`w-4 h-4 ${
                hasTappedJoin ? 'text-white' : 'text-slate-400'
              }`}
            />
          </button>

          <p className="text-center text-[10px] text-slate-500">
            {hasTappedJoin
              ? '✓ Confirmed! Tap to continue to download.'
              : 'Check the box above to unlock the download button.'}
          </p>
        </div>
      </div>
    </div>
  );
};
