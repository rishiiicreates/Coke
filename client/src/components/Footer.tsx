import CocaColaLogo from "./icons/CocaColaLogo";
import TwitterIcon from "./icons/TwitterIcon";

export default function Footer() {
  return (
    <footer className="bg-[#E61D2B] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 
              className="font-montserrat font-bold text-xl mb-4"
              style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.3)", letterSpacing: "0.5px" }}
            >
              PRODUCTS
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="hover:underline font-medium"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
                >
                  Coca-Cola Classic
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:underline font-medium"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
                >
                  Coca-Cola Zero Sugar
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:underline font-medium"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
                >
                  Coca-Cola Cherry
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:underline font-medium"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
                >
                  Coca-Cola Vanilla
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:underline font-medium"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
                >
                  Coca-Cola Energy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 
              className="font-montserrat font-bold text-xl mb-4"
              style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.3)", letterSpacing: "0.5px" }}
            >
              OUR STORY
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="hover:underline font-medium"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:underline font-medium"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
                >
                  History
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:underline font-medium"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:underline font-medium"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
                >
                  Careers
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:underline font-medium"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
                >
                  Press Center
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 
              className="font-montserrat font-bold text-xl mb-4"
              style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.3)", letterSpacing: "0.5px" }}
            >
              SUPPORT
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="hover:underline font-medium"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:underline font-medium"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:underline font-medium"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
                >
                  Store Locator
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:underline font-medium"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
                >
                  Ordering
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:underline font-medium"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 
              className="font-montserrat font-bold text-xl mb-4"
              style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.3)", letterSpacing: "0.5px" }}
            >
              NEWSLETTER
            </h3>
            <p 
              className="mb-4 font-medium"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
            >
              Stay updated with our latest products and promotions.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md w-full text-gray-800 focus:outline-none shadow-inner" 
              />
              <button 
                className="bg-white text-[#E61D2B] px-4 py-2 rounded-r-md font-montserrat font-semibold shadow-md hover:bg-gray-100 transition-colors"
                style={{ textShadow: "0px 1px 1px rgba(0,0,0,0.1)" }}
              >
                SIGN UP
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white border-opacity-20">
          <div className="flex flex-col justify-center items-center mb-6 pt-4">
            <div 
              className="bg-white px-8 py-4 rounded-lg shadow-xl mb-4 border-2 border-[#1DA1F2] relative overflow-hidden"
              style={{
                animation: "pulse-border 3s infinite ease-in-out",
              }}
            >

              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(29, 161, 242, 0.6), transparent)",
                  animation: "wave 3s infinite linear",
                  pointerEvents: "none",
                }}
              ></div>
              <a 
                href="https://twitter.com/rishiicreates" 
                className="flex items-center space-x-3 hover:opacity-90 transition-opacity relative z-10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-[#1DA1F2] p-3 rounded-full shadow-md">
                  <TwitterIcon />
                </div>
                <span 
                  className="coca-cola-font font-bold text-3xl text-[#E61D2B]"
                  style={{ 
                    textShadow: "2px 2px 3px rgba(0,0,0,0.2), 0 0 10px rgba(230,29,43,0.2)", 
                    letterSpacing: "0.5px",
                    WebkitTextStroke: "0.5px rgba(0,0,0,0.1)"
                  }}
                >
                  Made by @rishiicreates
                </span>
              </a>
            </div>
            
            <CocaColaLogo className="h-8 fill-white mt-2" />
          </div>
          
          <div className="text-center">
            <p 
              className="mb-2 font-medium"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
            >
              &copy; 2024 The Coca-Cola Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
