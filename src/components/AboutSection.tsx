import React from 'react';
import { Check, ArrowRight, Ruler, Layers, Sun, ShieldCheck, Factory, Award } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface AboutSectionProps {
  onLearnMoreClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMoreClick }) => {
  const specs = [
    {
      icon: Ruler,
      title: '102-Inch Seamless Rolls',
      desc: 'True 8.5ft continuous width eliminating failure-prone floor seams.'
    },
    {
      icon: Layers,
      title: 'Chassis Torsion Scrim',
      desc: 'High-tensile polyester reinforcement flexing with frame road vibration.'
    },
    {
      icon: Sun,
      title: '-40°F to 150°F Rated',
      desc: 'Polymer formula preventing winter embrittlement and summer softening.'
    },
    {
      icon: ShieldCheck,
      title: 'Chemical & Tire Proof',
      desc: 'Impervious to motor oils, fuel drops, road salts, and hot tire pickup.'
    }
  ];

  const highlights = [
    'Engineered exclusively for RV manufacturers, custom upfitters, and restoration builders',
    'Continuous 102-inch seamless roll capabilities eliminating vulnerable water-seeping seams',
    'Dedicated North American logistics with OEM support hub in Elkhart, Indiana'
  ];

  return (
    <section id="about" className="py-24 lg:py-28 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[72px] xl:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* 
            LEFT COLUMN: CLEAN ARCHITECTURAL SPECIFICATION MATRIX 
            Clean, authentic engineering credentials replacing the generic boxed image
          */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" distance={28} duration={800}>
              <div className="rounded-3xl p-8 sm:p-10 bg-white border border-slate-200/90 shadow-xl shadow-slate-900/5 relative overflow-hidden">
                {/* Subtle brand corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#003A73]/10 to-transparent rounded-bl-full pointer-events-none" />

                <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#D6314A] block">
                      ENGINEERING SPECIFICATION
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-slate-900 mt-0.5">
                      DECKRITE MEMBRANE ARCHITECTURE
                    </h3>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                    <Award className="w-3.5 h-3.5 text-[#003A73]" />
                    <span>ASTM D751 Tested</span>
                  </div>
                </div>

                {/* 2x2 Clean Capability Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {specs.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={idx}
                        className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 flex flex-col justify-between"
                      >
                        <div className="w-9 h-9 rounded-xl bg-[#003A73]/10 text-[#003A73] flex items-center justify-center mb-3">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-heading text-base font-bold uppercase text-slate-900 leading-tight">
                            {item.title}
                          </h4>
                          <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Trust Stamp */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-[#003A73]">DeckRite North America</span>
                  <span>Extrusion: Little Rock, AR • Hub: Elkhart, IN</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN: SHORT FOCUSED INTRO & ACTION */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="right" distance={28} duration={800} delay={100}>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D6314A] block mb-3">
                WHO WE ARE
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold uppercase tracking-tight text-slate-900 leading-[1.08]">
                A SPECIALIZED PARTNER IN RV FLOORING INNOVATION.
              </h2>

              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-[1.65] max-w-[580px] font-normal">
                DeckRite specializes in high-performance flooring membranes engineered specifically for recreational vehicles, toy haulers, and exterior patio ramps. Rather than adapting generic residential vinyl, our products are engineered from the polymer layer up to withstand continuous highway vibration, UV exposure, and active outdoor lifestyles.
              </p>

              {/* Clean checkmark list */}
              <div className="mt-7 space-y-3.5">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#003A73]/10 text-[#003A73] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm sm:text-base text-slate-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Small Learn More CTA */}
              <div className="mt-8 pt-2">
                <button
                  onClick={onLearnMoreClick}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-[#003A73] text-[#003A73] hover:bg-gradient-to-r hover:from-[#003A73] hover:to-[#001D3D] hover:text-white hover:border-transparent transition-all duration-200 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider cursor-pointer shadow-xs active:scale-95"
                >
                  <span>Explore Company Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
