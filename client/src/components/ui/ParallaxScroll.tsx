import { ReactNode, useEffect, useRef } from 'react';

interface ParallaxScrollProps {
  children: ReactNode;
  className?: string;
  speed?: number; // Speed factor (negative values move opposite to scroll)
  direction?: 'vertical' | 'horizontal';
}

export default function ParallaxScroll({
  children,
  className = '',
  speed = 0.5,
  direction = 'vertical',
}: ParallaxScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const element = ref.current;
    let startPos = 0;
    let requestId: number | null = null;
    let ticking = false;
    
    const getInitialPosition = () => {
      if (direction === 'vertical') {
        startPos = element.getBoundingClientRect().top;
      } else {
        startPos = element.getBoundingClientRect().left;
      }
    };
    
    // Calculate initial position
    getInitialPosition();
    
    const updatePosition = () => {
      if (!ref.current) return;
      
      const scrollPos = direction === 'vertical' 
        ? window.scrollY 
        : window.scrollX;
      
      const distance = (startPos - scrollPos) * speed;
      
      if (direction === 'vertical') {
        ref.current.style.transform = `translateY(${distance}px)`;
      } else {
        ref.current.style.transform = `translateX(${distance}px)`;
      }
      
      ticking = false;
    };
    
    const onScroll = () => {
      if (!ticking) {
        requestId = window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };
    
    // Attach scroll event
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', getInitialPosition);
    
    // Initial update
    updatePosition();
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', getInitialPosition);
      
      if (requestId) {
        window.cancelAnimationFrame(requestId);
      }
    };
  }, [speed, direction]);
  
  return (
    <div ref={ref} className={`parallax-element ${className}`}>
      {children}
    </div>
  );
}