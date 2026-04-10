import { useState, useEffect } from "react";
import "../../styles/components/back-to-top.css";

function BackToTop() {
  const [scrolled, setScrolled] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const visible = scrolled && !footerVisible;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const footer = document.querySelector("footer");
    const observer = footer
      ? new IntersectionObserver(
          ([entry]) => setFooterVisible(entry.isIntersecting),
          { threshold: 0 }
        )
      : null;
    if (observer && footer) observer.observe(footer);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer?.disconnect();
    };
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      className={`back-to-top ${visible ? "back-to-top--visible" : ""}`}
      onClick={scrollToTop}
      aria-label='Back to top'
    >
      <span className='back-to-top__arrow'>↑</span>
      <span>JW</span>
    </button>
  );
}

export default BackToTop;
