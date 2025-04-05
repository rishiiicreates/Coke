import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { playSound } from '../lib/soundManager';

type NutritionCardProps = {
  icon: ReactNode;
  label: string;
  value: string;
  delay?: number;
};

export default function NutritionCard({ icon, label, value, delay = 0 }: NutritionCardProps) {
  return (
    <motion.div 
      className="bg-[#F9F9F9] p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-3 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: delay,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -5,
        backgroundColor: "#FFF5F5",
        transition: { duration: 0.2 }
      }}
      onMouseEnter={() => playSound('hover', 0.2)}
      onClick={() => playSound('bubble', 0.3)}
    >
      <motion.div 
        className="text-[#E61D2B]"
        whileHover={{ scale: 1.1 }}
        animate={{ rotate: [0, 2, 0, -2, 0] }}
        transition={{ 
          rotate: {
            duration: 5,
            repeat: Infinity,
            repeatType: "loop"
          }
        }}
      >
        {icon}
      </motion.div>
      <div>
        <motion.p 
          className="text-sm text-gray-600"
          initial={{ x: 0 }}
          whileHover={{ x: 3 }}
        >
          {label}
        </motion.p>
        <motion.p 
          className="font-semibold"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          {value}
        </motion.p>
      </div>
    </motion.div>
  );
}