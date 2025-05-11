import { Button } from "@/components/ui/button";
import { useGSAP } from "@/hooks/useGSAP";
import { useRef } from "react";
import gsap from "gsap";

const ResultsSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  useGSAP(() => {
    // Animate result elements
    const resultElements = containerRef.current?.querySelectorAll('.reveal-element');
    
    if (resultElements) {
      gsap.from(resultElements, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 reveal-element">
            <div className="inline-block bg-neon-cyan/10 text-neon-cyan font-medium rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm mb-3 sm:mb-4">
              Analysis Complete
            </div>
            <h2 className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Deepfake <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-cyan shadow-[0_0_10px_rgba(0,227,255,0.7)]">Results</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Our advanced algorithms have analyzed your video with high precision.
            </p>
          </div>
          
          {/* Results Dashboard */}
          <div className="bg-dark-surface/40 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 reveal-element">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-8">
              {/* Main Result */}
              <div className="col-span-1 lg:col-span-1">
                <div className="bg-dark-surface/40 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-neon-cyan/30 h-full flex flex-col">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">Detection Summary</h3>
                  
                  <div className="relative mx-auto mb-4 sm:mb-6">
                    {/* Circular progress bar with 78% */}
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-dark-blue/60 flex items-center justify-center relative">
                      <svg className="w-32 h-32 sm:w-40 sm:h-40 absolute top-0 left-0" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#1a2e44" strokeWidth="8"/>
                        <circle cx="50" cy="50" r="45" fill="none" stroke="url(#gradient)" strokeWidth="8" strokeDasharray="282.7" strokeDashoffset="62.2" transform="rotate(-90 50 50)"/>
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0070F3" />
                            <stop offset="100%" stopColor="#00E3FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="text-center">
                        <span className="block text-2xl sm:text-4xl font-bold text-white">78%</span>
                        <span className="text-xs sm:text-sm text-neon-cyan">Deepfake Probability</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-4 mt-auto">
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base text-gray-300">Confidence Level</span>
                      <span className="text-sm sm:text-base text-white font-medium">High</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base text-gray-300">AI Model Detected</span>
                      <span className="text-sm sm:text-base text-white font-medium">DeepFaceLab</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base text-gray-300">Video Type</span>
                      <span className="text-sm sm:text-base text-white font-medium">Face Swap</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base text-gray-300">Analysis Time</span>
                      <span className="text-sm sm:text-base text-white font-medium">0.42s</span>
                    </div>
                  </div>
                  
                  <Button className="mt-4 sm:mt-6 bg-gradient-to-r from-neon-blue to-neon-cyan text-white text-sm sm:text-base py-2 sm:py-3 hover:shadow-[0_0_15px_rgba(0,227,255,0.7)] transition-all duration-300">
                    Download Full Report
                  </Button>
                </div>
              </div>
              
              {/* Detailed Analysis */}
              <div className="col-span-1 lg:col-span-2">
                <div className="bg-dark-surface/40 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-gray-700 h-full">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Detailed Analysis</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="bg-dark-blue/30 rounded-lg p-3 sm:p-4">
                      <h4 className="text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">Facial Analysis</h4>
                      <div className="space-y-1.5 sm:space-y-2">
                        <div className="w-full bg-dark-blue/60 rounded-full h-2 sm:h-2.5">
                          <div className="bg-gradient-to-r from-neon-blue to-neon-cyan h-2 sm:h-2.5 rounded-full" style={{width: '85%'}}></div>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Facial Inconsistencies</span>
                          <span className="text-neon-cyan">85%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-dark-blue/30 rounded-lg p-3 sm:p-4">
                      <h4 className="text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">Lip Sync Analysis</h4>
                      <div className="space-y-1.5 sm:space-y-2">
                        <div className="w-full bg-dark-blue/60 rounded-full h-2 sm:h-2.5">
                          <div className="bg-gradient-to-r from-neon-blue to-neon-cyan h-2 sm:h-2.5 rounded-full" style={{width: '72%'}}></div>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Audio-Video Mismatch</span>
                          <span className="text-neon-cyan">72%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-dark-blue/30 rounded-lg p-3 sm:p-4">
                      <h4 className="text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">Blinking Patterns</h4>
                      <div className="space-y-1.5 sm:space-y-2">
                        <div className="w-full bg-dark-blue/60 rounded-full h-2 sm:h-2.5">
                          <div className="bg-gradient-to-r from-neon-blue to-neon-cyan h-2 sm:h-2.5 rounded-full" style={{width: '65%'}}></div>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Abnormal Blinking</span>
                          <span className="text-neon-cyan">65%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-dark-blue/30 rounded-lg p-3 sm:p-4">
                      <h4 className="text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">Deepfake Markers</h4>
                      <div className="space-y-1.5 sm:space-y-2">
                        <div className="w-full bg-dark-blue/60 rounded-full h-2 sm:h-2.5">
                          <div className="bg-gradient-to-r from-neon-blue to-neon-cyan h-2 sm:h-2.5 rounded-full" style={{width: '88%'}}></div>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">AI Pattern Match</span>
                          <span className="text-neon-cyan">88%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-dark-blue/30 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                    <h4 className="text-xs sm:text-sm font-medium text-gray-300 mb-2 sm:mb-3">Video Sample</h4>
                    <div className="text-xs sm:text-sm text-gray-300 bg-dark-surface/80 rounded-md p-2 sm:p-3 border border-gray-700">
                      <div className="aspect-video bg-gray-900/70 rounded flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="mt-2 text-xs text-gray-400">
                        Video contains deepfaked facial expressions and mouth movements that don't match natural patterns.
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-xs sm:text-sm text-gray-400">
                    <p className="mb-3 sm:mb-4">Key Observations:</p>
                    <ul className="space-y-1.5 sm:space-y-2">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-neon-cyan mt-0.5 mr-1.5 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Unnatural facial muscle movements during speech</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-neon-cyan mt-0.5 mr-1.5 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Digital artifacts detected around eye and mouth regions</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-neon-cyan mt-0.5 mr-1.5 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Inconsistent lighting and texture patterns across facial features</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Previous Analysis */}
          <h3 className="font-orbitron text-xl sm:text-2xl font-bold mb-4 sm:mb-6 reveal-element">Recent Analyses</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 reveal-element">
            {/* Results Card 1 */}
            <div className="bg-dark-surface/40 backdrop-blur-md border border-gray-700 rounded-xl p-4 sm:p-6 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(0,112,243,0.7)]">
              <div className="flex justify-between items-start mb-3 sm:mb-4">
                <div>
                  <span className="text-xs text-gray-400">May 15, 2025</span>
                  <h4 className="text-sm sm:text-base font-medium">Political Speech</h4>
                </div>
                <div className="bg-neon-cyan/20 text-neon-cyan text-xs font-medium rounded-full px-2 sm:px-2.5 py-0.5 sm:py-1">
                  92% Fake
                </div>
              </div>
              <div className="w-full bg-dark-blue/60 rounded-full h-1.5 sm:h-2 mb-3 sm:mb-4">
                <div className="bg-gradient-to-r from-neon-blue to-neon-cyan h-1.5 sm:h-2 rounded-full" style={{width: '92%'}}></div>
              </div>
              <div className="text-xs text-gray-400 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-neon-cyan mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>DeepFaceLab detected</span>
              </div>
            </div>
            
            {/* Results Card 2 */}
            <div className="bg-dark-surface/40 backdrop-blur-md border border-gray-700 rounded-xl p-6 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(0,112,243,0.7)]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs text-gray-400">May 14, 2023</span>
                  <h4 className="font-medium">Marketing Copy</h4>
                </div>
                <div className="bg-neon-cyan/20 text-neon-cyan text-xs font-medium rounded-full px-2.5 py-1">
                  86% AI
                </div>
              </div>
              <div className="w-full bg-dark-blue/60 rounded-full h-2 mb-4">
                <div className="bg-gradient-to-r from-neon-blue to-neon-cyan h-2 rounded-full" style={{width: '86%'}}></div>
              </div>
              <div className="text-xs text-gray-400 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neon-cyan mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Claude detected</span>
              </div>
            </div>
            
            {/* Results Card 3 */}
            <div className="bg-dark-surface/40 backdrop-blur-md border border-gray-700 rounded-xl p-6 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(0,112,243,0.7)]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs text-gray-400">May 12, 2023</span>
                  <h4 className="font-medium">Product Description</h4>
                </div>
                <div className="bg-green-500/20 text-green-400 text-xs font-medium rounded-full px-2.5 py-1">
                  12% AI
                </div>
              </div>
              <div className="w-full bg-dark-blue/60 rounded-full h-2 mb-4">
                <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full" style={{width: '12%'}}></div>
              </div>
              <div className="text-xs text-gray-400 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Human-generated</span>
              </div>
            </div>
            
            {/* Results Card 4 */}
            <div className="bg-dark-surface/40 backdrop-blur-md border border-gray-700 rounded-xl p-6 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(0,112,243,0.7)]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs text-gray-400">May 10, 2023</span>
                  <h4 className="font-medium">Blog Post</h4>
                </div>
                <div className="bg-yellow-500/20 text-yellow-400 text-xs font-medium rounded-full px-2.5 py-1">
                  48% AI
                </div>
              </div>
              <div className="w-full bg-dark-blue/60 rounded-full h-2 mb-4">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-2 rounded-full" style={{width: '48%'}}></div>
              </div>
              <div className="text-xs text-gray-400 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Mixed content</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
