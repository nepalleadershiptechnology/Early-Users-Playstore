import React from 'react';
import { Check } from 'lucide-react';

export type StepId = 1 | 2 | 3 | 4;

interface ProgressIndicatorProps {
  currentStep: StepId;
  onStepClick?: (step: StepId) => void;
  className?: string;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
  onStepClick,
  className = '',
}) => {
  const steps = [
    { id: 1 as StepId, label: 'Account' },
    { id: 2 as StepId, label: 'Join Group' },
    { id: 3 as StepId, label: 'Download App' },
  ];

  return (
    <div className={`w-full ${className}`} aria-label="Progress">
      {/* Compact Native Stepper */}
      <div className="bg-white/95 border border-orange-100 rounded-xl px-3 py-1.5 shadow-2xs">
        <div className="flex items-center justify-between relative px-1">
          {/* Connecting Line */}
          <div className="absolute left-5 right-5 top-3 h-0.5 bg-slate-100 -z-0" />
          <div
            className="absolute left-5 top-3 h-0.5 bg-orange-500 -z-0 transition-all duration-300 ease-out"
            style={{
              width:
                currentStep === 1
                  ? '0%'
                  : currentStep === 2
                  ? '50%'
                  : 'calc(100% - 2.5rem)',
            }}
          />

          {steps.map((step) => {
            const isCompleted =
              currentStep > step.id || (currentStep === 4 && step.id === 3);
            const isCurrent = currentStep === step.id;

            return (
              <div
                key={step.id}
                className="flex flex-col items-center relative z-10 select-none cursor-pointer"
                onClick={() => {
                  if (onStepClick && step.id <= currentStep) {
                    onStepClick(step.id);
                  }
                }}
              >
                {/* Node Circle - Compact size */}
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] transition-all duration-200 ${
                    isCompleted
                      ? 'bg-orange-500 text-white shadow-2xs ring-2 ring-orange-100'
                      : isCurrent
                      ? 'bg-slate-900 text-white ring-2 ring-slate-100 shadow-2xs'
                      : 'bg-white text-slate-400 border border-slate-200'
                  }`}
                  aria-current={isCurrent ? 'step' : undefined}
                >
                  {isCompleted ? (
                    <Check className="w-3 h-3 stroke-[3]" />
                  ) : (
                    <span>{step.id}</span>
                  )}
                </div>

                {/* Step Label - Small and clean */}
                <div className="mt-0.5 text-center">
                  <span
                    className={`text-[10px] font-semibold leading-tight ${
                      isCurrent
                        ? 'text-slate-900 font-bold'
                        : isCompleted
                        ? 'text-orange-600'
                        : 'text-slate-400'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Micro-label line */}
      <div className="mt-1 flex items-center justify-center gap-1.5 text-[10px] font-medium text-slate-500">
        <span
          className={
            currentStep >= 1 ? 'text-orange-600 font-semibold' : 'text-slate-400'
          }
        >
          ✓ 1. Account
        </span>
        <span className="text-slate-300">·</span>
        <span
          className={
            currentStep === 2
              ? 'text-slate-900 font-bold'
              : currentStep > 2
              ? 'text-orange-600 font-semibold'
              : 'text-slate-400'
          }
        >
          {currentStep > 2 ? '✓' : '2.'} Join Group
        </span>
        <span className="text-slate-300">·</span>
        <span
          className={
            currentStep === 3
              ? 'text-slate-900 font-bold'
              : currentStep >= 4
              ? 'text-orange-600 font-semibold'
              : 'text-slate-400'
          }
        >
          {currentStep >= 4 ? '✓' : '3.'} Download
        </span>
      </div>
    </div>
  );
};
