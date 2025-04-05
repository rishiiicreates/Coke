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
            <h2 
              className="coca-cola-font font-bold text-4xl mb-6"
              style={{ 
                textShadow: "2px 2px 4px rgba(0,0,0,0.2)", 
                WebkitTextStroke: "0.5px rgba(255,255,255,0.3)" 
              }}
            >
              REFRESH THE WORLD. MAKE A DIFFERENCE.
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 
                  className="coca-cola-font font-semibold text-2xl mb-2"
                  style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.2)" }}
                >
                  The Product
                </h3>
                <p className="text-lg font-medium" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.15)" }}>
                  The perfect balance of sweet refreshment. A moment of happiness in every sip.
                </p>
              </div>
              
              <div>
                <h3 
                  className="coca-cola-font font-semibold text-2xl mb-2"
                  style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.2)" }}
                >
                  Mission
                </h3>
                <p className="text-lg font-medium" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.15)" }}>
                  To refresh the world in mind, body and spirit. To inspire moments of optimism through our brands and actions.
                </p>
              </div>
              
              <div className="pt-6">
                <a 
                  href="#" 
                  className="inline-block bg-white text-[#E61D2B] coca-cola-font font-semibold py-3 px-8 rounded-md hover:bg-[#CCCCCC] transition-colors"
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
