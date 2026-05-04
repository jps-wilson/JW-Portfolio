import ProjectPage from "../components/ui/ProjectPage";
import PressureCaseStudy from "../components/projects/PressureCaseStudy";
import { projects } from "../data/projects";
import screenshot from "../assets/screenshots/pressure.webp";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

function Pressure() {
  useDocumentTitle("Pressure — Jess Wilson");
  const project = projects.find((p) => p.id === "pressure");
  return (
    <ProjectPage project={project} screenshot={screenshot}>
      <PressureCaseStudy />
    </ProjectPage>
  );
}

export default Pressure;
