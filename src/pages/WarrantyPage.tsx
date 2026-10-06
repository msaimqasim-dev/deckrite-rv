import React from 'react';
import { 
  ShieldCheck, 
  ChevronRight, 
  Check, 
  AlertTriangle, 
  FileText, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { WARRANTY_INFO, WarrantyDetail } from '../data/deckriteData';
import { ScrollReveal } from '../components/ScrollReveal';

interface WarrantyPageProps {
  onNavigateHome: () => void;
  onOpenContact: () => void;
}

export const WarrantyPage: React.FC<WarrantyPageProps> = ({
  onNavigateHome,
  onOpenContact
}) => {
  const coveredPoints = [
    'Material separation and structural membrane delamination',
    'Premature ultraviolet (UV) radiation cracking and surface embrittlement',
    'Waterproof barrier breach under proper subfloor preparation',
    'Defects in polymer formulation or scrim reinforcement manufacturing'
  ];

  const excludedPoints = [
    'Damage caused by improper adhesives or non-approved solvent chemicals',
    'Physical tears, punctures from sharp cargo edges, or improper mechanical fasteners',
    'Subfloor plywood rot resulting from unsealed wall or roof leaks',
    'Normal cosmetic wear, surface scuffs, or unapproved abrasive scrubbing'
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* 1. Breadcrumbs */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[72px] xl:px-[80px] py-4 border-b border-slate-100">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
          <button 
            onClick={onNavigateHome}
            className="hover:text-[#003A73] transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-[#003A73]">Warranty Coverage</span>
        </div>
      </div>

      {/* 2. Hero Header */}
      <section className="py-16 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[72px] xl:px-[80px]">
          <div className="max-w-3xl">
            <ScrollReveal direction="up" distance={20} duration={700}>
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-widest text-[#D6314A] block mb-2">
                NORTH AMERICAN WARRANTY GUARANTEE
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold uppercase tracking-tight text-slate-900">
                COMPREHENSIVE MULTI-YEAR RV MEMBRANE WARRANTY
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                Backed by over two decades of polymer engineering, every roll of DeckRite flooring includes manufacturer warranty coverage against premature delamination, excessive UV embrittlement, and waterproof barrier failure.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Warranty Plans Breakdown */}
      <section className="py-16 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[72px] xl:px-[80px]">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-slate-900 mb-8">
          OFFICIAL DECKRITE WARRANTY PLANS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WARRANTY_INFO.map((plan, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl border border-slate-200/90 bg-white shadow-sm flex flex-col justify-between hover:border-[#003A73] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#003A73]/10 text-[#003A73] flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-[#003A73] text-white font-heading text-xs font-bold uppercase tracking-wider">
                    {plan.duration}
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-slate-900">
                  {plan.title}
                </h3>
                
                <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
                  {plan.coverage}
                </p>

                <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Coverage Inclusions:
                  </span>
                  {plan.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>North America Direct Guarantee</span>
                <span className="font-semibold text-[#003A73]">Factory Support Included</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Covered vs Excluded Specs */}
      <section className="py-16 bg-[#F8FAFC] border-y border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[72px] xl:px-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* What's Covered */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  ✓
                </div>
                <h3 className="font-heading text-2xl font-bold uppercase text-slate-900">
                  WHAT IS COVERED
                </h3>
              </div>
              <ul className="space-y-3.5 text-sm sm:text-base text-slate-700">
                {coveredPoints.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  !
                </div>
                <h3 className="font-heading text-2xl font-bold uppercase text-slate-900">
                  GENERAL EXCLUSIONS
                </h3>
              </div>
              <ul className="space-y-3.5 text-sm sm:text-base text-slate-700">
                {excludedPoints.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Claim Filing & Technical Support */}
      <section className="py-16 max-w-[1040px] mx-auto px-6 sm:px-10">
        <div className="rounded-3xl p-8 sm:p-12 bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D6314A] block mb-2">
              CLAIM ASSISTANCE & REGISTRATION
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white">
              NEED TO FILE A WARRANTY CLAIM OR INQUIRE?
            </h3>
            <p className="mt-2 text-slate-300 text-sm max-w-lg">
              Have your RV VIN, date of installation, and high-resolution photographs ready. Our technical service team responds within 1 business day.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-8 py-3.5 rounded-full bg-[#003A73] hover:bg-[#00284d] text-white text-xs sm:text-sm font-heading font-bold uppercase tracking-wider shrink-0 cursor-pointer active:scale-95 transition-all shadow-md"
          >
            Submit Claim Details
          </button>
        </div>
      </section>
    </div>
  );
};
