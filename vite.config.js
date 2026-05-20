import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const inlineCss = {
  name: "inline-css",
  transformIndexHtml: {
    order: "post",
    handler(html, ctx) {
      if (!ctx.bundle) return html;
      const cssChunk = Object.values(ctx.bundle).find(
        (c) =>
          c.type === "asset" &&
          c.fileName.startsWith("assets/index") &&
          c.fileName.endsWith(".css"),
      );
      if (!cssChunk) return html;
      const linkTag = `<link rel="stylesheet" crossorigin href="/${cssChunk.fileName}">`;
      delete ctx.bundle[cssChunk.fileName];
      return html.replace(linkTag, `<style>${cssChunk.source}</style>`);
    },
  },
};

export default defineConfig({
  plugins: [react(), inlineCss],

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes("react") ||
            id.includes("react-dom") ||
            id.includes("framer-motion") ||
            id.includes("gsap")
          ) {
            return "vendor";
          }
        },
      },
    },
  },
});
