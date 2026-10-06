import heroImage from '@/src/assets/images/hero_rv_lifestyle_1791294037336.jpg';
import shieldImage from '@/src/assets/images/product_shield_rv_1791294052894.jpg';
import plankImage from '@/src/assets/images/product_deckrite_plank_1791294064446.jpg';
import ultraImage from '@/src/assets/images/product_ultra_pvc_1791294075267.jpg';
import deckAppImage from '@/src/assets/images/rv_deck_application_1791294086326.jpg';

export interface Product {
  id: string;
  category: string;
  name: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  thickness: string;
  rollWidth: string;
  wearLayer: string;
  finishOptions: string[];
  keyFeatures: string[];
  recommendedUse: string[];
  specSheetUrl?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'shield-rv',
    category: 'Sport / Utility Trailers',
    name: 'Shield RV',
    tagline: 'Heavy-Duty Slip-Resistant Protection',
    shortDesc: 'Engineered for high-traffic toy hauler garages, cargo trailers, and utility haulers exposed to heavy vehicles and gear.',
    fullDesc: 'Shield RV is our heavy-duty roll vinyl flooring engineered specifically to handle the punishment of powersport vehicles, motorbikes, tool carts, and muddy boots. Featuring an advanced slip-resistant wear surface and fuel-resistant PVC compound, Shield RV prevents oil penetration and provides surefooted traction wet or dry.',
    image: shieldImage,
    thickness: '60 mil (1.5mm) / 80 mil (2.0mm)',
    rollWidth: '8.5 ft (102") seamless rolls',
    wearLayer: 'Commercial textured diamond & coin grip',
    finishOptions: ['Granite Coin', 'Diamond Tread Grey', 'Stealth Charcoal', 'Industrial Sand'],
    keyFeatures: [
      'Resistant to motor oils, fuel drops, and road salts',
      'High-traction anti-slip surface even when wet',
      'Seamless 102" roll width eliminates vulnerable joints',
      'Non-porous wipe-clean membrane prevents mold underlay'
    ],
    recommendedUse: [
      'Toy Hauler Garage Compartments',
      'Enclosed Snowmobile & ATV Trailers',
      'Mobile Work & Tool Trailers',
      'Utility & Overland Cargo Bays'
    ]
  },
  {
    id: 'deckrite-plank',
    category: 'Ramp / Deck',
    name: 'DeckRite Plank',
    tagline: 'Exterior Waterproof Fold-Down Decking',
    shortDesc: 'Specialized waterproof membrane designed specifically for rear toy hauler patio ramps and outdoor elevated decks.',
    fullDesc: 'DeckRite Plank transforms standard toy hauler ramp doors into luxurious outdoor terrace decks. Formulated with UV inhibitors and a reinforced polyester scrim, it withstands full weather exposure, heavy foot traffic, and temperature swings from -40°F to 140°F without peeling, curling, or sun fade.',
    image: plankImage,
    thickness: '60 mil reinforced membrane',
    rollWidth: '76" and 96" continuous rolls',
    wearLayer: 'Micro-embossed textured woodgrain & slate',
    finishOptions: ['Coastal Driftwood', 'Smoked Barnwood', 'Weathered Teak', 'Alpine Slate'],
    keyFeatures: [
      '100% waterproof exterior barrier prevents plywood rot',
      'Advanced UV stabilizers prevent fading & chalking',
      'Cool-touch surface formulation for bare feet',
      'Class A slip resistance rating for outdoor wet steps'
    ],
    recommendedUse: [
      'Toy Hauler Fold-Out Patio Ramps',
      'External RV Entry Landings & Steps',
      'Destination Trailer Porches',
      'Outdoor RV Kitchen Slide-Out Decks'
    ]
  },
  {
    id: 'ultra-woven-pvc',
    category: 'Interiors',
    name: 'DeckRite ULTRA Woven PVC',
    tagline: 'Luxury Designer Interior Flooring',
    shortDesc: 'Sophisticated woven textile texture with an impervious acoustic backing for high-end motorhomes and towables.',
    fullDesc: 'DeckRite ULTRA Woven PVC brings high-end marine and European residential styling into modern RV interiors. Combining tightly woven PVC yarns with a closed-cell acoustic foam backing, it offers luxurious underfoot cushioning, sound dampening for highway travel, and effortless cleaning.',
    image: ultraImage,
    thickness: '120 mil (3.0mm) cushioned acoustic base',
    rollWidth: '8.5 ft (102") roll width',
    wearLayer: 'High-tensile woven vinyl yarn matrix',
    finishOptions: ['Nordic Linen Grey', 'Desert Sand Weave', 'Graphite Grid', 'Pebble Herringbone'],
    keyFeatures: [
      'Acoustic sound dampening reduces road vibration noise',
      'Closed-cell backing impervious to pet spills and water',
      'Bleach-cleanable and naturally antimicrobial',
      'Does not fray, rot, or harbor allergens like carpet'
    ],
    recommendedUse: [
      'Class A, B, and C Luxury Motorhomes',
      'Fifth-Wheel Living Rooms & Galleys',
      'Slide-Out Flooring Transitions',
      'Pet-Friendly Travel Trailers'
    ]
  }
];

