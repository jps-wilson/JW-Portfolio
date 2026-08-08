import "../../styles/visuals/BluePrintVisual.css";
import "../../styles/visuals/MarginVisual.css";

function MarginVisual() {
  return (
    <div className='margin-visual visual-blueprint'>
      <div className='visual-blueprint__bg' />

      <svg width='0' height='0' aria-hidden='true'>
        <filter id='marginVisualGrain'>
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
        <rect width='100%' height='100%' filter='url(#marginVisualGrain)' />
      </svg>

      <svg
        className='visual-blueprint__diagram'
        viewBox='0 0 480 700'
        xmlns='http://www.w3.org/2000/svg'
        role='img'
        aria-label="Blueprint illustration of Margin's changelog, listing added, moved, removed, resized, and edited nodes"
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

        <text x='140' y='114' className='label-mono'>
          CHANGELOG
        </text>

        <g>
          <rect
            x='140'
            y='131'
            width='26'
            height='12'
            rx='3'
            className='stroke-accent'
          />
          <text x='144' y='140' className='label-mono-accent' fontSize='6.5'>
            ADD
          </text>
          <line x1='176' y1='137' x2='300' y2='137' className='stroke-accent' />
          <text x='306' y='140' className='label-mono-accent'>
            +1
          </text>
        </g>

        <g>
          <rect
            x='140'
            y='167'
            width='26'
            height='12'
            rx='3'
            className='stroke-guide'
          />
          <text x='144' y='176' className='label-mono' fontSize='6.5'>
            MOV
          </text>
          <line x1='176' y1='173' x2='280' y2='173' className='stroke-faint' />
          <text x='306' y='176' className='label-mono'>
            Δ
          </text>
        </g>

        <g>
          <rect
            x='140'
            y='203'
            width='26'
            height='12'
            rx='3'
            className='stroke-guide'
          />
          <text x='144' y='212' className='label-mono' fontSize='6.5'>
            DEL
          </text>
          <line
            x1='176'
            y1='209'
            x2='250'
            y2='209'
            className='stroke-faint'
            strokeDasharray='2 3'
          />
          <text x='306' y='212' className='label-mono'>
            −1
          </text>
        </g>

        <g>
          <rect
            x='140'
            y='239'
            width='26'
            height='12'
            rx='3'
            className='stroke-guide'
          />
          <text x='144' y='248' className='label-mono' fontSize='6.5'>
            RSZ
          </text>
          <line x1='176' y1='245' x2='290' y2='245' className='stroke-faint' />
          <text x='306' y='248' className='label-mono'>
            Δ
          </text>
        </g>

        <g>
          <rect
            x='140'
            y='275'
            width='26'
            height='12'
            rx='3'
            className='stroke-guide'
          />
          <text x='144' y='284' className='label-mono' fontSize='6.5'>
            ADD
          </text>
          <line x1='176' y1='281' x2='260' y2='281' className='stroke-faint' />
          <text x='306' y='284' className='label-mono'>
            +1
          </text>
        </g>

        <g>
          <rect
            x='140'
            y='311'
            width='26'
            height='12'
            rx='3'
            className='stroke-guide'
          />
          <text x='144' y='320' className='label-mono' fontSize='6.5'>
            TXT
          </text>
          <line
            x1='176'
            y1='317'
            x2='270'
            y2='317'
            className='stroke-faint'
            strokeDasharray='2 3'
          />
          <text x='306' y='320' className='label-mono'>
            ~
          </text>
        </g>

        <g>
          <rect
            x='140'
            y='347'
            width='26'
            height='12'
            rx='3'
            className='stroke-guide'
          />
          <text x='144' y='356' className='label-mono' fontSize='6.5'>
            MOV
          </text>
          <line x1='176' y1='353' x2='295' y2='353' className='stroke-faint' />
          <text x='306' y='356' className='label-mono'>
            Δ
          </text>
        </g>

        <rect x='140' y='440' width='60' height='24' className='stroke-guide' />
        <text x='148' y='456' className='label-mono'>
          ADD · 4
        </text>
        <rect x='210' y='440' width='60' height='24' className='stroke-guide' />
        <text x='217' y='456' className='label-mono'>
          MOV · 7
        </text>
        <rect x='280' y='440' width='60' height='24' className='stroke-guide' />
        <text x='287' y='456' className='label-mono'>
          RSZ · 2
        </text>
      </svg>
    </div>
  );
}

export default MarginVisual;
