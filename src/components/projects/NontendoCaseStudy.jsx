import CsSection from "../ui/CsSection";
import CaseStudyNav from "../ui/CaseStudyNav";
import "../../styles/components/case-study.css";

const sections = [
  {
    label: "The Idea",
    heading: "What if the game was the container, not just the content?",
    copy: "Most browser games exist on a blank page. Nontendo started from a different question: what if the hardware was part of the experience? The constraint was simple: build a Game Boy that actually works. Not a Game Boy skin over an existing game, but a device first, a game second. The shell had to feel physical before the game felt fun.",
    snippet: null,
  },
  {
    label: "The Design",
    heading: "Building hardware with CSS",
    copy: "Every surface, shadow, button, and screen is a div, layered with gradients, border-radius, and box-shadows until it reads as something with real depth. The power LED fades in and out with each press. The screen has a scanline overlay. The buttons depress when you press them. None of it is necessary for the game to work, but it is necessary for the game to feel right.",
    snippet: {
      filename: "styles.css",
      language: "css",
      code: `.wrapper {
  width: 306px;
  height: 498px;
  background: linear-gradient(
    145deg,
    #fdd682 0%,
    var(--light-yellow) 50%,
    #fcb952 100%
  );
  border-radius: 12px 12px 50px 12px;
  border: 6px solid #000;
  box-shadow:
    20px 20px 0px rgba(0, 0, 0, 0.4),
    inset -2px -2px 8px rgba(0, 0, 0, 0.15),
    inset 2px 2px 8px rgba(255, 255, 255, 0.4),
    0 20px 40px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
}

.screen::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 2px
    );
  opacity: 0.35;
  pointer-events: none;
  z-index: 6;
}`,
    },
  },
  {
    label: "The Build",
    heading: "Snake is a solved problem. Making it feel real isn't.",
    copy: "The Snake game itself is vanilla JavaScript on an HTML canvas: grid-based movement, collision detection, food spawning, score tracking. The interesting engineering was everything around it. The boot sequence runs a loading bar animation before revealing the NONTENDO logo, then waits for the user to press START. The power switch toggles the screen on and off with an LED fade. Touch events mirror keyboard input so the D-pad works on mobile. Every state transition (idle, booting, playing, paused, game over) is handled explicitly so nothing ever looks broken.",
    snippet: {
      filename: "gameboy.js",
      language: "javascript",
      code: `function startLoading(duration = 1200) {
  screenDiv.classList.add("loading", "booting");

  const loader = document.createElement("div");
  loader.className = "loader";
  const bar = document.createElement("div");
  bar.className = "bar";
  bar.style.animationDuration = \`\${duration}ms\`;
  loader.appendChild(bar);
  screenDiv.appendChild(loader);

  loadingTimeout = setTimeout(() => {
    loader.remove();
    screenDiv.classList.remove("loading", "booting");
    screenDiv.classList.add("ready");

    setTimeout(() => {
      const logo = document.createElement("div");
      logo.className = "nontendo-text";
      logo.textContent = "NONTENDO";
      screenDiv.appendChild(logo);
      requestAnimationFrame(() => logo.classList.add("show"));

      const pressStart = document.createElement("div");
      pressStart.className = "press-start";
      pressStart.textContent = "PRESS START";
      screenDiv.appendChild(pressStart);
    }, 1000);
  }, duration);
}`,
    },
  },
];

function NontendoCaseStudy() {
  return (
    <div className='cs-wrapper'>
      <CaseStudyNav sections={sections} />
      <div className='cs'>
        {sections.map((section, index) => (
          <CsSection key={index} section={section} />
        ))}
      </div>
    </div>
  );
}

export default NontendoCaseStudy;
