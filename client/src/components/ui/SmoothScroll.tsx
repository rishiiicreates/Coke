import { ReactNode, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

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
  delay = 0,
  duration = 0.5,
  className = "",
  distance = 50,
  triggerOnce = true,
}: SmoothScrollProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: triggerOnce, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!triggerOnce) {
      controls.start("hidden");
    }
  }, [controls, inView, triggerOnce]);

  const getDirectionalVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 },
        };
      case "down":
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { opacity: 1, y: 0 },
        };
      case "left":
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0 },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0 },
        };
      default:
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={getDirectionalVariants()}
      transition={{ 
        duration: duration, 
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0] // Cubic bezier for smooth ease
      }}
    >
      {children}
    </motion.div>
  );
}