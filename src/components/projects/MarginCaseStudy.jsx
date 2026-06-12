import CsSection from "../ui/CsSection";
import "../../styles/components/case-study.css";

const sections = [
  {
    label: "The Idea",
    heading: "What if Figma had a changelog you could actually read?",
    copy: "Figma's version history is a list of timestamps. If you're lucky, someone named their saves. If not, you're comparing two snapshots by eye and hoping you catch everything. Collaborative files with dozens of frames make that unrealistic. I wanted to build something that reads both file versions, walks the node tree, and produces a structured diff you can scan in seconds. Not a pixel overlay. A real changelog, grouped by frame, with concrete numbers.",
    snippet: null,
  },
  {
    label: "The Design",
    heading: "An editorial page, not a dashboard.",
    copy: "Margin borrows from print annotation. The vertical ember rule on the left side references a notebook margin. Fraunces and Fragment Mono give the interface a typeset quality without feeling heavy. Change-type badges (added, removed, moved, resized, text) are color-coded so you can scan a long changelog without reading every line. Sections collapse when a diff returns hundreds of changes. The browser mock on the paste page walks new users through finding their Figma URL with an animated copy-paste demonstration. Every screen was designed in Figma first, then built to match.",
    snippet: {
      filename: "Scrubber.jsx",
      language: "jsx",
      code: `{/* clip-path reveals the "from" image as you drag */}
      <img
        className="scrubber-image scrubber-image--from"
        src={fromImage}
        alt="From version"
        style={{
          clipPath: \`inset(0 \${100 - sliderPos}% 0 0)\`
        }}
      />`,
    },
  },
  {
    label: "The Build",
    heading: "The diff engine is the product",
    copy: "The server pulls both file versions from the Figma API, flattens each node tree into a map keyed by node ID, and compares every element. Position shifts beyond 1px get flagged as moves. Dimension changes get flagged as resizes. Text changes surface the before and after strings, truncated for readability. Results are grouped by parent frame and returned with node IDs so the client can request rendered images for the scrubber and overlay views. The scrubber uses clip-path for pixel-perfect comparison. OAuth handles authentication with CSRF state validation. Client is deployed on Vercel, server on Render.",
    snippet: {
      filename: "diff.js",
      language: "javascript",
      code: `function compareNodes(fromMap, toMap) {
        const changes = [];

        for (const [id, toNode] of toMap) {
          const fromNode = fromMap.get(id);

          if (!fromNode) {
            changes.push({ type: "added", node: toNode });
            continue;
          }

          // Flag moves beyond 1px threshold
          const dx = Math.abs(toNode.x - fromNode.x);
          const dy = Math.abs(toNode.y - fromNode.y);
          if (dx > 1 || dy > 1) {
            changes.push({ type: "moved", node: toNode,
              delta: { dx, dy } });
          }
        }
          return changes;
      }`,
    },
  },
];

function MarginCaseStudy() {
  return (
    <div className='cs'>
      {sections.map((section, index) => (
        <CsSection key={index} section={section} />
      ))}
    </div>
  );
}

export default MarginCaseStudy;
