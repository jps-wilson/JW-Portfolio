import "../../styles/visuals/PressureVisual.css";
/**
 * - Animated blueprint visual for the Pressure project header
 * - Replaces the static screenshot. Sizeed to 886x818 (matches the original screenshot's size)
 *
 * - Usage:
 *  <PressureVisual />
 *
 * - No props needed
 * - Palette and animation are fixed to the Pressure in-app tokens
 */
function PressureVisual() {
  return (
    <div className='pressure-visual'>
      <div className='pressure-visual__bg' />

      <svg width='0' height='0' aria-hidden='true'>
        <filter id='pressureVisualGrain'>
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
        className='pressure-visual__grain'
        width='100%'
        height='100%'
        aria-hidden='true'
      >
        <rect width='100%' height='100%' filter='url(#pressureVisualGrain)' />
      </svg>

      <svg
        className='pressure-visual__blueprint'
        viewBox='0 0 480 700'
        xmlns='http://www.w3.org/2000/svg'
        role='img'
        aria-label="Blueprint illustration of the Pressure app's atmospheric dial interface"
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
          <circle cx='240' cy='278' r='86' className='stroke-thin' />
          <circle cx='240' cy='278' r='70' className='stroke-faint' />
          <circle cx='240' cy='278' r='2.4' fill='var(--pv-ink)' />

          <g className='stroke-thin'>
            <line x1='240' y1='192' x2='240' y2='202' />
            <line x1='326' y1='278' x2='316' y2='278' />
            <line x1='240' y1='364' x2='240' y2='354' />
            <line x1='154' y1='278' x2='164' y2='278' />
          </g>
          <g className='stroke-faint'>
            <line x1='271.8' y1='203' x2='266.9' y2='212.7' />
            <line x1='301' y1='232.2' x2='291.3' y2='237.1' />
            <line x1='315' y1='278' x2='316' y2='278' />
            <line x1='301' y1='323.8' x2='291.3' y2='318.9' />
            <line x1='271.8' y1='353' x2='266.9' y2='343.3' />
            <line x1='208.2' y1='353' x2='213.1' y2='343.3' />
            <line x1='179' y1='323.8' x2='188.7' y2='318.9' />
            <line x1='179' y1='232.2' x2='188.7' y2='237.1' />
            <line x1='208.2' y1='203' x2='213.1' y2='212.7' />
          </g>

          <line x1='240' y1='278' x2='284' y2='234' className='stroke-accent' />

          <text x='216' y='308' className='label-mono'>
            hPa
          </text>
          <text x='204' y='322' className='label-mono-accent' fontSize='13'>
            1013.2
          </text>
        </g>

        <rect x='150' y='392' width='60' height='24' className='stroke-guide' />
        <text x='160' y='408' className='label-mono'>
          CALM
        </text>
        <rect x='220' y='392' width='60' height='24' className='stroke-guide' />
        <text x='230' y='408' className='label-mono'>
          14°C
        </text>
        <rect x='290' y='392' width='60' height='24' className='stroke-guide' />
        <text x='298' y='408' className='label-mono'>
          62% RH
        </text>


      </svg>
    </div>
  );
}

export default PressureVisual;
