import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const ProcessingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // Optional: animate width smoothly with GSAP on state change
  useEffect(() => {
    if (progressBarRef.current) {
      gsap.to(progressBarRef.current, {
        width: `${progress}%`,
        duration: 0.5,
        ease: "power1.out",
      });
    }
  }, [progress]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-surface/40 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 md:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-orbitron font-bold mb-4 sm:mb-6 md:mb-8">Processing Your Video</h3>
            
            <div className="relative w-full h-4 sm:h-6 bg-dark-blue/60 rounded-full mb-6 sm:mb-8 overflow-hidden">
              <div 
                ref={progressBarRef}
                className="h-full bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
              <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-scanline"></div>
            </div>
            
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center mr-3 sm:mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-neon-cyan" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-300">Video extraction complete</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center mr-3 sm:mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-neon-cyan" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-300">Initial frame analysis complete</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-neon-blue/20 flex items-center justify-center mr-3 sm:mr-4">
                  <div className="dot-pulse"></div>
                </div>
                <span className="text-sm sm:text-base text-gray-300">Running deepfake detection algorithms...</span>
              </div>
              <div className="flex items-center text-gray-500">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-800/40 flex items-center justify-center mr-3 sm:mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base">Generating analysis report</span>
              </div>
            </div>
            
            <p className="text-gray-400 text-xs sm:text-sm">
              This usually takes less than 30 seconds. Please don't close this window.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessingSection;
