import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const gsapInit = () => {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Navigation scroll effect
  gsap.to("nav", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "50px top",
      scrub: true
    },
    backgroundColor: "rgba(5, 8, 20, 0.8)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
  });
  
  // Reveal animations for elements
  const revealElements = document.querySelectorAll('.reveal-element');
  revealElements.forEach((element, index) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element as Element,
        start: "top bottom-=50px",
        toggleActions: "play none none none"
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      delay: index * 0.05
    });
  });
  
  // Parallax effect for background elements
  const parallaxElements = document.querySelectorAll('[data-parallax="true"]');
  parallaxElements.forEach(element => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element.parentElement as Element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      y: "20%",
      ease: "none"
    });
  });
};

export default gsapInit;
