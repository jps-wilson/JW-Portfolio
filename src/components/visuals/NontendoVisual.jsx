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
          x='150'
          y='100'
          width='180'
          height='130'
          rx='8'
          className='stroke-thin'
        />
        <rect
          x='158'
          y='108'
          width='164'
          height='114'
          className='stroke-faint'
        />
        <g className='stroke-faint'>
          <line x1='162' y1='124' x2='318' y2='124' />
          <line x1='162' y1='144' x2='318' y2='144' />
          <line x1='162' y1='164' x2='318' y2='164' />
          <line x1='162' y1='184' x2='318' y2='184' />
        </g>
        <text x='240' y='150' textAnchor='middle' className='label-mono'>
          NONTENDO
        </text>
        <text
          x='240'
          y='168'
          textAnchor='middle'
          className='label-mono-accent'
          fontSize='8'
        >
          PRESS START
        </text>

        <circle cx='340' cy='120' r='3' fill='var(--bp-accent)' />
        <circle cx='340' cy='120' r='6' className='stroke-accent' />

        <g className='stroke-thin'>
          <rect x='183' y='290' width='14' height='60' />
          <rect x='160' y='313' width='60' height='14' />
        </g>

        <circle cx='300' cy='336' r='14' className='stroke-thin' />
        <text
          x='300'
          y='340'
          textAnchor='middle'
          className='label-mono'
          fontSize='7'
        >
          B
        </text>
        <circle cx='326' cy='310' r='14' className='stroke-thin' />
        <text
          x='326'
          y='314'
          textAnchor='middle'
          className='label-mono'
          fontSize='7'
        >
          A
        </text>

        <rect
          x='196'
          y='372'
          width='40'
          height='11'
          rx='5.5'
          className='stroke-guide'
        />
        <text
          x='216'
          y='392'
          textAnchor='middle'
          className='label-mono'
          fontSize='6'
        >
          SELECT
        </text>
        <rect
          x='244'
          y='372'
          width='40'
          height='11'
          rx='5.5'
          className='stroke-guide'
        />
        <text
          x='264'
          y='392'
          textAnchor='middle'
          className='label-mono'
          fontSize='6'
        >
          START
        </text>

        <g className='stroke-faint'>
          <circle cx='296' cy='404' r='2' />
          <circle cx='308' cy='404' r='2' />
          <circle cx='320' cy='404' r='2' />
          <circle cx='296' cy='414' r='2' />
          <circle cx='308' cy='414' r='2' />
          <circle cx='320' cy='414' r='2' />
          <circle cx='296' cy='424' r='2' />
          <circle cx='308' cy='424' r='2' />
          <circle cx='320' cy='424' r='2' />
        </g>

        <rect x='140' y='460' width='60' height='24' className='stroke-guide' />
        <text x='148' y='476' className='label-mono'>
          SCORE · 12
        </text>
        <rect x='210' y='460' width='60' height='24' className='stroke-guide' />
        <text x='216' y='476' className='label-mono'>
          SPEED · 4
        </text>
        <rect x='280' y='460' width='60' height='24' className='stroke-guide' />
        <text x='286' y='476' className='label-mono'>
          GRID · 20
        </text>
      </svg>
    </div>
  );
}

export default NontendoVisual;
