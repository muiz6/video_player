import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Slider from '../components/Slider';
import VideoTile from '../components/VideoTile';
import Footer from '../components/Footer';
import Player from '../components/Player';
import ApiClient from '../../data/ApiClient';
import TitleBar from '../components/TitleBar';
import GridView from '../components/GridView';
import useWindowInnerSize from '../hooks/useWindowInnerSize';
import styles from './home_page.module.css';

const apiClient = ApiClient();

const getCss = (windowWidth, index) => {
  if (windowWidth >= 576) {
    return index % 2 ? '' : 'justify-content-end';
  }
  return 'justify-content-center';
};

export default () => {
  const [videos, setVideos] = useState([]);

  useEffect(async () => {
    const vids = await apiClient.getVideos();
    setVideos(vids);
  }, []);

  // using window.location does not change page content
  const query = new URLSearchParams(useLocation().search);
  const selectedId = Number(query?.get('vid') || 1);

  const size = useWindowInnerSize();

  return (
    <>
      <header>
        <div className={`position-absolute w-100 ${styles['title-bar']}`}>
          <TitleBar />
        </div>
        <Player vidSrc={videos.length ? `/api/videos/${selectedId}` : undefined} />
      </header>
      <footer>
        <Footer>
          <div className="container">
            {
              size.width >= 992
                ? (
                  <div className={styles.slider}>
                    <Slider>
                      {
                        videos.length
                          ? (
                            videos.map((video, index) => (
                              <Link to={`?vid=${video.id}`}>
                                <VideoTile
                                  selected={video.id === selectedId}
                                  imgSrc={videos[index]?.thumbnailUrl}
                                />
                              </Link>
                            ))
                          )
                          : [1, 2, 3, 4].map(() => (<VideoTile />))
                      }
                    </Slider>
                  </div>
                )
                : (
                  <div className="pt-s">
                    <GridView cols={size.width >= 576 ? 2 : 1}>
                      {
                        videos.length
                          ? (
                            videos.map((video, index) => (
                              <div className={`d-flex ${getCss(size.width, index)} p-s`}>
                                <Link to={`?vid=${video.id}`}>
                                  <VideoTile
                                    selected={video.id === selectedId}
                                    imgSrc={videos[index]?.thumbnailUrl}
                                  />
                                </Link>
                              </div>
                            ))
                          )
                          : [1, 2, 3, 4].map(() => (<VideoTile />))
                      }
                    </GridView>
                  </div>
                )
            }
          </div>
        </Footer>
        <div className="bg-black">
          <div className="container py-m">
            <p className="text-on-background-variant">Made By Muhammad Muiz</p>
          </div>
        </div>
      </footer>
    </>
  );
};
