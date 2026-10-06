import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS, Product } from '../data/deckriteData';
import logoDark from '@/src/assets/images/logo-drop-shadow 1.svg';

interface HeaderProps {
  currentRoute?: string;
  onNavigateHome: () => void;
  onNavigateProduct: (productId: string) => void;
  onNavigateWhoWeAre: () => void;
  onNavigateFaqs: () => void;
  onNavigateWarranty: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute = 'home',
  onNavigateHome,
  onNavigateProduct,
  onNavigateWhoWeAre,
  onNavigateFaqs,
  onNavigateWarranty,
  onOpenContact
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnterProducts = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    setMegaMenuOpen(true);
  };

  const handleMouseLeaveProducts = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 200);
  };

  const handleSelectProduct = (productId: string) => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
    onNavigateProduct(productId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[72px] xl:px-[80px]">
        <div className="flex items-center justify-between h-14">
          
          {/* 1. Logo on the left */}
          <button
            onClick={onNavigateHome}
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003A73] rounded-sm cursor-pointer text-left shrink-0"
            aria-label="DeckRite RV home"
          >
            <img
              src={logoDark}
              alt="DeckRite RV"
              className="h-9 sm:h-11 w-auto max-h-11 max-w-[180px] sm:max-w-[230px] object-contain object-left transition-transform group-hover:scale-[1.02]"
            />
          </button>

          {/* 2. Desktop Navigation with Mega Menu */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-[15px] font-medium text-slate-700">
            
            {/* Products Dropdown with Mega Menu */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterProducts}
              onMouseLeave={handleMouseLeaveProducts}
            >
              <button
                type="button"
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                className={`flex items-center gap-1.5 hover:text-[#003A73] transition-colors cursor-pointer py-2 ${
                  currentRoute.startsWith('product') ? 'text-[#003A73] font-bold' : ''
                }`}
                aria-expanded={megaMenuOpen}
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    megaMenuOpen ? 'rotate-180 text-[#003A73]' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Mega Menu Dropdown Container */}
              {megaMenuOpen && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[820px] max-w-[92vw] pt-2 z-50"
                  onMouseEnter={handleMouseEnterProducts}
                  onMouseLeave={handleMouseLeaveProducts}
                >
                  <div className="rounded-3xl bg-white border border-slate-200/90 shadow-2xl shadow-slate-900/15 overflow-hidden p-6 sm:p-7">
                    
                    {/* Header in Mega Menu */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#D6314A] block">
                          OUR THREE CORE PRODUCT LINES
                        </span>
                        <h4 className="font-heading text-lg font-bold uppercase text-slate-900 mt-0.5">
                          ENGINEERED FOR EVERY RV ZONE
                        </h4>
                      </div>
                      <span className="text-xs text-slate-500">
                        8.5 ft / 102" continuous seamless roll options
                      </span>
                    </div>

                    {/* 3 Product Cards side by side */}
                    <div className="grid grid-cols-3 gap-5">
                      {PRODUCTS.map((prod) => (
                        <div
                          key={prod.id}
                          onClick={() => handleSelectProduct(prod.id)}
                          className="group p-3.5 rounded-2xl border border-slate-200/80 hover:border-[#003A73] bg-[#F8FAFC] hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
                        >
                          <div>
                            <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 mb-3 relative">
                              <img
                                src={prod.image}
                                alt={prod.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute top-2 left-2">
                                <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider">
                                  {prod.category}
                                </span>
                              </div>
                            </div>

                            <h5 className="font-heading text-base font-bold uppercase text-slate-900 group-hover:text-[#003A73] transition-colors leading-tight">
                              {prod.name}
                            </h5>

                            <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                              {prod.shortDesc}
                            </p>
                          </div>

                          <div className="mt-3 pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#003A73] group-hover:text-[#D6314A] transition-colors">
                            <span>Explore Page</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom action row inside mega menu */}
                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 bg-slate-50/70 -mx-7 -mb-7 px-7 py-3.5">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#D6314A]" />
                        <span>Need physical samples? Request a complimentary 4x4 swatch kit shipped free.</span>
                      </div>
                      <button
                        onClick={() => {
                          setMegaMenuOpen(false);
                          onOpenContact();
                        }}
                        className="font-heading font-bold text-[#003A73] hover:text-[#D6314A] uppercase tracking-wider cursor-pointer"
                      >
                        Request Swatches →
                      </button>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Who We Are Link */}
            <button
              onClick={() => {
                setMegaMenuOpen(false);
                onNavigateWhoWeAre();
              }}
              className={`hover:text-[#003A73] transition-colors cursor-pointer whitespace-nowrap ${
                currentRoute === 'who-we-are' ? 'text-[#003A73] font-bold' : ''
              }`}
            >
              Who We Are
            </button>

            {/* FAQs Link */}
            <button
              onClick={() => {
                setMegaMenuOpen(false);
                onNavigateFaqs();
              }}
              className={`hover:text-[#003A73] transition-colors cursor-pointer whitespace-nowrap ${
                currentRoute === 'faqs' ? 'text-[#003A73] font-bold' : ''
              }`}
            >
              FAQs
            </button>

            {/* Warranty Link */}
            <button
              onClick={() => {
                setMegaMenuOpen(false);
                onNavigateWarranty();
              }}
              className={`hover:text-[#003A73] transition-colors cursor-pointer whitespace-nowrap ${
                currentRoute === 'warranty' ? 'text-[#003A73] font-bold' : ''
              }`}
            >
              Warranty
            </button>
          </nav>

          {/* 3. Right: Contact Us CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#003A73] to-[#001D3D] hover:from-[#002D5C] hover:to-[#00142B] rounded-full transition-all whitespace-nowrap shadow-md shadow-[#003A73]/20 hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4 text-[#D6314A]" />
            </button>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-[#003A73] focus:outline-none rounded-full cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* 4. Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 mt-3 pt-4 pb-5 px-2 space-y-3 bg-white rounded-2xl shadow-xl">
            {/* Products Accordion in Mobile */}
            <div>
              <button
                type="button"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-xl cursor-pointer"
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? 'rotate-180 text-[#003A73]' : ''}`} />
              </button>

              {mobileProductsOpen && (
                <div className="pl-4 pr-2 pt-2 space-y-2">
                  {PRODUCTS.map((prod) => (
                    <button
                      key={prod.id}
                      onClick={() => handleSelectProduct(prod.id)}
                      className="w-full text-left p-2.5 rounded-xl bg-slate-50 hover:bg-[#003A73]/05 flex items-center gap-3 cursor-pointer"
                    >
                      <div className="w-12 h-10 rounded-lg overflow-hidden shrink-0 bg-slate-900">
                        <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="font-heading text-sm font-bold uppercase text-slate-900">
                          {prod.name}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {prod.category}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Who We Are */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateWhoWeAre();
              }}
              className="block w-full text-left px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-xl"
            >
              Who We Are
            </button>

            {/* FAQs */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateFaqs();
              }}
              className="block w-full text-left px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-xl"
            >
              FAQs
            </button>

            {/* Warranty */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateWarranty();
              }}
              className="block w-full text-left px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-xl"
            >
              Warranty
            </button>

            {/* Contact CTA */}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-heading font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#003A73] to-[#001D3D] rounded-full shadow-md active:scale-98"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4 text-[#D6314A]" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
