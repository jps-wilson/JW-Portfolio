import { useEffect } from "react";

const SITE = "https://jessicapswilson.com";
const DEFAULT_IMAGE = `${SITE}/og-image.png`;

export function usePageMeta({ title, description, image }) {
  useEffect(() => {
    const url = `${SITE}${window.location.pathname}`;
    const ogImage = image ? `${SITE}${image}` : DEFAULT_IMAGE;

    document.title = title;

    const setMeta = (selector, value) =>
      document.querySelector(selector)?.setAttribute("content", value);

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', url);
    setMeta('meta[property="og:image"]', ogImage);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', ogImage);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, image]);
}
