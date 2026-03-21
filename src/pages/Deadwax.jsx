import ProjectPage from "../components/ui/ProjectPage";
import { projects } from "../data/projects";
import screenshot from "../assets/screenshots/deadwax.png";

function Deadwax() {
  const project = projects.find((p) => p.id === "deadwax");
  return <ProjectPage project={project} screenshot={screenshot} />;
}

export default Deadwax;
