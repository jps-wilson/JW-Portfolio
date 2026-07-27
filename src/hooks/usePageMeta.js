import { useEffect } from "react";

export function usePageMeta({ title, description }) {
  useEffect(() => {
    document.title = title;

    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute(
        "content",
        `https://jessicapswilson.com${window.location.pathname}`,
      );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      "href",
      `https://jessicapswilson.com${window.location.pathname}`,
    );
  }, [title, description]);
}
