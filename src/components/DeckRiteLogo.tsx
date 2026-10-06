import React from 'react';

interface DeckRiteLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  showWordmark?: boolean;
}

export const DeckRiteLogo: React.FC<DeckRiteLogoProps> = ({
  className = 'h-10',
  variant = 'dark',
  showWordmark = true
}) => {
  const textColor = variant === 'dark' ? '#FFFFFF' : '#0B192C';

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      <svg
        viewBox="0 0 420 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto max-w-full drop-shadow-sm"
      >
        <defs>
          {/* DeckRite Ribbon Gradient: Brand Red to Deep Navy */}
          <linearGradient id="drRibbonGrad" x1="15%" y1="10%" x2="85%" y2="80%">
            <stop offset="0%" stopColor="#E63956" />
            <stop offset="35%" stopColor="#D6314A" />
            <stop offset="70%" stopColor="#1E4E8C" />
            <stop offset="100%" stopColor="#003A73" />
          </linearGradient>

          <linearGradient id="drShadowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#002147" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00142B" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* 
          DeckRite Signature 3D Ribbon Emblem (Left)
          Folded continuous dynamic ribbon loop matching official brand asset
        */}
        <g id="ribbon-emblem" transform="translate(10, 8)">
          {/* Back fold curve */}
          <path
            d="M 64 22 C 78 30, 88 46, 88 64 C 88 88, 68 104, 44 104 C 22 104, 8 88, 8 68 C 8 48, 22 34, 40 26 C 46 23, 54 21, 64 22 Z"
            fill="#002B59"
          />

          {/* Front sweeping dimensional loop with vibrant gradient */}
          <path
            d="M 52 8 C 76 10, 94 28, 92 56 C 90 76, 76 98, 50 102 C 28 105, 12 92, 10 74 C 8 52, 24 24, 52 8 Z"
            fill="url(#drRibbonGrad)"
          />

          {/* Inner cutout aperture highlighting 3D twist */}
          <path
            d="M 44 26 C 60 30, 72 46, 70 66 C 68 80, 56 90, 42 88 C 28 86, 20 72, 22 56 C 24 40, 32 28, 44 26 Z"
            fill={variant === 'dark' ? '#07152B' : '#FFFFFF'}
          />

          {/* Interior curl shading */}
          <path
            d="M 42 26 C 54 30, 64 42, 64 56 C 64 68, 56 78, 44 80 C 40 76, 38 68, 38 60 C 38 46, 40 34, 42 26 Z"
            fill="#D6314A"
            opacity="0.85"
          />

          {/* Deep blue lower anchor fold */}
          <path
            d="M 28 78 C 36 92, 48 98, 60 96 C 48 98, 36 94, 28 78 Z"
            fill="#001833"
          />
        </g>

        {/* Wordmark: "DeckRite RV" in artistic brush script typography */}
        {showWordmark && (
          <g id="wordmark" transform="translate(112, 78)">
            {/* "DeckRite" */}
            <text
              x="0"
              y="0"
              fill={textColor}
              fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
              fontSize="48"
              fontWeight="900"
              fontStyle="italic"
              letterSpacing="-0.5px"
            >
              DeckRite
            </text>

            {/* "RV" in energetic italic bold with brand red dot */}
            <text
              x="226"
              y="0"
              fill={variant === 'dark' ? '#FFFFFF' : '#0B192C'}
              fontFamily="'Oswald', sans-serif"
              fontSize="44"
              fontWeight="800"
              fontStyle="italic"
              letterSpacing="1px"
            >
              RV
            </text>

            {/* Red underline swoop underneath */}
            <path
              d="M 2 8 C 80 14, 180 14, 280 2"
              stroke="#D6314A"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </g>
        )}
      </svg>
    </div>
  );
};
