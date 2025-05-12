import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const gsapInit = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to("nav", {
    backgroundColor: "rgba(5, 8, 20, 0.8)",
    backdropFilter: "blur(10px)",
  });


  const revealElements = document.querySelectorAll('.reveal-element');
  revealElements.forEach((element, index) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element as Element,
        start: "top bottom-=100px",
        toggleActions: "play none none none"
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
    });
  });
};

export default gsapInit;
