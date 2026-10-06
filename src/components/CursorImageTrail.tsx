import React, { useState, useRef, useEffect, useCallback } from 'react';
import shieldImage from '@/src/assets/images/product_shield_rv_1791294052894.jpg';
import plankImage from '@/src/assets/images/product_deckrite_plank_1791294064446.jpg';
import ultraImage from '@/src/assets/images/product_ultra_pvc_1791294075267.jpg';
import wovenTexture from '@/src/assets/images/flooring_woven_texture_1791299201798.jpg';
import deckAppImage from '@/src/assets/images/rv_deck_application_1791294086326.jpg';
import rampTexture from '@/src/assets/images/trailer_ramp_texture_1791299217133.jpg';
import heroImage from '@/src/assets/images/hero_rv_lifestyle_1791294037336.jpg';
import loungeImage from '@/src/assets/images/rv_interior_lounge_1791299279690.jpg';
import { Sparkles, ArrowRight, MousePointer } from 'lucide-react';

export interface TrailItem {
  id: number;
  x: number;
  y: number;
  src: string;
  title: string;
  category: string;
  rotStart: number;
  rotEnd: number;
}

// 8 distinct DeckRite images covering all required categories
export const TRAIL_IMAGES = [
  {
    src: deckAppImage,
    title: 'Toy Hauler Patio Deck',
    category: 'Ramp / Deck'
  },
  {
    src: ultraImage,
    title: 'Luxury Motorhome Interior',
    category: 'RV Interiors'
  },
  {
    src: shieldImage,
    title: 'Sport Utility Garage Bay',
    category: 'Sport / Trailers'
  },
  {
    src: wovenTexture,
    title: 'Acoustic Woven Textile',
    category: 'Flooring Texture'
  },
  {
    src: plankImage,
    title: 'DeckRite Waterproof Plank',
    category: 'Ramp / Deck'
  },
  {
    src: rampTexture,
    title: 'Heavy-Duty Ramp Grip',
    category: 'Flooring Texture'
  },
  {
    src: loungeImage,
    title: 'Class A Galley & Dinette',
    category: 'RV Interiors'
  },
  {
    src: heroImage,
    title: 'All-Terrain Adventure Trailer',
    category: 'Installed RV'
  }
];

// Card dimensions & movement threshold (50% of card width)
const CARD_WIDTH = 250;
const MOVEMENT_THRESHOLD = CARD_WIDTH * 0.5; // 125px
const CARD_LIFESPAN = 1250; // Total removal time (~1.2s)

interface CursorImageTrailProps {
  onOpenContact?: () => void;
}

