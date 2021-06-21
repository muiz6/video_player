import React from 'react';
import styles from './video_tile.module.css';

export default ({ selected }) => (
  <a
    href="/"
    className={`d-flex flex-column rounded-xs overflow-hidden ${styles['video-tile']} ${selected ? styles['border-selected'] : ''}`}
  >
    <div className={`flex-grow-1 ${styles['bg-placeholder']}`} />
    <div className={`py-m ${styles['bg-overlay']}`}>
      <p className="text-center text-on-background">Title</p>
    </div>
  </a>
);
