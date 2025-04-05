export function animateSections() {
  // Function to check if an element is in viewport
  const isInViewport = (element: Element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Consider element in viewport if it's top is in view or if it's larger than viewport
    return (
      rect.top <= windowHeight * 0.75 && 
      rect.bottom >= 0
    );
  };
  
  // Function to handle scroll events
  const handleScroll = () => {
    const sections = document.querySelectorAll('.page-section');
    
    sections.forEach((section) => {
      if (isInViewport(section)) {
        section.classList.add('visible');
      }
    });
  };
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
  
  // Trigger on initial load
  setTimeout(handleScroll, 100);
  
  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}