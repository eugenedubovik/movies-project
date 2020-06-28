import {getMovies} from "./api"
import {GET_MOVIES_REQUEST, GET_MOVIES_FAILURE, GET_MOVIES_SUCCESS} from "./actions"

export const moviesApiMiddleware = (store)=>(next)=>(action)=>{
    if (action.type === GET_MOVIES_REQUEST) {
        getMovies(action.data).then((data) => {
          const {data: {title, release_date, poster_path, genres} } = data;
    
          store.dispatch({
            type: GET_MOVIES_SUCCESS,
            data: {
              title,
              release_date,
              backgroundImage: poster_path,
              genres,
            },
          });
        }).catch((error) => {
          store.dispatch({ type: GET_MOVIES_FAILURE, data: error.message });
        });
      }
    
      return next(action);
}