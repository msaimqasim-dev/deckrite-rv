import React, { useState } from 'react';
import { FAQS, WARRANTY_INFO } from '../data/deckriteData';
import { X, ChevronDown, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';

interface FaqWarrantyModalProps {
  isOpen: boolean;
  initialTab?: 'faqs' | 'warranty';
  onClose: () => void;
  onOpenContact: () => void;
}

export const FaqWarrantyModal: React.FC<FaqWarrantyModalProps> = ({
  isOpen,
  initialTab = 'faqs',
  onClose,
  onOpenContact
}) => {
  const [activeTab, setActiveTab] = useState<'faqs' | 'warranty'>(initialTab);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
        {/* Header Bar */}
        <div className="p-6 border-b border-slate-200 flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('faqs')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer ${
                activeTab === 'faqs'
                  ? 'bg-[#003A73] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Frequently Asked Questions
            </button>
            <button
              onClick={() => setActiveTab('warranty')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer ${
                activeTab === 'warranty'
                  ? 'bg-[#003A73] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Warranty Information
            </button>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8">
          {activeTab === 'faqs' ? (
            <div className="space-y-4">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D6314A]">
                  Technical Knowledge Base
                </span>
                <h3 className="font-heading text-2xl font-bold uppercase text-slate-900 mt-1">
                  Answers to Common RV Flooring Inquiries
                </h3>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="border border-slate-200 rounded-xl overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full p-4.5 text-left flex items-center justify-between gap-4 bg-slate-50/70 hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <span className="text-sm font-semibold text-slate-900">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${
                            isOpen ? 'rotate-180 text-[#003A73]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="p-4.5 text-sm text-slate-600 bg-white border-t border-slate-200/80 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D6314A]">
                  Quality Assurance
                </span>
                <h3 className="font-heading text-2xl font-bold uppercase text-slate-900 mt-1">
                  DeckRite Comprehensive Warranty Program
                </h3>
                <p className="text-sm text-slate-600 mt-2">
                  All DeckRite RV membrane systems undergo rigorous simulated chassis wear and UV stress testing prior to distribution.
                </p>
              </div>

              <div className="space-y-5">
                {WARRANTY_INFO.map((warranty, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-xl border border-slate-200 bg-[#F8FAFC]"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h4 className="font-heading text-lg font-bold uppercase text-slate-900">
                        {warranty.title}
                      </h4>
                      <span className="px-2.5 py-1 bg-[#003A73] text-white text-xs font-bold uppercase rounded">
                        {warranty.duration}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {warranty.coverage}
                    </p>

                    <div className="space-y-2 border-t border-slate-200 pt-3">
                      {warranty.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <ShieldCheck className="w-4 h-4 text-[#003A73] shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modal Footer Call to Action */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Need a custom installation guide or specification letter for your project?
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-6 py-2.5 bg-gradient-to-r from-[#003A73] to-[#001D3D] hover:from-[#002D5C] hover:to-[#00142B] text-white text-xs sm:text-sm font-heading font-bold uppercase tracking-wider rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-md active:scale-95"
            >
              <span>Contact Tech Support</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D6314A]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
