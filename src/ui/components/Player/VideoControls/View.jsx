import React from 'react';

import PlayPauseBtn from './PlayPauseBtn';
import SeekBar from './SeekBar';
import VolumeBar from './VolumeBar';
import styles from './video_controls.module.css';

export default ({
  playing, duration, current, buffer,
}, onSeek, onTogglePlay) => (
  <div className="d-flex flex-column" style={{ height: '100%' }}>
    <div className="flex-grow-1 d-flex justify-content-center align-items-center">
      <PlayPauseBtn
        playing={playing}
        onClick={onTogglePlay}
      />
    </div>
    <div className={styles['bottom-controls']}>
      <div>
        <SeekBar
          max={duration}
          value={current}
          value2={buffer}
          onSeek={onSeek}
        />
      </div>
      <div>
        <VolumeBar />
      </div>
    </div>
  </div>
);
