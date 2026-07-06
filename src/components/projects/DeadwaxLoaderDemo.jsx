import { useState, useRef, useCallback } from "react";
import "../../styles/components/deadwax-loader-demo.css";

// Real album metadata from actual app. Cover art is omitted deliberately:
// it's fetched at runtime from Spotify and is copyrighted
const COLLECTION = [
  {
    id: "1",
    name: "Purple Rain",
    artist: "Prince And The Revolution",
    swatch: "#5b2a86",
  },
  {
    id: "2",
    name: "Dark Side of the Moon",
    artist: "Pink Floyd",
    swatch: "#1a1a1a",
  },
  { id: "3", name: "Rumours", artist: "Fleetwood Mac", swatch: "#7a5230" },
];

function DeadwaxLoaderDemo() {
  const [loadedAlbum, setLoadedAlbum] = useState(null);
  const [armPlaying, setArmPlaying] = useState(false);
  const [drag, setDrag] = useState(null);
  const platterRef = useRef(null);

  const loadAlbumOntoPlatter = useCallback((album) => {
    setLoadedAlbum(album);
    setArmPlaying(true);
  }, []);

  const eject = () => {
    setLoadedAlbum(null);
    setArmPlaying(false);
  };

  const handlePointerDown = (e, album) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDrag({ album, x: e.clientX, y: e.clientY });
  };

  const handlePointerMove = (e) => {
    if (!drag) return;
    setDrag((d) => (d ? { ...d, x: e.clientX, y: e.clientY } : d));
  };

  const handlePointerUp = (e) => {
    if (!drag) return;
    const platter = platterRef.current;
    if (platter) {
      const rect = platter.getBoundingClientRect();
      const over =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      if (over) loadAlbumOntoPlatter(drag.album);
    }
    setDrag(null);
  };

  return (
    <div className='deadwax-demo'>
      <div className='deadwax-demo__collection'>
        {COLLECTION.map((album) => (
          <div
            key={album.id}
            className='deadwax-demo__card'
            onPointerDown={(e) => handlePointerDown(e, album)}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => setDrag(null)}
            role='button'
            tabIndex={0}
            aria-label={`Load ${album.name} by ${album.artist} onto the turntable`}
          >
            <span
              className='deadwax-demo__cover'
              style={{ background: album.swatch }}
            />
            <span className='deadwax-demo__meta'>
              <span className='deadwax-demo__title'>{album.name}</span>
              <span className='deadwax-demo__artist'>{album.artist}</span>
            </span>
          </div>
        ))}
      </div>

      <div className='deadwax-demo__turntable'>
        <div className='deadwax-demo__platter' ref={platterRef} />
        {loadedAlbum && (
          <div className={`deadwax-demo__lp${armPlaying ? " deadwax-demo__lp--spinning" : ""}`}>
            <div className='deadwax-demo__record'>
              <div
                className='deadwax-demo__label'
                style={{ background: loadedAlbum.swatch }}
              />
            </div>
          </div>
        )}

        <div className='deadwax-demo__arm-container'>
          <div className='deadwax-demo__arm-base' />
          <div className='deadwax-demo__arm-counterweight' />
          <div
            className={`deadwax-demo__arm ${armPlaying ? "deadwax-demo__arm--playing" : ""}`}
          >
            <div className='deadwax-demo__headshell' />
            <div className='deadwax-demo__stylus' />
          </div>
        </div>
      </div>

      <div className='deadwax-demo__now-playing'>
        {loadedAlbum ? (
          <>
            <span className='deadwax-demo__now-playing-text'>
              {armPlaying ? "Ready to play" : "Stopped"}
            </span>
            <span className='deadwax-demo__now-playing-title'>
              {loadedAlbum.name}
            </span>
            <span className='deadwax-demo__now-playing-artist'>
              {loadedAlbum.artist}
            </span>
            <button
              type='button'
              className='deadwax-demo__eject'
              onClick={eject}
            >
              Eject
            </button>
          </>
        ) : (
          <span className='deadwax-demo__now-playing-text'>
            Drag a record onto the platter
          </span>
        )}
      </div>

      {drag && (
        <div
          className='deadwax-demo__drag-preview'
          style={{ left: drag.x, top: drag.y, background: drag.album.swatch }}
        />
      )}
      <p className='deadwax-demo__note'>
        *Cover art intentionally omitted. The real app pulls it live from
        Spotify.
      </p>
    </div>
  );
}

export default DeadwaxLoaderDemo;
