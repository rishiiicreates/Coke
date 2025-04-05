import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CrossIcon from "./icons/CrossIcon";

type Product = {
  id: string;
  name: string;
  image: string;
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
    
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
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
          onClick={onClose}
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
            onClick={onClose}
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
                <h3 className="font-montserrat font-bold text-2xl md:text-3xl mb-4">{product.name}</h3>
                <div className="mb-6">
                  <p className="text-gray-700 mb-4">{product.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-montserrat font-semibold text-lg mb-2">Nutrition Facts</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-[#F9F9F9] p-3 rounded">
                      <p className="text-sm text-gray-600">Calories</p>
                      <p className="font-semibold">{product.nutrition.calories}</p>
                    </div>
                    <div className="bg-[#F9F9F9] p-3 rounded">
                      <p className="text-sm text-gray-600">Sugar</p>
                      <p className="font-semibold">{product.nutrition.sugar}</p>
                    </div>
                    <div className="bg-[#F9F9F9] p-3 rounded">
                      <p className="text-sm text-gray-600">Sodium</p>
                      <p className="font-semibold">{product.nutrition.sodium}</p>
                    </div>
                    <div className="bg-[#F9F9F9] p-3 rounded">
                      <p className="text-sm text-gray-600">Caffeine</p>
                      <p className="font-semibold">{product.nutrition.caffeine}</p>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-[#E61D2B] text-white font-montserrat font-semibold py-3 px-6 rounded-md hover:bg-[#B5121B] transition-colors">
                  FIND IN STORE
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
