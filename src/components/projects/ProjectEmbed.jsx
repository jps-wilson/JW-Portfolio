import { useState } from "react";
import "../../styles/components/project-embed.css";

const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=DM+Mono:wght@300;400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  <title>Pressure</title>
</head>
<body>
  <main class="app">
    <header class="location">
      <p id="city"></p>
      <button id="get-location">Get Location</button>
      <span id="date-time"></span>
    </header>
    <section class="dial-section">
      <div class="dial">
        <svg class="dial-tick-ring" id="dial-tick-svg"
          xmlns="http://www.w3.org/2000/svg"
          style="position:absolute;inset:0;width:100%;height:100%;border-radius:50%;pointer-events:none;">
        </svg>
        <div class="dial-inner">
          <h1></h1>
          <div class="pressure-value"></div>
          <p></p>
        </div>
      </div>
    </section>
    <div class="dial-divider"></div>
    <section class="insight"><p></p></section>
    <section class="chips">
      <div class="chip">Temperature</div>
      <div class="chip">Air Quality</div>
      <div class="chip">Humidity</div>
      <div class="chip">UV</div>
    </section>
  </main>
  <script src="script.js"></script>
</body>
</html>`;

const cssCode = `:root {
  --background: #0d0f10;
  --secondary: #171a1c;
  --text-primary: #e8e6e3;
  --accent-env-alert: #c6a16e;
  --accent-ext-alert: #b07a6a;
  --subtle-tone: #6e7c86;
  --cold-atmosphere: #1a232a;
  --mild-atmosphere: #171a1c;
  --warm-atmosphere: #2a2118;
  --temp-cold-glow: rgba(110, 180, 220, 0.24);
  --temp-mild-glow: rgba(198, 161, 110, 0.18);
  --temp-warm-glow: rgba(220, 140, 80, 0.22);
}
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: "DM Mono", monospace;
  background: linear-gradient(120deg, var(--mild-atmosphere), #0d0f10, #141618);
  background-size: 200% 200%;
  animation: gradientDrift 40s ease infinite;
  color: var(--text-primary);
  opacity: 1;
  transition: opacity 1.2s ease, background 1.8s ease;
}

.dial {
  width: min(420px, 85vw);
  height: min(420px, 85vw);
  margin: 3.5rem auto;
  border-radius: 50%;
  border: 2px solid rgba(220, 210, 195, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: breathe 11s ease-in-out infinite;
  position: relative;
  backdrop-filter: blur(6px);
}

.dial-divider {
  width: 1px;
  height: 40px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(220, 210, 195, 0.15)
  );
  margin: 0 auto 1.5rem;
}

.dial-inner {
  text-align: center;
  max-width: 70%;
  transition: all 0.6s ease;
}

.dial-inner p {
  font-size: 14px;
  color: var(--subtle-tone);
  margin-top: 4px;
}

.dial-inner.idle {
  opacity: 0.9;
  transform: scale(0.95);
  filter: none;
  animation: pulse 1.2s ease-in-out infinite alternate;
}

.dial h1 {
  font-family: "Cormorant Garamond", serif;
  font-weight: 300;
  letter-spacing: 0.18em;
  font-size: 48px;
  margin-bottom: 10px;
}

.dial.calm {
  border-color: var(--subtle-tone);
  box-shadow:
    0 0 60px rgba(110, 124, 134, 0.12),
    inset 0 0 30px rgba(110, 124, 134, 0.08);
  background: radial-gradient(
    circle at center,
    rgba(110, 124, 134, 0.12),
    rgba(13, 15, 16, 0) 65%
  );
}

.dial.moderate {
  border-color: #8f8574;
  box-shadow:
    0 0 70px rgba(143, 133, 116, 0.16),
    inset 0 0 35px rgba(143, 133, 116, 0.1);
}

.dial.heavy {
  border-color: var(--accent-env-alert);
  box-shadow:
    0 0 80px rgba(198, 161, 110, 0.18),
    inset 0 0 40px rgba(198, 161, 110, 0.12);
  animation-duration: 16s;
}

.dial-tick-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  pointer-events: none;
}

