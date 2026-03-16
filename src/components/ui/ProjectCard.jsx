import { Link } from "react-router";
import "../../styles/components/project-card.css";

function ProjectCard({ number, title, idea, stack, accent, path }) {
  return (
    <Link to={path} className='project-card'>
      {/* Accent bar */}
      <span
        className='project-card__accent'
        style={{ backgroundColor: accent }}
      ></span>

      {/* Number */}
      <p className='project-card__number'>{number}</p>

      {/* Title */}
      <h3 className='project-card__title'>{title}</h3>

      {/* Idea */}
      <p className='project-card__idea'>{idea}</p>

      {/* Footer */}
      <div className='project-card__footer'>
        <span className='project-card__stack'>{stack}</span>
        <span className='project-card__arrow'>→</span>
      </div>
    </Link>
  );
}

export default ProjectCard;
