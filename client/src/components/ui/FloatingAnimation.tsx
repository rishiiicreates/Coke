import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingAnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  yOffset?: number;
  rotationOffset?: number;
}

export default function FloatingAnimation({
  children,
  delay = 0,
  duration = 3,
  className = "",
  yOffset = 15,
  rotationOffset = 5
}: FloatingAnimationProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0, rotate: 0 }}
      animate={{ 
        y: [-yOffset/2, yOffset/2, -yOffset/2],
        rotate: [-rotationOffset/2, rotationOffset/2, -rotationOffset/2]
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}