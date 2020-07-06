import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles.module.css';
import {Button} from "../index"
import {GET_MOVIES_REQUEST} from "../index"


export const Form = ({
  onChange, onSubmit, autoFocus = false,
}) => {
  const inputRef = useRef(null);

  const { data, loading, error } = useSelector((state) => state);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (autoFocus) {
      inputRef.current.focus();
    }
  }, [autoFocus]);
 




 const onClick = (event)=>{
    dispatch({ type: GET_MOVIES_REQUEST, data: inputValue });
    event.preventDefault();
    console.log(data)

 }



  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <label for="findMovies"><p className={styles.p}>find your movie</p></label>
      <input ref={inputRef} value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} className={styles.input} placeholder="Search a movie..."  id="findMovies"/>
      <div className={styles.buttonContainer}>
        <span className={styles.span}>Search by</span>
        <Button type="button">Title</Button>
        <Button type="button">Genre</Button>
        <Button type="submit" onClick={onClick}>Search</Button>
        {/* <button type="button" className={styles.titleButton}>Title</button>
        <button type="button" className={styles.genreButton}>Genre</button>
        <button type="submit" className={styles.searchButton}>Search</button> */}
        </div>
      
    </form>
  );
};
