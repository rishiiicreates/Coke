import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
  key?: string;
}

export default function PageTransition({
  children,
  className = "",
  key = "page",
}: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1.0],
          }
        }}
        exit={{ 
          opacity: 0, 
          y: -20,
          transition: {
            duration: 0.3,
            ease: [0.25, 0.1, 0.25, 1.0],
          }
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}