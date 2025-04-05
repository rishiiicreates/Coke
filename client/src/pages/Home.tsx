import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FlavorSelector from "../components/FlavorSelector";
import ProductsSection from "../components/ProductsSection";
import BrandMessage from "../components/BrandMessage";
import SustainabilitySection from "../components/SustainabilitySection";
import SocialGallery from "../components/SocialGallery";
import Footer from "../components/Footer";
import { animateSections } from "../lib/animations";

export default function Home() {
  useEffect(() => {
    // Initial animation of sections
    animateSections();
    
    // Add scroll event listener
    window.addEventListener("scroll", animateSections);
    
    return () => {
      window.removeEventListener("scroll", animateSections);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <FlavorSelector />
      <ProductsSection />
      <BrandMessage />
      <SustainabilitySection />
      <SocialGallery />
      <Footer />
    </div>
  );
}
