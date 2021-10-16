import { useEffect, useState } from 'react';

import View from './View';

function VideoControls({ videoRef }) {
  const [state, setState] = useState(PlayerState());

  useEffect(() => {
    listenState(videoRef.current, (playerState) => {
      setState(playerState);
    });
  }, []);

  return View(
    state,
    (pos) => {
      const vid = videoRef.current;
      vid.currentTime = pos;
    },
    () => togglePlay(videoRef.current),
  );
}

function listenState(video, state) {
  video.addEventListener('play', () => state(PlayerState(video)));
  video.addEventListener('pause', () => state(PlayerState(video)));
  video.addEventListener('timeupdate', () => state(PlayerState(video)));
}

function PlayerState(video) {
  if (video) {
    return {
      playing: !video.paused,
      duration: video.duration,
      current: video.currentTime,
      buffer: video.buffered.end(0),
    };
  }

  return {
    playing: false, duration: 100, current: 0, buffer: 0,
  };
}

function togglePlay(video) {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

export default VideoControls;
