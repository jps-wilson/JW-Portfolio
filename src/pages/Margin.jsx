import ProjectPage from "../components/ui/ProjectPage";
import MarginCaseStudy from "../components/projects/MarginCaseStudy";
import { projects } from "../data/projects";
import screenshot from "../assets/screenshots/margin.webp";
import { usePageMeta } from "../hooks/usePageMeta";

function Margin() {
  usePageMeta({
    title: "Margin — Jess Wilson",
    description:
      "A Figma diff tool that generates structured changelogs between file versions.",
    image: "/og/margin.png",
  });
  const project = projects.find((p) => p.id === "margin");
  return (
    <ProjectPage project={project} screenshot={screenshot}>
      <MarginCaseStudy />
    </ProjectPage>
  );
}

export default Margin;
