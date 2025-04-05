import { motion } from "framer-motion";
import RecycleIcon from "./icons/RecycleIcon";
import WaterIcon from "./icons/WaterIcon";
import LeafIcon from "./icons/LeafIcon";

export default function SustainabilitySection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1, 
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };

  return (
    <section className="py-16 bg-white page-section">
      <div className="container mx-auto px-4">
        <h2 className="font-montserrat font-bold text-4xl text-center mb-12">FOR THE PLANET</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-[#F9F9F9] rounded-lg p-8 text-center"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="text-[#E61D2B] mb-6 flex justify-center">
              <RecycleIcon />
            </div>
            <h3 className="font-montserrat font-bold text-xl mb-4">RECYCLING INNOVATION</h3>
            <p className="text-gray-700">We're committed to making our packaging 100% recyclable globally by 2025. Currently, our bottles and cans are already 100% recyclable.</p>
          </motion.div>
          
          <motion.div 
            className="bg-[#F9F9F9] rounded-lg p-8 text-center"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="text-[#E61D2B] mb-6 flex justify-center">
              <WaterIcon />
            </div>
            <h3 className="font-montserrat font-bold text-xl mb-4">WATER STEWARDSHIP</h3>
            <p className="text-gray-700">We're working to replenish 100% of the water used in our beverages back to communities and nature. We've already achieved this goal globally.</p>
          </motion.div>
          
          <motion.div 
            className="bg-[#F9F9F9] rounded-lg p-8 text-center"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="text-[#E61D2B] mb-6 flex justify-center">
              <LeafIcon />
            </div>
            <h3 className="font-montserrat font-bold text-xl mb-4">CARBON FOOTPRINT</h3>
            <p className="text-gray-700">We've set ambitious goals to reduce carbon emissions across our entire value chain by 25% by 2030, aiming for net-zero carbon emissions by 2050.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
