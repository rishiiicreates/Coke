import { motion } from "framer-motion";
import BubbleAnimation from "./ui/BubbleAnimation";

export default function Hero() {
  const scrollToFlavorSection = () => {
    const flavorSection = document.querySelector(".taste-section");
    if (flavorSection) {
      flavorSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-[#E61D2B] relative overflow-hidden flex items-center justify-center page-section visible">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#E61D2B_0%,_#B5121B_100%)]"></div>
      
      <BubbleAnimation />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div 
          className="mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.2 }}
        >
          <motion.img 
            src="https://res.cloudinary.com/dhhfbpqbp/image/upload/v1615892898/coca-cola-classic-can_hn2jvs.png" 
            alt="Coca-Cola Classic Can" 
            className="mx-auto can-hover"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 6,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        
        <motion.div 
          className="text-white max-w-2xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.4 }}
        >
          <h1 className="font-montserrat font-bold text-5xl md:text-7xl mb-6">REFRESH THE WORLD</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Iconic taste since 1886. Zero sugar, maximum flavor.</p>
        </motion.div>
        
        <motion.div 
          className="mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.6 }}
        >
          <button 
            className="tap-circle bg-white text-[#E61D2B] rounded-full w-24 h-24 flex flex-col items-center justify-center font-montserrat font-bold cursor-pointer hover:bg-[#CCCCCC] transition-colors mx-auto"
            onClick={scrollToFlavorSection}
          >
            <span className="text-2xl">TAP</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
