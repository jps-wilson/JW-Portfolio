import ProjectPage from "../components/ui/ProjectPage";
import NontendoCaseStudy from "../components/projects/NontendoCaseStudy";
import { projects } from "../data/projects";
import screenshot from "../assets/screenshots/nontendo.webp";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

function Nontendo() {
  useDocumentTitle("Nontendo — Jess Wilson");
  const project = projects.find((p) => p.id === "nontendo");
  return (
    <ProjectPage project={project} screenshot={screenshot}>
      <NontendoCaseStudy />
    </ProjectPage>
  );
}

export default Nontendo;
