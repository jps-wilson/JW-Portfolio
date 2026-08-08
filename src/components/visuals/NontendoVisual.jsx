import "../../styles/visuals/BlueprintVisual.css";
import "../../styles/visuals/NontendoVisual.css";

function NontendoVisual() {
  return (
    <div className='nontendo-visual visual-blueprint'>
      <div className='visual-blueprint__bg' />

      <svg width='0' height='0' aria-hidden='true'>
        <filter id='nontendoVisualGrain'>
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
        <rect width='100%' height='100%' filter='url(#nontendoVisualGrain)' />
      </svg>

      <svg
        className='visual-blueprint__diagram'
        viewBox='0 0 480 700'
        xmlns='http://www.w3.org/2000/svg'
        role='img'
        aria-label="Blueprint illustration of Nontendo's handheld shell, showing the screen, D-pad, and buttons"
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
          x='156'
          y='104'
          width='168'
          height='132'
          rx='8'
          className='stroke-thin'
        />
        <rect
          x='168'
          y='116'
          width='144'
          height='108'
          className='stroke-faint'
        />
        <g className='stroke-faint'>
          <line x1='172' y1='132' x2='308' y2='132' />
          <line x1='172' y1='152' x2='308' y2='152' />
          <line x1='172' y1='172' x2='308' y2='172' />
          <line x1='172' y1='192' x2='308' y2='192' />
        </g>
        <text x='196' y='158' className='label-mono'>
          NONTENDO
        </text>
        <text x='182' y='176' className='label-mono-accent' fontSize='8'>
          PRESS START
        </text>

        <circle cx='328' cy='110' r='3' fill='var(--bp-accent)' />
        <circle cx='328' cy='110' r='6' className='stroke-accent' />

        <g className='stroke-thin'>
          <rect x='169' y='270' width='14' height='60' />
          <rect x='146' y='293' width='60' height='14' />
        </g>

        <circle cx='300' cy='290' r='14' className='stroke-thin' />
        <text x='296' y='294' className='label-mono' fontSize='7'>
          B
        </text>
        <circle cx='326' cy='270' r='14' className='stroke-thin' />
        <text x='322' y='274' className='label-mono' fontSize='7'>
          A
        </text>

        <rect
          x='190'
          y='350'
          width='34'
          height='10'
          rx='5'
          className='stroke-guide'
        />
        <text x='192' y='372' className='label-mono' fontSize='6'>
          SELECT
        </text>
        <rect
          x='234'
          y='350'
          width='34'
          height='10'
          rx='5'
          className='stroke-guide'
        />
        <text x='240' y='372' className='label-mono' fontSize='6'>
          START
        </text>

        <g className='stroke-faint'>
          <circle cx='300' cy='340' r='2' />
          <circle cx='312' cy='340' r='2' />
          <circle cx='324' cy='340' r='2' />
          <circle cx='300' cy='350' r='2' />
          <circle cx='312' cy='350' r='2' />
          <circle cx='324' cy='350' r='2' />
          <circle cx='300' cy='360' r='2' />
          <circle cx='312' cy='360' r='2' />
          <circle cx='324' cy='360' r='2' />
        </g>

        <rect x='150' y='460' width='60' height='24' className='stroke-guide' />
        <text x='158' y='476' className='label-mono'>
          SCORE · 12
        </text>
        <rect x='220' y='460' width='60' height='24' className='stroke-guide' />
        <text x='227' y='476' className='label-mono'>
          SPEED · 4
        </text>
        <rect x='290' y='460' width='60' height='24' className='stroke-guide' />
        <text x='296' y='476' className='label-mono'>
          GRID · 20
        </text>
      </svg>
    </div>
  );
}

export default NontendoVisual;
