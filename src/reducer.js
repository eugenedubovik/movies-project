import { GET_MOVIES_SUCCESS, GET_MOVIES_REQUEST, GET_MOVIES_FAILURE} from './actions';


const initialState = {
  data: [],
  loading: false,
  error: null,
};

export function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case GET_MOVIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: [...state.data, action.data],
      };
    }

    case GET_MOVIES_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.data,
      };
    }

    default: return state;
  }
}