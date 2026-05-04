import ProjectPage from "../components/ui/ProjectPage";
import DeadwaxCaseStudy from "../components/projects/DeadwaxCaseStudy";
import { projects } from "../data/projects";
import screenshot from "../assets/screenshots/deadwax.webp";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

function Deadwax() {
  useDocumentTitle("Deadwax — Jess Wilson");
  const project = projects.find((p) => p.id === "deadwax");
  return (
    <ProjectPage project={project} screenshot={screenshot}>
      <DeadwaxCaseStudy />
    </ProjectPage>
  );
}

export default Deadwax;
