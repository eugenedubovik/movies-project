import React, {useState} from 'react';
import styles from './styles.module.css';
import {Form} from "../index"

export const Header = ({ children }) => {
  // const [inputValue, setInputValue] = useState('');
  return (
    <div className={styles.header}>
      <div className={styles.overlay}>
        <h1 className={styles.h1}>netflixroulette</h1>
        <Form />
        {children}
      </div>
    </div>
  );
};
