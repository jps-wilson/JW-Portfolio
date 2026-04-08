import CodeSnippet from "../ui/CodeSnippet";
import "../../styles/components/case-study.css";

const sections = [
  {
    label: "The Idea",
    heading: "What if your weather app spoke human?",
    copy: "Pressure started with a simple frustration — weather apps tell you it's 1013 hPa and leave you to figure out what that means for your body, your mood, your day. The idea was to build something that does the translation for you. Not a dashboard. Not a data dump. A tool that takes atmospheric information and tells you something you can actually use.",
    snippet: null,
  },
  {
    label: "The Design",
    heading: "Numbers don't mean anything until they do.",
    copy: "The hardest design decision wasn't visual — it was linguistic. Raw pressure readings are meaningless to most people. The real design challenge was building a translation layer between the data and the person reading it. CALM. MODERATE. HEAVY. Three words that tell you how today might feel before you've even stepped outside. The atmospheric glow reinforces this — the interface shifts temperature with the weather, cold blue for low temperatures, warm amber for high. The data doesn't just update. It changes the mood of the whole screen.",
    snippet: {
      filename: "script.js",
      language: "JavaScript",
      code: `function setStrain(pressure) {
  dial.classList.remove("calm", "moderate", "heavy");

  if (pressure > 1018) {
    dial.classList.add("calm");
    fitStrainText("CALM");
    insight.textContent =
      "Atmospheric pressure is high. Expect clarity.";
  } else if (pressure >= 1005) {
    dial.classList.add("moderate");
    fitStrainText("MODERATE");
    insight.textContent =
      "Pressure is slightly unsettled. Some may notice mild fatigue.";
  } else {
    dial.classList.add("heavy");
    fitStrainText("HEAVY");
    insight.textContent =
      "Low pressure detected. Fatigue and headaches are more likely today.";
  }
}`,
    },
  },
  {
    label: "The Build",
    heading: "Making the data feel alive.",
    copy: "Location from the browser Geolocation API. Pressure and temperature from WeatherAPI. Your city from OpenStreetMap's Nominatim. The hardest part wasn't the APIs — it was making the interface behave like something real. Continuous micro-drift keeps the pressure reading from feeling static. The app idles before you grant location access rather than showing empty fields. Every state transition is handled so the experience feels deliberate, not broken.",
    snippet: {
      filename: "script.js",
      language: "JavaScript",
      code: `// Continuous micro-drift to simulate live conditions
window.pressureDriftInterval = setInterval(() => {
  const microShift = pressure + (Math.random() * 0.6 - 0.3);
  pressureValueElem.textContent =
    \`\${microShift.toFixed(1)} hPa\`;
}, 4000);`,
    },
  },
];

function PressureCaseStudy() {
  return (
    <div className='cs'>
      {sections.map((section, index) => (
        <div key={index} className='cs__section'>
          <div className='cs__label'>
            <span className='cs__label-line'></span>
            <span className='cs__label-text'>{section.label}</span>
          </div>
          <h2 className='cs__heading'>{section.heading}</h2>
          <p className='cs__copy'>{section.copy}</p>
          {section.snippet && <CodeSnippet snippet={section.snippet} />}
        </div>
      ))}
    </div>
  );
}

export default PressureCaseStudy;
