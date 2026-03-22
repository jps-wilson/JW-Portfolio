import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { screenshots } from "../data/screenshots";
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
  const thesisRef = useScrollAnimation();
  const featuredRef = useScrollAnimation();
  const stillHereRef = useScrollAnimation();

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
      <section className='home-thesis' ref={thesisRef}>
        <SectionLabel text='The Thesis' />
        <p className='home-thesis__manifesto'>
          I build things that treat people like people. Curious, warm, private,
          alive. On purpose.
        </p>
        <div className='home-thesis__values-wrap'>
          <div className='home-thesis__values'>
            {values.map((value) => (
              <div key={value.label} className='home-thesis__value'>
                <span className='home-thesis__value-label'>{value.label}</span>
                <span className='home-thesis__value-desc'>{value.tooltip}</span>
              </div>
            ))}
          </div>
        </div>
        <Link to='/about' className='home-thesis__link'>
          The story behind them →
        </Link>
      </section>

      {/* Featured Work Section */}
      <section className='home-featured' ref={featuredRef}>
        <Link to={projects[0].path} className='home-featured__banner'>
          {/* Accent bar */}
          <span
            className='home-featured__accent'
            style={{ backgroundColor: projects[0].accent }}
          ></span>

          {/* Text content */}
          <div className='home-featured__content'>
            <SectionLabel text='Featured Work' />
            <div className='home-featured__body'>
              <h2 className='home-featured__title'>{projects[0].title}</h2>
              <p className='home-featured__idea'>{projects[0].idea}</p>
            </div>
            <div className='home-featured__footer'>
              <span className='home-featured__stack'>{projects[0].stack}</span>
              <span className='home-featured__arrow'>→</span>
            </div>
          </div>

          {/* Image */}
          <div className='home-featured__image-wrap'>
            <div className='home-featured__image-fade'></div>
            <img
              src={screenshots[projects[0].id]}
              alt={projects[0].title}
              className='home-featured__image'
            />
          </div>
        </Link>

        <Link to='/work' className='home-featured__see-all'>
          See all work →
        </Link>
      </section>

      {/* Still Here Section */}
      <section className='home-still-here' ref={stillHereRef}>
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
