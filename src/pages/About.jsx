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
            Developer — Artist — Human Being
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
      <section className='about-act' ref={act1Ref}>
        <div className='about-act__header'>
          <SectionLabel text='Creativity' />
          <span className='about-act__descriptor'>Where I come from</span>
        </div>
        <p className='about-act__copy'>
          I come from a family rooted in the arts. Growing up surrounded by the
          arts shaped how I see the world. Adversity has a way of sharpening how
          you see things, and I've had enough of it to know that my perspective
          is the most valuable thing I bring into any room.
        </p>
      </section>

      {/* Act 2 – How I Work */}
      <section className='about-act about-act--two-col' ref={act2Ref}>
        <div className='about-act__header'>
          <SectionLabel text='Curiosity' />
          <span className='about-act__descriptor'>How I Work</span>
        </div>
        <div className='about-act__body'>
          <p className='about-act__copy'>
            I build with three things in mind: creativity, curiosity, and
            compassion. Every project I take on asks the same question — does
            this treat people like people? Not users. Not data points. People. I
            care deeply about privacy, about warmth, about the way something
            feels in someone's hands. That's not a soft skill. That's the whole
            point.
          </p>
          <div className='about-skills'>
            <div className='about-skills__group'>
              <span className='about-skills__category'>Languages</span>
              <span className='about-skills__list'>HTML, CSS, JavaScript</span>
            </div>
            <div className='about-skills__group'>
              <span className='about-skills__category'>
                Frameworks/Libraries
              </span>
              <span className='about-skills__list'>
                React, React Native, GSAP
              </span>
            </div>
            <div className='about-skills__group'>
              <span className='about-skills__category'>Tools</span>
              <span className='about-skills__list'>
                Figma, Git, GitHub, VS Code, Chrome DevTools
              </span>
            </div>
            <div className='about-skills__group'>
              <span className='about-skills__category'>Design</span>
              <span className='about-skills__list'>
                Design Systems, UI Layout, Typography, Colour Theory
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Act 3 — Where I'm Going */}
      <section className='about-act' ref={act3Ref}>
        <div className='about-act__header'>
          <SectionLabel text='Compassion' />
          <span className='about-act__descriptor'>Where I'm Going</span>
        </div>
        <p className='about-act__copy'>
          I'm looking for a studio that believes the best technology is the kind
          you feel. Somewhere that values a developer who brings both technical
          ability and genuine creative vision to the table. I want to build
          things that matter with people who care that they matter.
        </p>
        <p className='about-act__closing'>
          That belief is what drives everything I make.
        </p>
        <a
          href='mailto:info.jessicapswilson@gmail.com'
          className='about-act__email'
        >
          info.jessicapswilson@gmail.com
        </a>
      </section>
    </div>
  );
}

export default About;
