import { useScrollAnimation } from "../hooks/useScrollAnimation";
import SectionLabel from "../components/ui/SectionLabel";
import "../styles/pages/contact.css";
import { usePageMeta } from "../hooks/usePageMeta";

function Contact() {
  usePageMeta({
    title: "Contact — Jess Wilson",
    description:
      "Get in touch with Jess Wilson, web developer based in Vancouver, BC.",
  });
  const mainRef = useScrollAnimation();

  return (
    <div className='contact'>
      <div className='contact__label'>
        <SectionLabel text='Contact' />
      </div>

      <div className='contact__main' ref={mainRef}>
        <p className='contact__intro'>You made it this far.</p>
        <h1 className='contact__heading'>
          Ready
          <br />
          when
          <br />
          <span className='contact__heading--accent'>you are.</span>
        </h1>
      </div>

      <div className='contact__bottom'>
        <a href='mailto:contact@jessicapswilson.com' className='contact__email'>
          contact@jessicapswilson.com
        </a>
        <div className='contact__social'>
          <a
            href='https://www.linkedin.com/in/jess-wilson-876655380'
            target='_blank'
            rel='noopener noreferrer'
            className='contact__social-link'
          >
            LinkedIn
          </a>
          <a
            href='https://github.com/jps-wilson'
            target='_blank'
            rel='noopener noreferrer'
            className='contact__social-link'
          >
            GitHub
          </a>
          <a
            href='/resume/jess-wilson-resume.pdf'
            download
            className='contact__resume-btn'
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