export const CursorImageTrail: React.FC<CursorImageTrailProps> = ({ onOpenContact }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [trailCards, setTrailCards] = useState<TrailItem[]>([]);
  const [isMobileOrTouch, setIsMobileOrTouch] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const lastPosRef = useRef<{ x: number; y: number } | null>(null);
  const imageIndexRef = useRef<number>(0);
  const counterRef = useRef<number>(0);

  // Detect touch or coarse pointer devices
  useEffect(() => {
    const checkTouch = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
      setIsMobileOrTouch(isTouch);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  // Handle cursor movement inside the interactive image area
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobileOrTouch || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (!lastPosRef.current) {
      lastPosRef.current = { x, y };
      return;
    }

    const dx = x - lastPosRef.current.x;
    const dy = y - lastPosRef.current.y;
    const dist = Math.hypot(dx, dy);

    // Spawn when cursor moves >= 50% of card width
    if (dist >= MOVEMENT_THRESHOLD) {
      lastPosRef.current = { x, y };
      setHasInteracted(true);

      const currentItem = TRAIL_IMAGES[imageIndexRef.current % TRAIL_IMAGES.length];
      imageIndexRef.current += 1;
      counterRef.current += 1;

      const newId = counterRef.current;
      // Slight organic variation around requested -10deg and 20deg
      const rotStart = -10 + (Math.random() * 3 - 1.5);
      const rotEnd = 20 + (Math.random() * 4 - 2);

      const newCard: TrailItem = {
        id: newId,
        x,
        y,
        src: currentItem.src,
        title: currentItem.title,
        category: currentItem.category,
        rotStart,
        rotEnd
      };

      setTrailCards((prev) => [...prev, newCard]);

      // Remove after 1.25s matching the exit animation completion
      setTimeout(() => {
        setTrailCards((prev) => prev.filter((card) => card.id !== newId));
      }, CARD_LIFESPAN);
    }
  }, [isMobileOrTouch]);

  const handleMouseLeave = () => {
    lastPosRef.current = null;
  };

  return (
    <div className="w-full mb-14">
      {/* Interactive Container - Position Relative and Overflow Hidden */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-950 via-[#07172B] to-[#00274D] p-8 sm:p-12 md:p-16 select-none cursor-default group"
        style={{ minHeight: '380px' }}
      >
        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:28px_28px]" />

        {/* Ambient atmospheric glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#003A73]/40 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#D6314A]/15 blur-3xl pointer-events-none" />

        {/* Content Layer (Behind floating trail cards, but clickable) */}
        <div className="relative z-10 max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold uppercase tracking-wider text-slate-200 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#D6314A]" />
            <span>Interactive Installation Trail</span>
          </div>

          <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white leading-[1.08]">
            DISCOVER DECKRITE RIGS IN MOTION.
          </h3>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Glide your cursor across this interactive zone to uncover real-world DeckRite installations — from toy hauler patio ramps and utility trailers to custom motorhome interiors.
          </p>

          {/* Desktop Interaction Prompt */}
          {!isMobileOrTouch ? (
            <div className="mt-8 flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-xs sm:text-sm text-slate-200">
                <MousePointer className="w-4 h-4 text-[#D6314A] animate-pulse" />
                <span>
                  {hasInteracted ? 'Keep sweeping cursor to cycle samples' : 'Move cursor across this area'}
                </span>
              </div>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                8 Curated Rigs & Finishes
              </span>
            </div>
          ) : (
            /* Mobile Fallback Notice */
            <div className="mt-6 text-xs text-slate-400">
              <span>Swipe horizontally below to explore installation highlights.</span>
            </div>
          )}
        </div>

        {/* Floating Spawned Image Trail Cards */}
        {/* Strictly position: absolute, pointer-events: none, centered on cursor, rotating in and out */}
        {!isMobileOrTouch && (
          <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
            {trailCards.map((card) => (
              <div
                key={card.id}
                className="cursor-trail-card pointer-events-none absolute select-none overflow-hidden rounded-xl border border-white/30 bg-slate-900 shadow-md shadow-black/25"
                style={{
                  left: `${card.x}px`,
                  top: `${card.y}px`,
                  width: `${CARD_WIDTH}px`,
                  aspectRatio: '16/10',
                  ['--rot-start' as string]: `${card.rotStart}deg`,
                  ['--rot-end' as string]: `${card.rotEnd}deg`
                }}
              >
                <img
                  src={card.src}
                  alt={card.title}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle informative caption overlay */}
                <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent flex items-center justify-between text-white">
                  <span className="text-xs font-semibold truncate max-w-[150px] drop-shadow-sm">
                    {card.title}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D6314A] bg-black/50 px-1.5 py-0.5 rounded shrink-0">
                    {card.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Mobile / Touch Fallback: Clean Horizontal Scrollable Preview Strip */}
        {isMobileOrTouch && (
          <div className="mt-8 flex gap-4 overflow-x-auto pb-2 pt-2 -mx-2 px-2 no-scrollbar">
            {TRAIL_IMAGES.map((item, idx) => (
              <div
                key={idx}
                className="shrink-0 w-56 aspect-[16/10] rounded-xl overflow-hidden border border-white/20 relative shadow-sm"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex items-end p-2.5">
                  <div>
                    <span className="text-[10px] text-[#D6314A] uppercase font-bold block">
                      {item.category}
                    </span>
                    <span className="text-xs text-white font-semibold">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
