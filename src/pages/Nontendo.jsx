import ProjectPage from "../components/ui/ProjectPage";
import { projects } from "../data/projects";
import screenshot from "../assets/screenshots/nontendo.png";

function Nontendo() {
  const project = projects.find((p) => p.id === "nontendo");
  return <ProjectPage project={project} screenshot={screenshot} />;
}

export default Nontendo;
