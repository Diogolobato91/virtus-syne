import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  threshold?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  threshold = 0.1,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  const getAnimationClass = () => {
    const baseClass = 'scroll-reveal transition-all duration-700 ease-out';
    
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `${baseClass} opacity-0 transform translate-y-16`;
        case 'down':
          return `${baseClass} opacity-0 transform -translate-y-16`;
        case 'left':
          return `${baseClass} opacity-0 transform translate-x-16`;
        case 'right':
          return `${baseClass} opacity-0 transform -translate-x-16`;
        case 'scale':
          return `${baseClass} opacity-0 transform scale-75`;
        default:
          return `${baseClass} opacity-0 transform translate-y-16`;
      }
    }
    
    return `${baseClass} opacity-100 transform translate-x-0 translate-y-0 scale-100`;
  };

  return (
    <div 
      ref={elementRef} 
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;