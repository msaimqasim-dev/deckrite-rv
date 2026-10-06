import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronRight, 
  Plus, 
  Minus, 
  Search, 
  ArrowRight, 
  FileText, 
  Phone,
  ShieldCheck
} from 'lucide-react';
import { FAQS, FAQItem } from '../data/deckriteData';
import { ScrollReveal } from '../components/ScrollReveal';

interface FaqsPageProps {
  onNavigateHome: () => void;
  onOpenContact: () => void;
}

export const FaqsPage: React.FC<FaqsPageProps> = ({
  onNavigateHome,
  onOpenContact
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndices, setOpenIndices] = useState<Record<number, boolean>>({
    0: true
  });

  const categories = ['All', 'Installation', 'Durability', 'Specifications', 'Maintenance', 'Ordering', 'Warranty'];

  const toggleFaq = (index: number) => {
    setOpenIndices((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const filteredFaqs = FAQS.map((faq, index) => ({ faq, originalIndex: index })).filter(({ faq }) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
          <span className="font-semibold text-[#003A73]">Technical FAQs</span>
        </div>
      </div>

      {/* 2. Page Header */}
      <section className="py-16 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[72px] xl:px-[80px]">
          <div className="max-w-3xl">
            <ScrollReveal direction="up" distance={20} duration={700}>
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-widest text-[#D6314A] block mb-2">
                ENGINEERING KNOWLEDGE BASE
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold uppercase tracking-tight text-slate-900">
                FREQUENTLY ASKED TECHNICAL QUESTIONS
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                Everything you need to know about subfloor preparation, approved adhesives, cold-weather installation, seam welding, and OEM roll specifications.
              </p>
            </ScrollReveal>
          </div>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by keyword (e.g. adhesive, ramp, cold, warranty, oil)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#003A73] shadow-xs"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#003A73] text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FAQ Accordion List */}
      <section className="py-16 max-w-[1040px] mx-auto px-6 sm:px-10">
        {filteredFaqs.length === 0 ? (
          <div className="py-16 text-center">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="font-heading text-xl font-bold uppercase text-slate-800">
              No matching questions found
            </h3>
            <p className="text-slate-500 text-sm mt-1">
              Try searching for different terms or reach out directly to our engineering support team.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map(({ faq, originalIndex }) => {
              const isOpen = !!openIndices[originalIndex];
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(originalIndex)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                  >
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#D6314A] block mb-1">
                        {faq.category}
                      </span>
                      <h4 className="font-heading text-lg sm:text-xl font-bold uppercase text-slate-900 leading-snug">
                        {faq.question}
                      </h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-1 text-[#003A73]">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Can't find question banner */}
        <div className="mt-16 p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-heading text-xl font-bold uppercase text-slate-900">
              HAVE A SPECIFIC SUBFLOOR OR VEHICLE QUESTION?
            </h4>
            <p className="text-sm text-slate-600 mt-1">
              Speak directly with a DeckRite technical engineer in North Little Rock, AR or Elkhart, IN.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-6 py-3 rounded-full bg-[#003A73] hover:bg-[#00284d] text-white text-xs sm:text-sm font-heading font-bold uppercase tracking-wider shrink-0 cursor-pointer active:scale-95 transition-all"
          >
            Ask An Engineer
          </button>
        </div>
      </section>
    </div>
  );
};
