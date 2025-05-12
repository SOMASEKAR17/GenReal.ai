import { Button } from "@/components/ui/button";
import { useRef } from "react";

const CTASection = () => {


  return (
    <section className="py-16 relative">
      <div id="footer" className="absolute inset-0 z-0 opacity-20">
        <div className="w-full h-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-surface/40 backdrop-blur-md border border-neon-cyan/20 rounded-xl p-8 md:p-12 text-center reveal-element">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-cyan ">Detect AI</span> Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses and individuals who trust our platform for accurate AI content detection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-neon-blue to-neon-cyan text-white px-8 py-6 hover:shadow-[0_0_15px_rgba(0,227,255,0.7)] transition-all duration-300">
                Start Free Trial
              </Button>
            </div>
            <div className="mt-8 text-gray-400 text-sm">
              No credit card required. 14-day free trial with unlimited access.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
