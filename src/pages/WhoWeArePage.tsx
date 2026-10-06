import React from 'react';
import { 
  ShieldCheck, 
  Ruler, 
  Factory, 
  MapPin, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Award, 
  Layers, 
  ChevronRight,
  Truck,
  Wrench
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

interface WhoWeArePageProps {
  onNavigateHome: () => void;
  onOpenContact: () => void;
}

export const WhoWeArePage: React.FC<WhoWeArePageProps> = ({
  onNavigateHome,
  onOpenContact
}) => {
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
          <span className="font-semibold text-[#003A73]">Who We Are</span>
        </div>
      </div>

      {/* 2. Editorial Header */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[72px] xl:px-[80px]">
          <div className="max-w-3xl">
            <ScrollReveal direction="up" distance={20} duration={700}>
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-widest text-[#D6314A] block mb-3">
                SPECIALIZED RV SURFACE ENGINEERING
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[58px] font-bold uppercase tracking-tight text-slate-900 leading-[1.04]">
                ENGINEERED FOR THE OPEN ROAD. NEVER REPURPOSED.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-slate-600 font-normal leading-relaxed">
                DeckRite was founded with a single engineering focus: recreational vehicles operate in harsh dynamic environments that destroy standard residential vinyl, carpet, and laminate flooring.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. The 4 Engineering Pillars */}
      <section className="py-20 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[72px] xl:px-[80px]">
        <ScrollReveal direction="up" distance={24} duration={750}>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D6314A] block mb-2">
              OUR CORE ADVANTAGES
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-slate-900">
              WHY DECKRITE LEADS THE INDUSTRY
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <ScrollReveal direction="up" distance={24} duration={650} delay={100}>
            <div className="p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 h-full flex flex-col justify-between hover:border-[#003A73] transition-colors">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#003A73]/10 text-[#003A73] flex items-center justify-center mb-5">
                  <Ruler className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold uppercase text-slate-900 mb-2">
                  102-INCH SEAMLESS WIDTHS
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Extruded in true 8.5-foot wide master rolls that span full RV bodies in one continuous run, completely eliminating seam leaks.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-bold text-[#003A73] uppercase tracking-wider">
                Zero Vulnerable Joints
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={24} duration={650} delay={200}>
            <div className="p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 h-full flex flex-col justify-between hover:border-[#003A73] transition-colors">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#003A73]/10 text-[#003A73] flex items-center justify-center mb-5">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold uppercase text-slate-900 mb-2">
                  CHASSIS TORSION RATED
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Reinforced with high-tensile polyester scrim that flexes with chassis frame twist without delamination or buckling.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-bold text-[#003A73] uppercase tracking-wider">
                Highway Vibration Tested
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={24} duration={650} delay={300}>
            <div className="p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 h-full flex flex-col justify-between hover:border-[#003A73] transition-colors">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#003A73]/10 text-[#003A73] flex items-center justify-center mb-5">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold uppercase text-slate-900 mb-2">
                  -40°F TO 150°F THERMAL SPEC
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Specially formulated polymer matrix that remains supple and crack-resistant across extreme seasonal climate swings.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-bold text-[#003A73] uppercase tracking-wider">
                All-Weather Certified
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={24} duration={650} delay={400}>
            <div className="p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 h-full flex flex-col justify-between hover:border-[#003A73] transition-colors">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#003A73]/10 text-[#003A73] flex items-center justify-center mb-5">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold uppercase text-slate-900 mb-2">
                  DIRECT OEM PARTNERSHIP
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Dedicated technical support and just-in-time roll staging from our operations center in Elkhart, Indiana.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-bold text-[#003A73] uppercase tracking-wider">
                USA Engineering & Hubs
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Comparison Table: Residential Vinyl vs DeckRite RV Membrane */}
      <section className="py-20 bg-[#F8FAFC] border-y border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[72px] xl:px-[80px]">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D6314A] block mb-2">
              TECHNICAL COMPARISON
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-slate-900">
              STANDARD VINYL VS. DECKRITE ENGINEERED MEMBRANES
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Why leading RV builders refuse to install residential floor coverings in transit vehicles.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-lg">
            <div className="grid grid-cols-12 bg-slate-900 text-white p-5 text-xs sm:text-sm font-heading uppercase font-bold tracking-wider">
              <div className="col-span-5 sm:col-span-4">Performance Criteria</div>
              <div className="col-span-3 sm:col-span-4 text-slate-400">Standard Residential Vinyl</div>
              <div className="col-span-4 sm:col-span-4 text-[#D6314A] font-extrabold">DeckRite RV Membrane</div>
            </div>

            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              <div className="grid grid-cols-12 p-5 items-center">
                <div className="col-span-5 sm:col-span-4 font-semibold text-slate-900">
                  Roll Width
                </div>
                <div className="col-span-3 sm:col-span-4 text-slate-500 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <span>6 ft (Requires Seams)</span>
                </div>
                <div className="col-span-4 sm:col-span-4 text-[#003A73] font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>8.5 ft / 102" (Seamless)</span>
                </div>
              </div>

              <div className="grid grid-cols-12 p-5 items-center bg-[#F8FAFC]">
                <div className="col-span-5 sm:col-span-4 font-semibold text-slate-900">
                  Subfloor Torsion Flex
                </div>
                <div className="col-span-3 sm:col-span-4 text-slate-500 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Cracks & Curls at Edges</span>
                </div>
                <div className="col-span-4 sm:col-span-4 text-[#003A73] font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Polyester Scrim Reinforced</span>
                </div>
              </div>

              <div className="grid grid-cols-12 p-5 items-center">
                <div className="col-span-5 sm:col-span-4 font-semibold text-slate-900">
                  Hot Tire & Fuel Resistance
                </div>
                <div className="col-span-3 sm:col-span-4 text-slate-500 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Stains, Melts, Lifts</span>
                </div>
                <div className="col-span-4 sm:col-span-4 text-[#003A73] font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Heavy-Duty Chemical Barrier</span>
                </div>
              </div>

              <div className="grid grid-cols-12 p-5 items-center bg-[#F8FAFC]">
                <div className="col-span-5 sm:col-span-4 font-semibold text-slate-900">
                  Thermal Operating Range
                </div>
                <div className="col-span-3 sm:col-span-4 text-slate-500 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Brittle Below 32°F</span>
                </div>
                <div className="col-span-4 sm:col-span-4 text-[#003A73] font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>-40°F to 150°F Tested</span>
                </div>
              </div>

              <div className="grid grid-cols-12 p-5 items-center">
                <div className="col-span-5 sm:col-span-4 font-semibold text-slate-900">
                  Outdoor Ramp Deck Use
                </div>
                <div className="col-span-3 sm:col-span-4 text-slate-500 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Unrated / Sun Fades Quickly</span>
                </div>
                <div className="col-span-4 sm:col-span-4 text-[#003A73] font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>UV Stabilized Deck Membrane</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Operations & Distribution Hubs */}
      <section className="py-20 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[72px] xl:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D6314A] block mb-2">
              MANUFACTURING & OEM LOGISTICS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-slate-900 leading-tight">
              STRATEGICALLY LOCATED FOR FAST DELIVERY
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              With our membrane extrusion facility in North Little Rock, Arkansas and our rapid-distribution staging hub in Elkhart, Indiana — the RV Capital of the World — DeckRite ensures OEM production lines never stop waiting for materials.
            </p>

            <div className="mt-8 space-y-4">
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#003A73] text-white flex items-center justify-center shrink-0">
                  <Factory className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold uppercase text-slate-900">
                    North Little Rock, AR — Headquarters & Extrusion
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Advanced polymer compounding, scrim laminating, and quality control laboratory.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#D6314A] text-white flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold uppercase text-slate-900">
                    Elkhart, IN — OEM Staging & Technical Support Hub
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Local warehousing for daily just-in-time delivery to Elkhart County RV assembly plants.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-[#001D3D] text-white flex flex-col justify-between space-y-8 shadow-xl">
            <div>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/20">
                Direct Engineering Support
              </span>
              <h3 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white mt-4 leading-tight">
                WORK WITH DECKRITE APPLICATION ENGINEERS
              </h3>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you are launching a new OEM toy hauler line, converting custom overland vans, or restoring a classic motorhome, our technical team provides adhesive specifications, seam guidelines, and cut sheet samples.
              </p>
            </div>

            <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-8 py-3.5 rounded-full bg-white text-[#003A73] hover:bg-slate-100 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider cursor-pointer active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Request OEM Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#D6314A]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
