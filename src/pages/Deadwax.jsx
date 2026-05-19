import ProjectPage from "../components/ui/ProjectPage";
import DeadwaxCaseStudy from "../components/projects/DeadwaxCaseStudy";
import { projects } from "../data/projects";
import screenshot from "../assets/screenshots/deadwax.webp";
import { usePageMeta } from "../hooks/usePageMeta";

function Deadwax() {
  usePageMeta({
    title: "Deadwax — Jess Wilson",
    description:
      "A digital turntable connected to Spotify that makes playing music feel like a ritual again.",
  });
  const project = projects.find((p) => p.id === "deadwax");
  return (
    <ProjectPage project={project} screenshot={screenshot}>
      <DeadwaxCaseStudy />
    </ProjectPage>
  );
}

export default Deadwax;
