import "../../styles/components/section-label.css";

function SectionLabel({ text }) {
  return (
    <div className='section-label'>
      <span className='section-label__line'></span>
      <span className='section-label__text'>{text}</span>
    </div>
  );
}

export default SectionLabel;
