import React from 'react';
import styles from './player.module.css';

export default ({ vidSrc }) => (
  <video
    controls
    src={vidSrc}
    className={styles.player}
  >
    <track
      default
      kind="captions"
      srcLang="en"
    />
    Sorry, your browser doesn&apost support embedded videos.
  </video>
);
