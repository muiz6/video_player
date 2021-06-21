import React from 'react';
import Slider from './components/Slider';
import VideoTile from './components/VideoTile';
import Footer from './components/Footer';

export default () => (
  <>
    <div style={{ backgroundColor: 'grey', height: 500 }} />
    <Footer>
      <div style={{ marginTop: '-20px' }}>
        <Slider>
          <VideoTile selected />
          <VideoTile />
          <VideoTile />
          <VideoTile />
        </Slider>
      </div>
    </Footer>
  </>
);
