import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-blue/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="w-7 h-7 sm:w-8 sm:h-8 mr-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3.5a.5.5 0 01.5.5v1a.5.5 0 01-1 0V4a.5.5 0 01.5-.5zM10 7a3 3 0 100 6 3 3 0 000-6zm-7 3a7 7 0 1114 0 7 7 0 01-14 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-orbitron font-bold text-lg sm:text-xl text-white">GenReal.AI</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 lg:space-x-8">
              <a href="#" className="text-white hover:text-neon-cyan font-medium transition-colors duration-200">Home</a>
              <a href="#features" className="text-gray-300 hover:text-neon-cyan font-medium transition-colors duration-200">Features</a>
              <a href="#" className="text-gray-300 hover:text-neon-cyan font-medium transition-colors duration-200">About</a>
              <a href="#" className="text-gray-300 hover:text-neon-cyan font-medium transition-colors duration-200">Contact</a>
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
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium">About</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium">Contact</a>
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
