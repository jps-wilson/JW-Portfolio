import { useState, useEffect, useRef, useCallback } from "react";
import "../../styles/components/nontendo-demo.css";

const GRID_SIZE = 12;
const TICK_MS = 160;

const START_SNAKE = [
  { x: 5, y: 6 },
  { x: 4, y: 6 },
  { x: 3, y: 6 },
];

function randomFood(snake) {
  let cell;
  do {
    cell = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  } while (snake.some((s) => s.x === cell.x && s.y === cell.y));
  return cell;
}

function NontendoDemo() {
  const [phase, setPhase] = useState("boot");
  const [snake, setSnake] = useState(START_SNAKE);
  const [food, setFood] = useState(() => randomFood(START_SNAKE));
  const [score, setScore] = useState(0);
  const directionRef = useRef({ x: 1, y: 0 });
  const nextDirectionRef = useRef({ x: 1, y: 0 });

  const startGame = useCallback(() => {
    directionRef.current = { x: 1, y: 0 };
    nextDirectionRef.current = { x: 1, y: 0 };
    setSnake(START_SNAKE);
    setFood(randomFood(START_SNAKE));
    setScore(0);
    setPhase("playing");
  }, []);

  const setDirection = useCallback((dir) => {
    const current = directionRef.current;
    if (current.x === -dir.x && current.y === -dir.y) return;
    nextDirectionRef.current = dir;
  }, []);

  useEffect(() => {
    if (phase !== "playing") return;
    const onKeyDown = (e) => {
      if (e.key === "ArrowUp") setDirection({ x: 0, y: -1 });
      else if (e.key === "ArrowDown") setDirection({ x: 0, y: 1 });
      else if (e.key === "ArrowLeft") setDirection({ x: -1, y: 0 });
      else if (e.key === "ArrowRight") setDirection({ x: 1, y: 0 });
      else return;
      e.preventDefault();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, setDirection]);

  useEffect(() => {
    if (phase !== "playing") return;
    const interval = setInterval(() => {
      directionRef.current = nextDirectionRef.current;
      setSnake((prev) => {
        const head = {
          x: prev[0].x + directionRef.current.x,
          y: prev[0].y + directionRef.current.y,
        };
        const hitWall =
          head.x < 0 ||
          head.x >= GRID_SIZE ||
          head.y < 0 ||
          head.y >= GRID_SIZE;
        const hitSelf = prev.some((s) => s.x === head.x && s.y === head.y);
        if (hitWall || hitSelf) {
          setPhase("gameover");
          return prev;
        }
        const ateFood = head.x === food.x && head.y === food.y;
        const nextSnake = [head, ...prev];
        if (ateFood) {
          setScore((s) => s + 1);
          setFood(randomFood(nextSnake));
        } else {
          nextSnake.pop();
        }
        return nextSnake;
      });
    }, TICK_MS);
    return () => clearInterval(interval);
  }, [phase, food]);

  const cellSet = new Set(snake.map((s) => `${s.x},${s.y}`));
  const headKey = snake[0] ? `${snake[0].x},${snake[0].y}` : null;

  const cells = [];
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      const key = `${x},${y}`;
      const isSnake = cellSet.has(key);
      const isHead = key === headKey;
      const isFood = food.x === x && food.y === y;
      cells.push(
        <span
          key={key}
          className={`nontendo-demo__cell${
            isHead
              ? " nontendo-demo__cell--head"
              : isSnake
                ? " nontendo-demo__cell--snake"
                : ""
          }${isFood ? " nontendo-demo__cell--food" : ""}`}
        />,
      );
    }
  }

  return (
    <div className='nontendo-demo'>
      <div className='nontendo-demo__shell'>
        <span
          className={`nontendo-demo__led${
            phase === "playing" ? " nontendo-demo__led--on" : ""
          }`}
        />
        <div className='nontendo-demo__screen'>
          {phase === "boot" && (
            <div className='nontendo-demo__message'>
              <span className='nontendo-demo__logo'>Nontendo</span>
              <span className='nontendo-demo__prompt'>Press start</span>
            </div>
          )}
          {phase === "playing" && (
            <>
              <span className='nontendo-demo__score'>Score {score}</span>
              <div
                className='nontendo-demo__grid'
                style={{
                  gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                  gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
                }}
              >
                {cells}
              </div>
            </>
          )}
          {phase === "gameover" && (
            <div className='nontendo-demo__message'>
              <span className='nontendo-demo__logo'>Game over</span>
              <span className='nontendo-demo__prompt'>
                Score {score} — press start
              </span>
            </div>
          )}
        </div>

        <div className='nontendo-demo__controls'>
          <div
            className='nontendo-demo__dpad'
            role='group'
            aria-label='Directional pad'
          >
            <button
              type='button'
              className='nontendo-demo__dbtn nontendo-demo__dbtn--up'
              aria-label='Up'
              onClick={() => setDirection({ x: 0, y: -1 })}
            >
              ▲
            </button>
            <button
              type='button'
              className='nontendo-demo__dbtn nontendo-demo__dbtn--left'
              aria-label='Left'
              onClick={() => setDirection({ x: -1, y: 0 })}
            >
              ◀
            </button>
            <button
              type='button'
              className='nontendo-demo__dbtn nontendo-demo__dbtn--right'
              aria-label='Right'
              onClick={() => setDirection({ x: 1, y: 0 })}
            >
              ▶
            </button>
            <button
              type='button'
              className='nontendo-demo__dbtn nontendo-demo__dbtn--down'
              aria-label='Down'
              onClick={() => setDirection({ x: 0, y: 1 })}
            >
              ▼
            </button>
          </div>

          <button
            type='button'
            className='nontendo-demo__start'
            onClick={startGame}
          >
            {phase === "playing" ? "Restart" : "Start"}
          </button>
        </div>
      </div>

      <p className='nontendo-demo__hint'>
        Arrow keys or the D-pad to move, Start to (re)begin
      </p>
    </div>
  );
}

export default NontendoDemo;
