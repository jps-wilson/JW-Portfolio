import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SectionLabel from "../components/ui/SectionLabel";
import { projects } from "../data/projects";
import "../styles/pages/work.css";

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

const constraints = [
  "No numbers.\nOnly feelings.",
  "No streaming.\nNo shuffle.\nNo skip.",
  "No objective.\nNo reward.\nNo point.",
  "No account.\nNo backend.\nNo data.",
];

function ScrambleCard({ project, constraint }) {
  const [hovered, setHovered] = useState(false);
  const [scrambled, setScrambled] = useState(constraint);
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
      setScrambled(result);
      if (iteration >= total) {
        clearInterval(timerRef.current);
        setScrambled(target);
        setRevealed(true);
      }
    }, 40);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setRevealed(false);
    clearInterval(timerRef.current);
    setScrambled(constraint);
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
    >
      <span
        className='work-card__accent'
        style={{ backgroundColor: project.accent }}
      ></span>

      {/* Constraint / scramble view */}
      <div
        className={`work-card__front ${revealed ? "work-card__front--hidden" : ""}`}
      >
        <p className='work-card__constraint'>
          {hovered && !revealed
            ? scrambled
            : constraint.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < constraint.split("\n").length - 1 && <br />}
                </span>
              ))}
        </p>
        <span className='work-card__hint'>Hover to reveal →</span>
      </div>

      {/* Revealed project details */}
      <div
        className={`work-card__back ${revealed ? "work-card__back--visible" : ""}`}
      >
        <span className='work-card__number'>{project.number}</span>
        <div>
          <h3 className='work-card__title'>{project.title}</h3>
          <p className='work-card__idea'>{project.idea}</p>
        </div>
        <div className='work-card__footer'>
          <span className='work-card__stack'>{project.stack}</span>
          <span className='work-card__arrow'>→</span>
        </div>
      </div>
    </div>
  );
}

function Work() {
  return (
    <div className='work'>
      <div className='work__header'>
        <SectionLabel text='work' />
        <p className='work__subtitle'>Four projects. One belief.</p>
      </div>

      <div className='work__grid'>
        {projects.map((project, index) => (
          <ScrambleCard
            key={project.id}
            project={project}
            constraint={constraints[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default Work;
