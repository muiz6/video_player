import React from 'react';
import styles from './slider.module.css';

export default ({ children }) => (
  <div className="d-flex justify-content-center">
    {
      children.map((child) => (
        <div className="px-s">
          <div className={styles['animated-tile']}>
            {child}
          </div>
        </div>
      ))
    }
  </div>
);
