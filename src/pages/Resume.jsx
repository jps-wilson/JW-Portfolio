import { useEffect } from "react";
import { usePageMeta } from "../hooks/usePageMeta";
import "../styles/pages/resume.css";

function Resume() {
  usePageMeta({
    title: "Resume — Jess Wilson",
    description:
      "Resume of Jess Wilson, Creative Developer based in Vancouver, BC.",
  });

  useEffect(() => {
    // JSON-LD
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Jess Wilson",
      jobTitle: "Creative Developer",
      url: "https://jessicapswilson.com",
      email: "contact@jessicapswilson.com",
      sameAs: [
        "https://github.com/jps-wilson",
        "https://www.linkedin.com/in/jess-wilson-876655380",
      ],
    });
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className='resume'>
      <div className='resume__header'>
        <h1 className='resume__title'>Resume</h1>
        <a
          href='/files/jess-wilson-resume.pdf'
          download
          className='resume__download'
        >
          Download PDF
        </a>
      </div>
      <iframe
        src='/files/jess-wilson-resume.pdf'
        className='resume__viewer'
        title='Jess Wilson Resume'
        width='100%'
      />
    </div>
  );
}

export default Resume;
