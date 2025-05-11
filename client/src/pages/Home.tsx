import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UploadSection from "@/components/UploadSection";
import ProcessingSection from "@/components/ProcessingSection";
import ResultsSection from "@/components/ResultsSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { useState } from "react";

const Home = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleStartProcessing = () => {
    setIsProcessing(true);
    setShowResults(false);
    
    // Simulate process completion
    setTimeout(() => {
      setIsProcessing(false);
      setShowResults(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-blue to-navy overflow-x-hidden text-gray-100">
      <Navbar />
      <Hero />
      <UploadSection onStartProcessing={handleStartProcessing} />
      {isProcessing && <ProcessingSection />}
      {showResults && <ResultsSection />}
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
