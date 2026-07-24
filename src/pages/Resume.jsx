import { usePageMeta } from "../hooks/usePageMeta";
import "../styles/pages/resume.css";

function Resume() {
  usePageMeta({
    title: "Resume — Jess Wilson",
    description:
      "Resume of Jess Wilson, Creative Developer based in Vancouver, BC.",
  });

  return (
    <div className='resume'>
      <div className='resume__header'>
        <h1 className='resume__title'>Resume</h1>
        <a
          href='/resume/jess-wilson-resume.pdf'
          download
          className='resume__download'
        >
          Download PDF
        </a>
      </div>
      <iframe
        src='/resume/jess-wilson-resume.pdf'
        className='resume__viewer'
        title='Jess Wilson Resume'
        width='100%'
      />
    </div>
  );
}

export default Resume;
