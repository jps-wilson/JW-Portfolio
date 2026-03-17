export const projects = [
  {
    id: "pressure",
    number: "01",
    title: "Pressure",
    idea: "What if your weather app understood how you feel?",
    stack: "HTML — CSS — JS — OPEN-METEO API",
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
  {
    id: "nontendo",
    number: "03",
    title: "Nontendo",
    idea: "What if joy needed no explanation?",
    stack: "HTML — CSS — JS",
    accent: "#E8840A",
    path: "/work/nontendo",
    year: "2026",
    problem:
      "Most games today demand your full attention, your time, your money. I wanted to build something that asked for none of those things — just a moment of pure uncomplicated joy. Snake is a game everyone knows. I wanted to give it a home that felt worthy of the nostalgia it carries.",
    solution:
      "I built a fully functional Game Boy interface from scratch using HTML and CSS, with Snake running inside it. Every detail of the hardware was considered — the buttons, the screen, the proportions. The challenge was making something that felt tactile and physical using nothing but code.",
    belief:
      "Nontendo exists because I believe joy is a legitimate design goal. Not every interaction needs to be productive. Sometimes the best thing technology can do is make you smile.",
    next: { title: "Momentum", path: "/work/momentum" },
  },
  {
    id: "momentum",
    number: "04",
    title: "Momentum",
    idea: "What if your tasks stayed yours and yours alone?",
    stack: "HTML — CSS — JS",
    accent: "#E06C6C",
    path: "/work/momentum",
    year: "2026",
    problem:
      "Most productivity apps want your email address before they'll let you write a single task. Then they store your data, sell your habits, and call it a service. I wanted to build something that simply worked — no account, no tracking, no data mining. Just you and your list.",
    solution:
      "I built Momentum using local storage so tasks persist between sessions without ever leaving the user's device. No backend, no database, no account required. The interface is intentionally calm and uncluttered — because a task app should reduce anxiety, not create it.",
    belief:
      "Momentum exists because I believe your data belongs to you. Privacy isn't a premium feature. It's the baseline.",
    next: null,
  },
];
