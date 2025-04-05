import { motion } from "framer-motion";
import InstagramIcon from "./icons/InstagramIcon";
import TwitterIcon from "./icons/TwitterIcon";
import FacebookIcon from "./icons/FacebookIcon";

export default function SocialGallery() {
  const socialImages = [
    {
      id: 1,
      url: "https://res.cloudinary.com/dhhfbpqbp/image/upload/v1615893421/coca-cola-social-1_wnmzfv.jpg",
      alt: "Coca-Cola Social Post 1"
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dhhfbpqbp/image/upload/v1615893461/coca-cola-social-2_hbvpom.jpg",
      alt: "Coca-Cola Social Post 2"
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dhhfbpqbp/image/upload/v1615893490/coca-cola-social-3_znnz4t.jpg",
      alt: "Coca-Cola Social Post 3"
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/dhhfbpqbp/image/upload/v1615893518/coca-cola-social-4_wlkvf3.jpg",
      alt: "Coca-Cola Social Post 4"
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/dhhfbpqbp/image/upload/v1615893546/coca-cola-social-5_ygufv1.jpg",
      alt: "Coca-Cola Social Post 5"
    },
    {
      id: 6,
      url: "https://res.cloudinary.com/dhhfbpqbp/image/upload/v1615893574/coca-cola-social-6_hreknv.jpg",
      alt: "Coca-Cola Social Post 6"
    }
  ];

  return (
    <section className="py-16 bg-[#F9F9F9] page-section">
      <div className="container mx-auto px-4">
        <h2 className="font-montserrat font-bold text-4xl text-center mb-4">SOCIALS</h2>
        <p className="text-gray-600 text-center mb-12">Share your Coca-Cola moments with us using #RefreshingMoments</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {socialImages.map((image, index) => (
            <motion.img 
              key={image.id}
              src={image.url} 
              alt={image.alt} 
              className="w-full h-64 md:h-48 object-cover rounded-lg hover:opacity-90 transition-opacity"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            />
          ))}
        </div>
        
        <div className="flex justify-center space-x-6 mt-12">
          <a href="#" className="text-[#E61D2B] hover:text-[#B5121B] transition-colors">
            <InstagramIcon />
          </a>
          <a href="#" className="text-[#E61D2B] hover:text-[#B5121B] transition-colors">
            <TwitterIcon />
          </a>
          <a href="#" className="text-[#E61D2B] hover:text-[#B5121B] transition-colors">
            <FacebookIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
