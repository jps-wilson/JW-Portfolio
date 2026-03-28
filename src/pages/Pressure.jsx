import ProjectPage from "../components/ui/ProjectPage";
import PressureCaseStudy from "../components/projects/PressureCaseStudy";
import { projects } from "../data/projects";
import screenshot from "../assets/screenshots/pressure.png";

function Pressure() {
  const project = projects.find((p) => p.id === "pressure");
  return (
    <ProjectPage
      project={project}
      screenshot={screenshot}
      embedUrl='https://pressure-app.vercel.app/'
    >
      <PressureCaseStudy />
    </ProjectPage>
  );
}

export default Pressure;
