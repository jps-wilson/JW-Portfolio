import { useState } from "react";
import CodeSnippet from "./CodeSnippet";
import "../../styles/components/code-demo-toggle.css";

function CodeDemoToggle({ demo: DemoComponent, snippet }) {
  const [view, setView] = useState("demo");
  const [isTryItHovered, setIsTryItHovered] = useState(false);
  const Demo = DemoComponent;

  return (
    <div className={`cs-demo ${view === "demo" && isTryItHovered ? "cs-demo--warm" : ""}`}>
      <div className='cs-demo__tabs' role='tablist'>
        <button
          type='button'
          role='tab'
          aria-selected={view === "demo"}
          className={`cs-demo__tab ${view === "demo" ? "cs-demo__tab--active" : ""}`}
          onClick={() => setView("demo")}
          onMouseEnter={() => setIsTryItHovered(true)}
          onMouseLeave={() => setIsTryItHovered(false)}
        >
          Try it
        </button>
        <button
          type='button'
          role='tab'
          aria-selected={view === "code"}
          className={`cs-demo__tab ${view === "code" ? "cs-demo__tab--active" : ""}`}
          onClick={() => setView("code")}
          onMouseEnter={() => setIsTryItHovered(false)}
        >
          View code
        </button>
      </div>
      {view === "demo" ? <Demo /> : <CodeSnippet snippet={snippet} />}
    </div>
  );
}

export default CodeDemoToggle;
