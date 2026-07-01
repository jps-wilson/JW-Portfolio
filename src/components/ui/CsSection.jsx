import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CodeSnippet from "./CodeSnippet";

gsap.registerPlugin(ScrollTrigger);

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

function CsSection({ section }) {
  const codeRef = useRef(null);

  useEffect(() => {
    const el = codeRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(el, { opacity: 1, clearProps: "opacity" });
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => {
        gsap.to(el, { opacity: 1, duration: 0.9, ease: "power2.out" });
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <div
      id={slugify(section.label)}
      className={`cs__section ${section.snippet ? "cs__section--split" : "cs__section--intro"}`}
    >
      <div className='cs__section-text'>
        <div className='cs__label'>
          <span className='cs__label-line'></span>
          <span className='cs__label-text'>{section.label}</span>
        </div>
        <h2 className='cs__heading'>{section.heading}</h2>
        <p className='cs__copy'>{section.copy}</p>
      </div>
      {section.snippet && (
        <div className='cs__section-code' ref={codeRef}>
          <CodeSnippet snippet={section.snippet} />
        </div>
      )}
    </div>
  );
}

export default CsSection;
