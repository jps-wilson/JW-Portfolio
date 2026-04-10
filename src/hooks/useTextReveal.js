import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useTextReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (element.dataset.revealed) return;
    element.dataset.revealed = "true";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const text = element.textContent;
    const words = text.split(" ");

    element.innerHTML = words
      .map((word) => `<span class="text-reveal__word">${word}</span>`)
      .join(" ");

    const wordSpans = element.querySelectorAll(".text-reveal__word");

    gsap.fromTo(
      wordSpans,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.04,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
        },
      },
    );
  }, []);

  return ref;
}
