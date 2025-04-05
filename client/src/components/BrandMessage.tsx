import { motion } from "framer-motion";

export default function BrandMessage() {
  return (
    <section className="py-16 bg-[#E61D2B] page-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://res.cloudinary.com/dhhfbpqbp/image/upload/v1615893020/coca-cola-splash_ythzvp.jpg" 
              alt="Refreshing Coca-Cola splash" 
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          
          <motion.div 
            className="text-white"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-montserrat font-bold text-4xl mb-6">REFRESH THE WORLD. MAKE A DIFFERENCE.</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-montserrat font-semibold text-2xl mb-2">The Product</h3>
                <p className="text-lg opacity-90">The perfect balance of sweet refreshment. A moment of happiness in every sip.</p>
              </div>
              
              <div>
                <h3 className="font-montserrat font-semibold text-2xl mb-2">Mission</h3>
                <p className="text-lg opacity-90">To refresh the world in mind, body and spirit. To inspire moments of optimism through our brands and actions.</p>
              </div>
              
              <div className="pt-6">
                <a 
                  href="#" 
                  className="inline-block bg-white text-[#E61D2B] font-montserrat font-semibold py-3 px-8 rounded-md hover:bg-[#CCCCCC] transition-colors"
                >
                  Order Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
