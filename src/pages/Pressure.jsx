import ProjectPage from "../components/ui/ProjectPage";
import PressureCaseStudy from "../components/projects/PressureCaseStudy";
import { projects } from "../data/projects";
import screenshot from "../assets/screenshots/pressure.webp";
import { usePageMeta } from "../hooks/usePageMeta";

function Pressure() {
  usePageMeta({
    title: "Pressure — Jess Wilson",
    description:
      "A weather app that translates atmospheric pressure into human language.",
  });
  const project = projects.find((p) => p.id === "pressure");
  return (
    <ProjectPage project={project} screenshot={screenshot}>
      <PressureCaseStudy />
    </ProjectPage>
  );
}

export default Pressure;
