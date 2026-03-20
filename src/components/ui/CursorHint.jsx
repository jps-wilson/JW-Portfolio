import { useEffect, useState } from "react";
import "../../styles/components/cursor-hint.css";

function CursorHint({ targetRef }) {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 200, y: 400 });
  const [arrived, setArrived] = useState(false);

  useEffect(() => {
    console.log("CursorHint mounted");
    console.log("targetRef:", targetRef);
    console.log("targetRef.current:", targetRef.current);

    const seen = localStorage.getItem("cursorHintSeen");
    console.log("seen:", seen);
    if (seen) return;

    let fadeTimer;
    let arrivedTimer;

    const timer = setTimeout(() => {
      console.log("timer fired");
      console.log("targetRef.current inside timer:", targetRef.current);
      if (targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect();
        setPos({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2 + window.scrollY,
        });
      }
      setVisible(true);

      arrivedTimer = setTimeout(() => setArrived(true), 1000);

      fadeTimer = setTimeout(() => {
        setVisible(false);
        localStorage.setItem("cursorHintSeen", "true");
      }, 2400);
    }, 1800);

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeTimer);
      clearTimeout(arrivedTimer);
    };
  }, [targetRef]);

  if (!visible && !arrived) return null;

  return (
    <div
      className={`cursor-hint ${visible ? "cursor-hint--visible" : "cursor-hint--hidden"}`}
      style={{ left: pos.x, top: pos.y }}
    >
      <svg width='24' height='32' viewBox='0 0 24 32' fill='none'>
        <path
          d='M4 4L4 24L9 19L12 28L15 27L12 18L20 18L4 4Z'
          fill='var(--color-cream)'
          stroke='var(--color-void)'
          strokeWidth='1.5'
        />
      </svg>
    </div>
  );
}

export default CursorHint;
