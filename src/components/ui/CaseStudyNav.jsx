import { useEffect, useRef, useState } from "react";
import "../../styles/components/case-study-nav.css";

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

function CaseStudyNav({ sections = [] }) {
  const [activeId, setActiveId] = useState(
    sections.length > 0 ? slugify(sections[0].label) : null,
  );
  const observerRef = useRef(null);

  useEffect(() => {
    if (sections.length === 0) return;

    const ids = sections.map((s) => slugify(s.label));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );

    elements.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, [sections]);

  if (sections.length === 0) return null;

  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className='cs-nav' aria-label='Case study sections'>
      {sections.map((section) => {
        const id = slugify(section.label);
        const isActive = activeId === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => handleClick(e, id)}
            className={`cs-nav__item ${isActive ? "cs-nav__item--active" : ""}`}
          >
            <span className='cs-nav__label'>{section.label}</span>
          </a>
        );
      })}
    </nav>
  );
}

export default CaseStudyNav;
