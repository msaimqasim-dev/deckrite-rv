import React from 'react';
import { ArrowUpRight, Phone, Mail, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import logoLight from '@/src/assets/images/deckrite_rv_logo_dark_bg.svg';

interface FooterProps {
  onNavigateHome?: () => void;
  onNavigateProduct?: (productId: string) => void;
  onNavigateWhoWeAre?: () => void;
  onOpenFaq: () => void;
  onOpenWarranty: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateHome,
  onNavigateProduct,
  onNavigateWhoWeAre,
  onOpenFaq,
  onOpenWarranty,
  onOpenContact
}) => {
  return (
    <footer className="relative bg-gradient-to-r from-[#003870] via-[#00244D] to-[#001229] text-white pt-20 pb-12 overflow-hidden border-t border-white/10 select-none">
      
      {/* ========================================================================= */}
      {/* EXTREME FAR-RIGHT DECORATIVE BRAND RED VERTICAL LINES (Attached to right) */}
      {/* ========================================================================= */}
      <div
        className="absolute top-0 bottom-0 right-0 w-32 sm:w-44 md:w-56 lg:w-72 pointer-events-none z-0 overflow-hidden select-none"
        aria-hidden="true"
        style={{ transform: 'scaleX(-1)' }}
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
            <linearGradient id="footerRedLinesGrad" x1="0" y1="100%" x2="0" y2="0%">
              <stop offset="0%" stopColor="#D6314A" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#D6314A" stopOpacity="0.55" />
              <stop offset="65%" stopColor="#D6314A" stopOpacity="0.22" />
              <stop offset="90%" stopColor="#D6314A" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#D6314A" stopOpacity="0" />
            </linearGradient>

            {/* Horizontal dissolve mask: softly blends into the dark blue background */}
            <linearGradient id="footerHorizDissolve" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="40%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="75%" stopColor="#ffffff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            <mask id="footerRedBarsMask">
              <rect x="0" y="0" width="200" height="800" fill="url(#footerHorizDissolve)" />
            </mask>
          </defs>

          {/* 6 vertical red bars with rhythmic widths attached to the edge */}
          <g mask="url(#footerRedBarsMask)">
            <rect x="0" y="0" width="22" height="800" fill="url(#footerRedLinesGrad)" />
            <rect x="30" y="0" width="16" height="800" fill="url(#footerRedLinesGrad)" />
            <rect x="54" y="0" width="11" height="800" fill="url(#footerRedLinesGrad)" />
            <rect x="73" y="0" width="7" height="800" fill="url(#footerRedLinesGrad)" />
            <rect x="88" y="0" width="4.5" height="800" fill="url(#footerRedLinesGrad)" />
            <rect x="99" y="0" width="2.5" height="800" fill="url(#footerRedLinesGrad)" />
          </g>
        </svg>

        {/* Soft atmospheric red glow near bottom right */}
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[#D6314A]/15 blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[72px] xl:px-[80px]">
        {/* ========================================================================= */}
        {/* TOP SECTION: BRAND LOGO, SUBTEXT, PERMALINKS, SOCIALS AND CONTACT DETAILS */}
        {/* ========================================================================= */}
        <ScrollReveal direction="up" distance={24} duration={750}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-16 border-b border-white/15">
            {/* Column 1: Brand Logo & Mission */}
            <div className="md:col-span-4 space-y-5">
              <button 
                onClick={onNavigateHome}
                className="cursor-pointer text-left focus:outline-none"
              >
                <img src={logoLight} alt="DeckRite RV" className="h-20 w-auto" />
              </button>
              
              <p className="text-sm sm:text-base text-slate-300 max-w-sm leading-relaxed">
                Purpose-engineered flooring membranes for sport trailers, fold-out ramp decks, and luxury motorhome interiors. Engineered for continuous highway vibration and extreme weather cycles.
              </p>

              {/* Social Media Links: LinkedIn, Facebook, Instagram */}
              <div className="pt-2">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-3">
                  Connect With DeckRite
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/company/deckrite"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="DeckRite on LinkedIn"
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D6314A] border border-white/20 hover:border-transparent flex items-center justify-center text-white transition-all duration-200 hover:scale-110 shadow-xs"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.facebook.com/deckriterv"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="DeckRite on Facebook"
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0052A3] border border-white/20 hover:border-transparent flex items-center justify-center text-white transition-all duration-200 hover:scale-110 shadow-xs"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/deckriterv"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="DeckRite on Instagram"
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 border border-white/20 hover:border-transparent flex items-center justify-center text-white transition-all duration-200 hover:scale-110 shadow-xs"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#003A73] hover:bg-slate-100 rounded-full text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md active:scale-95"
                >
                  <span>Discuss Your Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D6314A]" />
                </button>
              </div>
            </div>

            {/* Column 2: Product Categories (Mapped to Dedicated Pages) */}
            <div className="md:col-span-3 space-y-4">
              <h5 className="text-xs uppercase tracking-widest text-[#D6314A] font-bold">
                Products Menu
              </h5>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>
                  <button
                    onClick={() => onNavigateProduct ? onNavigateProduct('shield-rv') : undefined}
                    className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <span>Shield RV (Sport / Cargo)</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateProduct ? onNavigateProduct('deckrite-plank') : undefined}
                    className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <span>DeckRite Plank (Ramp / Deck)</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateProduct ? onNavigateProduct('ultra-woven-pvc') : undefined}
                    className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <span>ULTRA Woven PVC (Interiors)</span>
                  </button>
                </li>
                <li className="pt-2 border-t border-white/10">
                  <button
                    onClick={onOpenContact}
                    className="text-xs font-semibold text-[#D6314A] hover:text-white transition-colors cursor-pointer text-left"
                  >
                    + Request Physical Swatch Kit
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Company & Information Links */}
            <div className="md:col-span-2 space-y-4">
              <h5 className="text-xs uppercase tracking-widest text-[#D6314A] font-bold">
                Company & Support
              </h5>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>
                  <button
                    onClick={onNavigateWhoWeAre}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Who We Are
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenFaq}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Technical FAQs
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenWarranty}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Warranty Coverage
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenContact}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Contact & OEM Inquiries
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Distribution Hubs */}
            <div className="md:col-span-3 space-y-4">
              <h5 className="text-xs uppercase tracking-widest text-[#D6314A] font-bold">
                Operations & Hubs
              </h5>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#D6314A] shrink-0" />
                  <a href="mailto:sales@deckrite-rv.com" className="hover:text-white transition-colors">
                    sales@deckrite-rv.com
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#D6314A] shrink-0" />
                  <a href="tel:18004524112" className="hover:text-white transition-colors font-semibold">
                    1-800-452-4112 (Toll-Free)
                  </a>
                </div>
                <div className="flex items-start gap-2.5 pt-1">
                  <MapPin className="w-4 h-4 text-[#D6314A] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 leading-relaxed">
                    Extrusion: North Little Rock, AR<br />
                    OEM Logistics Hub: Elkhart, IN
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ========================================================================= */}
        {/* FULL-WIDTH STROKE-ONLY OUTLINE BRAND NAME (No fill, stroke only)          */}
        {/* ========================================================================= */}
        <ScrollReveal direction="zoom" scale={0.96} duration={850} delay={100}>
          <div className="w-full overflow-hidden select-none py-6 sm:py-8 lg:py-10 text-center">
            <div
              className="font-heading font-black uppercase tracking-tighter text-[16vw] sm:text-[15vw] md:text-[14vw] lg:text-[13vw] leading-none text-transparent whitespace-nowrap block"
              style={{
                WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.24)',
                letterSpacing: '0.03em'
              }}
            >
              DECKRITE
            </div>
          </div>
        </ScrollReveal>

        {/* ========================================================================= */}
        {/* BELOW: COPYRIGHT, TERMS, AND POLICY LINKS                                 */}
        {/* ========================================================================= */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} DeckRite RV Flooring Systems. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <button onClick={onOpenWarranty} className="hover:text-white transition-colors cursor-pointer">
              Warranty Coverage Terms
            </button>
            <button onClick={onOpenFaq} className="hover:text-white transition-colors cursor-pointer">
              Technical FAQs
            </button>
            <button onClick={onOpenContact} className="hover:text-white transition-colors cursor-pointer">
              OEM Portal & Samples
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
