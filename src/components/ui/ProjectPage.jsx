import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import SectionLabel from "./SectionLabel";
import "../../styles/pages/project.css";

function ProjectPage({ project, screenshot }) {
  const heroRef = useScrollAnimation();
  const caseRef = useScrollAnimation();
  const beliefRef = useScrollAnimation();

  return (
    <div>
      {/* Hero */}
      <section className='project-hero' ref={heroRef}>
        <span
          className='project-hero__accent-line'
          style={{ backgroundColor: project.accent }}
        ></span>
        <div className='project-hero__content'>
          <SectionLabel text={project.title} />
          <h1 className='project-hero__title'>{project.title}</h1>
          <p className='project-hero__idea'>{project.idea}</p>
          <div className='project-hero__meta'>
            <span className='project-hero__stack'>{project.stack}</span>
            <span className='project-hero__year'>{project.year}</span>
          </div>
        </div>
        <div className='project-hero__page-wrap'>
          {screenshot && (
            <img
              src={screenshot}
              alt={`${project.title} screenshot`}
              className='project-hero__image'
            />
          )}
          <div className='project-hero__image-fade'></div>
        </div>
      </section>

      {/* Problem and Solution */}
      <section className='project-case' ref={caseRef}>
        <div className='project-case__divider'></div>
        <div className='project-case__column'>
          <SectionLabel text='Problem' />
          <p className='project-case__copy'>{project.problem}</p>
        </div>
        <div className='project-case__column'>
          <SectionLabel text='Solution' />
          <p className='project-case__copy'>{project.solution}</p>
        </div>
      </section>

      {/* Belief */}
      <section className='project-belief' ref={beliefRef}>
        <SectionLabel text='Belief' />
        <p className='project-belief__copy'>{project.belief}</p>
      </section>

      {/* Project Navigation */}
      <nav className='project-nav'>
        <Link to='/work' className='project-nav__link'>
          ← Back to Work
        </Link>
        {project.next ? (
          <Link to={project.next.path} className='project-nav__link'>
            {project.next.title} →
          </Link>
        ) : (
          <span className='project-nav__link project-nav__link--dim'>
            That's all four.
          </span>
        )}
      </nav>
    </div>
  );
}

export default ProjectPage;
