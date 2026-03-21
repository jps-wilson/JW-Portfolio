import ProjectPage from "../components/ui/ProjectPage";
import { projects } from "../data/projects";
import screenshot from "../assets/screenshots/momentum.png";

function Momentum() {
  const project = projects.find((p) => p.id === "momentum");
  return <ProjectPage project={project} screenshot={screenshot} />;
}

export default Momentum;
