import React from 'react';
import styles from './video_tile.module.css';

export default ({ selected, imgSrc }) => (
  <div
    className={`d-flex flex-column rounded-xs overflow-hidden ${styles['video-tile']} ${selected ? styles['border-selected'] : ''}`}
  >
    {
      imgSrc
        ? <img alt="" src={imgSrc} className="flex-grow-1" />
        : <div className={`flex-grow-1 ${styles['bg-placeholder']}`} />
    }
  </div>
);
