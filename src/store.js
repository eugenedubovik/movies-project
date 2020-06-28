import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension';
import { moviesReducer } from './reducer'
 

export const store = createStore(moviesReducer)