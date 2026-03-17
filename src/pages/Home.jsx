import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import SectionLabel from "../components/ui/SectionLabel";
import "../styles/pages/home.css";

const values = [
  {
    label: "Creativity",
    tooltip:
      "Growing up surrounded by the arts taught me that making something is always an act of courage.",
  },
  {
    label: "Curiosity",
    tooltip:
      "I've never been able to leave a problem alone until I understand not just how it works, but why it matters.",
  },
  {
    label: "Compassion",
    tooltip:
      "I believe everyone deserves a place on the internet that was made with them in mind.",
  },
];

function Home() {
  return (
    <div>
      {/* Opening Section */}
      <section className='home-opening'>
        <div className='home-opening__content'>
          <p className='home-opening__line'>
            Code is the craft. People are the point.
          </p>
          <p className='home-opening__name'>Jess Wilson</p>
          <p className='home-opening__role'>Web Developer</p>
        </div>
      </section>

      {/* Thesis Section */}
      <section className='home-thesis'>
        <SectionLabel text='The Thesis' />
        <p className='home-thesis__manifesto'>
          I build things that treat people like people. Curious, warm, private,
          alive. On purpose.
        </p>
        <div className='home-thesis__values-wrap'>
          <div className='home-thesis__values'>
            {values.map((value) => (
              <div key={value.label} className='home-thesis__value'>
                {value.label}
                <span className='home-thesis__value-tooltip'>
                  {value.tooltip}
                </span>
              </div>
            ))}
            <Link to='/about' className='home-thesis__link'>
              The story behind them →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className='home-featured'>
        <SectionLabel text='Featured Work' />
        <div className='home-featured__card'>
          <ProjectCard
            number={projects[0].number}
            title={projects[0].title}
            idea={projects[0].idea}
            stack={projects[0].stack}
            accent={projects[0].accent}
            path={projects[0].path}
          />
        </div>
        <Link to='/work' className='home-featured__see-all'>
          See all work →
        </Link>
      </section>

      {/* Still Here Section */}
      <section className='home-still-here'>
        <h2 className='home-still-here__heading'> Still here? Good.</h2>
        <a
          href='mailto:info.jessicapswilson@gmail.com'
          className='home-still-here__email'
        >
          info.jessicapswilson@gmail.com
        </a>
      </section>
    </div>
  );
}

export default Home;
