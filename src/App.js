import React from 'react';
import {Header, Footer, MainContainer, Banner} from './components'
import { useSelector} from 'react-redux';
import './App.css';

function App() {
    // const {
    //     data
    //   } = useSelector((state) => state);
  
  return (
    <div className="App">
      <Header/>
      <MainContainer>
         {/* {data.map((item)=> {
        return (
            <Banner 
            src={item.backgroundImage}
             title={item.title}
             release_date= {item.release_date}
             genres={item.genres} 
             />
             
        )
    })} */}
      </MainContainer>
      <Footer/>
    </div>
  );
}

export default App;
