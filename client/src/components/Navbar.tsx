import { useState, useEffect } from "react";
import CocaColaLogo from "./icons/CocaColaLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 p-5 flex justify-between items-center transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <a href="#" className="z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E61D2B]">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 12h8"></path>
        </svg>
      </a>
      
      <div className="z-10">
        <CocaColaLogo className="h-10" />
      </div>
      
      <button className="z-10 bg-white text-[#E61D2B] font-montserrat font-semibold py-2 px-4 rounded shadow-lg hover:bg-[#E61D2B] hover:text-white transition-all">
        ORDER
      </button>
    </nav>
  );
}
