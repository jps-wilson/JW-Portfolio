import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SectionLabel from "../components/ui/SectionLabel";
import Gauge from "../components/ui/Gauge";
import Gamepad from "../components/ui/Gamepad";
import Notification from "../components/ui/Notification";
import Record from "../components/ui/Record";
import { projects } from "../data/projects";
import "../styles/pages/work.css";

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

const ICONS_BY_ID = {
  pressure: Gauge,
  nontendo: Gamepad,
  momentum: Notification,
  deadwax: Record,
};

const constraints = [
  "No charts.\nNo numbers.\nNo Noise.",
  "No streaming.\nNo shuffle.\nNo skip.",
  "No objective.\nNo reward.\nNo point.",
  "No account.\nNo backend.\nNo data.",
];

function ScrambleCard({ project, constraint, Icon }) {
  const [hovered, setHovered] = useState(false);
  const [displayText, setDisplayText] = useState(constraint);
  const [revealed, setRevealed] = useState(false);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setHovered(true);
    setRevealed(false);
    const target = project.title;
    let iteration = 0;
    const total = 20;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      iteration++;
      const progress = iteration / total;
      const revealedChars = Math.floor(progress * target.length);
      let result = "";
      for (let i = 0; i < target.length; i++) {
        if (i < revealedChars) {
          result += target[i];
        } else {
          result += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      setDisplayText(result);
      if (iteration >= total) {
        clearInterval(timerRef.current);
        setDisplayText(target);
        setRevealed(true);
      }
    }, 40);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setRevealed(false);
    clearInterval(timerRef.current);
    setDisplayText(constraint);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div
      className={`work-card ${hovered ? "work-card--hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate(project.path)}
      style={{ "--card-accent": project.accent }}
    >
      {/* Accent bar */}
      <span
        className='work-card__accent'
        style={{ backgroundColor: project.accent }}
      ></span>

      {/* Icon */}
      {Icon && (
        <div
          className={`work-card__icon work-card__icon--${project.id}`}
          style={{ color: project.accent }}
        >
          <Icon className='work-card__icon-svg' />
        </div>
      )}

      {/* Top — number fades in on reveal */}
      <div className='work-card__top'>
        <span
          className={`work-card__number ${revealed ? "work-card__number--visible" : ""}`}
        >
          {project.number}
        </span>
      </div>

      {/* Middle — scramble text, same position always */}
      <div className='work-card__middle'>
        <p className='work-card__main-text'>
          {!hovered
            ? constraint.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < constraint.split("\n").length - 1 && <br />}
                </span>
              ))
            : displayText}
        </p>
        <p
          className={`work-card__idea ${revealed ? "work-card__idea--visible" : ""}`}
        >
          {project.idea}
        </p>
      </div>

      {/* Bottom — stack fades in on reveal, hint fades out */}
      <div className='work-card__bottom'>
        <span
          className={`work-card__hint ${hovered ? "work-card__hint--hidden" : ""}`}
        >
          Hover to reveal →
        </span>
        <div
          className={`work-card__footer ${revealed ? "work-card__footer--visible" : ""}`}
        >
          <span className='work-card__stack'>{project.stack}</span>
          <span className='work-card__arrow'>→</span>
        </div>
      </div>
    </div>
  );
}

function Work() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation();

  return (
    <div className='work'>
      <div className='work__header' ref={headerRef}>
        <SectionLabel text='Work' />
        <p className='work__subtitle'>Four projects. One belief.</p>
      </div>

      <div className='work__grid' ref={gridRef}>
        {projects.map((project, index) => {
          const Icon = ICONS_BY_ID[project.id];
          return (
            <ScrambleCard
              key={project.id}
              project={project}
              constraint={constraints[index]}
              Icon={Icon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Work;
