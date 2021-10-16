import React from 'react';

import styles from './play_pause_btn.module.css';

export default ({ playing, onClick }) => (
  <button type="button" className={styles['play-pause-btn']} onClick={onClick}>
    {playing ? 'Playing' : 'Paused'}
  </button>
);
