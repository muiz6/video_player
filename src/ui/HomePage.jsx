import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Slider from './components/Slider';
import VideoTile from './components/VideoTile';
import Footer from './components/Footer';
import Player from './components/Player';
import ApiClient from '../data/ApiClient';

const apiClient = ApiClient();

export default () => {
  const [videos, setVideos] = useState([]);

  useEffect(async () => {
    const vids = await apiClient.getVideos();
    setVideos(vids);
  }, []);

  // using window.location does not change page content
  const query = new URLSearchParams(useLocation().search);

  return (
    <>
      <header>
        <Player vidSrc={videos.length ? `/api/videos/${query?.get('vid') || '1'}` : undefined} />
      </header>
      <footer>
        <Footer>
          <div style={{ marginTop: '-20px' }}>
            <Slider>
              {
                videos.length
                  ? (
                    videos.map((e, index) => (
                      <Link to={`?vid=${e.id}`}>
                        <VideoTile imgSrc={videos[index]?.thumbnailUrl} />
                      </Link>
                    ))
                  )
                  : [1, 2, 3, 4].map(() => (<VideoTile />))
              }
            </Slider>
          </div>
        </Footer>
        <div style={{ height: '50px', backgroundColor: 'black' }} />
      </footer>
    </>
  );
};
