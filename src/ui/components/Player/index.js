import { useRef, useState, useEffect } from 'react';

import View from './View';

function Player({ vidSrc, vidPoster }) {
  const player = useRef(undefined);
  const [isPlaying, setPlaying] = useState(false);
  useEffect(() => playPauseListener(player.current, setPlaying), []);

  return View(player, vidSrc, vidPoster, isPlaying);
}

function playPauseListener(video, setPlaying) {
  video.addEventListener('play', () => setPlaying(true));
  video.addEventListener('pause', () => setPlaying(false));
}

export default Player;
