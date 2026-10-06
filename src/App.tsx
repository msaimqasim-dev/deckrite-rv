import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyDeckRite } from './components/WhyDeckRite';
import { ProductsSection } from './components/ProductsSection';
import { RealApplications } from './components/RealApplications';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { FaqWarrantyModal } from './components/FaqWarrantyModal';
import { AboutModal } from './components/AboutModal';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { ScrollToTop } from './components/ScrollToTop';
import { Product, PRODUCTS } from './data/deckriteData';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { WhoWeArePage } from './pages/WhoWeArePage';
import { FaqsPage } from './pages/FaqsPage';
import { WarrantyPage } from './pages/WarrantyPage';

type RouteType = 
  | 'home'
  | 'who-we-are'
  | 'faqs'
  | 'warranty'
  | 'product:shield-rv'
  | 'product:deckrite-plank'
  | 'product:ultra-woven-pvc';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<RouteType>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [faqModalOpen, setFaqModalOpen] = useState(false);
  const [faqInitialTab, setFaqInitialTab] = useState<'faqs' | 'warranty'>('faqs');
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [contactInitialProduct, setContactInitialProduct] = useState<string>('');

  // Sync with URL hash for true multi-page navigation and browser back/forward support
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (!hash || hash === '' || hash === 'home') {
        setCurrentRoute('home');
      } else if (hash.startsWith('products/')) {
        const prodId = hash.replace('products/', '');
        if (prodId === 'ultra-pvc') {
          setCurrentRoute('product:ultra-woven-pvc');
        } else {
          setCurrentRoute(`product:${prodId}` as RouteType);
        }
      } else if (hash === 'who-we-are' || hash === 'about') {
        setCurrentRoute('who-we-are');
      } else if (hash === 'faqs') {
        setCurrentRoute('faqs');
      } else if (hash === 'warranty') {
        setCurrentRoute('warranty');
      } else if (hash === 'contact') {
        setCurrentRoute('home');
        setTimeout(() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const navigateTo = (route: RouteType, updateHash = true) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (updateHash) {
      if (route === 'home') {
        window.history.pushState(null, '', '#/');
      } else if (route.startsWith('product:')) {
        const prodId = route.replace('product:', '');
        window.history.pushState(null, '', `#/products/${prodId}`);
      } else {
        window.history.pushState(null, '', `#/${route}`);
      }
    }
  };

  const scrollToSection = (id: string) => {
    if (currentRoute !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = () => {
    scrollToSection('contact');
  };

  const handleOpenFaq = () => {
    navigateTo('faqs');
  };

  const handleOpenWarranty = () => {
    navigateTo('warranty');
  };

  const handleRequestSample = (product: Product) => {
    setSelectedProduct(null);
    setContactInitialProduct(product.name);
    scrollToSection('contact');
  };

  const handleSelectProduct = (product: Product) => {
    navigateTo(`product:${product.id}` as RouteType);
  };

  const handleNavigateProductById = (productId: string) => {
    let normalized = productId;
    if (productId === 'ultra-pvc') normalized = 'ultra-woven-pvc';
    navigateTo(`product:${normalized}` as RouteType);
  };

  // Determine current active product ID if on a product page
  const currentProductId = currentRoute.startsWith('product:')
    ? currentRoute.replace('product:', '')
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-body selection:bg-[#003A73] selection:text-white overflow-x-clip">
      {/* Sleek Gradient Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* 1. Navbar with Logo on left, Mega Menu for Products, Who We Are, FAQs, Warranty, Contact CTA */}
      <Header
        currentRoute={currentRoute}
        onNavigateHome={() => navigateTo('home')}
        onNavigateProduct={handleNavigateProductById}
        onNavigateWhoWeAre={() => navigateTo('who-we-are')}
        onNavigateFaqs={() => navigateTo('faqs')}
        onNavigateWarranty={() => navigateTo('warranty')}
        onOpenContact={handleOpenContact}
      />

      {/* 2. Main Multi-Page Content Area */}
      <main className="flex-1 overflow-x-clip">
        {currentRoute === 'home' && (
          <>
            {/* Section 1: Editorial Hero with Pill Images & Sculpted Notched CTA */}
            <Hero
              onExploreProducts={() => scrollToSection('products')}
              onContactClick={handleOpenContact}
            />

            {/* Section 2: Why DeckRite (Directly after Hero with Unclipped Image Trail) */}
            <WhyDeckRite />

            {/* Section 3: Our Products (Editorial Sticky Left Column + Accordion + Left Red Lines) */}
            <ProductsSection
              onSelectProduct={handleSelectProduct}
              onRequestSample={handleRequestSample}
            />

            {/* Section 4: Products in Real RV Applications (Exactly 3 cards for the 3 product pages) */}
            <RealApplications 
              onNavigateProduct={handleNavigateProductById}
              onOpenContact={handleOpenContact} 
            />

            {/* Section 5: Who We Are (Clean architectural specification matrix) */}
            <AboutSection onLearnMoreClick={() => navigateTo('who-we-are')} />

            {/* Section 6: Contact & Consultation CTA with Brand Scrim & Floating Dark Card */}
            <ContactSection initialProduct={contactInitialProduct} />
          </>
        )}

        {/* Dedicated Product Pages */}
        {currentProductId && (
          <ProductDetailPage
            productId={currentProductId}
            onNavigateHome={() => navigateTo('home')}
            onNavigateProduct={handleNavigateProductById}
            onRequestSample={handleRequestSample}
            onOpenContact={handleOpenContact}
          />
        )}

        {/* Dedicated "Who We Are" Page */}
        {currentRoute === 'who-we-are' && (
          <WhoWeArePage
            onNavigateHome={() => navigateTo('home')}
            onOpenContact={handleOpenContact}
          />
        )}

        {/* Dedicated "FAQs" Page */}
        {currentRoute === 'faqs' && (
          <FaqsPage
            onNavigateHome={() => navigateTo('home')}
            onOpenContact={handleOpenContact}
          />
        )}

        {/* Dedicated "Warranty" Page */}
        {currentRoute === 'warranty' && (
          <WarrantyPage
            onNavigateHome={() => navigateTo('home')}
            onOpenContact={handleOpenContact}
          />
        )}
      </main>

      {/* 3. Architectural Footer with Menus Permalinks, LinkedIn, Facebook, Instagram & Outline Brand Name */}
      <Footer
        onNavigateHome={() => navigateTo('home')}
        onNavigateProduct={handleNavigateProductById}
        onNavigateWhoWeAre={() => navigateTo('who-we-are')}
        onOpenFaq={handleOpenFaq}
        onOpenWarranty={handleOpenWarranty}
        onOpenContact={handleOpenContact}
      />

      {/* Floating Scroll To Top Action with Circular Progress Indicator */}
      <ScrollToTop />

      {/* Auxiliary Quick Modals (if triggered directly) */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestSample={handleRequestSample}
      />

      <FaqWarrantyModal
        isOpen={faqModalOpen}
        initialTab={faqInitialTab}
        onClose={() => setFaqModalOpen(false)}
        onOpenContact={handleOpenContact}
      />

      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onOpenContact={handleOpenContact}
      />
    </div>
  );
}
