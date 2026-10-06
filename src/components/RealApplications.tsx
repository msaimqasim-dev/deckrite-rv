import React, { useState } from 'react';
import { Eye, ArrowUpRight, X, ArrowRight } from 'lucide-react';
import deckAppImage from '@/src/assets/images/rv_deck_application_1791294086326.jpg';
import ultraImage from '@/src/assets/images/product_ultra_pvc_1791294075267.jpg';
import shieldImage from '@/src/assets/images/product_shield_rv_1791294052894.jpg';
import { ScrollReveal } from './ScrollReveal';

export interface ApplicationItem {
  id: string;
  productId: string;
  title: string;
  category: string;
  productUsed: string;
  description: string;
  image: string;
  highlight: string;
}

// Exactly 3 real installation cards matching the 3 product pages
const APPLICATIONS: ApplicationItem[] = [
  {
    id: 'shield-rv-app',
    productId: 'shield-rv',
    title: 'Powersport Utility Garage',
    category: 'Sport / Trailers',
    productUsed: 'Shield RV Diamond Tread',
    description: 'Heavy vehicle bay floor withstanding hot tire pickup, motor oil, gear tie-downs, and pressure washer washouts.',
    image: shieldImage,
    highlight: 'Oil & Fuel Resistant'
  },
  {
    id: 'patio-ramp-app',
    productId: 'deckrite-plank',
    title: 'Toy Hauler Patio Deck',
    category: 'Ramp / Deck',
    productUsed: 'DeckRite Plank',
    description: 'Weatherproof fold-down ramp patio installation on a luxury toy hauler, exposed to all-day UV and outdoor gatherings.',
    image: deckAppImage,
    highlight: 'Waterproof UV Barrier'
  },
  {
    id: 'motorhome-interior-app',
    productId: 'ultra-woven-pvc',
    title: 'Luxury Motorhome Galley',
    category: 'Interiors',
    productUsed: 'DeckRite ULTRA Woven PVC',
    description: 'Seamless floor-to-slide installation providing acoustic sound insulation and modern European weave through living areas.',
    image: ultraImage,
    highlight: 'Acoustic Sound Cushion'
  }
];

interface RealApplicationsProps {
  onNavigateProduct?: (productId: string) => void;
  onOpenContact: () => void;
}

