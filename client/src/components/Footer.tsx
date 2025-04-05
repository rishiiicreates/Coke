import CocaColaLogo from "./icons/CocaColaLogo";

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
        
        <div className="mt-12 pt-8 border-t border-white border-opacity-20 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <CocaColaLogo className="h-8 fill-white" />
          </div>
          
          <div className="text-center md:text-right">
            <p className="mb-2">&copy; 2024 The Coca-Cola Company. All rights reserved.</p>
            <p className="text-lg">Made by <a href="https://twitter.com/rishiicreates" className="coca-cola-font font-bold text-xl hover:underline relative" style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.2)" }}>@rishiicreates</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
