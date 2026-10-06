import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, ArrowRight, Sparkles, ShieldCheck, Layers, Ruler, Check } from 'lucide-react';
import { PRODUCTS } from '../data/deckriteData';
import { ScrollReveal } from './ScrollReveal';
import heroImage from '@/src/assets/images/hero_rv_lifestyle_1791294037336.jpg';

interface ContactSectionProps {
  initialProduct?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialProduct }) => {
  const [projectRole, setProjectRole] = useState<'OEM / Commercial' | 'Custom Upfitter' | 'RV Owner / DIY'>('OEM / Commercial');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    productInterest: initialProduct || 'All Products / Swatch Kit',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const featureSteps = [
    {
      icon: Layers,
      title: 'Complimentary Swatch Binders',
      desc: 'Physical sample swatches with all textures and finishes shipped directly to your shop.'
    },
    {
      icon: Ruler,
      title: '102-Inch Continuous Rolls',
      desc: 'Seamless wide-format rolls eliminating floor seams and water ingress hazards.'
    },
    {
      icon: ShieldCheck,
      title: 'Direct Factory Support',
      desc: 'Tiered volume pricing and direct engineering consultation from Elkhart and Little Rock.'
    }
  ];

  return (
    <section id="contact" className="py-24 lg:py-28 bg-[#F8FAFC] border-t border-slate-200/80 relative overflow-hidden">
      {/* Light ambient glow for architectural depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-[#003A73]/05 blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[72px] xl:px-[80px] relative z-10">
        
        {/* Main Floating Dark Card Container on Light Section Background */}
        <ScrollReveal direction="up" distance={36} duration={850} scale={0.98}>
          <div className="max-w-[1240px] mx-auto rounded-[32px] sm:rounded-[36px] overflow-hidden border border-slate-200/90 shadow-2xl shadow-slate-900/15 bg-[#081220]">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[660px]">
              
              {/* ========================================================================= */}
              {/* LEFT SIDE: ATTRACTIVE BRAND GRADIENT + BLURRED BACKGROUND + VALUE PILLARS */}
              {/* ========================================================================= */}
              <div className="lg:col-span-5 xl:col-span-5 relative p-8 sm:p-12 lg:p-14 flex flex-col justify-between overflow-hidden text-white border-b lg:border-b-0 lg:border-r border-white/10">
                {/* Blurred photographic background showing RV lifestyle depth */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={heroImage}
                    alt="DeckRite RV engineering"
                    className="w-full h-full object-cover filter blur-md scale-110 opacity-25"
                    referrerPolicy="no-referrer"
                  />
                  {/* Rich Brand Navy + Red gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#002752]/95 via-[#001836]/96 to-[#050D1A]/98" />
                  <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#D6314A]/20 blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#003A73]/35 blur-3xl pointer-events-none" />
                </div>

                {/* Top Brand Content */}
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/12 backdrop-blur-md border border-white/20 text-[11px] font-semibold uppercase tracking-wider text-white mb-6">
                    <Sparkles className="w-3.5 h-3.5 text-[#D6314A]" />
                    <span>Factory Direct Consultation</span>
                  </div>

                  <h3 className="font-heading text-3xl sm:text-4xl md:text-[42px] font-bold uppercase tracking-tight text-white leading-[1.06]">
                    LET'S ENGINEER YOUR NEXT BUILD.
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                    Request engineering roll sheets, physical swatch binders, or volume roll quotations for your commercial production or custom restoration.
                  </p>
                </div>

                {/* Middle Value Pillars / Process Steps */}
                <div className="relative z-10 mt-8 space-y-4">
                  {featureSteps.map((step, idx) => {
                    const IconComponent = step.icon;
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-white/08 backdrop-blur-md border border-white/12 flex items-start gap-3.5 transition-all hover:bg-white/12"
                      >
                        <div className="w-9 h-9 rounded-xl bg-[#003A73]/80 border border-white/20 flex items-center justify-center shrink-0 mt-0.5 shadow-sm text-white">
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h5 className="font-heading text-sm font-bold uppercase tracking-wide text-white">
                            {step.title}
                          </h5>
                          <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Direct Contact Bar */}
                <div className="relative z-10 mt-8 pt-6 border-t border-white/12 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#D6314A]" />
                    <span>Toll-Free:</span>
                    <a href="tel:18004524112" className="text-white font-semibold hover:text-[#D6314A] transition-colors">
                      1-800-452-4112
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#D6314A]" />
                    <a href="mailto:sales@deckrite-rv.com" className="text-white font-semibold hover:text-[#D6314A] transition-colors">
                      sales@deckrite-rv.com
                    </a>
                  </div>
                </div>
              </div>

              {/* ========================================================================= */}
              {/* RIGHT SIDE: SLEEK DARK FORM WITH GOOD SPACING & CRISP INPUTS              */}
              {/* ========================================================================= */}
              <div className="lg:col-span-7 xl:col-span-7 p-8 sm:p-12 lg:p-14 bg-[#091424] flex flex-col justify-center">
                {submitted ? (
                  /* Success Feedback State */
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-heading text-3xl font-bold uppercase text-white tracking-tight">
                      Inquiry Received
                    </h4>
                    <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto leading-relaxed">
                      Your project details and swatch kit request have been routed to our North Little Rock & Elkhart facilities. A specialist will follow up within 24 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          firstName: '',
                          lastName: '',
                          email: '',
                          phone: '',
                          productInterest: 'All Products / Swatch Kit',
                          message: ''
                        });
                      }}
                      className="mt-6 px-8 py-3.5 text-xs font-heading font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#003A73] to-[#001D3D] hover:from-[#002D5C] hover:to-[#00142B] rounded-full transition-all shadow-md cursor-pointer active:scale-95"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  /* Clean Form */
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Form Header */}
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#D6314A] block mb-1">
                        SPECIFICATION & SAMPLE REQUEST
                      </span>
                      <h4 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight">
                        REQUEST SAMPLES & PROJECT QUOTE
                      </h4>
                      <p className="mt-1.5 text-xs sm:text-sm text-slate-400">
                        Enter your project specifications below to connect directly with our engineering team.
                      </p>
                    </div>

                    {/* Project Role Selector Pills */}
                    <div className="space-y-2">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                        I am requesting as:
                      </span>
                      <div className="flex flex-wrap gap-2.5">
                        {(['OEM / Commercial', 'Custom Upfitter', 'RV Owner / DIY'] as const).map((role) => (
                          <button
                            key={role}
                            type="button"
                            onClick={() => setProjectRole(role)}
                            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer select-none ${
                              projectRole === role
                                ? 'bg-white text-slate-950 shadow-md font-bold'
                                : 'bg-white/06 border border-white/12 text-slate-300 hover:bg-white/12 hover:text-white'
                            }`}
                          >
                            {role}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name Inputs (First & Last Name) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Alex"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-4 py-3.5 text-sm bg-[#102038] border border-white/15 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-[#003A73] focus:ring-2 focus:ring-[#003A73]/50 transition-all shadow-inner"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Morgan"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-4 py-3.5 text-sm bg-[#102038] border border-white/15 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-[#003A73] focus:ring-2 focus:ring-[#003A73]/50 transition-all shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                          Work / Contact Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="alex@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 text-sm bg-[#102038] border border-white/15 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-[#003A73] focus:ring-2 focus:ring-[#003A73]/50 transition-all shadow-inner"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="(555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3.5 text-sm bg-[#102038] border border-white/15 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-[#003A73] focus:ring-2 focus:ring-[#003A73]/50 transition-all shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Product Interest Select */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Primary Product Interest
                      </label>
                      <select
                        value={formData.productInterest}
                        onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                        className="w-full px-4 py-3.5 text-sm bg-[#102038] border border-white/15 rounded-xl text-white focus:outline-none focus:border-[#003A73] focus:ring-2 focus:ring-[#003A73]/50 transition-all cursor-pointer shadow-inner"
                      >
                        <option value="All Products / Swatch Kit" className="bg-[#091424]">Complete Product Swatch Kit (All 3 Lines)</option>
                        {PRODUCTS.map((prod) => (
                          <option key={prod.id} value={prod.name} className="bg-[#091424]">
                            {prod.name} — {prod.category}
                          </option>
                        ))}
                        <option value="Custom Roll Spec" className="bg-[#091424]">Custom Roll Specification / Technical Discussion</option>
                      </select>
                    </div>

                    {/* Optional Project Note */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Project Notes / Vehicle Dimensions <span className="text-slate-400 text-[11px] font-normal">(Optional)</span>
                      </label>
                      <textarea
                        rows={2}
                        placeholder="e.g. 42ft toy hauler ramp door, or 25 units per month OEM build..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3.5 text-sm bg-[#102038] border border-white/15 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-[#003A73] focus:ring-2 focus:ring-[#003A73]/50 transition-all resize-none shadow-inner"
                      />
                    </div>

                    {/* Full-Radius Gradient Submit Button matching inspiration */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 px-8 bg-gradient-to-r from-[#003A73] via-[#004D99] to-[#002850] hover:from-[#004D99] hover:to-[#001F3E] text-white text-xs sm:text-sm font-heading font-bold uppercase tracking-wider rounded-full transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#003A73]/30 hover:shadow-2xl active:scale-98 cursor-pointer disabled:opacity-50"
                      >
                        <span>{loading ? 'Submitting Inquiry...' : 'Submit Inquiry & Request Swatches'}</span>
                        <span className="w-5 h-5 rounded-full bg-[#D6314A] flex items-center justify-center text-white">
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </button>

                      <div className="mt-3.5 flex items-center justify-center gap-2 text-xs text-slate-400">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Free physical swatch kits shipped worldwide • Engineering reply within 24 hours</span>
                      </div>
                    </div>
                  </form>
                )}
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
