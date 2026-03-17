import SectionLabel from "../components/ui/SectionLabel";
import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../data/projects";
import "../styles/pages/work.css";

function Work() {
  return (
    <div className='work'>
      <div className='work__header'>
        <SectionLabel text='Work' />
        <p className='work__subtitle'>Four projects. One belief.</p>
      </div>

      <div className='work__grid'>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            number={project.number}
            title={project.title}
            idea={project.idea}
            stack={project.stack}
            accent={project.accent}
            path={project.path}
          />
        ))}
      </div>
    </div>
  );
}

export default Work;
