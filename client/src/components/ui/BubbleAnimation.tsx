import { useEffect, useState } from "react";

export default function BubbleAnimation() {
  const [bubbles, setBubbles] = useState<Array<{
    id: number;
    size: number;
    left: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    // Generate random bubbles
    const generateBubbles = () => {
      const newBubbles = [];
      const count = Math.floor(Math.random() * 10) + 15; // 15-25 bubbles
      
      for (let i = 0; i < count; i++) {
        newBubbles.push({
          id: i,
          size: Math.floor(Math.random() * 15) + 5, // 5-20px
          left: Math.floor(Math.random() * 100), // 0-100% of container width
          delay: Math.random() * 2, // 0-2s delay
          duration: Math.random() * 2 + 2 // 2-4s animation duration
        });
      }
      
      setBubbles(newBubbles);
    };

    generateBubbles();
    
    // Regenerate bubbles every 4 seconds
    const interval = setInterval(() => {
      generateBubbles();
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: '-20px',
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
          }}
        />
      ))}
    </div>
  );
}