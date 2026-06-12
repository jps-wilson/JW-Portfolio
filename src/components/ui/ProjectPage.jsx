import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import SectionLabel from "./SectionLabel";
import ReadingProgress from "./ReadingProgress";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useTextReveal } from "../../hooks/useTextReveal";
import { projects } from "../../data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/pages/project.css";

gsap.registerPlugin(ScrollTrigger);

function splitAtFirstSentence(text) {
  const idx = text.indexOf(". ");
  if (idx === -1) return { hook: text, rest: "" };
  return { hook: text.slice(0, idx + 1), rest: text.slice(idx + 2) };
}

function ProjectPage({ project, screenshot, children }) {
  const heroRef = useScrollAnimation();
  const caseRef = useScrollAnimation();
  const beliefRef = useScrollAnimation();
  const beliefTextRef = useTextReveal();
  const imageRef = useRef(null);

  const { hook: problemHook, rest: problemRest } = splitAtFirstSentence(
    project.problem,
  );

  const nextProject = project.next
    ? projects.find((p) => p.path === project.next.path)
    : null;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    if (window.matchMedia("(max-width: 768px)").matches) return;

    const el = imageRef.current;
    if (!el) return;

    const anim = gsap.to(el, {
      yPercent: -15,
      ease: "none",
      paused: true,
    });

    const trigger = ScrollTrigger.create({
      trigger: el.closest("section"),
      start: "top top",
      end: "bottom top",
      scrub: 1.5,
      animation: anim,
    });

    return () => {
      trigger.kill();
      anim.kill();
    };
  }, []);

  return (
    <div>
      <ReadingProgress />

      {/* Hero */}
      <section
        className='project-hero'
        ref={heroRef}
        style={{ "--project-accent": project.accent }}
      >
        <div className='project-hero__content'>
          <SectionLabel text={project.title} />
          <h1 className='project-hero__title'>{project.title}</h1>
          <p className='project-hero__idea'>{project.idea}</p>
          <div className='project-hero__meta'>
            <span className='project-hero__stack'>{project.stack}</span>
            {project.url && (
              <a
                href={project.url}
                target='_blank'
                rel='noopener noreferrer'
                className='project-hero__url'
              >
                <span className='project-hero__url-dot'></span>
                View Live →
              </a>
            )}
            <span className='project-hero__year'>{project.year}</span>
          </div>
        </div>
        <div className='project-hero__image-wrap'>
          {screenshot && (
            <>
              <img
                ref={imageRef}
                src={screenshot}
                alt={`${project.title} screenshot`}
                className='project-hero__image'
              />
              <div className='project-hero__image-fade'></div>
            </>
          )}
        </div>
      </section>

      {/* Problem and Solution */}
      <section className='project-case' ref={caseRef}>
        <div className='project-case__divider'></div>
        <div className='project-case__column'>
          <SectionLabel text='Problem' />
          <p className='project-case__hook'>{problemHook}</p>
          {problemRest && <p className='project-case__copy'>{problemRest}</p>}
        </div>
        <div className='project-case__column'>
          <SectionLabel text='Solution' />
          <p className='project-case__copy'>{project.solution}</p>
        </div>
      </section>

      {/* Belief */}
      <section className='project-belief' ref={beliefRef}>
        <p className='project-belief__copy' ref={beliefTextRef}>
          {project.belief}
        </p>
      </section>

      {/* Additional content slot */}
      {children}

      {/* Project Navigation */}
      <nav className='project-nav'>
        <Link to='/work' className='project-nav__back'>
          ← Back to Work
        </Link>
        {nextProject ? (
          <Link
            to={nextProject.path}
            className='project-nav__next'
            style={{ "--next-accent": nextProject.accent }}
          >
            <span className='project-nav__next-label'>Next</span>
            <span className='project-nav__next-title'>{nextProject.title}</span>
          </Link>
        ) : (
          <span className='project-nav__end'>That&apos;s all five.</span>
        )}
      </nav>
    </div>
  );
}

export default ProjectPage;
