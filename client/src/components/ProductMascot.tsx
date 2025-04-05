import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { playSound } from '../lib/soundManager';

interface ProductMascotProps {
  className?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  interactionDistance?: number;
}

export default function ProductMascot({
  className = '',
  position = 'bottom-right',
  interactionDistance = 150
}: ProductMascotProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mascotPosition, setMascotPosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [mood, setMood] = useState<'happy' | 'excited' | 'waving' | 'idle'>('idle');
  
  // Initial position based on the position prop
  useEffect(() => {
    const positions = {
      'top-left': { x: 100, y: 100 },
      'top-right': { x: window.innerWidth - 100, y: 100 },
      'bottom-left': { x: 100, y: window.innerHeight - 200 },
      'bottom-right': { x: window.innerWidth - 150, y: window.innerHeight - 200 }
    };
    
    setMascotPosition(positions[position]);
  }, [position]);
  
  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Calculate distance between mouse and mascot
      const dx = e.clientX - mascotPosition.x;
      const dy = e.clientY - mascotPosition.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Check if mouse is close enough to interact
      if (distance < interactionDistance && !isAnimating) {
        // Start interaction animation
        setIsAnimating(true);
        setMood('excited');
        playSound('bubble', 0.3);
        
        // Reset after animation
        setTimeout(() => {
          setMood(Math.random() > 0.5 ? 'waving' : 'happy');
          
          setTimeout(() => {
            setIsAnimating(false);
            setMood('idle');
          }, 2000);
        }, 1000);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mascotPosition, interactionDistance, isAnimating]);

  // Animation variants for the mascot
  const bottleVariants: Variants = {
    idle: {
      rotate: [0, 1, 0, -1, 0],
      y: [0, -5, 0],
      transition: {
        rotate: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
        y: { repeat: Infinity, duration: 2, ease: 'easeInOut' }
      }
    },
    excited: {
      rotate: [0, 10, -10, 8, -8, 5, -5, 0],
      scale: [1, 1.1, 1],
      y: [0, -15, 0],
      transition: { duration: 1, ease: 'easeInOut' }
    },
    happy: {
      rotate: [0, 3, 0, -3, 0],
      scale: 1.05,
      y: -10,
      transition: {
        rotate: { repeat: 2, duration: 0.5 },
        scale: { duration: 0.3 },
        y: { duration: 0.3 }
      }
    },
    waving: {
      rotate: [0, 15, 0, 15, 0],
      y: [0, -5, 0, -5, 0],
      transition: { duration: 1.5, ease: 'easeInOut' }
    }
  };

  // Bubble animation for when the mascot is excited
  const BubbleEffect = () => (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
      {mood === 'excited' && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 rounded-full bg-white/80"
              initial={{ 
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                x: Math.random() * 40 - 20,
                y: 0,
                opacity: 0.7
              }}
              animate={{ 
                y: -100 - Math.random() * 50,
                opacity: 0
              }}
              transition={{ 
                duration: 1 + Math.random(),
                delay: Math.random() * 0.5,
                ease: 'easeOut'
              }}
            />
          ))}
        </>
      )}
    </div>
  );

  // Mascot face expressions
  const MascotFace = () => {
    let eyeStyle = "w-2 h-4 rounded-full bg-white absolute";
    let mouthStyle = "absolute rounded-full bg-white";
    
    switch (mood) {
      case 'excited':
        return (
          <>
            <div className={`${eyeStyle} left-[30%] top-[25%]`} />
            <div className={`${eyeStyle} right-[30%] top-[25%]`} />
            <div className={`${mouthStyle} w-6 h-3 left-1/2 -translate-x-1/2 top-[45%] rounded-b-full`} />
          </>
        );
      case 'happy':
        return (
          <>
            <div className={`${eyeStyle} left-[30%] top-[25%]`} />
            <div className={`${eyeStyle} right-[30%] top-[25%]`} />
            <div className={`${mouthStyle} w-8 h-4 left-1/2 -translate-x-1/2 top-[45%] rounded-b-full`} />
          </>
        );
      case 'waving':
        return (
          <>
            <div className={`${eyeStyle} left-[30%] top-[25%]`} />
            <div className={`${eyeStyle} right-[30%] top-[25%]`} />
            <div className={`${mouthStyle} w-5 h-2 left-1/2 -translate-x-1/2 top-[45%] rounded-full`} />
            <motion.div 
              className="absolute top-[0%] right-[5%] w-4 h-10 bg-red-600 rounded origin-bottom"
              animate={{ rotate: [0, 45, 0, 45, 0] }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </>
        );
      default: // idle
        return (
          <>
            <div className={`${eyeStyle} left-[30%] top-[25%]`} />
            <div className={`${eyeStyle} right-[30%] top-[25%]`} />
            <div className={`${mouthStyle} w-5 h-2 left-1/2 -translate-x-1/2 top-[45%] rounded-full`} />
          </>
        );
    }
  };

  return (
    <div 
      className={`fixed ${position.includes('top') ? 'top-8' : 'bottom-8'} ${position.includes('right') ? 'right-8' : 'left-8'} z-50 ${className}`}
      style={{ 
        transform: `translate(${mascotPosition.x > 0 ? 0 : mascotPosition.x}px, ${mascotPosition.y > 0 ? 0 : mascotPosition.y}px)` 
      }}
    >
      <AnimatePresence>
        <motion.div
          className="relative w-24 h-32 cursor-pointer"
          animate={mood}
          variants={bottleVariants}
          onClick={() => {
            if (!isAnimating) {
              setIsAnimating(true);
              setMood('excited');
              playSound('pop');
              
              setTimeout(() => {
                setMood('waving');
                setTimeout(() => {
                  setIsAnimating(false);
                  setMood('idle');
                }, 2000);
              }, 1000);
            }
          }}
        >
          {/* Coke Bottle */}
          <div className="relative w-full h-full">
            {/* Bottle cap */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-4 bg-red-700 rounded-t-lg z-10" />
            
            {/* Bottle neck */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-6 bg-red-600 rounded-t-sm" />
            
            {/* Bottle body */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-16 h-22 bg-red-600 rounded-b-[45%] rounded-t-md">
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-5 bg-white rounded-sm">
                <div className="font-bold text-red-600 text-xs text-center">Cola</div>
              </div>
              <MascotFace />
            </div>
            
            <BubbleEffect />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}