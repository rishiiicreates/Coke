import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
  triggerOnce?: boolean;
}

export default function SmoothScroll({
  children,
  direction = "up",
  delay = 0.2,
  duration = 0.8,
  className = "",
  distance = 50,
  triggerOnce = true
}: SmoothScrollProps) {
  
  const getInitial = () => {
    switch(direction) {
      case "up": return { opacity: 0, y: distance };
      case "down": return { opacity: 0, y: -distance };
      case "left": return { opacity: 0, x: distance };
      case "right": return { opacity: 0, x: -distance };
      default: return { opacity: 0, y: distance };
    }
  };
  
  const getAnimate = () => {
    switch(direction) {
      case "up": 
      case "down": 
        return { opacity: 1, y: 0 };
      case "left": 
      case "right": 
        return { opacity: 1, x: 0 };
      default: return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once: triggerOnce, margin: "-100px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
}