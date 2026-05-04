import ProjectPage from "../components/ui/ProjectPage";
import PressureCaseStudy from "../components/projects/PressureCaseStudy";
import { projects } from "../data/projects";
import screenshot from "../assets/screenshots/pressure.webp";

function Pressure() {
  const project = projects.find((p) => p.id === "pressure");
  return (
    <ProjectPage project={project} screenshot={screenshot}>
      <PressureCaseStudy />
    </ProjectPage>
  );
}

export default Pressure;
