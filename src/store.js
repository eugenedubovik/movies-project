import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';
import { moviesApiMiddleware} from './middleware';

export const store = createStore(rootReducer,
    composeWithDevTools(
      applyMiddleware(
        moviesApiMiddleware,
      ),
    ));