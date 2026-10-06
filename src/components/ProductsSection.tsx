import React, { useState } from 'react';
import { Product, PRODUCTS } from '../data/deckriteData';
import { CheckCircle2, ChevronRight, Plus } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ProductsSectionProps {
  onSelectProduct: (product: Product) => void;
  onRequestSample: (product: Product) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProduct,
  onRequestSample
}) => {
  // First product is open by default
  const [openProductId, setOpenProductId] = useState<string>(PRODUCTS[0].id);

  // Toggle accordion item - ensures only one product can be open at a time
  const handleToggle = (productId: string) => {
    setOpenProductId((prev) => (prev === productId ? prev : productId));
  };

  return (
    <section
      id="products"
      className="relative py-24 lg:py-28 bg-gradient-to-r from-[#00142E] via-[#002652] to-[#004382] text-white overflow-x-clip"
    >
      {/* EXTREME FAR-LEFT DECORATIVE RED LINE GRAPHIC */}
      {/* 6 vertical red lines/bars fading upward and softly dissolving into the blue background */}
      <div
        className="absolute top-0 bottom-0 left-0 w-32 sm:w-44 md:w-56 lg:w-72 pointer-events-none z-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Vertical gradient: strongest at bottom, smoothly fading upward into transparency */}
            <linearGradient id="deckriteRedLinesGrad" x1="0" y1="100%" x2="0" y2="0%">
              <stop offset="0%" stopColor="#D6314A" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#D6314A" stopOpacity="0.55" />
              <stop offset="65%" stopColor="#D6314A" stopOpacity="0.22" />
              <stop offset="90%" stopColor="#D6314A" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#D6314A" stopOpacity="0" />
            </linearGradient>

            {/* Horizontal dissolve mask: softly blends into the dark blue background */}
            <linearGradient id="deckriteHorizDissolve" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="40%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="75%" stopColor="#ffffff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            <mask id="deckriteRedBarsMask">
              <rect x="0" y="0" width="200" height="800" fill="url(#deckriteHorizDissolve)" />
            </mask>
          </defs>

          {/* 6 vertical red bars with rhythmic widths: starting thicker on the left and tapering */}
          <g mask="url(#deckriteRedBarsMask)">
            <rect x="0" y="0" width="22" height="800" fill="url(#deckriteRedLinesGrad)" />
            <rect x="30" y="0" width="16" height="800" fill="url(#deckriteRedLinesGrad)" />
            <rect x="54" y="0" width="11" height="800" fill="url(#deckriteRedLinesGrad)" />
            <rect x="73" y="0" width="7" height="800" fill="url(#deckriteRedLinesGrad)" />
            <rect x="88" y="0" width="4.5" height="800" fill="url(#deckriteRedLinesGrad)" />
            <rect x="99" y="0" width="2.5" height="800" fill="url(#deckriteRedLinesGrad)" />
          </g>
        </svg>

        {/* Soft atmospheric red glow near bottom left */}
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[#D6314A]/12 blur-3xl pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[72px] xl:px-[80px]">
        {/* Two-Column Desktop Layout (Left: 38%, Right: 62%) */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 lg:gap-14 xl:gap-20">
          
          {/* LEFT SIDE INTRODUCTION (~38% on desktop) - Sticky to top till end of section */}
          <div className="w-full lg:w-[38%] shrink-0 lg:sticky lg:top-28 xl:top-32 lg:self-start">
            <ScrollReveal direction="up" distance={24} duration={750}>
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-widest text-[#D6314A] block mb-3">
                OUR CORE PRODUCT LINES
              </span>

              <h2 className="font-heading text-4xl sm:text-[46px] lg:text-[48px] xl:text-[50px] font-bold uppercase tracking-tight text-white leading-[1.08] mb-5 sm:mb-6">
                ENGINEERED FOR EVERY RV ZONE.
              </h2>

              <p className="text-base sm:text-[17px] text-slate-300 font-normal leading-[1.65] max-w-[420px]">
                Three specialized flooring technologies engineered for utility hauler garages, fold-down patio ramps, and luxury motorhome interiors.
              </p>
            </ScrollReveal>
          </div>

          {/* RIGHT SIDE PRODUCT ACCORDION (~62% on desktop) */}
          <div className="w-full lg:w-[62%] min-w-0">
            <div className="border-b border-white/15">
              {PRODUCTS.map((product, idx) => {
                const isOpen = openProductId === product.id;

                return (
                  <ScrollReveal
                    key={product.id}
                    direction="up"
                    distance={24}
                    duration={650}
                    delay={idx * 130}
                  >
                    <div
                      onClick={() => handleToggle(product.id)}
                      className="border-t border-white/15 py-6 sm:py-7 cursor-pointer transition-colors group select-none"
                    >
                    <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-7 md:gap-8">
                      {/* Product Image - Smoothly scales from compact thumbnail (125px) to expanded feature size (240px) */}
                      <div
                        className={`rounded-xl overflow-hidden shrink-0 border border-white/20 bg-slate-900 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                          isOpen
                            ? 'w-full sm:w-[220px] md:w-[240px] aspect-[16/11]'
                            : 'w-[110px] sm:w-[125px] aspect-[16/10]'
                        }`}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Content Column */}
                      <div className="flex-1 min-w-0 w-full">
                        {/* Title, Category & Plus Indicator Header */}
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-heading text-2xl sm:text-[26px] md:text-[28px] font-bold uppercase tracking-tight text-white leading-tight">
                              {product.name}
                            </h3>
                            <span
                              className={`text-xs sm:text-[13px] font-bold uppercase tracking-wider block mt-1 transition-colors duration-300 ${
                                isOpen ? 'text-[#D6314A]' : 'text-slate-300'
                              }`}
                            >
                              {product.category}
                            </span>
                          </div>

                          {/* Circular Plus Icon (smoothly rotates 45 degrees into an '×' / minus when open) */}
                          <button
                            type="button"
                            aria-label={isOpen ? 'Collapse product' : 'Expand product'}
                            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center text-white shrink-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer ${
                              isOpen
                                ? 'border-white/50 bg-white/20 rotate-45'
                                : 'border-white/25 bg-transparent group-hover:border-white/40 group-hover:bg-white/10'
                            }`}
                          >
                            <Plus className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500" />
                          </button>
                        </div>

                        {/* Expandable Accordion Body with refined smooth height animation */}
                        <div
                          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                            isOpen
                              ? 'grid-rows-[1fr] opacity-100 mt-4'
                              : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'
                          }`}
                        >
                          <div className="overflow-hidden">
                            {/* Short Product Description */}
                            <p className="text-sm sm:text-[15px] text-slate-300 font-normal leading-[1.65] max-w-xl">
                              {product.shortDesc}
                            </p>

                            {/* Maximum 3 Concise Benefits */}
                            <div className="mt-4 space-y-2 border-t border-white/10 pt-3.5">
                              {product.keyFeatures.slice(0, 3).map((feat, i) => (
                                <div
                                  key={i}
                                  className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-200"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D6314A] shrink-0" />
                                  <span className="truncate">{feat}</span>
                                </div>
                              ))}
                            </div>

                            {/* Aligned Action Buttons Row */}
                            <div className="mt-5 pt-3.5 flex items-center gap-5 pb-1">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onSelectProduct(product);
                                }}
                                className="px-6 py-2.5 bg-white text-[#003A73] hover:bg-slate-100 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider rounded-full transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
                              >
                                <span>View Product</span>
                                <ChevronRight className="w-4 h-4 text-[#D6314A]" />
                              </button>

                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onRequestSample(product);
                                }}
                                className="text-xs sm:text-[13px] font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer underline underline-offset-4"
                              >
                                Request Sample
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
