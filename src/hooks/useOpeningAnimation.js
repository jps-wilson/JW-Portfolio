import { useEffect, useRef } from "react";
import gsap from "gsap";

export function useOpeningAnimation(ready) {
  const lineRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);

  useEffect(() => {
    if (!ready) return;
    if (!lineRef.current || !nameRef.current || !roleRef.current) return;

    gsap.set([lineRef.current, nameRef.current, roleRef.current], {
      opacity: 0,
      y: 30,
    });

    const t1 = gsap.timeline({ delay: 0.2 });

    t1.to(lineRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
    })
      .to(
        nameRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6",
      )
      .to(
        roleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5",
      );
  }, [ready]);
  return { lineRef, nameRef, roleRef };
}
