// Generates 1200x630 Open Graph images, one per project, into public/og/<id>.png
// Data-driven from src/data/projects.js. Uses the site's own fonts + palette.
// Fonts live as static TTFs in scripts/assets/fonts (committed with the repo).
// Run:  npm run og      (also wired to prebuild, so it runs before every build)

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { projects } from "../src/data/projects.js";

const root = path.dirname(fileURLToPath(import.meta.url));
const repo = path.resolve(root, "..");
const OUT = path.join(repo, "public", "og");
const FONTS = path.join(root, "assets", "fonts");

// Palette (mirror of src/index.css)
const VOID = "#141414";
const SURFACE = "#1e1e1e";
const CREAM = "#f0ede8";

const font = async (file) => readFile(path.join(FONTS, file));

const fonts = [
  { name: "Neue Montreal", weight: 500, style: "normal", data: await font("NeueMontreal-Medium.ttf") },
  { name: "Neue Montreal", weight: 700, style: "normal", data: await font("NeueMontreal-Bold.ttf") },
  { name: "Satoshi",       weight: 400, style: "normal", data: await font("Satoshi-Regular.ttf") },
  { name: "Fragment Mono", weight: 400, style: "normal", data: await font("FragmentMono-Regular.ttf") },
];

const el = (type, style, children) => ({ type, props: { style, children } });

function card(p) {
  const accent = p.accent;
  return el("div",
    { width: 1200, height: 630, display: "flex", position: "relative",
      backgroundColor: VOID, fontFamily: "Satoshi" },
    [
      el("div", { position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage:
          "linear-gradient(rgba(240,237,232,0.04) 1px, transparent 1px)," +
          "linear-gradient(90deg, rgba(240,237,232,0.04) 1px, transparent 1px)",
        backgroundSize: "48px 48px" }),
      el("div", { position: "absolute", left: -160, bottom: -160, width: 520, height: 520,
        backgroundImage: `radial-gradient(circle, ${accent}22 0%, ${accent}00 70%)` }),
      el("div", { position: "absolute", top: 0, left: 0, width: 12, height: 630,
        backgroundColor: accent }),

      el("div",
        { display: "flex", flexDirection: "column", justifyContent: "space-between",
          flexGrow: 1, padding: "76px 72px" },
        [
          el("div", { display: "flex" }, [
            el("div",
              { display: "flex", alignItems: "center", border: `1px solid ${accent}`,
                borderRadius: 999, padding: "10px 22px", color: accent,
                fontFamily: "Fragment Mono", fontSize: 22, letterSpacing: 2 },
              `CASE STUDY / ${p.number}`),
          ]),
          el("div", { display: "flex", flexDirection: "column" }, [
            el("div",
              { fontFamily: "Neue Montreal", fontWeight: 500, fontSize: 112,
                lineHeight: 1.0, color: CREAM, letterSpacing: -2 },
              p.title),
            el("div",
              { marginTop: 26, fontFamily: "Satoshi", fontSize: 34, lineHeight: 1.3,
                color: CREAM, opacity: 0.62, maxWidth: 660 },
              p.idea),
          ]),
          el("div",
            { display: "flex", justifyContent: "space-between", alignItems: "flex-end",
              gap: 48, fontFamily: "Fragment Mono", fontSize: 19 },
            [
              el("div", { color: CREAM, whiteSpace: "nowrap" }, "jessicapswilson.com"),
              el("div", { color: accent, letterSpacing: 1, whiteSpace: "nowrap" }, p.stack),
            ]),
        ]),

      el("div",
        { display: "flex", alignItems: "center", justifyContent: "center",
          width: 360, height: 630, overflow: "hidden", borderLeft: `1px solid ${accent}55`,
          backgroundImage: `linear-gradient(160deg, ${accent}1f 0%, ${SURFACE}00 60%)` },
        [
          el("div",
            { fontFamily: "Neue Montreal", fontWeight: 700, fontSize: 232,
              color: accent, opacity: 0.22, lineHeight: 1 },
            p.number),
        ]),
    ]);
}

await mkdir(OUT, { recursive: true });
for (const p of projects) {
  const svg = await satori(card(p), { width: 1200, height: 630, fonts });
  const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
  await writeFile(path.join(OUT, `${p.id}.png`), png);
  console.log(`  public/og/${p.id}.png`);
}
console.log(`Done. ${projects.length} images at 1200x630.`);
