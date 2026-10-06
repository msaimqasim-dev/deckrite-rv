import React, { useRef, useEffect, useState } from 'react';

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'zoom' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  scale?: number;
  blur?: boolean;
  once?: boolean;
  style?: React.CSSProperties;
  as?: React.ElementType;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 700,
  distance = 28,
  threshold = 0.12,
  scale,
  blur = false,
  once = true,
  style: userStyle = {},
  as: Component = 'div'
}) => {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const currentEl = elementRef.current;
    if (!currentEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(currentEl);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    observer.observe(currentEl);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    const baseScale = scale !== undefined ? ` scale(${scale})` : '';

    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)${baseScale}`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)${baseScale}`;
      case 'left':
        return `translate3d(-${distance}px, 0, 0)${baseScale}`;
      case 'right':
        return `translate3d(${distance}px, 0, 0)${baseScale}`;
      case 'zoom':
        return `translate3d(0, 0, 0) scale(${scale ?? 0.94})`;
      case 'fade':
      case 'none':
      default:
        return baseScale ? `translate3d(0, 0, 0)${baseScale}` : 'none';
    }
  };

  const computedStyle: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    filter: blur ? (isVisible ? 'blur(0px)' : 'blur(4px)') : undefined,
    transitionProperty: 'opacity, transform, filter',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    transitionDelay: `${delay}ms`,
    willChange: isVisible ? 'auto' : 'opacity, transform',
    ...userStyle
  };

  return (
    <Component ref={elementRef} className={className} style={computedStyle}>
      {children}
    </Component>
  );
};
