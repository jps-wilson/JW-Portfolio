import ProjectPage from "../components/ui/ProjectPage";
import DeadwaxVisual from "../components/visuals/DeadwaxVisual";
import DeadwaxCaseStudy from "../components/projects/DeadwaxCaseStudy";
import { projects } from "../data/projects";
import { usePageMeta } from "../hooks/usePageMeta";

function Deadwax() {
  usePageMeta({
    title: "Deadwax — Jess Wilson",
    description:
      "A digital turntable connected to Spotify that makes playing music feel like a ritual again.",
    image: "/og/deadwax.png",
  });
  const project = projects.find((p) => p.id === "deadwax");
  return (
    <ProjectPage project={project} visual={<DeadwaxVisual />}>
      <DeadwaxCaseStudy />
    </ProjectPage>
  );
}

export default Deadwax;
