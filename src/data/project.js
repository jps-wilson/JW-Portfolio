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
  {
    id: "deadwax",
    number: "02",
    title: "Deadwax",
    idea: "What if playing music felt like a ritual again?",
    stack: "HTML — CSS — JS — SPOTIFY API",
    accent: "#1EA7FF",
    path: "/work/deadwax",
    year: "2026",
    problem:
      "Streaming made music effortless and in doing so it made it weightless. I missed the ritual of it — choosing a record, placing the needle, committing to an album from start to finish. I wanted to bring that feeling back through a digital turntable that made playing music feel intentional again.",
    solution:
      "I built a working turntable interface that connects to Spotify's API, allowing users to browse and play records as though they were handling physical vinyl. The visual design was as important as the functionality — every interaction needed to feel analog and warm in a digital space. The challenge was making an API feel like a piece of furniture.",
    belief:
      "Deadwax exists because I believe the way we interact with things changes how much we value them. Technology can restore ritual, not just replace it.",
    next: { title: "Nontendo", path: "/work/nontendo" },
  },
];
