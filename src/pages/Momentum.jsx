import ProjectPage from "../components/ui/ProjectPage";
import MomentumCaseStudy from "../components/projects/MomentumCaseStudy";
import { projects } from "../data/projects";
import screenshot from "../assets/screenshots/momentum.webp";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

function Momentum() {
  useDocumentTitle("Momentum — Jess Wilson");
  const project = projects.find((p) => p.id === "momentum");
  return (
    <ProjectPage project={project} screenshot={screenshot}>
      <MomentumCaseStudy />
    </ProjectPage>
  );
}

export default Momentum;
