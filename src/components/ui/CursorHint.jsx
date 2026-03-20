import { useEffect, useState, useRef } from "react";
import "../../styles/components/cursor-hint.css";

function CursorHint({ targetRef, sectionRef }) {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [arrived, setArrived] = useState(false);
  const hasPlayed = useRef(false);

  useEffect(() => {
    const seen = localStorage.getItem("cursorHintSeen");
    if (seen) return;

    const section = sectionRef?.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed.current) {
            hasPlayed.current = true;
            observer.disconnect();

            setTimeout(() => {
              if (targetRef.current) {
                const rect = targetRef.current.getBoundingClientRect();
                setPos({
                  x: rect.left + rect.width / 2,
                  y: rect.top + rect.height / 2,
                });
              }
              setVisible(true);

              setTimeout(() => setArrived(true), 1600);

              setTimeout(() => {
                setVisible(false);
                setTimeout(() => {
                  setArrived(false);
                  localStorage.setItem("cursorHintSeen", "true");
                }, 500);
              }, 3200);
            }, 400);
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [targetRef, sectionRef]);

  if (!visible && !arrived) return null;

  return (
    <div
      className={`cursor-hint ${visible ? "cursor-hint--visible" : "cursor-hint--hidden"}`}
      style={{ left: pos.x, top: pos.y }}
    >
      <svg width='32' height='32' viewBox='0 0 32 32' fill='none'>
        <circle cx='16' cy='16' r='6' fill='var(--color-cream)' />
        <circle
          cx='16'
          cy='16'
          r='13'
          stroke='var(--color-ember)'
          strokeWidth='1.5'
          opacity='0.9'
        />
      </svg>
    </div>
  );
}

export default CursorHint;
