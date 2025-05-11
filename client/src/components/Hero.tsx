import { Button } from "@/components/ui/button";
import { useGSAP } from "@/hooks/useGSAP";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  useGSAP(() => {}, { scope: containerRef });

  return (
    <header ref={containerRef} className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0" data-parallax="true">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-blue to-navy">
          {/* Animated particles background would be added via GSAP */}
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto space-y-4">
            <div className="inline-block bg-gradient-to-r from-neon-blue/20 to-neon-cyan/20 rounded-full px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 reveal-element">
              <p className="text-xs sm:text-sm font-medium text-gray-200">
                <span className="text-neon-cyan">New:</span> Advanced AI detection technology released
              </p>
            </div>
            <h1 className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 reveal-element">
              Detect <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-cyan shadow-[0_0_10px_rgba(0,227,255,0.7)]">Deepfakes</span> Instantly
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 mx-auto reveal-element">
              Advanced AI-powered deepfake detection technology with unparalleled accuracy and speed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-element">
              <Button className="bg-gradient-to-r from-neon-blue to-neon-cyan text-white px-4 sm:px-8 py-4 sm:py-6 hover:shadow-[0_0_15px_rgba(0,227,255,0.7)] transition-all duration-300 transform hover:-translate-y-1">
                Get Free Version 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Button>
              <Button variant="outline" className="border-gray-600 hover:border-neon-cyan text-white px-4 sm:px-8 py-4 sm:py-6 hover:bg-transparent">
                Get Pro Version
              </Button>
            </div>
          </div>
          
          {/* Floating stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 md:mt-20 w-full max-w-4xl reveal-element">
            <div className="bg-dark-surface/40 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(0,112,243,0.7)]">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neon-blue/20 mb-3 sm:mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">99.8%</h3>
              <p className="text-sm sm:text-base text-gray-400">Detection Accuracy</p>
            </div>
            
            <div className="bg-dark-surface/40 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(0,227,255,0.7)]">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neon-cyan/20 mb-3 sm:mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">&lt; 0.5s</h3>
              <p className="text-sm sm:text-base text-gray-400">Processing Time</p>
            </div>
            
            <div className="bg-dark-surface/40 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(0,112,243,0.7)]">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neon-blue/20 mb-3 sm:mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">10+</h3>
              <p className="text-sm sm:text-base text-gray-400">AI Models Detected</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
