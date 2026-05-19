import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// eslint-disable-next-line no-unused-vars
import { filter } from "framer-motion/client";

gsap.registerPlugin(ScrollTrigger);

export function useHeroScroll() {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const anim = gsap.to(el, {
      y: -60,
      filter: isMobile ? {} : { filter: "blur(5px)" },
      opacity: "none",
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