export interface WhyAdvantage {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export const WHY_ADVANTAGES: WhyAdvantage[] = [
  {
    number: '01',
    title: 'Durable Materials',
    description: 'Commercial-grade wear layers engineered to endure heavy traffic, claws, grease, and extreme temperature swings without cracking.',
    detail: 'Tested across -40°F to +150°F chassis environments with zero thermal delamination.'
  },
  {
    number: '02',
    title: 'Designed for RV Applications',
    description: 'Formulated with flexible composite backings that flex with chassis torsion, road vibration, and subfloor movement.',
    detail: 'Unlike residential vinyl that buckles on the road, DeckRite remains flat and anchored.'
  },
  {
    number: '03',
    title: 'Easy Maintenance',
    description: '100% non-porous wipe-clean barrier. Mud, red wine, motor oil, and pet accidents wipe clean with standard household soap and water.',
    detail: 'Resistant to mold, mildew, and pet odors with zero moisture absorption.'
  },
  {
    number: '04',
    title: 'Multiple Styles & Finishes',
    description: 'From designer architectural woven textiles to rugged slip-resistant diamond treads and realistic woodgrain planks.',
    detail: 'Tailored aesthetic palettes matching modern OEM RV interior cabinetry and exterior trim.'
  }
];

export interface ApplicationItem {
  id: string;
  title: string;
  category: string;
  productUsed: string;
  description: string;
  image: string;
  highlight: string;
}

export const REAL_APPLICATIONS: ApplicationItem[] = [
  {
    id: 'patio-ramp',
    title: 'Toy Hauler Patio Deck Conversion',
    category: 'Ramp / Deck',
    productUsed: 'DeckRite Plank (Smoked Barnwood)',
    description: 'A complete rear door patio installation on a 42ft luxury toy hauler, exposed to all-day sun and frequent outdoor gatherings.',
    image: deckAppImage,
    highlight: 'Weatherproof & UV-stable with slip-resistant woodgrain feel'
  },
  {
    id: 'motorhome-interior',
    title: 'Luxury Class A Galley & Living Suite',
    category: 'Interiors',
    productUsed: 'DeckRite ULTRA Woven PVC (Nordic Linen)',
    description: 'Seamless floor-to-slide installation providing acoustic sound insulation and modern European texture through high-traffic living areas.',
    image: ultraImage,
    highlight: 'Sound dampening acoustic foam layer reduces road noise'
  },
  {
    id: 'cargo-garage',
    title: 'Powersport Toy Hauler Utility Garage',
    category: 'Sport / Trailers',
    productUsed: 'Shield RV (Diamond Tread Grey)',
    description: 'Heavy vehicle bay floor withstanding hot tire pickup, oil drops, tie-down gear, and pressure washer washouts.',
    image: shieldImage,
    highlight: 'Oil & chemical-resistant commercial grade roll vinyl'
  },
  {
    id: 'overland-trailer',
    title: 'All-Terrain Adventure Travel Trailer',
    category: 'All-Terrain',
    productUsed: 'DeckRite Plank & Shield RV Hybrid',
    description: 'Rugged exterior step surfaces and mudroom interior designed for extreme backcountry mud, gravel, and wet gear.',
    image: heroImage,
    highlight: 'Zero seam vulnerability with continuous 102" roll spans'
  }
];

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FAQItem[] = [
  {
    question: 'How does DeckRite flooring attach to RV subfloors?',
    answer: 'DeckRite flooring is installed using premium water-based or solvent-based contact adhesives rated specifically for plywood subfloors and recreational vehicles. For ramps and exterior decks, DeckRite adhesive with perimeter trim clamping provides a completely watertight seal.',
    category: 'Installation'
  },
  {
    question: 'Can DeckRite withstand freezing winter storage temperatures?',
    answer: 'Yes. All DeckRite products are formulated with specialized plasticizers that preserve flexibility down to -40°F, preventing the cracking or shattering common in cheap residential vinyl flooring when RVs freeze in winter storage.',
    category: 'Durability'
  },
  {
    question: 'What roll widths are available to minimize seams?',
    answer: 'We manufacture seamless rolls up to 8.5 feet (102 inches) wide, enabling complete one-piece wall-to-wall installations in most RV cabins and trailer boxes without center seams that could trap water.',
    category: 'Specifications'
  },
  {
    question: 'How do you clean and maintain DeckRite ULTRA Woven PVC?',
    answer: 'DeckRite ULTRA Woven PVC is naturally stain-resistant and can be vacuumed, swept, or cleaned with mild dish soap and warm water. For stubborn grease or dried mud, gentle scrubbing with a soft bristle brush or a diluted bleach solution (1:10) is safe and effective.',
    category: 'Maintenance'
  },
  {
    question: 'Do you supply OEM manufacturers as well as DIY owners?',
    answer: 'Yes. DeckRite partners directly with leading RV and trailer OEM manufacturers across North America for bulk roll production, while also providing cut-to-length rolls for custom upfitters, restoration shops, and private owners.',
    category: 'Ordering'
  },
  {
    question: 'How does DeckRite Plank resist UV degradation on outdoor ramps?',
    answer: 'DeckRite Plank integrates automotive-grade UV stabilizers and non-migrating plasticizers directly into the wear layer, protecting against embrittlement, chalking, and color fading caused by harsh sunlight exposure.',
    category: 'Warranty'
  }
];

export interface WarrantyDetail {
  title: string;
  duration: string;
  coverage: string;
  details: string[];
}

export const WARRANTY_INFO: WarrantyDetail[] = [
  {
    title: 'DeckRite Commercial & OEM Warranty',
    duration: '5-Year Commercial Limited',
    coverage: 'Guarantees against manufacturing defects, delamination, and premature wear-through under commercial fleet and trailer operations.',
    details: [
      'Coverage against cracking, peeling, and material separation',
      'Protection against premature ultraviolet UV degradation',
      'Full replacement material authorization upon inspection'
    ]
  },
  {
    title: 'DeckRite Recreational Consumer Warranty',
    duration: '10-Year Recreational Limited',
    coverage: 'Covers recreational travel trailers, motorhomes, and personal toy haulers against structural wear-through and waterproof barrier failure.',
    details: [
      'Waterproof membrane performance guarantee',
      'Anti-stain and chemical resistance protection',
      '10-year prorated recreational vehicle backing'
    ]
  }
];
