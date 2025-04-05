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
          <h1 
            className="text-5xl md:text-7xl mb-6 text-white" 
            style={{ 
              fontFamily: "'Loki Cola', 'TCCC-UnityHeadline', 'Montserrat', sans-serif",
              textShadow: "2px 2px 4px rgba(0,0,0,0.4), 0 0 15px rgba(255,255,255,0.6), 0 0 30px rgba(255,255,255,0.4)",
              letterSpacing: "1px",
              WebkitTextStroke: "1px rgba(0,0,0,0.15)",
              fontWeight: "normal"
            }}
          >
            Refresh the World
          </h1>
          <p 
            className="text-xl md:text-2xl mb-8 font-semibold text-white" 
            style={{ 
              textShadow: "1px 1px 2px rgba(0,0,0,0.4), 0 0 10px rgba(255,255,255,0.4)", 
              letterSpacing: "0.5px" 
            }}
          >
            Iconic taste since 1886. Zero sugar, maximum flavor.
          </p>
        </motion.div>
        
        <motion.div 
          className="mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.6 }}
        >
          <button 
            className="tap-circle bg-white text-[#E61D2B] rounded-full w-24 h-24 flex flex-col items-center justify-center coca-cola-font font-bold cursor-pointer hover:bg-[#CCCCCC] transition-colors mx-auto shadow-lg"
            onClick={scrollToFlavorSection}
            style={{ border: "2px solid rgba(255,255,255,0.8)" }}
          >
            <span className="text-3xl" style={{ textShadow: "0px 1px 1px rgba(0,0,0,0.1)" }}>TAP</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
