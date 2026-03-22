import { useScrollAnimation } from "../hooks/useScrollAnimation";
import SectionLabel from "../components/ui/SectionLabel";
import "../styles/pages/contact.css";

function Contact() {
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
        <a
          href='mailto:info.jessicapswilson@gmail.com'
          className='contact__email'
        >
          info.jessicapswilson@gmail.com
        </a>
        <div className='contact__social'>
          <a
            href='https://www.linkedin.com/in/jess-wilson-876655380/'
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
        </div>
      </div>
    </div>
  );
}

export default Contact;
