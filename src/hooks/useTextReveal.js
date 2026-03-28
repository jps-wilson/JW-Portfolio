import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useTextReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const text = element.textContent;
    const words = text.split(" ");

    element.innerHTML = words
      .map((word) => `<span class="text-reveal__word"${word}</span>`)
      .join(" ");

    const wordSpans = element.querySelectorAll(".text-reveal__word");

    gsap.set(wordSpans, { opacity: 0, y: 20 });

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => {
        console.log("text reveal triggered");
        gsap.to(wordSpans, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.04,
        });
      },
    });

    return () => trigger.kill();
  }, []);

  return ref;
}
