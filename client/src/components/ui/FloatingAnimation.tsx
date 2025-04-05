import { ReactNode } from "react";
import { motion } from "framer-motion";

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
  rotationOffset = 3,
}: FloatingAnimationProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0, rotate: 0 }}
      animate={{ 
        y: [-yOffset/2, yOffset/2, -yOffset/2],
        rotate: [-rotationOffset/2, rotationOffset/2, -rotationOffset/2],
      }}
      transition={{
        duration: duration,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
}