import ProjectPage from "../components/ui/ProjectPage";
import MomentumCaseStudy from "../components/projects/MomentumCaseStudy";
import { projects } from "../data/projects";
import screenshot from "../assets/screenshots/momentum.webp";
import { usePageMeta } from "../hooks/usePageMeta";

function Momentum() {
  usePageMeta({
    title: "Momentum — Jess Wilson",
    description:
      "A privacy-first task app using local storage — no account, no tracking, just your list.",
    image: "/og/momentum.png",
  });
  const project = projects.find((p) => p.id === "momentum");
  return (
    <ProjectPage project={project} screenshot={screenshot}>
      <MomentumCaseStudy />
    </ProjectPage>
  );
}

export default Momentum;
