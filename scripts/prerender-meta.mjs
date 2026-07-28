// Post-build: writes a static HTML file per route into dist/, with that route's
// own <title>, description, canonical, and OG/Twitter tags baked in. This is what
// social/link-preview crawlers read (they don't run JS). The app still boots and
// takes over client-side; this only fixes the initial bytes crawlers see.
//
// Runs automatically after `vite build` via the "postbuild" npm script.
// If you change a page's title/description, update its entry in ROUTES below.

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const SITE = "https://jessicapswilson.com";
const DEFAULT_IMAGE = "/og-image.png";
const DIST = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "dist");

// One entry per route. image defaults to DEFAULT_IMAGE when omitted.
const ROUTES = [
  { path: "/", title: "Jess Wilson — Web Developer",
    description: "Web developer building thoughtful, human-centered interfaces. Vancouver, BC." },
  { path: "/about", title: "About — Jess Wilson",
    description: "Learn about Jess Wilson — a Vancouver web developer driven by creativity, curiosity, and compassion." },
  { path: "/work", title: "Work — Jess Wilson",
    description: "Projects by Jess Wilson — web experiences built with intention." },
  { path: "/contact", title: "Contact — Jess Wilson",
    description: "Get in touch with Jess Wilson, web developer based in Vancouver, BC." },
  { path: "/resume", title: "Resume — Jess Wilson",
    description: "Resume of Jess Wilson, Creative Developer based in Vancouver, BC." },
  { path: "/work/pressure", title: "Pressure — Jess Wilson",
    description: "A weather app that translates atmospheric pressure into human language.",
    image: "/og/pressure.png" },
  { path: "/work/margin", title: "Margin — Jess Wilson",
    description: "A Figma diff tool that generates structured changelogs between file versions.",
    image: "/og/margin.png" },
  { path: "/work/deadwax", title: "Deadwax — Jess Wilson",
    description: "A digital turntable connected to Spotify that makes playing music feel like a ritual again.",
    image: "/og/deadwax.png" },
  { path: "/work/nontendo", title: "Nontendo — Jess Wilson",
    description: "A fully functional Game Boy interface with playable Snake, built in HTML and CSS.",
    image: "/og/nontendo.png" },
  { path: "/work/momentum", title: "Momentum — Jess Wilson",
    description: "A privacy-first task app using local storage — no account, no tracking, just your list.",
    image: "/og/momentum.png" },
];

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Replace the content="" of a meta tag matched by its property/name attribute.
function setMeta(html, attr, key, value) {
  const re = new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`, "i");
  return re.test(html)
    ? html.replace(re, `$1${esc(value)}$2`)
    : html.replace("</head>", `  <meta ${attr}="${key}" content="${esc(value)}">\n</head>`);
}

function render(template, route) {
  const url = SITE + route.path;
  const image = SITE + (route.image || DEFAULT_IMAGE);
  let html = template;

  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${esc(route.title)}</title>`);
  html = setMeta(html, "name", "description", route.description);
  html = setMeta(html, "property", "og:title", route.title);
  html = setMeta(html, "property", "og:description", route.description);
  html = setMeta(html, "property", "og:image", image);
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "name", "twitter:title", route.title);
  html = setMeta(html, "name", "twitter:description", route.description);
  html = setMeta(html, "name", "twitter:image", image);

  // canonical
  if (/<link rel="canonical"/i.test(html)) {
    html = html.replace(/(<link rel="canonical" href=")[^"]*(")/i, `$1${url}$2`);
  } else {
    html = html.replace("</head>", `  <link rel="canonical" href="${url}">\n</head>`);
  }
  return html;
}

const template = await readFile(path.join(DIST, "index.html"), "utf8");

for (const route of ROUTES) {
  const html = render(template, route);
  const outDir = route.path === "/" ? DIST : path.join(DIST, route.path);
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, "index.html"), html);
  console.log(`  dist${route.path === "/" ? "/index.html" : route.path + "/index.html"}`);
}
console.log(`Done. ${ROUTES.length} routes prerendered.`);
