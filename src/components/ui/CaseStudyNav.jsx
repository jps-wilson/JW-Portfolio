import { useEffect, useMemo, useRef, useState } from "react";
import "../../styles/components/case-study-nav.css";

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

function CaseStudyNav({ sections = [] }) {
  const sectionIds = useMemo(
    () => sections.map((section) => section.id || slugify(section.label)),
    [sections],
  );

  const [activeId, setActiveId] = useState(
    sectionIds.length > 0 ? sectionIds[0] : null,
  );

  const observerRef = useRef(null);

  const safeActiveId =
    activeId && sectionIds.includes(activeId)
      ? activeId
      : sectionIds.length > 0
        ? sectionIds[0]
        : null;

  useEffect(() => {
    if (sections.length === 0) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    observerRef.current?.disconnect();

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
  }, [sectionIds, sections.length]);

  if (sections.length === 0) return null;

  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    e.currentTarget.blur();
  };

  return (
    <aside className='cs-nav-shell'>
      <nav className='cs-nav' aria-label='Case study sections'>
        {sections.map((section) => {
          const id = section.id || slugify(section.label);
          const isActive = safeActiveId === id;

          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={`cs-nav__item ${isActive ? "cs-nav__item--active" : ""}`}
              aria-current={isActive ? "true" : undefined}
              title={section.label}
            >
              <span className='cs-nav__dot' aria-hidden='true' />
              <span className='cs-nav__label'>{section.label}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}

export default CaseStudyNav;
