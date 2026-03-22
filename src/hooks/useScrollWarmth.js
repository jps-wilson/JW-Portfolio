import { useEffect } from "react";

export function useScrollWarmth() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = Math.min(
        window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight),
        1,
      );

      const r = Math.round(20 + scrollPercent * 22);
      const g = Math.round(20 + scrollPercent * 11);
      const b = Math.round(20 + scrollPercent * 11);

      document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.backgroundColor = "";
    };
  }, []);
}
