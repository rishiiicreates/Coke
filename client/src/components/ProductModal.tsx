import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CrossIcon from "./icons/CrossIcon";
import CaloriesIcon from "./icons/CaloriesIcon";
import SugarIcon from "./icons/SugarIcon";
import SodiumIcon from "./icons/SodiumIcon";
import CaffeineIcon from "./icons/CaffeineIcon";
import NutritionCard from "./NutritionCard";
import { playSound } from "../lib/soundManager";

type Product = {
  id: string;
  name: string;
  image: string | any; // Accept both string and imported image types
  description: string;
  nutrition: {
    calories: string;
    sugar: string;
    sodium: string;
    caffeine: string;
  };
} | null;

type ProductModalProps = {
  product: Product;
  onClose: () => void;
};

export default function ProductModal({ product, onClose }: ProductModalProps) {
  // Close modal when Escape key is pressed
  useEffect(() => {
    if (!product) return;
    
    // Play modal open sound
    playSound('whoosh');
    
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        playSound('pop');
        onClose();
      }
    };
    
    document.addEventListener("keydown", handleEscKey);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);
  
  // Wrapper for close function that plays sound first
  const handleClose = () => {
    playSound('pop');
    onClose();
  };
  
  if (!product) return null;
  
  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div 
          className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"
          onClick={handleClose}
        ></div>
        
        <motion.div 
          className="relative bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto shadow-2xl"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          <button 
            className="absolute top-4 right-4 text-gray-600 hover:text-[#E61D2B] transition-colors"
            onClick={handleClose}
            aria-label="Close"
            onMouseOver={() => playSound('hover')}
          >
            <CrossIcon />
          </button>
          
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center justify-center">
                <motion.img 
                  src={product.image} 
                  alt={`Coca-Cola ${product.name}`} 
                  className="h-64 md:h-80 object-contain"
                  initial={{ rotate: -5 }}
                  animate={{ rotate: 5 }}
                  transition={{ 
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2
                  }}
                />
              </div>
              
              <div>
                <motion.h3 
                  className="coca-cola-font font-bold text-2xl md:text-3xl mb-4 text-[#E61D2B]"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {product.name}
                </motion.h3>
                
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className="text-gray-800 font-medium mb-4 leading-relaxed">{product.description}</p>
                </motion.div>
                
                <div className="mb-6">
                  <motion.h4 
                    className="coca-cola-font font-semibold text-lg mb-4 text-[#E61D2B]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Nutrition Facts
                  </motion.h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <NutritionCard 
                      icon={<CaloriesIcon width={28} height={28} />}
                      label="Calories"
                      value={product.nutrition.calories}
                      delay={0.4}
                    />
                    
                    <NutritionCard 
                      icon={<SugarIcon width={28} height={28} />}
                      label="Sugar"
                      value={product.nutrition.sugar}
                      delay={0.5}
                    />
                    
                    <NutritionCard 
                      icon={<SodiumIcon width={28} height={28} />}
                      label="Sodium"
                      value={product.nutrition.sodium}
                      delay={0.6}
                    />
                    
                    <NutritionCard 
                      icon={<CaffeineIcon width={28} height={28} />}
                      label="Caffeine"
                      value={product.nutrition.caffeine}
                      delay={0.7}
                    />
                  </div>
                </div>
                
                <motion.button 
                  className="w-full bg-[#E61D2B] text-white coca-cola-font font-semibold py-3 px-6 rounded-md hover:bg-[#B5121B] transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => playSound('click')}
                  onMouseOver={() => playSound('hover')}
                >
                  FIND IN STORE
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
