import React, { useEffect, useReducer } from "react";
import Card from "../../common/Card/Card";
import { getMovies } from "../../../services/moviesService";
import { getTvshows } from "../../../services/tvshowsService";
import {
  FETCH_MOVIE_TV_FAILURE,
  FETCH_MOVIE_TV_LOADING,
  FETCH_MOVIE_TV_SUCCESS,
} from "../../../reducers/moviesTVReducer/moviesTVTypes";
import {
  initialMoviesTVState,
  moviesTVReducer
} from "../../../reducers/moviesTVReducer/MoviesTVReducer";
import {CATEGORY_MOVIE, TOP_RATED} from '../../../utils/utils';


const TopRated = ({category = CATEGORY_MOVIE}) => {
  const [state, dispatch] = useReducer(moviesTVReducer, initialMoviesTVState);

  const fetchTopRatedMoviesTVShows = async () => {
    const params = {
      type: TOP_RATED,
      category
    };
    let moviesTvShows;
    if(category === CATEGORY_MOVIE){
       moviesTvShows = await getMovies(params);
    }else{
      moviesTvShows = await getTvshows(params);
    }
    if(moviesTvShows?.results?.length > 0){
      moviesTvShows = moviesTvShows?.results
      dispatch({ type: FETCH_MOVIE_TV_SUCCESS, payload: moviesTvShows });
    }else{
      if (moviesTvShows) {
        let movieObj = [];
        movieObj.push(moviesTvShows)
        dispatch({ type: FETCH_MOVIE_TV_SUCCESS, payload: movieObj });
      } 
    }
  };
  useEffect(() => {
    try {
      dispatch({ type: FETCH_MOVIE_TV_LOADING });
      fetchTopRatedMoviesTVShows();
    } catch (e) {
      dispatch({ type: FETCH_MOVIE_TV_FAILURE , error: e});
    }
  }, [category]);

  return (
    <div className="movies-list">
      
      {state?.loading && "Loading..."}
      {state?.moviesTV?.map((item) => {
        return <Card
          key={item?.id}
          title={item?.title}
          year={item?.release_date}
          genre={"action"}
          image={item?.poster_path}
        />;
      })}
    </div>
  );
};

export default TopRated;
