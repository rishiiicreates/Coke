import { useEffect, useRef } from "react";

export default function ScrollAnimation() {
  const sectionsRef = useRef<NodeListOf<Element> | null>(null);
  
  useEffect(() => {
    sectionsRef.current = document.querySelectorAll('.page-section');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionsRef.current) {
      sectionsRef.current.forEach(section => {
        observer.observe(section);
      });
    }
    
    return () => {
      if (sectionsRef.current) {
        sectionsRef.current.forEach(section => {
          observer.unobserve(section);
        });
      }
    };
  }, []);
  
  return null;
}
