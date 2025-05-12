import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolledUp, setScrolledUp] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Show navbar when scrolling up
    if (currentScrollY < lastScrollY) {
      setScrolledUp(true);
    }
    // Hide navbar when scrolling down
    else if (currentScrollY > lastScrollY) {
      setScrolledUp(false);
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolledUp ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="w-7 h-7 sm:w-8 sm:h-8 mr-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan flex items-center justify-center">
              </div>
              <span className="font-orbitron font-bold text-lg sm:text-xl text-white">GenReal.AI</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 lg:space-x-8">
              <a href="#" className="text-gray-300 hover:text-neon-cyan font-medium transition-all ease-in duration-300">Home</a>
              <a href="#features" className="text-gray-300 hover:text-neon-cyan ease-in transition-all font-medium duration-300">Features</a>
              <a href="#model" className="text-gray-300 hover:text-neon-cyan font-medium transition-all ease-in duration-300">Try Model</a>
              <a href="#footer" className="text-gray-300 hover:text-neon-cyan font-medium transition-all ease-in duration-300">Contact</a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-neon-blue to-neon-cyan text-white hover:shadow-[0_0_15px_rgba(0,227,255,0.7)] transition-all duration-300">
              Get Started
            </Button>
          </div>
          
          <div className="block md:hidden">
            <button 
              className="text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-blue/95 backdrop-blur-md">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <a href="#" className="text-white block px-3 py-2 rounded-md font-medium">Home</a>
            <a href="#features" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium">Features</a>
            <a href="#model" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium">Try Model</a>
            <a href="#footer" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium">Contact</a>
            <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-cyan text-white mt-4">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
