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

    const anim = gsap.to(el, {
      y: -60,
      filter: "blur(5px)",
      opacity: 0.3,
      ease: "none",
      paused: true,
    });

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
