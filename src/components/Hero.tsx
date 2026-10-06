import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/src/assets/images/hero_rv_lifestyle_1791294037336.jpg';
import plankImage from '@/src/assets/images/product_deckrite_plank_1791294064446.jpg';
import ultraImage from '@/src/assets/images/product_ultra_pvc_1791294075267.jpg';
import { ScrollReveal } from './ScrollReveal';

interface HeroProps {
  onExploreProducts: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts }) => {
  return (
    <section className="relative pt-28 pb-16 sm:pb-20 md:pt-32 md:pb-24 bg-white overflow-hidden">
      {/* Decorative Editorial Sparkle Stars matching inspiration */}
      <svg
        className="absolute left-6 lg:left-14 top-1/3 w-5 h-5 text-slate-300 pointer-events-none hidden sm:block"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0 C12 7, 7 12, 0 12 C7 12, 12 17, 12 24 C12 17, 17 12, 24 12 C17 12, 12 7, 12 0 Z" />
      </svg>
      <svg
        className="absolute right-6 lg:right-14 top-2/3 w-5 h-5 text-slate-300 pointer-events-none hidden sm:block"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0 C12 7, 7 12, 0 12 C7 12, 12 17, 12 24 C12 17, 17 12, 24 12 C17 12, 12 7, 12 0 Z" />
      </svg>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[72px] xl:px-[80px]">
        {/* Centered Editorial Headline with Integrated Pill-Shaped Inline Images */}
        <ScrollReveal direction="up" distance={24} duration={800}>
          <div className="text-center max-w-[1180px] mx-auto">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[74px] font-bold uppercase tracking-tight text-slate-900 leading-[1.04] text-balance">
              {/* Line 1: Engineered + Inline Pill Image + RV Flooring */}
              <span className="inline-flex items-center flex-wrap justify-center gap-x-2 sm:gap-x-3">
                <span>ENGINEERED</span>
                <span className="inline-flex items-center justify-center align-middle w-24 sm:w-32 md:w-36 h-9 sm:h-11 md:h-12 rounded-full overflow-hidden border border-slate-200/90 shadow-xs mx-1 sm:mx-2 shrink-0 bg-slate-100 transition-transform duration-500 hover:scale-110">
                  <img
                    src={plankImage}
                    alt="DeckRite plank exterior flooring"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </span>
                <span>RV FLOORING</span>
              </span>

              <br className="hidden sm:inline" />

              {/* Line 2: For Every + Inline Pill Image + Road Ahead */}
              <span className="inline-flex items-center flex-wrap justify-center gap-x-2 sm:gap-x-3 mt-1 sm:mt-2">
                <span>FOR EVERY</span>
                <span className="inline-flex items-center justify-center align-middle w-24 sm:w-32 md:w-36 h-9 sm:h-11 md:h-12 rounded-full overflow-hidden border border-slate-200/90 shadow-xs mx-1 sm:mx-2 shrink-0 bg-slate-100 transition-transform duration-500 hover:scale-110">
                  <img
                    src={ultraImage}
                    alt="DeckRite ULTRA woven interior flooring"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </span>
                <span className="relative inline-block text-[#003A73]">
                  ROAD AHEAD.
                  {/* Subtle curved underline accent matching inspiration */}
                  <svg
                    className="absolute -bottom-2.5 left-0 w-full h-3 text-[#D6314A]/40 pointer-events-none"
                    viewBox="0 0 180 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 2 8 C 50 1, 130 1, 178 9"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            {/* Short Centered Supporting Paragraph */}
            <p className="mt-6 sm:mt-7 text-base sm:text-[17px] md:text-lg text-slate-600 font-normal leading-[1.65] max-w-[660px] mx-auto text-balance">
              Purpose-built flooring systems for toy haulers, ramps, decks, and RV interiors — engineered for durability, comfort, and life on the road.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Hero Image Container with Notched CTA Button */}
        <ScrollReveal direction="up" distance={32} duration={850} delay={150} scale={0.98}>
          <div className="relative max-w-[1180px] w-full mx-auto mt-12 sm:mt-14">
            {/* Rounded Large Product/Lifestyle RV Image */}
            <div className="relative w-full h-[360px] sm:h-[430px] md:h-[480px] lg:h-[510px] rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl shadow-slate-900/5 bg-slate-900">
              <img
                src={heroImage}
                alt="DeckRite RV premium flooring lifestyle showcase"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              {/* Subtle scrim overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

              {/* Bottom application tag */}
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-8 z-10 flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold tracking-wide uppercase border border-white/20">
                  Shield RV • DeckRite Plank • ULTRA Woven PVC
                </span>
              </div>
            </div>

            {/* 
              CTA NOTCH / CUTOUT
              A sculpted SVG cradle filled with the exact hero background color (#ffffff),
              carving a smooth, deep rounded notch out of the top center edge of the image,
              with matching outline stroke framing the photo cutout!
            */}
            <svg
              className="absolute -top-px left-1/2 -translate-x-1/2 z-20 pointer-events-none"
              width="270"
              height="48"
              viewBox="0 0 270 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Solid white pocket carving visibly into the image */}
              <path
                d="M 0 0 C 14 0, 22 8, 22 22 L 22 24 C 22 37, 33 47, 46 47 L 224 47 C 237 47, 248 37, 248 24 L 248 22 C 248 8, 256 0, 270 0 Z"
                fill="#ffffff"
              />
              {/* Clean border line following the curve of the notch into the photo */}
              <path
                d="M 0 0.5 C 14 0.5, 22 8, 22 22 L 22 24 C 22 37, 33 47, 46 47 L 224 47 C 237 47, 248 37, 248 24 L 248 22 C 248 8, 256 0.5, 270 0.5"
                stroke="#e2e8f0"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>

            {/* Centered CTA Pill Button sitting cleanly inside the sculpted white pocket */}
            <div className="absolute top-[12px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <button
                onClick={onExploreProducts}
                className="group inline-flex items-center gap-3 h-[46px] sm:h-[48px] px-6 sm:px-7 rounded-full bg-[#003A73] hover:bg-[#00284d] text-white text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-[#003A73]/25 cursor-pointer active:scale-95"
              >
                <span>Explore Products</span>
                <span className="w-5 h-5 rounded-full bg-[#D6314A] flex items-center justify-center text-white transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Small Clean Stats Row beneath the image with staggered entrance */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-[1040px] mx-auto mt-12 md:mt-14 pt-8 border-t border-slate-100 text-center">
          <ScrollReveal direction="up" distance={18} duration={600} delay={100}>
            <div>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                3
              </div>
              <div className="text-xs sm:text-[13px] text-slate-500 font-medium mt-1 uppercase tracking-wider">
                Core Product Lines
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={18} duration={600} delay={200}>
            <div>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                8.5 ft
              </div>
              <div className="text-xs sm:text-[13px] text-slate-500 font-medium mt-1 uppercase tracking-wider">
                Seamless Roll Width
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={18} duration={600} delay={300}>
            <div>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                100%
              </div>
              <div className="text-xs sm:text-[13px] text-slate-500 font-medium mt-1 uppercase tracking-wider">
                Waterproof & UV Stable
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={18} duration={600} delay={400}>
            <div>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                -40° to 150°F
              </div>
              <div className="text-xs sm:text-[13px] text-slate-500 font-medium mt-1 uppercase tracking-wider">
                Chassis Thermal Spec
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
