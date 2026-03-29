import { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import "highlight.js/styles/atom-one-dark.min.css";
import "../../styles/components/case-study.css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("css", css);

const sections = [
  {
    label: "The Idea",
    heading: "What if your music player felt like the real thing?",
    copy: "Deadwax started with a simple frustration — digital music players are functional but lifeless. You press play and something happens. There's no ritual, no physicality, no sense that you're doing anything meaningful. Deadwax was built to bring that back. A turntable you actually have to load. A record you drag onto the platter. A needle that moves. The music doesn't start until you make it start.",
    snippet: null,
  },
  {
    label: "The Design",
    heading: "Every surface built from scratch.",
    copy: "The turntable is built entirely in CSS — no images, no external assets. The platter, the tonearm, the headshell, the stylus, the speed selector, the pitch slider, the volume knob, the LED, the speaker vents. Each element is layered gradients, box-shadows, and border-radius working together to simulate depth and material. The arm moves when you load a record. The LED glows when you press play. The platter pulses when music is playing. The detail isn't decoration — it's the whole point.",
    snippet: {
      filename: "style.css",
      language: "css",
      code: `.arm {
  position: absolute;
  left: 10%;
  top: 90%;
  width: 190px;
  height: 15px;
  background: linear-gradient(90deg, #e0e0e0 0%, #b5b5b5 60%, #888 100%);
  border-radius: 5px;
  box-shadow:
    0 3px 10px rgba(0, 0, 0, 0.18),
    inset 0 2px 6px #fff6,
    inset 0 -2px 6px #8884;
  border-top: 1px solid #f5f5f5;
  border-bottom: 1px solid #888;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}`,
    },
  },
  {
    label: "The Build",
    heading: "Drag, drop, and play.",
    copy: "The core interaction is a drag and drop system — pick up a record from the collection sidebar, drop it onto the platter, and the tonearm moves into position. Built with the native HTML5 Drag and Drop API with touch event support layered on top for mobile. Playback runs through the Spotify Iframe API, which handles the actual audio. The turntable controls — speed, pitch, volume — drive the visual state of the player. Every interaction is handled so the experience feels deliberate and physical rather than like a web page.",
    snippet: {
      filename: "app.js",
      language: "javascript",
      code: `function loadAlbumOntoPlatter(album) {
  if (state.playing) stopPlayback();

  state.currentAlbum = album;
  state.recordLoaded = true;
  state.currentTrack = 1;

  if (looseRecord) {
    looseRecord.style.display = "block";
    looseRecord.classList.add("on-platter");
    looseRecord.classList.remove("spinning");

    const label = looseRecord.querySelector(".label");
    if (label && album.coverUrl) {
      label.style.backgroundImage = \`url(\${album.coverUrl})\`;
      label.classList.add("has-art");
    }
  }

  moveArm(true);

  if (nowPlaying) {
    nowPlaying.innerHTML = \`
      <span class="now-playing-text">Ready to play</span>
      <span class="now-playing-title">\${album.name}</span>
      <span class="now-playing-artist">\${album.artist}</span>
    \`;
  }
}`,
    },
  },
];

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
      <pre className='cs-snippet__pre'>
        <code
          ref={codeRef}
          className={`language-${snippet.language.toLowerCase()}`}
        >
          {snippet.code}
        </code>
      </pre>
    </div>
  );
}

function DeadwaxCaseStudy() {
  return (
    <div className='cs'>
      {sections.map((section, index) => (
        <div key={index} className='cs__section'>
          <div className='cs__label'>
            <span className='cs__label-line'></span>
            <span className='cs__label-text'>{section.label}</span>
          </div>
          <h2 className='cs__heading'>{section.heading}</h2>
          <p className='cs__copy'>{section.copy}</p>
          {section.snippet && <CodeSnippet snippet={section.snippet} />}
        </div>
      ))}
    </div>
  );
}

export default DeadwaxCaseStudy;