.pressure-value {
  font-family: "DM Mono", monospace;
  font-size: 14px;
  letter-spacing: 0.12em;
  margin-bottom: 6px;
  color: #b8a898;
}

.insight {
  margin-top: 0;
  line-height: 2;
  color: #7a7268;
  font-size: 0.88rem;
  letter-spacing: 0.05em;
  text-align: center;
}

.chips {
  display: flex;
  gap: 10px;
  margin-top: 50px;
  flex-wrap: wrap;
}

.chip {
  padding: 8px 18px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.035);
  border: 0.5px solid rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(6px);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  color: #9a9088;
  transition:
    background 0.3s ease,
    color 0.2s,
    border-color 0.2s;
}

.chip:hover {
  background: rgba(255, 255, 255, 0.07);
  color: #c8c0b0;
  border-color: rgba(255, 255, 255, 0.18);
  transform: translateY(-2px);
}

/* Keyframes */
@keyframes breathe {
  0%,
  100% {
    transform: scale(1);
    border-color: rgba(220, 210, 195, 0.2);
    box-shadow:
      0 0 60px var(--temp-mild-glow),
      inset 0 0 30px var(--temp-mild-glow);
  }
  50% {
    transform: scale(1.04);
    border-color: rgba(220, 210, 195, 0.55);
    box-shadow:
      0 0 100px var(--temp-mild-glow),
      inset 0 0 60px var(--temp-mild-glow);
  }
}

@keyframes gradientDrift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes glowPulse {
  0%,
  100% {
    box-shadow:
      0 0 75px var(--current-glow),
      inset 0 0 35px var(--current-glow);
  }
  50% {
    box-shadow:
      0 0 85px var(--current-glow),
      inset 0 0 45px var(--current-glow);
  }
}

@keyframes pulse {
  from {
    opacity: 0.3;
  }
  to {
    opacity: 0.5;
  }
}`;

const jsCode = `// DOM elements
const dial = document.querySelector(".dial");
const dialInner = document.querySelector(".dial-inner");
const dialH1 = dialInner.querySelector("h1");
const pressureVal = dialInner.querySelector(".pressure-value");
const dialP = dialInner.querySelector("p");
const dateTime = document.getElementById("date-time");
const city = document.getElementById("city");
const body = document.body;
const getLocationBtn = document.getElementById("get-location");

function fetchWeather() {
  city.textContent = "Locating atmosphere...";
  getLocationBtn.disabled = true;

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;
      // Fetch reverse geocoding + weather data
      // Translate pressure levels into human language
      // Update dial state: calm / moderate / heavy
    },
    (error) => {
      city.textContent = "Location unavailable";
      getLocationBtn.disabled = false;
    }
  );
}

getLocationBtn.addEventListener("click", fetchWeather);
setPreUseState();`;

const tabs = [
  { id: "html", label: "index.html", code: htmlCode, language: "html" },
  { id: "css", label: "style.css", code: cssCode, language: "css" },
  { id: "js", label: "script.js", code: jsCode, language: "javascript" },
];

function ProjectEmbed({ url }) {
  const [activeTab, setActiveTab] = useState("html");
  const activeCode = tabs.find((t) => t.id === activeTab)?.code || "";

  return (
    <div className='project-embed'>
      {/* Live App */}
      <div className='project-embed__iframe-wrap'>
        <iframe
          src={url}
          className='project-embed__iframe'
          title='Pressure — Live App'
          allow='geolocation'
          loading='lazy'
        />
      </div>

      {/* Code Panel */}
      <div className='project-embed__code-panel'>
        {/* Tabs */}
        <div className='project-embed__tabs'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`project-embed__tab ${activeTab === tab.id ? "project-embed__tab--active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Code */}
        <div className='project-embed__code-wrap'>
          <pre className='project-embed__pre'>
            <code
              className={`language-${tabs.find((t) => t.id === activeTab)?.language}`}
              dangerouslySetInnerHTML={{
                __html: highlightCode(activeCode, activeTab),
              }}
            />
          </pre>
        </div>
      </div>
    </div>
  );
}

// TODO: insert function highlightCode below
