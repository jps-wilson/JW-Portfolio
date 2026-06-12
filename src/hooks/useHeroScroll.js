import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function useHeroScroll() {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const config = {
      y: -60,
      opacity: 0,
      paused: true,
    };

    if (!isMobile) {
      config.filter = "blur(5px)";
    }

    const anim = gsap.to(el, config);

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top top",
      end: "bottom top",
      scrub: 1.2,
      animation: anim,
    });

    return () => {
      trigger.kill();
      anim.kill();
    };
  }, []);

  return ref;
}
