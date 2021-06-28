import React, { useRef } from 'react';

import VideoControls from './VideoControls';
import styles from './player.module.css';

export default ({ vidSrc, vidPoster }) => {
  const player = useRef(undefined);

  return (
    <div className="position-relative">
      <video
        className={`${styles.player}`}
        ref={player}
        style={{ top: 0, left: 0 }}
        src={vidSrc}
        preload="metadata"
        poster={vidPoster}
      >
        <track default kind="captions" srcLang="en" />
        Sorry, your browser doesn&apost support embedded videos.
      </video>
      <div
        className="position-absolute"
        style={{
          top: 0, left: 0, width: '100%', height: '100%',
        }}
      >
        <VideoControls videoRef={player} />
      </div>
    </div>
  );
};
