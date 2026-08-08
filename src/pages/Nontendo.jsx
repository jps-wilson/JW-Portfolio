import ProjectPage from "../components/ui/ProjectPage";
import NontendoVisual from "../components/visuals/NontendoVisual";
import NontendoCaseStudy from "../components/projects/NontendoCaseStudy";
import { projects } from "../data/projects";
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
    <ProjectPage project={project} visual={<NontendoVisual />}>
      <NontendoCaseStudy />
    </ProjectPage>
  );
}

export default Nontendo;
