import CocaColaLogo from "./icons/CocaColaLogo";
import TwitterIcon from "./icons/TwitterIcon";

export default function Footer() {
  return (
    <footer className="bg-[#E61D2B] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">PRODUCTS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Coca-Cola Classic</a></li>
              <li><a href="#" className="hover:underline">Coca-Cola Zero Sugar</a></li>
              <li><a href="#" className="hover:underline">Coca-Cola Cherry</a></li>
              <li><a href="#" className="hover:underline">Coca-Cola Vanilla</a></li>
              <li><a href="#" className="hover:underline">Coca-Cola Energy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">OUR STORY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">History</a></li>
              <li><a href="#" className="hover:underline">Sustainability</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press Center</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">SUPPORT</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Store Locator</a></li>
              <li><a href="#" className="hover:underline">Ordering</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">NEWSLETTER</h3>
            <p className="mb-4">Stay updated with our latest products and promotions.</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-md w-full text-gray-800 focus:outline-none" />
              <button className="bg-white text-[#E61D2B] px-4 py-2 rounded-r-md font-montserrat font-semibold">SIGN UP</button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white border-opacity-20">
          <div className="flex flex-col justify-center items-center mb-6 pt-4">
            <div className="bg-white px-6 py-3 rounded-lg shadow-lg mb-4">
              <a 
                href="https://twitter.com/rishiicreates" 
                className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-[#1DA1F2] p-2 rounded-full">
                  <TwitterIcon />
                </div>
                <span className="coca-cola-font font-bold text-2xl text-[#E61D2B]">
                  Made by @rishiicreates
                </span>
              </a>
            </div>
            
            <CocaColaLogo className="h-8 fill-white mt-2" />
          </div>
          
          <div className="text-center">
            <p className="mb-2">&copy; 2024 The Coca-Cola Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
