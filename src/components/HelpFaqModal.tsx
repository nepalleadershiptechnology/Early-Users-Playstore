import React from 'react';
import { X, HelpCircle, Mail, Phone, ExternalLink } from 'lucide-react';
import {
  GOOGLE_GROUP_URL,
  GOOGLE_GROUP_EMAIL,
  GOOGLE_PLAY_STORE_APP_URL,
  APP_METADATA,
} from '../config/constants.ts';

interface HelpFaqModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpFaqModal: React.FC<HelpFaqModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl border border-slate-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                Alpha Tester FAQ & Help
              </h3>
              <p className="text-xs text-slate-500">
                Sindhuli Bazar Ride (Yatayat Sewa)
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* FAQs */}
        <div className="mt-4 space-y-4 text-xs text-slate-600 leading-relaxed">
          {/* FAQ 1 */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 text-sm mb-1">
              Why must I join the Google Group first?
            </h4>
            <p>
              Google Play Closed Testing uses Google Groups for access control.
              Until your Google account is an accepted member of{' '}
              <strong className="text-slate-800">
                {GOOGLE_GROUP_EMAIL}
              </strong>
              , Google Play will restrict access to the closed alpha build.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 text-sm mb-1">
              Where can I find the Google Play app?
            </h4>
            <p>
              The application is registered under package{' '}
              <code className="text-orange-700 bg-orange-50 px-1 py-0.5 rounded font-mono">
                {APP_METADATA.packageName}
              </code>{' '}
              on Google Play. You can open it directly via:
              <br />
              <a
                href={GOOGLE_PLAY_STORE_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 font-semibold underline mt-1 inline-flex items-center gap-1"
              >
                <span>Open com.sindhulibazar.ride on Play Store</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 text-sm mb-1">
              Google Play shows "Item not found" or "Not eligible"?
            </h4>
            <p>
              1. Ensure you clicked <strong>"Join group"</strong> in Google
              Groups.
              <br />
              2. On Android, verify that your Google Play Store is set to the
              same Gmail address that joined the group.
              <br />
              3. Google Play usually synchronizes membership within 2 to 5
              minutes.
            </p>
          </div>

          {/* Contact Support */}
          <div className="p-4 bg-orange-50/80 rounded-2xl border border-orange-200">
            <h4 className="font-bold text-orange-950 text-sm mb-1">
              Sindhuli Local Support
            </h4>
            <p className="text-orange-800 text-xs mb-2">
              For any help testing Sindhuli Bazar Ride or Yatayat Sewa:
            </p>
            <div className="space-y-1 text-xs text-orange-950 font-medium">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-orange-700" />
                <span>Support: {APP_METADATA.supportEmail}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-orange-700" />
                <span>Helpline: {APP_METADATA.helplinePhone} (Sindhuli)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-5 pt-3 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
