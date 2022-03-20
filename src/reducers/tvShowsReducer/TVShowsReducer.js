import {
  FETCH_TVSHOWS_SUCCESS,
  FETCH_TVSHOWS_FAILURE,
  FETCH_TVSHOWS_LOADING,
} from "./tvshowsTypes";
export const initialTVShowsState = {
  loading: false,
  error: "",
  tvShows: [],
};

//not used currently but can be kept seperate state
export const tvShowsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_TVSHOWS_SUCCESS:
      console.log(action);
      return {
        loading: false,
        tvShows: action.payload,
        error: "",
      };
    case FETCH_TVSHOWS_FAILURE:
      return {
        loading: false,
        tvShows: [],
        error: action.error,
      };
    case FETCH_TVSHOWS_LOADING:
      return {
        loading: true,
        tvShows: [],
        error: "",
      };
    default:
      return state;
  }
};
