import "../../styles/visuals/BlueprintVisual.css";
import "../../styles/visuals/MomentumVisual.css";

function MomentumVisual() {
  return (
    <div className='momentum-visual visual-blueprint'>
      <div className='visual-blueprint__bg' />

      <svg width='0' height='0' aria-hidden='true'>
        <filter id='momentumVisualGrain'>
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
        <rect width='100%' height='100%' filter='url(#momentumVisualGrain)' />
      </svg>

      <svg
        className='visual-blueprint__diagram'
        viewBox='0 0 480 700'
        xmlns='http://www.w3.org/2000/svg'
        role='img'
        aria-label="Blueprint illustration of Momentum's task list, with a progress bar and checked and unchecked tasks"
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
        <line x1='216' y1='86' x2='264' y2='86' className='stroke-thin' />

        <rect
          x='140'
          y='110'
          width='200'
          height='8'
          rx='4'
          className='stroke-guide'
        />
        <rect
          x='140'
          y='110'
          width='130'
          height='8'
          rx='4'
          fill='var(--bp-accent)'
          fillOpacity='0.85'
        />

        <text x='140' y='136' className='label-mono'>
          TODAY
        </text>

        <g>
          <rect
            x='140'
            y='150'
            width='12'
            height='12'
            rx='2'
            fill='var(--bp-accent)'
          />
          <path
            d='M143,156 L147,160 L153,152'
            stroke='var(--bp-atmosphere-2)'
            fill='none'
            strokeWidth='1.4'
          />
          <line x1='162' y1='157' x2='260' y2='157' className='stroke-faint' />
        </g>

        <g>
          <rect
            x='140'
            y='180'
            width='12'
            height='12'
            rx='2'
            className='stroke-thin'
          />
          <line x1='162' y1='187' x2='290' y2='187' className='stroke-faint' />
        </g>

        <g>
          <rect
            x='140'
            y='210'
            width='12'
            height='12'
            rx='2'
            className='stroke-thin'
          />
          <line x1='162' y1='217' x2='250' y2='217' className='stroke-faint' />
        </g>

        <g>
          <rect
            x='140'
            y='240'
            width='12'
            height='12'
            rx='2'
            className='stroke-accent'
          />
          <line x1='162' y1='247' x2='300' y2='247' className='stroke-accent' />
        </g>

        <g>
          <rect
            x='140'
            y='270'
            width='12'
            height='12'
            rx='2'
            className='stroke-thin'
          />
          <line x1='162' y1='277' x2='270' y2='277' className='stroke-faint' />
        </g>

        <g>
          <rect
            x='140'
            y='300'
            width='12'
            height='12'
            rx='2'
            fill='var(--bp-accent)'
          />
          <path
            d='M143,306 L147,310 L153,302'
            stroke='var(--bp-atmosphere-2)'
            fill='none'
            strokeWidth='1.4'
          />
          <line x1='162' y1='307' x2='240' y2='307' className='stroke-faint' />
        </g>

        <rect x='150' y='440' width='60' height='24' className='stroke-guide' />
        <text x='158' y='456' className='label-mono'>
          DONE · 4
        </text>
        <rect x='220' y='440' width='60' height='24' className='stroke-guide' />
        <text x='226' y='456' className='label-mono'>
          LEFT · 3
        </text>
        <rect x='290' y='440' width='60' height='24' className='stroke-guide' />
        <text x='294' y='456' className='label-mono'>
          TODAY · 6
        </text>
      </svg>
    </div>
  );
}

export default MomentumVisual;
