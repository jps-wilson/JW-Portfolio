import { useScrollAnimation } from "../hooks/useScrollAnimation";
import SectionLabel from "../components/ui/SectionLabel";
import headshot from "../assets/images/jess.jpg";
import "../styles/pages/about.css";

function About() {
  const openingRef = useScrollAnimation();
  const act1Ref = useScrollAnimation();
  const act2Ref = useScrollAnimation();
  const act3Ref = useScrollAnimation();

  return (
    <div>
      {/* Opening */}
      <section className='about-opening' ref={openingRef}>
        <div className='about-opening__content'>
          <SectionLabel text='About' />
          <h1 className='about-opening__heading'>
            I've never seen the world the way everyone else does. Turns out
            that's the point.
          </h1>
          <p className='about-opening__descriptor'>
            Developer by trade. Human being by choice.
          </p>
        </div>
        <div className='about-opening__photo-wrap'>
          <img
            src={headshot}
            alt='Jess Wilson'
            className='about-opening__photo'
          />
        </div>
      </section>

      {/* Act 1 — Where I Come From */}
      <section className='about-act about-act--one' ref={act1Ref}>
        <div className='about-act__header'>
          <SectionLabel text='Creativity' />
          <span className='about-act__descriptor'>Where I come from</span>
        </div>
        <div className='about-act__statement'>
          <p>I come from a family rooted in the arts.</p>
          <p>
            Hard things came with it — health, struggle, the kind of life that
            sharpens how you see the world.
          </p>
          <p>
            My parents fought their battles and still made beautiful things.
          </p>
          <p>So do I.</p>
        </div>
      </section>

      {/* Act 2 – How I Work */}
      <section className='about-act about-act--two' ref={act2Ref}>
        <div className='about-act__header'>
          <SectionLabel text='Curiosity' />
          <span className='about-act__descriptor'>How I Work</span>
        </div>
        <div className='about-act__body'>
          <p className='about-act__copy'>
            When I start a project, I'm thinking about the end user before I
            write a single line. What will make this memorable? What will they
            carry with them after they close the tab? I work until it feels
            right — not just until it functions. That's not a slow process.
            That's the only process I know.
          </p>
          <div className='about-skills'>
            <div className='about-skills__group'>
              <span className='about-skills__category'>Languages</span>
              <span className='about-skills__list'>HTML, CSS, JavaScript</span>
            </div>
            <div className='about-skills__group'>
              <span className='about-skills__category'>Frameworks / Libraries</span>
              <span className='about-skills__list'>React, React Native, GSAP</span>
            </div>
            <div className='about-skills__group'>
              <span className='about-skills__category'>Tools</span>
              <span className='about-skills__list'>Figma, Git, GitHub, VS Code, Chrome DevTools</span>
            </div>
            <div className='about-skills__group'>
              <span className='about-skills__category'>Design</span>
              <span className='about-skills__list'>Design Systems, UI Layout, Typography, Colour Theory</span>
            </div>
          </div>
        </div>
      </section>

      {/* Act 3 — Where I'm Going */}
      <section className='about-act about-act--three' ref={act3Ref}>
        <div className='about-act__header'>
          <SectionLabel text='Compassion' />
          <span className='about-act__descriptor'>Where I&apos;m Going</span>
        </div>
        <p className='about-act__copy'>
          I'm looking for a team that treats design and code as an art form —
          not just a service. People who are passionate enough to lose sleep
          over the details, who care about the user more than the metric. A
          place where the work means something beyond the deliverable.
        </p>
        <p className='about-act__closing'>
          Code is the craft. People are the point.
        </p>
      </section>
    </div>
  );
}

export default About;
