export const projects = [
  {
    id: "pressure",
    number: "01",
    title: "Pressure",
    idea: "What if your weather app understood how you feel?",
    stack: "HTML - CSS - JS - OPEN-METEO API",
    accent: "#c6a16e",
    path: "/work/pressure",
    year: "2026",
    problem:
      "I wanted to build a weather app that actually meant something. Most weather apps give you a number - 18 degrees, partly cloudy - and leave you to figure out what to do with that. But atmospheric pressure affects how your body feels, how your mood shifts, how your day unfolds. Nobody was telling you that. I wanted to.",
    solution:
      "I used the Meteo API to pull real-time barometric pressure data based on the user's location. Rather than displaying raw numbers I translated pressure levels into human language - what it might mean for your energy, your focus, or your body that day. The challenge was making something technical feel warm and personal.",
    belief:
      "Pressure exists because I believe technology should translate the world for you, not just report it. Data without empathy is just noise.",
    next: { title: "Deadwax", path: "/work/deadwax" },
  },
];
