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

        // Calculate the point where the section enters and exits the viewport
        const entryPoint = sectionTop - viewportHeight;
        const exitPoint = sectionTop + sectionHeight;

        // Only apply parallax when the section is in view
        if (scrolled >= entryPoint && scrolled <= exitPoint) {
          // Calculate the progress of scrolling through the section
          const progress = (scrolled - entryPoint) / (exitPoint - entryPoint);
          
          // Calculate the parallax offset with a maximum limit
          const maxOffset = sectionHeight * 0.2; // Limit to 20% of section height
          const offset = Math.min(progress * maxOffset * speed, maxOffset);
          
          // Apply the transform with a smoother easing
          section.style.transform = `translate3d(0, ${offset}px, 0)`;
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