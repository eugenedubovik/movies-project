import React from 'react';
import styles from './styles.module.css';

export const Header = ({ children }) => {
  return (
    <div className={styles.header}>
      <div className={styles.overlay}>{children}</div>
    </div>
  );
};
