import { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import "highlight.js/styles/atom-one-dark.min.css";
import "../../styles/components/case-study.css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("css", css);

function CodeSnippet({ snippet }) {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [snippet.code]);

  return (
    <div className='cs-snippet'>
      <div className='cs-snippet__header'>
        <span className='cs-snippet__filename'>{snippet.filename}</span>
        <span className='cs-snippet__lang'>{snippet.language}</span>
      </div>
      <pre
        className='cs-snippet__pre'
        aria-label={`Code snippet: ${snippet.filename}`}
      >
        <code
          ref={codeRef}
          className={`language-${snippet.language.toLowerCase()}`}
          tabIndex='0'
        >
          {snippet.code}
        </code>
      </pre>
    </div>
  );
}

export default CodeSnippet;
