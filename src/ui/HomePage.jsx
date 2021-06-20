import React from 'react';
import Slider from './components/Slider';
import VideoTile from './components/VideoTile';

export default () => (
  <>
    <div style={{ backgroundColor: 'grey', height: 500 }} />
    <div>
      <Slider>
        <VideoTile />
        <VideoTile />
        <VideoTile />
        <VideoTile />
      </Slider>
    </div>
  </>
);