export const RealApplications: React.FC<RealApplicationsProps> = ({ 
  onNavigateProduct,
  onOpenContact 
}) => {
  const [selectedLightbox, setSelectedLightbox] = useState<ApplicationItem | null>(null);

  const handleCardClick = (item: ApplicationItem) => {
    if (onNavigateProduct) {
      onNavigateProduct(item.productId);
    } else {
      setSelectedLightbox(item);
    }
  };

  return (
    <section
      id="applications"
      className="relative py-24 lg:py-28 bg-[#F8FAFC] border-y border-slate-200/80 overflow-x-clip text-slate-900"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[72px] xl:px-[80px]">
        {/* Section Header: Clean Light Theme with High Contrast */}
        <ScrollReveal direction="up" distance={24} duration={750}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14">
            <div className="max-w-[760px]">
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-widest text-[#D6314A] block mb-3">
                REAL INSTALLATIONS
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold uppercase tracking-tight text-slate-900 leading-[1.08]">
                PRODUCTS IN REAL RV APPLICATIONS.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-[1.65] max-w-[620px]">
                See each of our three core flooring technologies installed in OEM production rigs, custom toy hauler conversions, and premium motorhome restorations.
              </p>
            </div>

            {/* Action Row: Link */}
            <div className="flex items-center gap-6 self-start lg:self-end pt-2">
              <button
                onClick={onOpenContact}
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-[#003A73] hover:text-[#D6314A] transition-colors border-b border-[#003A73]/30 hover:border-[#D6314A] pb-1 cursor-pointer"
              >
                <span>Request Project Specs</span>
                <ArrowUpRight className="w-4 h-4 text-[#D6314A] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* 
          EXACTLY 3 CLEAN EDITORIAL APPLICATION CARDS
          Mapped directly to the 3 Product Pages: Shield RV, DeckRite Plank, ULTRA Woven PVC
        */}
        <ScrollReveal direction="up" distance={28} duration={800} delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {APPLICATIONS.map((item) => (
              <div
                key={item.id}
                onClick={() => handleCardClick(item)}
                className="group relative w-full h-[460px] sm:h-[500px] rounded-3xl overflow-hidden border border-slate-200/90 bg-slate-950 shadow-sm cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/15 hover:border-[#003A73]/50 select-none flex flex-col justify-between"
              >
                {/* Image with Silky Smooth Zoom Hover Animation */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />

                {/* Dynamic Gradient Scrim for Pristine Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-slate-950/10 transition-opacity duration-500 pointer-events-none" />

                {/* Top Clean Category Tag & Preview Trigger */}
                <div className="relative z-10 p-6 flex items-center justify-between">
                  <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold uppercase tracking-wider border border-white/20 transition-all duration-300 group-hover:bg-[#003A73] group-hover:border-white/30">
                    {item.category}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedLightbox(item);
                    }}
                    className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 transform group-hover:scale-105 hover:bg-[#D6314A] hover:border-[#D6314A] cursor-pointer"
                    aria-label="Preview photo"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Minimal Clean Typography Overlay */}
                <div className="relative z-10 p-6 text-white">
                  {/* Subtle highlight label */}
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#D6314A] block mb-1.5 transition-transform duration-300 group-hover:-translate-y-0.5">
                    {item.highlight}
                  </span>

                  {/* Main Card Title */}
                  <h3 className="font-heading text-2xl sm:text-[26px] font-bold uppercase text-white leading-tight mb-2 drop-shadow-xs">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-2 mb-4 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Bottom Row: Product Name + Direct Page Action */}
                  <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs text-slate-300">
                    <span className="font-semibold text-white truncate max-w-[190px]">
                      {item.productUsed}
                    </span>

                    <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#D6314A] group-hover:text-white transition-colors">
                      <span>Explore Page</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox Modal for Full View Inspection */}
      {selectedLightbox && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
          <div className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <button
              onClick={() => setSelectedLightbox(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#D6314A] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] w-full overflow-hidden bg-black">
              <img
                src={selectedLightbox.image}
                alt={selectedLightbox.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 sm:p-8 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <span className="text-xs text-[#D6314A] uppercase font-bold tracking-wider">
                  {selectedLightbox.category}
                </span>
                <h4 className="font-heading text-2xl sm:text-3xl text-white font-bold uppercase mt-0.5">
                  {selectedLightbox.title}
                </h4>
                <p className="text-sm text-slate-300 mt-1 max-w-xl">
                  {selectedLightbox.description}
                </p>
                <p className="text-xs text-slate-400 font-mono mt-2">
                  Specification: {selectedLightbox.productUsed} • {selectedLightbox.highlight}
                </p>
              </div>

              <div className="flex items-center gap-3">
                {onNavigateProduct && (
                  <button
                    onClick={() => {
                      const prodId = selectedLightbox.productId;
                      setSelectedLightbox(null);
                      onNavigateProduct(prodId);
                    }}
                    className="px-6 py-3 bg-[#003A73] hover:bg-[#00284d] text-white text-xs sm:text-sm font-heading font-bold uppercase tracking-wider rounded-full transition-all whitespace-nowrap shadow-md cursor-pointer active:scale-95"
                  >
                    View Product Page
                  </button>
                )}
                <button
                  onClick={() => {
                    setSelectedLightbox(null);
                    onOpenContact();
                  }}
                  className="px-6 py-3 border border-white/20 hover:bg-white/10 text-white text-xs sm:text-sm font-heading font-bold uppercase tracking-wider rounded-full transition-all whitespace-nowrap cursor-pointer active:scale-95"
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
