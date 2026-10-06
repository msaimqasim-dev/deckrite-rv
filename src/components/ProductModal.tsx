import React from 'react';
import { Product } from '../data/deckriteData';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Download, Package } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestSample: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onRequestSample
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close product modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Media */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="px-3 py-1 bg-[#D6314A] text-white text-xs font-bold uppercase tracking-wider rounded">
              {product.category}
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl font-bold uppercase mt-2">
              {product.name}
            </h3>
            <p className="text-sm text-slate-200 mt-1">
              {product.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Product Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {product.fullDesc}
            </p>
          </div>

          {/* Technical Specifications Table */}
          <div className="bg-[#F8FAFC] rounded-xl p-5 border border-slate-200/80">
            <h4 className="font-heading text-base font-bold uppercase text-[#003A73] mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D6314A]" />
              Engineering Specifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="border-b sm:border-b-0 sm:border-r border-slate-200 pb-3 sm:pb-0 sm:pr-3">
                <span className="text-slate-500 font-medium block">Nominal Thickness</span>
                <span className="text-slate-900 font-bold text-sm mt-0.5 block">{product.thickness}</span>
              </div>
              <div className="border-b sm:border-b-0 sm:border-r border-slate-200 pb-3 sm:pb-0 sm:pr-3">
                <span className="text-slate-500 font-medium block">Roll Dimensions</span>
                <span className="text-slate-900 font-bold text-sm mt-0.5 block">{product.rollWidth}</span>
              </div>
              <div>
                <span className="text-slate-500 font-medium block">Wear Layer / Profile</span>
                <span className="text-slate-900 font-bold text-sm mt-0.5 block">{product.wearLayer}</span>
              </div>
            </div>
          </div>

          {/* Available Finishes / Patterns */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Standard Finishes & Patterns
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.finishOptions.map((finish, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-md bg-slate-100 border border-slate-200 text-xs font-medium text-slate-800"
                >
                  {finish}
                </span>
              ))}
            </div>
          </div>

          {/* Key Advantages Checklist */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Performance Attributes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.keyFeatures.map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#003A73] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Applications */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Primary Vehicle Applications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
              {product.recommendedUse.map((use, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D6314A]" />
                  <span>{use}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Technical data sheets & installation guides available upon request.
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onRequestSample(product);
                }}
                className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-[#003A73] to-[#001D3D] hover:from-[#002D5C] hover:to-[#00142B] text-white text-xs sm:text-sm font-heading font-bold uppercase tracking-wider rounded-full transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-md shadow-[#003A73]/20 active:scale-95"
              >
                <Package className="w-4 h-4 text-[#D6314A]" />
                <span>Request Swatch Sample</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
