import React from 'react';
import { Link } from 'react-router-dom';

import styles from './title_bar.module.css';
import videoPlayer from './assets/video_player.svg';

export default () => (
  <div className={styles.gradient}>
    <div className="container py-m">
      <Link to="/">
        <img alt="Video Player Logo" src={videoPlayer} />
      </Link>
    </div>
  </div>
);
