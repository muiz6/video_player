import React, { useEffect, useState } from 'react';

import PlayPauseBtn from '../PlayPauseBtn';
import SeekBar from '../SeekBar';
import styles from './video_controls.module.css';

const PlayerState = (video) => ({
  playing: !video.paused,
  duration: video.duration,
  current: video.currentTime,
  buffer: video.buffered.end(0),
});

const listenState = (video, state) => {
  video.addEventListener('play', () => state(PlayerState(video)));
  video.addEventListener('pause', () => state(PlayerState(video)));
  video.addEventListener('timeupdate', () => state(PlayerState(video)));
};

const togglePlay = (video) => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

export default ({ videoRef }) => {
  const [state, setState] = useState({
    playing: false,
    duration: 100,
    current: 0,
    buffer: 0,
  });

  useEffect(() => {
    listenState(videoRef.current, (playerState) => {
      console.log(playerState);
      setState(playerState);
    });
  }, []);

  return (
    <div className="d-flex flex-column" style={{ height: '100%' }}>
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <PlayPauseBtn
          playing={state.playing}
          onClick={() => togglePlay(videoRef.current)}
        />
      </div>
      <div className={styles['bottom-controls']}>
        <SeekBar
          max={state.duration}
          value={state.current}
          value2={state.buffer}
          onSeek={(pos) => {
            const vid = videoRef.current;
            vid.currentTime = pos;
          }}
        />
      </div>
    </div>
  );
};
