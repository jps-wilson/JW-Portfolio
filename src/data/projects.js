export const projects = [
  {
    id: "pressure",
    number: "01",
    title: "Pressure",
    idea: "What if your weather app understood how you feel?",
    stack: "HTML · CSS · JS · API",
    url: "https://pressure-app.vercel.app/",
    accent: "#c6a16e",
    path: "/work/pressure",
    year: "2026",
    problem:
      "I wanted to build a weather app that actually meant something. Most weather apps give you a number — 18 degrees, partly cloudy — and leave you to figure out what to do with that. But atmospheric pressure affects how your body feels, how your mood shifts, how your day unfolds. Nobody was telling you that. I wanted to.",
    solution:
      "I used WeatherAPI to pull real-time barometric pressure data based on the user's location. Rather than displaying raw numbers I translated pressure levels into human language. What it might mean for your energy, your focus, or your body that day. Presented this project at Web Summit Vancouver 2026 as part of a talk on AI as a storytelling amplifier.",
    belief:
      "Data without empathy is just noise. Pressure is my attempt at closing that gap: technology that translates the world instead of just reporting it.",
    next: { title: "Margin", path: "/work/margin" },
  },
  {
    id: "margin",
    number: "02",
    title: "Margin",
    idea: "What if Figma's version history actually told you what changed?",
    stack: "REACT · NODE · EXPRESS · FIGMA API",
    url: "https://margindiff.vercel.app/",
    accent: "#d85a30",
    path: "/work/margin",
    year: "2026",
    problem:
      "Figma tells you something changed. It never tells you what. You open a file, scroll through a list of unnamed auto-saves, pick two, and compare them by eye. For shared files with dozens of frames, that's not a workflow. It's a guessing game. I wanted a tool that could actually read the difference and tell you plainly.",
    solution:
      "I built a full-stack app that connects to the Figma API, pulls two file versions, and runs a structural diff against the node tree. Instead of squinting at two tabs, you get a changelog grouped by frame with real deltas: what was added, removed, moved, resized, or edited. Scrubber and overlay views let you verify changes visually. The challenge was turning deeply nested API data into something a designer could scan in seconds.",
    belief:
      "Version history without clarity is just a timeline of doubt. Margin is built on the idea that tool should close the gap between what happened and what you actually know.",
    next: { title: "Deadwax", path: "/work/deadwax" },
  },
  {
    id: "deadwax",
    number: "03",
    title: "Deadwax",
    idea: "What if playing music felt like a ritual again?",
    stack: "HTML · CSS · JS · API",
    url: "https://deadwax-project.vercel.app/",
    accent: "#1EA7FF",
    path: "/work/deadwax",
    year: "2026",
    problem:
      "Streaming made music effortless and in doing so it made it weightless. I missed the ritual of it — choosing a record, placing the needle, committing to an album from start to finish. I wanted to bring that feeling back through a digital turntable that made playing music feel intentional again.",
    solution:
      "I built a working turntable interface that connects to Spotify's API, allowing users to browse and play records as though they were handling physical vinyl. The visual design was as important as the functionality — every interaction needed to feel analog and warm in a digital space. The challenge was making an API feel like a piece of furniture.",
    belief:
      "The way we interact with things changes how much we value them, and that's the belief behind Deadwax. Technology can restore ritual, not just replace it.",
    next: { title: "Nontendo", path: "/work/nontendo" },
  },
  {
    id: "nontendo",
    number: "04",
    title: "Nontendo",
    idea: "What if joy needed no explanation?",
    stack: "HTML · CSS · JS",
    url: "https://nontendo.vercel.app/",
    accent: "#E8840A",
    path: "/work/nontendo",
    year: "2026",
    problem:
      "Most games today demand your full attention, your time, your money. I wanted to build something that asked for none of those things — just a moment of pure uncomplicated joy. Snake is a game everyone knows. I wanted to give it a home that felt worthy of the nostalgia it carries.",
    solution:
      "I built a fully functional Game Boy interface from scratch using HTML and CSS, with Snake running inside it. Every detail of the hardware was considered — the buttons, the screen, the proportions. The challenge was making something that felt tactile and physical using nothing but code.",
    belief:
      "Joy is a legitimate design goal, and not every interaction needs to be productive. Nontendo is proof that sometimes the best thing technology can do is make you smile.",
    next: { title: "Momentum", path: "/work/momentum" },
  },
  {
    id: "momentum",
    number: "05",
    title: "Momentum",
    idea: "What if your tasks stayed yours and yours alone?",
    stack: "HTML · CSS · JS",
    url: "https://momentum-task-app.vercel.app/",
    accent: "#E06C6C",
    path: "/work/momentum",
    year: "2026",
    problem:
      "Most productivity apps want your email address before they'll let you write a single task. Then they store your data, sell your habits, and call it a service. I wanted to build something that simply worked — no account, no tracking, no data mining. Just you and your list.",
    solution:
      "I built Momentum using local storage so tasks persist between sessions without ever leaving the user's device. No backend, no database, no account required. The interface is intentionally calm and uncluttered — because a task app should reduce anxiety, not create it.",
    belief:
      "Your data belongs to you. Privacy isn't a premium feature, it's the baseline. Momentum was built to actually mean that.",
    next: null,
  },
];
