import React from 'react';
import styles from './footer.module.css';

export default ({ children }) => (
  <div className={styles.footer}>
    {children}
  </div>
);
