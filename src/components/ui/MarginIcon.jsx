export default function MarginIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox='0 0 400 500'
      fill='none'
      stroke='currentColor'
      strokeWidth='3'
      xmlns='http://www.w3.org/2000/svg'
    >
      {/* Page outline */}
      <rect x='40' y='20' width='320' height='460' rx='4' />
      {/* Margin rule */}
      <line x1='120' y1='20' x2='120' y2='480' strokeWidth='2.5' />
      {/* Text lines (right of margin) */}
      <line x1='145' y1='80' x2='320' y2='80' strokeWidth='2' opacity='0.5' />
      <line x1='145' y1='120' x2='280' y2='120' strokeWidth='2' opacity='0.5' />
      <line x1='145' y1='160' x2='310' y2='160' strokeWidth='2' opacity='0.5' />
      <line x1='145' y1='200' x2='260' y2='200' strokeWidth='2' opacity='0.5' />
      {/* Annotation marks (left of margin, like diff markers) */}
      <line x1='80' y1='76' x2='110' y2='76' strokeWidth='2.5' />
      <line x1='80' y1='84' x2='110' y2='84' strokeWidth='2.5' />
      <circle cx='95' cy='120' r='6' strokeWidth='2.5' />
      <line x1='80' y1='156' x2='110' y2='156' strokeWidth='2.5' />
      <line x1='80' y1='164' x2='110' y2='164' strokeWidth='2.5' />
      {/* More text lines */}
      <line x1='145' y1='280' x2='300' y2='280' strokeWidth='2' opacity='0.5' />
      <line x1='145' y1='320' x2='330' y2='320' strokeWidth='2' opacity='0.5' />
      <line x1='145' y1='360' x2='270' y2='360' strokeWidth='2' opacity='0.5' />
      {/* More annotations */}
      <path d='M85 276l10 4-10 4' strokeWidth='2.5' fill='none' />
      <line x1='80' y1='316' x2='110' y2='316' strokeWidth='2.5' />
      <line x1='80' y1='324' x2='110' y2='324' strokeWidth='2.5' />
    </svg>
  );
}
