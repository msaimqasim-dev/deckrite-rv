import React, { useState } from 'react';
import { Product, PRODUCTS } from '../data/deckriteData';
import { 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Download, 
  ShieldCheck, 
  Layers, 
  Ruler, 
  Sun, 
  Sparkles, 
  FileText, 
  CheckCircle2,
  ChevronRight,
  Phone,
  Mail
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

interface ProductDetailPageProps {
  productId: string;
  onNavigateHome: () => void;
  onNavigateProduct: (id: string) => void;
  onRequestSample: (product: Product) => void;
  onOpenContact: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  productId,
  onNavigateHome,
  onNavigateProduct,
  onRequestSample,
  onOpenContact
}) => {
  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];
  const [selectedFinish, setSelectedFinish] = useState(product.finishOptions[0]);
  const [specDownloaded, setSpecDownloaded] = useState(false);

  // Other products for "Explore Other Flooring Systems"
  const otherProducts = PRODUCTS.filter((p) => p.id !== product.id);

  const handleDownloadSpec = () => {
    setSpecDownloaded(true);
    setTimeout(() => setSpecDownloaded(false), 3000);
  };

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
          <button 
            onClick={onNavigateHome}
            className="hover:text-[#003A73] transition-colors cursor-pointer"
          >
            Products
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-[#003A73]">{product.name}</span>
        </div>
      </div>

      {/* 2. Product Hero Overview */}
      <section className="py-12 lg:py-16 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[72px] xl:px-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Product Imagery & Swatch Preview */}
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal direction="up" distance={20} duration={700}>
                <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl shadow-slate-900/5 bg-slate-900 aspect-[16/11]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-5 left-5">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider border border-white/20">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute bottom-5 right-5">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#003A73]/90 backdrop-blur-md text-white text-xs font-medium tracking-wide">
                      Selected: {selectedFinish}
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Finish Options Swatches */}
              <ScrollReveal direction="up" distance={20} duration={700} delay={100}>
                <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                    Available Surface Finishes & Colorways
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {product.finishOptions.map((finish) => (
                      <button
                        key={finish}
                        onClick={() => setSelectedFinish(finish)}
                        className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer text-xs ${
                          selectedFinish === finish
                            ? 'border-[#003A73] bg-[#003A73]/05 font-bold text-[#003A73] ring-1 ring-[#003A73]'
                            : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div className="w-3.5 h-3.5 rounded-full bg-[#003A73] mb-1.5" />
                        <span className="line-clamp-1">{finish}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Product Narrative, Specs & Actions */}
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal direction="up" distance={20} duration={700}>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D6314A] block mb-2">
                  ENGINEERED RV MEMBRANE
                </span>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-[54px] font-bold uppercase tracking-tight text-slate-900 leading-[1.05]">
                  {product.name}
                </h1>
                <p className="text-lg sm:text-xl font-medium text-[#003A73] mt-2">
                  {product.tagline}
                </p>
                <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                  {product.fullDesc}
                </p>
              </ScrollReveal>

              {/* Quick Specification Grid */}
              <ScrollReveal direction="up" distance={20} duration={700} delay={100}>
                <div className="grid grid-cols-2 gap-4 py-5 border-y border-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#003A73]/10 text-[#003A73] flex items-center justify-center shrink-0">
                      <Ruler className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">
                        Roll Width
                      </span>
                      <span className="font-heading text-base font-bold text-slate-900">
                        {product.rollWidth}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#003A73]/10 text-[#003A73] flex items-center justify-center shrink-0">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">
                        Membrane Thickness
                      </span>
                      <span className="font-heading text-base font-bold text-slate-900">
                        {product.thickness}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#003A73]/10 text-[#003A73] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">
                        Wear Surface
                      </span>
                      <span className="font-heading text-base font-bold text-slate-900">
                        {product.wearLayer}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#003A73]/10 text-[#003A73] flex items-center justify-center shrink-0">
                      <Sun className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">
                        Weather & UV Spec
                      </span>
                      <span className="font-heading text-base font-bold text-slate-900">
                        -40°F to 150°F Tested
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Action Buttons */}
              <ScrollReveal direction="up" distance={20} duration={700} delay={150}>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <button
                    onClick={() => onRequestSample(product)}
                    className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#003A73] to-[#001D3D] hover:from-[#002D5C] hover:to-[#00142B] text-white text-xs sm:text-sm font-heading font-bold uppercase tracking-wider shadow-lg shadow-[#003A73]/20 hover:shadow-xl cursor-pointer active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request Free Sample Kit</span>
                    <ArrowRight className="w-4 h-4 text-[#D6314A]" />
                  </button>

                  <button
                    onClick={handleDownloadSpec}
                    className="px-7 py-3.5 rounded-full border-2 border-slate-300 hover:border-[#003A73] text-slate-700 hover:text-[#003A73] bg-white text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>{specDownloaded ? 'Spec Sheet Ready' : 'Download Spec Sheet'}</span>
                  </button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Key Features & Engineering Benefits */}
      <section className="py-20 lg:py-24 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[72px] xl:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Key Features */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D6314A] block">
              MEMBRANE CAPABILITIES
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-slate-900 leading-tight">
              KEY PERFORMANCE ADVANTAGES
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Every DeckRite product is engineered from the ground up for vehicle chassis vibration, extreme temperature flex, and heavy abuse that would destroy standard vinyl or laminate.
            </p>

            <div className="space-y-4 pt-2">
              {product.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/80">
                  <div className="w-6 h-6 rounded-full bg-[#003A73] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-slate-800 font-medium text-sm sm:text-base">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Recommended Applications */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D6314A] block">
              RECOMMENDED USE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-slate-900 leading-tight">
              OPTIMAL INSTALLATION ZONES
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Engineered for seamless integration into OEM factory production lines, custom toy hauler conversions, and premium motorhome refits.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {product.recommendedUse.map((use, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-slate-200/90 bg-white shadow-xs hover:border-[#003A73] transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-[#D6314A]/10 text-[#D6314A] flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading text-lg font-bold uppercase text-slate-900 leading-snug">
                    {use}
                  </h4>
                  <span className="text-xs text-slate-500 mt-1 block">
                    Factory approved specification
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Cross-Sell: Explore Other 2 Products */}
      <section className="py-16 bg-[#F8FAFC] border-t border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[72px] xl:px-[80px]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D6314A] block mb-2">
                COMPLETE RV FLOORING SYSTEM
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-slate-900">
                EXPLORE COMPLEMENTARY DECKRITE PRODUCTS
              </h3>
            </div>
            <button
              onClick={onNavigateHome}
              className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-[#003A73] hover:text-[#D6314A] transition-colors inline-flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Products</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProducts.map((other) => (
              <div
                key={other.id}
                onClick={() => onNavigateProduct(other.id)}
                className="group p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#003A73]/40 transition-all cursor-pointer flex flex-col sm:flex-row items-center gap-6"
              >
                <div className="w-full sm:w-48 h-36 rounded-2xl overflow-hidden shrink-0 bg-slate-900">
                  <img
                    src={other.image}
                    alt={other.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D6314A] block mb-1">
                    {other.category}
                  </span>
                  <h4 className="font-heading text-xl sm:text-2xl font-bold uppercase text-slate-900 group-hover:text-[#003A73] transition-colors">
                    {other.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2">
                    {other.shortDesc}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#003A73] group-hover:text-[#D6314A] transition-colors">
                    <span>View Product Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Consultation & Sample CTA Banner */}
      <section className="py-16 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[72px] xl:px-[80px]">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#001D3D] via-[#003A73] to-[#00142B] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-2xl text-center lg:text-left">
            <h3 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white leading-tight">
              READY TO SPECIFY {product.name.toUpperCase()} FOR YOUR RIG?
            </h3>
            <p className="mt-3 text-slate-200 text-sm sm:text-base leading-relaxed">
              Order complimentary 4x4 swatch samples or talk directly with our engineering team in Elkhart, IN and North Little Rock, AR.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0 flex-wrap justify-center">
            <button
              onClick={() => onRequestSample(product)}
              className="px-8 py-3.5 rounded-full bg-white text-[#003A73] hover:bg-slate-100 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider shadow-lg cursor-pointer active:scale-95 transition-all"
            >
              Order Swatch Kit
            </button>
            <button
              onClick={onOpenContact}
              className="px-8 py-3.5 rounded-full border-2 border-white/40 hover:border-white text-white text-xs sm:text-sm font-heading font-bold uppercase tracking-wider hover:bg-white/10 cursor-pointer active:scale-95 transition-all"
            >
              Contact Sales Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
