import { useEffect, useRef } from 'react';

export default function BubbleAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const bubbles: HTMLElement[] = [];
    const maxBubbles = 25; // Maximum bubbles to show at once
    
    // Start with some initial bubbles
    for (let i = 0; i < 12; i++) {
      setTimeout(() => createBubble(), i * 200);
    }
    
    // Create bubbles at random intervals
    const interval = setInterval(() => {
      if (bubbles.length < maxBubbles) {
        createBubble();
      }
    }, 800);
    
    function createBubble() {
      // Create bubble element
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      
      // Random size between 5px and 20px
      const size = Math.random() * 15 + 5;
      
      // Random horizontal position
      const left = Math.random() * 100;
      
      // Random opacity
      const opacity = Math.random() * 0.3 + 0.1;
      
      // Random animation duration between 4s and 10s
      const duration = Math.random() * 6 + 4;
      
      // Set bubble styles
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${left}%`;
      bubble.style.opacity = opacity.toString();
      bubble.style.animationDuration = `${duration}s`;
      
      // Add wiggle effect with random delay
      bubble.style.animationDelay = `${Math.random() * 2}s`;
      
      // Add bubble to container
      container.appendChild(bubble);
      bubbles.push(bubble);
      
      // Remove bubble after animation completes
      setTimeout(() => {
        if (container.contains(bubble)) {
          container.removeChild(bubble);
          bubbles.splice(bubbles.indexOf(bubble), 1);
        }
      }, duration * 1000);
    }
    
    return () => {
      clearInterval(interval);
      bubbles.forEach(bubble => {
        if (container.contains(bubble)) {
          container.removeChild(bubble);
        }
      });
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="bubbles-container absolute inset-0 overflow-hidden pointer-events-none"
    />
  );
}