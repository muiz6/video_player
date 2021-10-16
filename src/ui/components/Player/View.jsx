import React from 'react';

import Fade from './Fade';
import styles from './player.module.css';
import VideoControls from './VideoControls';

export default (player, vidSrc, vidPoster, isPlaying) => (
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
      <Fade active={isPlaying}>
        <VideoControls videoRef={player} />
      </Fade>
    </div>
  </div>
);
