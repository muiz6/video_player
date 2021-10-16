import React, { useRef } from 'react';

import styles from './seek_bar.module.css';

const calcSeek = (event, div, maxVal) => {
  const rect = div.getBoundingClientRect();
  const offset = event.clientX - rect.left;
  const length = rect.right - rect.left;
  return (offset / length) * maxVal;
};

export default ({
  max, value, value2, onSeek,
}) => {
  const divRef = useRef();

  return (
    <div
      ref={divRef}
      className={`position-relative ${styles['bar-container']}`}
      onClick={(event) => onSeek(calcSeek(event, divRef.current, max))}
      onKeyDown=""
      role="progressbar"
      tabIndex={0}
    >
      <div
        className={`${styles.bar} ${styles['secondary-bar']}`}
        style={{ width: `${(value2 / max) * 100}%` }}
      />
      <div
        className={`${styles.bar} ${styles['primary-bar']}`}
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  );
};
