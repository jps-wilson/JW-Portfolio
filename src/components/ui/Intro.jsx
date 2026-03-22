import { useState } from "react";
import "../../styles/components/intro.css";

function Intro({ onComplete }) {
  const [fading, setFading] = useState(false);

  const handleEnter = () => {
    if (fading) return;
    setFading(true);
    setTimeout(() => onComplete(), 1000);
  };

  return (
    <div className={`intro ${fading ? "intro--fading" : ""}`}>
      <div className='intro__glow' />
      <div className='intro__content'>
        <p className='intro__name'>Jess Wilson</p>
        <button className='intro__enter' onClick={handleEnter}>
          Enter
        </button>
      </div>
    </div>
  );
}

export default Intro;
