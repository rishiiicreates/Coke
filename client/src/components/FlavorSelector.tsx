import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const flavors = [
  "Classic",
  "Zero Sugar",
  "Cherry",
  "Vanilla",
  "Orange Vanilla",
  "Energy"
];

export default function FlavorSelector() {
  const [activeFlavor, setActiveFlavor] = useState("Zero Sugar");
  const [showThankYou, setShowThankYou] = useState(false);
  
  const handleFlavorSelect = (flavor: string) => {
    setActiveFlavor(flavor);
    setShowThankYou(true);
    
    // Hide the thank you message after 3 seconds
    setTimeout(() => {
      setShowThankYou(false);
    }, 3000);
  };
  
  return (
    <section className="py-12 bg-white page-section taste-section">
      <div className="container mx-auto px-4">
        <h2 className="font-montserrat font-bold text-4xl text-center mb-12">TASTE:</h2>
        
        <div className="flavor-selector flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {flavors.map((flavor) => (
            <button 
              key={flavor}
              className={`flavor-tab px-6 py-2 text-lg font-montserrat font-medium transition-all hover:text-[#E61D2B] ${activeFlavor === flavor ? 'active' : ''}`}
              onClick={() => handleFlavorSelect(flavor)}
            >
              {flavor}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {showThankYou && (
            <motion.div 
              className="bg-[#F9F9F9] rounded-md p-4 max-w-md mx-auto mb-8 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-[#E61D2B] font-montserrat">Thank you! Your selection has been received!</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
