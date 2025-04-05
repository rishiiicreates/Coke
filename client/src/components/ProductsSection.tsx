import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "../data/products";
import ProductModal from "./ProductModal";
import PlusIcon from "./icons/PlusIcon";

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState("cans");
  const [selectedProduct, setSelectedProduct] = useState<null | typeof products.cans[0]>(null);
  
  const handleProductClick = (product: typeof products.cans[0] | typeof products.bottles[0]) => {
    setSelectedProduct(product);
  };
  
  const closeModal = () => {
    setSelectedProduct(null);
  };
  
  return (
    <section className="py-16 bg-[#F9F9F9] page-section">
      <div className="container mx-auto px-4">
        <h2 className="coca-cola-font font-bold text-4xl text-center mb-4">Products</h2>
        
        <div className="flex justify-center space-x-8 mb-12">
          <button 
            className={`product-tab coca-cola-font font-semibold text-lg border-b-2 px-4 py-2 transition-all ${activeTab === 'cans' ? 'border-[#E61D2B] text-[#E61D2B]' : 'border-transparent text-gray-500'}`}
            onClick={() => setActiveTab('cans')}
          >
            Cans
          </button>
          <button 
            className={`product-tab coca-cola-font font-semibold text-lg border-b-2 px-4 py-2 transition-all ${activeTab === 'bottles' ? 'border-[#E61D2B] text-[#E61D2B]' : 'border-transparent text-gray-500'}`}
            onClick={() => setActiveTab('bottles')}
          >
            Bottles
          </button>
        </div>
        
        <AnimatePresence mode="wait">
          {activeTab === 'cans' ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
              key="cans"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {products.cans.map((product) => (
                <div 
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg group relative can-hover cursor-pointer"
                  onClick={() => handleProductClick(product)}
                >
                  <div className="p-6 flex flex-col items-center">
                    <img 
                      src={product.image} 
                      alt={`Coca-Cola ${product.name} Can`} 
                      className="h-64 object-contain mb-6 transform transition-transform group-hover:scale-105"
                    />
                    <h3 className="coca-cola-font font-bold text-xl mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-center">0 sugar</p>
                    <button className="mt-4 text-[#E61D2B]">
                      <PlusIcon />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              key="bottles"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {products.bottles.map((product) => (
                <div 
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg group relative bottle-hover cursor-pointer"
                  onClick={() => handleProductClick(product)}
                >
                  <div className="p-6 flex flex-col items-center">
                    <img 
                      src={product.image} 
                      alt={`Coca-Cola ${product.name} Bottle`} 
                      className="h-64 object-contain mb-6 transform transition-transform group-hover:scale-105"
                    />
                    <h3 className="coca-cola-font font-bold text-xl mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-center">0% sugar</p>
                    <button className="mt-4 text-[#E61D2B]">
                      <PlusIcon />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        
        <ProductModal product={selectedProduct} onClose={closeModal} />
      </div>
    </section>
  );
}
