import { useState, useRef, useCallback, useMemo } from "react";
import "../../styles/components/pressure-demo.css";

const MIN_PRESSURE = 990;
const MAX_PRESSURE = 1030;
const MIN_ANGLE = -150;
const MAX_ANGLE = 150;

function getStrain(pressure) {
  if (pressure > 1018) {
    return {
      state: "calm",
      label: "CALM",
      insight: "Atmospheric pressure is high. Expect clarity.",
    };
  }
  if (pressure >= 1005) {
    return {
      state: "moderate",
      label: "MODERATE",
      insight: "Pressure is slightly unsettled. Some may notice mild fatigue.",
    };
  }
  return {
    state: "heavy",
    label: "HEAVY",
    insight:
      "Low pressure detected. Fatigue and headaches are more likely today.",
  };
}

function angleToPressure(angleDeg) {
  const clamped = Math.min(MAX_ANGLE, Math.max(MIN_ANGLE, angleDeg));
  const normalized = (clamped - MIN_ANGLE) / (MAX_ANGLE - MIN_ANGLE);
  return Math.round(MIN_PRESSURE + normalized * (MAX_PRESSURE - MIN_PRESSURE));
}

function pressureToAngle(pressure) {
  const normalized = (pressure - MIN_PRESSURE) / (MAX_PRESSURE - MIN_PRESSURE);
  return MIN_ANGLE + normalized * (MAX_ANGLE - MIN_ANGLE);
}

// Same tick pattern as the real app's drawDialTicks — 60 ticks, major every 5th
function DialTicks() {
  const ticks = [];
  const cx = 100;
  const cy = 100;
  const r = 88;
  for (let i = 0; i < 60; i++) {
    const angle = (i / 60) * 2 * Math.PI - Math.PI / 2;
    const isMajor = i % 5 === 0;
    const len = isMajor ? 8 : 4;
    const x1 = (cx + (r - len) * Math.cos(angle)).toFixed(1);
    const y1 = (cy + (r - len) * Math.sin(angle)).toFixed(1);
    const x2 = (cx + r * Math.cos(angle)).toFixed(1);
    const y2 = (cy + r * Math.sin(angle)).toFixed(1);
    ticks.push(
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke='rgba(220,210,195,0.35)'
        strokeWidth={isMajor ? 1 : 0.5}
        opacity={isMajor ? 0.5 : 0.2}
      />,
    );
  }
  return (
    <svg
      className='pressure-demo__ticks'
      viewBox='0 0 200 200'
      aria-hidden='true'
    >
      {ticks}
    </svg>
  );
}

function PressureDialDemo() {
  const [pressure, setPressure] = useState(1013);
  const dialRef = useRef(null);
  const draggingRef = useRef(false);
  const strain = useMemo(() => getStrain(pressure), [pressure]);
  const angle = pressureToAngle(pressure);

  const updateFromPointer = useCallback((clientX, clientY) => {
    const el = dialRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = clientX - cx;
    const dy = clientY - cy;
    const angleDeg = (Math.atan2(dx, -dy) * 180) / Math.PI;
    setPressure(angleToPressure(angleDeg));
  }, []);

  const handlePointerDown = (e) => {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromPointer(e.clientX, e.clientY);
  };

  const handlePointerMove = (e) => {
    if (!draggingRef.current) return;
    updateFromPointer(e.clientX, e.clientY);
  };

  const handlePointerUp = (e) => {
    draggingRef.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      setPressure((p) => Math.min(MAX_PRESSURE, p + 1));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setPressure((p) => Math.max(MIN_PRESSURE, p - 1));
    }
  };

  return (
    <div className={`pressure-demo pressure-demo--${strain.state}`}>
      <div
        ref={dialRef}
        className='pressure-demo__dial'
        role='slider'
        tabIndex={0}
        aria-label='Simulated atmospheric pressure'
        aria-valuemin={MIN_PRESSURE}
        aria-valuemax={MAX_PRESSURE}
        aria-valuenow={pressure}
        aria-valuetext={`${pressure} hPa, ${strain.label}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
      >
        <DialTicks />
        <div
          className='pressure-demo__handle'
          style={{ transform: `rotate(${angle}deg)` }}
        >
          <span className='pressure-demo__handle-dot' />
        </div>
        <div className='pressure-demo__center'>
          <span className='pressure-demo__label'>{strain.label}</span>
          <span className='pressure-demo__value'>{pressure} hPa</span>
        </div>
      </div>
      <p className='pressure-demo__insight'>{strain.insight}</p>
      <p className='pressure-demo__hint'>
        Drag around the ring, or use arrow keys
      </p>
    </div>
  );
}

export default PressureDialDemo;
