import React, { useEffect, useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.5,
  className = '',
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.scrollY;
        const section = sectionRef.current;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const viewportHeight = window.innerHeight;

        // Only apply parallax when the section is in view
        if (
          scrolled + viewportHeight > sectionTop &&
          scrolled < sectionTop + sectionHeight
        ) {
          // Limit the parallax effect to prevent overlap
          const maxParallax = sectionHeight * 0.3; // 30% of section height
          const yPos = Math.min(
            (scrolled - sectionTop) * speed,
            maxParallax
          );
          section.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={sectionRef} className={`relative ${className}`}>
      {children}
    </div>
  );
};