import { useState } from "react";

const FILES = {
  "index.html": `/* paste your index.html content here as a string */`,
  "style.css": `/* paste your style.css content here */`,
  "script.js": `/* paste your script.js content here */`,
};

export default function ProjectEmbed({ url }) {
  const [activeFile, setActiveFile] = useState("index.html");

  return (
    <div className='project-embed'>
      <div className='embed-preview'>
        <iframe src={url} title='Pressure App' allow='geolocation' />
      </div>

      <div className='embed-code'>
        <div className='embed-tabs'>
          {Object.keys(FILES).map((file) => (
            <button
              key={file}
              className={`embed-tab ${activeFile === file ? "active" : ""}`}
              onClick={() => setActiveFile(file)}
            >
              {file}
            </button>
          ))}
        </div>
        <pre className='embed-pre'>
          <code>{FILES[activeFile]}</code>
        </pre>
      </div>
    </div>
  );
}
