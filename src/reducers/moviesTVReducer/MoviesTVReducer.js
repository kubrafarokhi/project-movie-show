import {
  FETCH_MOVIE_TV_LOADING,
  FETCH_MOVIE_TV_SUCCESS,
  FETCH_MOVIE_TV_FAILURE,
} from "./moviesTVTypes";
export const initialMoviesTVState = {
  loading: false,
  error: "",
  moviesTV: [],
};

export const moviesTVReducer = (state, action) => {
  switch (action.type) {
    case FETCH_MOVIE_TV_SUCCESS:
      console.log(action);
      return {
        loading: false,
        moviesTV: action.payload,
        error: "",
      };
    case FETCH_MOVIE_TV_FAILURE:
      return {
        loading: false,
        moviesTV: [],
        error: action.error,
      };
    case FETCH_MOVIE_TV_LOADING:
      return {
        loading: true,
        moviesTV: [],
        error: "",
      };
    default:
      return state;
  }
};
