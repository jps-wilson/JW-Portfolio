import ProjectPage from "../components/ui/ProjectPage";
import NontendoCaseStudy from "../components/projects/NontendoCaseStudy";
import { projects } from "../data/projects";
import screenshot from "../assets/screenshots/nontendo.webp";
import { usePageMeta } from "../hooks/usePageMeta";

function Nontendo() {
  usePageMeta({
    title: "Nontendo — Jess Wilson",
    description:
      "A fully functional Game Boy interface with playable Snake, built in HTML and CSS.",
    image: "/og/nontendo.png",
  });
  const project = projects.find((p) => p.id === "nontendo");
  return (
    <ProjectPage project={project} screenshot={screenshot}>
      <NontendoCaseStudy />
    </ProjectPage>
  );
}

export default Nontendo;
