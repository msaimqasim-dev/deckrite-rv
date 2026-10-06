import React from 'react';
import { X, CheckCircle2, Shield, Factory, Award, ArrowRight } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onOpenContact
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D6314A]">
              DeckRite RV Heritage
            </span>
            <h3 className="font-heading text-3xl font-bold uppercase text-slate-900 mt-1">
              Engineered Exclusively for RV Rigs
            </h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Founded to solve the persistent issues of buckling, seam failures, and moisture rot that plague generic residential flooring in mobile environments, DeckRite has evolved into a premier surface partner for North America's leading RV manufacturers, upfitters, and restoration craftsmen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
              <Factory className="w-6 h-6 text-[#003A73] mx-auto mb-2" />
              <div className="font-heading text-xl font-bold text-slate-900">102" SEAMLESS</div>
              <div className="text-xs text-slate-500 mt-0.5">Continuous Width Capabilities</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
              <Shield className="w-6 h-6 text-[#003A73] mx-auto mb-2" />
              <div className="font-heading text-xl font-bold text-slate-900">-40°F TO 150°F</div>
              <div className="text-xs text-slate-500 mt-0.5">Sub-Zero Thermal Stability</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
              <Award className="w-6 h-6 text-[#003A73] mx-auto mb-2" />
              <div className="font-heading text-xl font-bold text-slate-900">100% WATERTIGHT</div>
              <div className="text-xs text-slate-500 mt-0.5">Non-Porous Polymer Barrier</div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-heading text-base font-bold uppercase text-slate-900">
              Our Manufacturing Commitment
            </h4>
            <div className="space-y-2 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#003A73] shrink-0 mt-0.5" />
                <span>Precision roll cutting and inventory stocking located near the Elkhart, IN manufacturing hub.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#003A73] shrink-0 mt-0.5" />
                <span>Formulations free of harmful phthalates, heavy metals, and VOC off-gassing.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#003A73] shrink-0 mt-0.5" />
                <span>Dedicated technical advisory team supporting subfloor preparation and adhesive compatibility.</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              DeckRite North America Operations
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-6 py-2.5 bg-gradient-to-r from-[#003A73] to-[#001D3D] hover:from-[#002D5C] hover:to-[#00142B] text-white text-xs sm:text-sm font-heading font-bold uppercase tracking-wider rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-md active:scale-95"
            >
              <span>Connect With Us</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D6314A]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
