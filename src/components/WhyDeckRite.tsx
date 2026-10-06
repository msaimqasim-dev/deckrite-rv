import React, { useState, useRef, useCallback, useEffect } from 'react';
import plankImage from '@/src/assets/images/product_deckrite_plank_1791294064446.jpg';
import ultraImage from '@/src/assets/images/product_ultra_pvc_1791294075267.jpg';
import shieldImage from '@/src/assets/images/product_shield_rv_1791294052894.jpg';
import deckAppImage from '@/src/assets/images/rv_deck_application_1791294086326.jpg';
import heroImage from '@/src/assets/images/hero_rv_lifestyle_1791294037336.jpg';
import wovenTexture from '@/src/assets/images/flooring_woven_texture_1791299201798.jpg';
import rampTexture from '@/src/assets/images/trailer_ramp_texture_1791299217133.jpg';
import loungeImage from '@/src/assets/images/rv_interior_lounge_1791299279690.jpg';
import { ScrollReveal } from './ScrollReveal';

interface TrailImage {
  id: number;
  x: number;
  y: number;
  src: string;
  rotStart: number;
  rotEnd: number;
}

// 8 curated DeckRite sample & application photos for editorial variety
const SAMPLE_IMAGES = [
  plankImage,
  ultraImage,
  shieldImage,
  deckAppImage,
  wovenTexture,
  heroImage,
  rampTexture,
  loungeImage
];

export const WhyDeckRite: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [trail, setTrail] = useState<TrailImage[]>([]);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);
  const imageIndexRef = useRef<number>(0);
  const counterRef = useRef<number>(0);
  const [isMobileOrTouch, setIsMobileOrTouch] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
      setIsMobileOrTouch(isTouch);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  // Handle cursor motion across the section - spawn floating decorative editorial cards
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (isMobileOrTouch || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (!lastPosRef.current) {
      lastPosRef.current = { x, y };
      return;
    }

    const dx = x - lastPosRef.current.x;
    const dy = y - lastPosRef.current.y;
    const dist = Math.hypot(dx, dy);

    // Spawn after reasonable distance (around 70px) so cards overlap naturally without clutter
    if (dist >= 70) {
      lastPosRef.current = { x, y };
      const currentImg = SAMPLE_IMAGES[imageIndexRef.current % SAMPLE_IMAGES.length];
      imageIndexRef.current += 1;
      counterRef.current += 1;

      const newId = counterRef.current;
      // Slight natural rotation variations around -10deg enter and +18deg exit
      const rotStart = -10 + (Math.random() * 4 - 2);
      const rotEnd = 18 + (Math.random() * 4 - 2);

      const newCard: TrailImage = {
        id: newId,
        x,
        y,
        src: currentImg,
        rotStart,
        rotEnd
      };

      setTrail((prev) => [...prev, newCard]);

      // Complete lifecycle after 1.25s (0.4s entrance + 0.8s exit + clean exit)
      setTimeout(() => {
        setTrail((prev) => prev.filter((item) => item.id !== newId));
      }, 1250);
    }
  }, [isMobileOrTouch]);

  const handleMouseLeave = () => {
    lastPosRef.current = null;
  };

  return (
    <section
      id="why-deckrite"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-visible py-28 md:py-36 lg:py-40 bg-white border-b border-slate-200/60 z-10 cursor-default"
    >
      {/* 
        LAYER 1: TRAIL IMAGES (Middle decorative layer: z-10, pointer-events: none)
        Explicitly overflow-visible so image cards can freely extend outside the top, left, 
        and surrounding boundaries into previous/next sections without being clipped!
      */}
      {!isMobileOrTouch && (
        <div className="absolute inset-0 pointer-events-none z-10 overflow-visible" aria-hidden="true">
          {trail.map((item) => (
            <div
              key={item.id}
              className="pointer-events-none absolute select-none w-48 sm:w-52 md:w-56 aspect-[16/11]"
              style={{
                left: `${item.x}px`,
                top: `${item.y}px`,
                ['--rot-start' as string]: `${item.rotStart}deg`,
                ['--rot-end' as string]: `${item.rotEnd}deg`,
                animation: 'cursorImageTrail 1.2s forwards',
                willChange: 'transform'
              }}
            >
              {/* Refined lighter/softer editorial image treatment with subtle border & shadow */}
              <div className="w-full h-full relative rounded-xl overflow-hidden border border-white/80 shadow-md shadow-slate-900/8 bg-white">
                <img
                  src={item.src}
                  alt="DeckRite application preview"
                  className="w-full h-full object-cover"
                  style={{
                    opacity: 0.84,
                    filter: 'brightness(1.05) saturate(0.86)'
                  }}
                  referrerPolicy="no-referrer"
                />
                {/* Subtle soft light wash overlay so images blend harmoniously behind dark typography */}
                <div className="absolute inset-0 bg-white/10 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 
        LAYER 2: MAIN CONTENT (Highest layer: z-20)
        Main text remains centered, clean, perfectly readable and visually dominant.
        No cards below — short, spacious, and impactful.
      */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[72px] xl:px-[80px] pointer-events-none">
        <ScrollReveal direction="up" distance={24} duration={750}>
          <div className="text-center max-w-[860px] mx-auto pointer-events-auto">
            {/* Eyebrow */}
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-widest text-[#D6314A] block mb-3">
              WHY DECKRITE RV
            </span>

            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold uppercase tracking-tight text-slate-900 leading-[1.08] text-balance">
              ENGINEERED SURFACES FOR THE DEMANDS OF THE OPEN ROAD.
            </h2>

            {/* Supporting paragraph */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 font-normal leading-[1.65] max-w-[620px] mx-auto">
              Standard residential flooring fails under chassis vibration, road salt, and harsh thermal cycles. DeckRite systems are purpose-built to endure every mile and every season.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
