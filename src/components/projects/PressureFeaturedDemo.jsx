import { useState, useRef, useMemo, useEffect } from "react";
import "../../styles/components/pressure-featured-demo.css";

const MIN_PRESSURE = 990;
const MAX_PRESSURE = 1030;
const MIN_ANGLE = -150;
const MAX_ANGLE = 150;

// Translates raw hPa into a human-readable state - this is the core idea behind Pressure
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

function pressureToAngle(pressure) {
  const normalized = (pressure - MIN_PRESSURE) / (MAX_PRESSURE - MIN_PRESSURE);
  return MIN_ANGLE + normalized * (MAX_ANGLE - MIN_ANGLE);
}

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
      className='pressure-featured-demo__ticks'
      viewBox='0 0 200 200'
      aria-hidden='true'
    >
      {ticks}
    </svg>
  );
}

function PressureFeaturedDemo() {
  const [pressure, setPressure] = useState(1013);
  const intervalRef = useRef(null);
  const strain = useMemo(() => getStrain(pressure), [pressure]);
  const angle = pressureToAngle(pressure);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPressure((p) => {
        // Functional update avoids stale closure - interval would read the initial value forever otherwise
        if (p >= MAX_PRESSURE) return MIN_PRESSURE;
        return p + 1;
      });
    }, 50);

    // Clear on unmount to prevent the interval firing after the component is gone
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div
      className={`pressure-featured-demo pressure-featured-demo--${strain.state}`}
    >
      <div className='pressure-featured-demo__dial'>
        <DialTicks />
        <div
          className='pressure-featured-demo__handle'
          style={{ transform: `rotate(${angle}deg)` }}
        >
          <span className='pressure-featured-demo__handle-dot' />
        </div>
        <div className='pressure-featured-demo__center'>
          <span className='pressure-featured-demo__label'>{strain.label}</span>
          <span className='pressure-featured-demo__value'>{pressure} hPa</span>
        </div>
      </div>
    </div>
  );
}

export default PressureFeaturedDemo;
