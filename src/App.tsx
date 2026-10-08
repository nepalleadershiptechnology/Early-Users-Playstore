/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { AlphaStep1Welcome } from './components/AlphaStep1Welcome.tsx';
import { AlphaStep2JoinGroup } from './components/AlphaStep2JoinGroup.tsx';
import { AlphaStep3InstallApp } from './components/AlphaStep3InstallApp.tsx';
import { AlphaFinalSuccess } from './components/AlphaFinalSuccess.tsx';
import { HelpFaqModal } from './components/HelpFaqModal.tsx';
import { StepId } from './components/ProgressIndicator.tsx';
import { RotateCcw } from 'lucide-react';

export default function App() {
  const [currentStep, setCurrentStep] = useState<StepId>(1);
  const [userEmail] = useState<string>('nepalleadershiptechnology@gmail.com');
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isMobileFrame, setIsMobileFrame] = useState(false);

  const handleProceedToStep2 = () => setCurrentStep(2);
  const handleProceedToStep3 = () => setCurrentStep(3);
  const handleProceedToSuccess = () => setCurrentStep(4);
  const handleBackToStart = () => setCurrentStep(1);

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-slate-900 flex flex-col font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Header */}
      <Header
        onOpenHelp={() => setIsHelpOpen(true)}
        isMobileFrame={isMobileFrame}
        onToggleFrame={() => setIsMobileFrame(!isMobileFrame)}
      />

      {/* Main Content Area - Optimized for In-Screen Presence */}
      <main className="flex-1 flex flex-col items-center justify-start py-3 px-3 sm:px-4">
        {isMobileFrame ? (
          /* Mobile Device Frame for Desktop Preview */
          <div className="w-full max-w-[380px] bg-slate-950 rounded-[44px] p-2.5 shadow-2xl border-4 border-slate-800 ring-1 ring-slate-900 my-1">
            {/* Android Status Bar */}
            <div className="h-5 flex items-center justify-between px-5 text-[10px] text-slate-400 select-none">
              <span className="font-semibold text-white">10:45</span>
              <div className="flex items-center gap-1">
                <span>5G</span>
                <span>88%</span>
              </div>
            </div>

            {/* Inner Phone Screen Content */}
            <div className="bg-[#FFFDF9] rounded-[34px] p-3.5 min-h-[520px] max-h-[640px] overflow-y-auto">
              {currentStep === 1 && (
                <AlphaStep1Welcome
                  userEmail={userEmail}
                  onProceedToStep2={handleProceedToStep2}
                />
              )}
              {currentStep === 2 && (
                <AlphaStep2JoinGroup
                  onBack={() => setCurrentStep(1)}
                  onProceedToStep3={handleProceedToStep3}
                />
              )}
              {currentStep === 3 && (
                <AlphaStep3InstallApp
                  onBack={() => setCurrentStep(2)}
                  onProceedToSuccess={handleProceedToSuccess}
                />
              )}
              {currentStep === 4 && (
                <AlphaFinalSuccess
                  onBackToStart={handleBackToStart}
                  onOpenHelpModal={() => setIsHelpOpen(true)}
                />
              )}
            </div>

            {/* Android Navigation Pill Bar */}
            <div className="w-20 h-1 bg-slate-600 rounded-full mx-auto mt-1.5" />
          </div>
        ) : (
          /* Responsive Mobile Screen - Perfectly Fits in Viewport */
          <div className="w-full max-w-sm sm:max-w-md mx-auto">
            {currentStep === 1 && (
              <AlphaStep1Welcome
                userEmail={userEmail}
                onProceedToStep2={handleProceedToStep2}
              />
            )}
            {currentStep === 2 && (
              <AlphaStep2JoinGroup
                onBack={() => setCurrentStep(1)}
                onProceedToStep3={handleProceedToStep3}
              />
            )}
            {currentStep === 3 && (
              <AlphaStep3InstallApp
                onBack={() => setCurrentStep(2)}
                onProceedToSuccess={handleProceedToSuccess}
              />
            )}
            {currentStep === 4 && (
              <AlphaFinalSuccess
                onBackToStart={handleBackToStart}
                onOpenHelpModal={() => setIsHelpOpen(true)}
              />
            )}
          </div>
        )}

        {/* Discreet Quick Step Selector for Testing */}
        <div className="mt-3 flex items-center justify-center gap-1 text-[10px] text-slate-500 bg-white border border-orange-100/90 rounded-full px-2.5 py-0.5 shadow-2xs">
          <span className="text-slate-400">Step:</span>
          <button
            type="button"
            onClick={() => setCurrentStep(1)}
            className={`px-1.5 py-0.2 rounded-full transition-colors cursor-pointer ${
              currentStep === 1
                ? 'bg-orange-500 text-white font-bold'
                : 'hover:text-slate-900'
            }`}
          >
            1
          </button>
          <button
            type="button"
            onClick={() => setCurrentStep(2)}
            className={`px-1.5 py-0.2 rounded-full transition-colors cursor-pointer ${
              currentStep === 2
                ? 'bg-orange-500 text-white font-bold'
                : 'hover:text-slate-900'
            }`}
          >
            2
          </button>
          <button
            type="button"
            onClick={() => setCurrentStep(3)}
            className={`px-1.5 py-0.2 rounded-full transition-colors cursor-pointer ${
              currentStep === 3
                ? 'bg-orange-500 text-white font-bold'
                : 'hover:text-slate-900'
            }`}
          >
            3
          </button>
          <button
            type="button"
            onClick={() => setCurrentStep(4)}
            className={`px-1.5 py-0.2 rounded-full transition-colors cursor-pointer ${
              currentStep === 4
                ? 'bg-orange-500 text-white font-bold'
                : 'hover:text-slate-900'
            }`}
          >
            Done
          </button>
          <span className="text-slate-200">|</span>
          <button
            type="button"
            onClick={handleBackToStart}
            className="flex items-center gap-0.5 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
            title="Reset"
          >
            <RotateCcw className="w-2.5 h-2.5" />
            <span>Reset</span>
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Help & FAQ Modal */}
      <HelpFaqModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />
    </div>
  );
}
