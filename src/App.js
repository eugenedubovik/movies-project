import React, { useState, useEffect } from 'react';
import {Header, Footer, MainContainer, Banner} from './components'
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import {getMovies} from "./api"
import {GET_MOVIES_SUCCESS} from "./actions"

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   getMovies().then((movies) => {
  //     dispatch({
  //       type: GET_MOVIES_SUCCESS,
  //       data: data,
  //     });
  //   });
  // }, [data, dispatch]);


    const {
        data
      } = useSelector((state) => state.moviesApp);
  
  return (
    <div className="App">
      <Header/>
      <MainContainer>
         {data.map((i)=> {
        return (
            <Banner 
            src={i.backgroundImage}
             title={i.title}
             release_date= {i.release_date}
             genres={i.genres} 
             />
             
        )
    })}
      </MainContainer>
      <Footer/>
    </div>
  );
}

export default App;
