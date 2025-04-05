import { useEffect, useRef } from 'react';

interface WaveProps {
  color?: string;
  height?: number;
  speed?: number;
  amplitude?: number;
  className?: string;
}

export default function WaveAnimation({
  color = 'rgba(230, 29, 43, 0.75)',
  height = 50,
  speed = 0.15,
  amplitude = 20,
  className = '',
}: WaveProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestIdRef = useRef<number>();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = 0;
    let animationFrameId: number;
    
    const resizeCanvas = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = height;
        width = canvas.width;
      }
    };
    
    const animate = (time: number) => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw the wave
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      
      const waveLength = width * 1.5;
      const baseY = canvas.height / 2;
      
      for (let x = 0; x <= width; x++) {
        const dx = x * (Math.PI * 2 / waveLength);
        const y = baseY + Math.sin(dx + time * speed) * amplitude;
        ctx.lineTo(x, y);
      }
      
      // Complete the path
      ctx.lineTo(width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      
      // Fill with gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, 'rgba(230, 29, 43, 0.3)');
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Second wave (smaller)
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      
      for (let x = 0; x <= width; x++) {
        const dx = x * (Math.PI * 2 / (waveLength * 0.7));
        const y = baseY + 5 + Math.sin(dx + time * speed * 1.3) * (amplitude * 0.6);
        ctx.lineTo(x, y);
      }
      
      ctx.lineTo(width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      
      // Fill with semi-transparent color
      ctx.fillStyle = 'rgba(230, 29, 43, 0.2)';
      ctx.fill();
      
      // Continue animation
      requestIdRef.current = requestAnimationFrame(animate);
    };
    
    // Setup resize handler
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Start animation
    requestIdRef.current = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
    };
  }, [color, height, speed, amplitude]);
  
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ height: `${height}px` }}>
      <canvas
        ref={canvasRef}
        className="absolute bottom-0 left-0 w-full"
        style={{ height: `${height}px` }}
      />
    </div>
  );
}