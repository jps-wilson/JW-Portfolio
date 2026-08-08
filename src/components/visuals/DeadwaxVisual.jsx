import "../../styles/visuals/BlueprintVisual.css";
import "../../styles/visuals/DeadwaxVisual.css";

function DeadwaxVisual() {
  return (
    <div className='deadwax-visual visual-blueprint'>
      <div className='visual-blueprint__bg' />

      <svg width='0' height='0' aria-hidden='true'>
        <filter id='deadwaxVisualGrain'>
          <feTurbulence
            type='fractalNoise'
            baseFrequency='0.9'
            numOctaves='2'
            stitchTiles='stitch'
          />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.02 0'
          />
        </filter>
      </svg>
      <svg
        className='visual-blueprint__grain'
        width='100%'
        height='100%'
        aria-hidden='true'
      >
        <rect width='100%' height='100%' filter='url(#deadwaxVisualGrain)' />
      </svg>

      <svg
        className='visual-blueprint__diagram'
        viewBox='0 0 480 700'
        xmlns='http://www.w3.org/2000/svg'
        role='img'
        aria-label="Blueprint illustration of Deadwax's turntable — a record on a platter with the tonearm lowered"
      >
        <rect x='20' y='20' width='440' height='660' className='stroke-guide' />

        <g className='stroke-thin'>
          <path d='M20,44 L20,20 L44,20' />
          <path d='M436,20 L460,20 L460,44' />
          <path d='M460,656 L460,680 L436,680' />
          <path d='M44,680 L20,680 L20,656' />
        </g>

        <line x1='0' y1='350' x2='480' y2='350' className='stroke-guide' />
        <line x1='240' y1='0' x2='240' y2='700' className='stroke-guide' />

        <rect
          x='120'
          y='70'
          width='240'
          height='500'
          rx='28'
          className='stroke-thin'
        />
        <rect
          x='132'
          y='98'
          width='216'
          height='360'
          className='stroke-faint'
        />
        <line x1='216' y1='86' x2='264' y2='86' className='stroke-thin' />

        <g>
          <circle cx='240' cy='260' r='110' className='stroke-thin' />
          <circle cx='240' cy='260' r='90' className='stroke-faint' />
          <circle cx='240' cy='260' r='70' className='stroke-faint' />
          <circle cx='240' cy='260' r='50' className='stroke-faint' />
          <circle cx='240' cy='260' r='30' className='stroke-thin' />
          <circle cx='240' cy='260' r='2' fill='var(--bp-ink)' />

          <text x='240' y='255' textAnchor='middle' className='label-mono'>
            TRACK
          </text>
          <text
            x='240'
            y='271'
            textAnchor='middle'
            className='label-mono-accent'
            fontSize='13'
          >
            A1
          </text>
        </g>

        <g>
          <circle cx='316' cy='150' r='5' className='stroke-thin' />
          <line x1='316' y1='150' x2='260' y2='220' className='stroke-accent' />
          <circle cx='260' cy='220' r='3' fill='var(--bp-accent)' />
        </g>

        <rect x='140' y='392' width='60' height='24' className='stroke-guide' />
        <text x='148' y='408' className='label-mono'>
          RPM · 33
        </text>
        <rect x='210' y='392' width='60' height='24' className='stroke-guide' />
        <text x='217' y='408' className='label-mono'>
          PITCH · 0
        </text>
        <rect x='280' y='392' width='60' height='24' className='stroke-guide' />
        <text x='287' y='408' className='label-mono'>
          VOL · 70
        </text>
      </svg>
    </div>
  );
}

export default DeadwaxVisual;
