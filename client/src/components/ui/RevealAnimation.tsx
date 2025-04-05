import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealAnimationProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "top" | "bottom";
  delay?: number;
  duration?: number;
  maskColor?: string;
  once?: boolean;
}

export default function RevealAnimation({
  children,
  className = "",
  direction = "left",
  delay = 0,
  duration = 0.75,
  maskColor = "#ffffff",
  once = true,
}: RevealAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });
  
  // Set the animation variants based on direction
  const getVariants = () => {
    switch (direction) {
      case "left":
        return {
          hidden: { clipPath: "inset(0 100% 0 0)" },
          visible: { clipPath: "inset(0 0% 0 0)" },
        };
      case "right":
        return {
          hidden: { clipPath: "inset(0 0 0 100%)" },
          visible: { clipPath: "inset(0 0 0 0%)" },
        };
      case "top":
        return {
          hidden: { clipPath: "inset(100% 0 0 0)" },
          visible: { clipPath: "inset(0% 0 0 0)" },
        };
      case "bottom":
        return {
          hidden: { clipPath: "inset(0 0 100% 0)" },
          visible: { clipPath: "inset(0 0 0% 0)" },
        };
      default:
        return {
          hidden: { clipPath: "inset(0 100% 0 0)" },
          visible: { clipPath: "inset(0 0% 0 0)" },
        };
    }
  };

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={getVariants()}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0], // custom cubic bezier
        }}
        style={{ 
          willChange: "clip-path", 
          backgroundColor: "transparent"
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}