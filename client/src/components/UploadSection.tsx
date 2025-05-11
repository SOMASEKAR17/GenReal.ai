import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGSAP } from "@/hooks/useGSAP";

interface UploadSectionProps {
  onStartProcessing: () => void;
}

const UploadSection = ({ onStartProcessing }: UploadSectionProps) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'url'>('upload');
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  
  useGSAP(() => {}, { scope: containerRef });

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    onStartProcessing();
  };

  return (
    <section ref={containerRef} className="py-10 sm:py-12 md:py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 reveal-element">
              Detect <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-cyan shadow-[0_0_10px_rgba(0,227,255,0.7)]">Deepfakes</span> Instantly
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto reveal-element">
              Upload your video or enter a URL to analyze content with our cutting-edge AI detection algorithms.
            </p>
          </div>
          
          {/* Upload/URL toggle */}
          <div className="flex justify-center mb-6 sm:mb-8 reveal-element">
            <div className="bg-dark-surface/40 backdrop-blur-md border border-white/10 p-1 rounded-full flex">
              <button 
                className={`py-1.5 sm:py-2 px-3 sm:px-6 rounded-full transition-colors duration-200 ${
                  activeTab === 'upload' 
                    ? 'bg-gradient-to-r from-neon-blue to-neon-cyan text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setActiveTab('upload')}
              >
                Upload Video
              </button>
              <button 
                className={`py-1.5 sm:py-2 px-3 sm:px-6 rounded-full transition-colors duration-200 ${
                  activeTab === 'url' 
                    ? 'bg-gradient-to-r from-neon-blue to-neon-cyan text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setActiveTab('url')}
              >
                Enter URL
              </button>
            </div>
          </div>
          
          {/* Upload area */}
          {activeTab === 'upload' && (
            <div className="reveal-element">
              <div 
                className={`bg-dark-surface/40 backdrop-blur-md border-2 border-dashed ${
                  isDragging ? 'border-neon-cyan shadow-[0_0_25px_rgba(0,227,255,0.4)] bg-neon-cyan/10' : 'border-gray-600 hover:border-neon-cyan'
                } rounded-xl p-4 sm:p-6 md:p-8 transition-all duration-300`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={onStartProcessing}
              >
                <div className="flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-cyan/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">Drag & Drop your video here</h3>
                  <p className="text-sm sm:text-base text-gray-400 max-w-md">
                    Supports all common video formats (MP4, AVI, MOV) up to 50MB
                  </p>
                  <div className="pt-2 sm:pt-4">
                    <label className="bg-gradient-to-r from-neon-blue to-neon-cyan text-white font-medium py-1.5 sm:py-2 px-4 sm:px-6 text-sm sm:text-base rounded-md cursor-pointer hover:shadow-[0_0_15px_rgba(0,227,255,0.7)] transition-all duration-300 transform hover:-translate-y-1">
                      Browse Videos
                      <input type="file" className="hidden" accept="video/*" onChange={() => onStartProcessing()} />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* URL input */}
          {activeTab === 'url' && (
            <div className="reveal-element">
              <div className="bg-dark-surface/40 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 md:p-8">
                <div className="flex flex-col space-y-4 sm:space-y-6">
                  <div className="relative">
                    <label htmlFor="url-input" className="block text-sm font-medium text-gray-300 mb-2">Enter video URL to analyze</label>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                      <Input
                        id="url-input"
                        type="text"
                        className="w-full sm:flex-grow bg-dark-surface border border-gray-700 text-white sm:rounded-r-none px-3 sm:px-4 py-2 sm:py-3 focus:ring-neon-cyan placeholder:text-gray-500"
                        placeholder="https://example.com/video-to-analyze"
                      />
                      <Button 
                        className="w-full sm:w-auto bg-gradient-to-r from-neon-blue to-neon-cyan text-white sm:rounded-l-none hover:shadow-[0_0_15px_rgba(0,227,255,0.7)]"
                        onClick={onStartProcessing}
                      >
                        Analyze
                      </Button>
                    </div>
                  </div>
                  <div className="bg-dark-blue/50 rounded-lg p-3 sm:p-4 border border-gray-700">
                    <h4 className="text-xs sm:text-sm font-medium text-white mb-1 sm:mb-2">Tips:</h4>
                    <ul className="text-gray-400 text-xs sm:text-sm space-y-1">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-neon-cyan mt-0.5 mr-1 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                        <span>Ensure the URL is publicly accessible and contains video content</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-neon-cyan mt-0.5 mr-1 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                        <span>Works with YouTube, Vimeo, Facebook, and other video platforms</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-neon-cyan mt-0.5 mr-1 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                        <span>For private or protected videos, use the upload option instead</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
