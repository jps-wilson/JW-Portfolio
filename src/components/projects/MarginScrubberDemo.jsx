import { useState, useRef, useCallback, useEffect } from "react";
import fromImage from "../../assets/screenshots/margin-demo-from.webp";
import toImage from "../../assets/screenshots/margin-demo-to.webp";
import "../../styles/components/margin-scrubber-demo.css";

function MarginScrubberDemo() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const draggingRef = useRef(false);

  const updateFromPointer = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const handlePointerDown = (e) => {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromPointer(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (!draggingRef.current) return;
    updateFromPointer(e.clientX);
  };

  const handlePointerUp = (e) => {
    draggingRef.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setSliderPos((p) => Math.min(100, p + 2));
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setSliderPos((p) => Math.max(0, p - 2));
    }
  };

  const handleTouchStart = (e) => {
    draggingRef.current = true;
    updateFromPointer(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    draggingRef.current = false;
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onTouchMove = (e) => {
      if (!draggingRef.current) return;
      e.preventDefault();
      updateFromPointer(e.touches[0].clientX);
    };
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => el.removeEventListener("touchmove", onTouchMove);
  }, [updateFromPointer]);

  return (
    <div className='margin-scrubber'>
      <div
        ref={containerRef}
        className='margin-scrubber__frame'
        role='slider'
        tabIndex={0}
        aria-label='Compare original and updated Figma versions'
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(sliderPos)}
        aria-valuetext={`${Math.round(sliderPos)}% revealed toward the original version`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          className='margin-scrubber__image margin-scrubber__image--to'
          src={toImage}
          alt='Updated version'
          loading='lazy'
        />
        <img
          className='margin-scrubber__image margin-scrubber__image--from'
          src={fromImage}
          alt='Original version'
          loading='lazy'
          style={{
            clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
          }}
        />
        <div
          className='margin-scrubber__handle'
          style={{ left: `${sliderPos}%` }}
        >
          <span className='margin-scrubber__handle-grip' />
        </div>
      </div>
      <div className='margin-scrubber__labels'>
        <span>To</span>
        <span>From</span>
      </div>
      <p className='margin-scrubber__hint'>
        Drag to compare
        <span className='margin-scrubber__hint-keyboard'>
          , or use arrow keys
        </span>
      </p>
    </div>
  );
}

export default MarginScrubberDemo;
