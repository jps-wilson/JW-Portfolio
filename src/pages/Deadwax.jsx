import ProjectPage from "../components/ui/ProjectPage";
import DeadwaxCaseStudy from "../components/projects/DeadwaxCaseStudy";
import { projects } from "../data/projects";
import screenshot from "../assets/screenshots/deadwax.webp";

function Deadwax() {
  const project = projects.find((p) => p.id === "deadwax");
  return (
    <ProjectPage project={project} screenshot={screenshot}>
      <DeadwaxCaseStudy />
    </ProjectPage>
  );
}

export default Deadwax;
