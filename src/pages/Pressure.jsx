import ProjectPage from "../components/ui/ProjectPage";
import ProjectEmbed from "../components/projects/ProjectEmbed";
import { projects } from "../data/projects";
import screenshot from "../assets/screenshots/pressure.png";

function Pressure() {
  const project = projects.find((p) => p.id === "pressure");
  return (
    <>
      <ProjectPage project={project} screenshot={screenshot} />
      <ProjectEmbed url='https://pressure-app.vercel.app/' />
    </>
  );
}

export default Pressure;
