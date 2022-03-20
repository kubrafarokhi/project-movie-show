import React, { useEffect, useReducer } from "react";
import Card from "../../common/Card/Card";
import { getTrendingMovies } from "../../../services/moviesService";
import {
  FETCH_MOVIE_TV_FAILURE,
  FETCH_MOVIE_TV_LOADING,
  FETCH_MOVIE_TV_SUCCESS,
} from "../../../reducers/moviesTVReducer/moviesTVTypes";
import {
  initialMoviesTVState,
  moviesTVReducer
} from "../../../reducers/moviesTVReducer/MoviesTVReducer";
import { getTrendingTVShows } from "../../../services/tvshowsService";
import {CATEGORY_MOVIE, TRENDING} from '../../../utils/utils';

const TopRated = ({category = CATEGORY_MOVIE}) => {
  const [state, dispatch] = useReducer(moviesTVReducer, initialMoviesTVState);

  const fetchTopRatedMoviesTVShows = async () => {
    let moviesTvShows;
    if(category === CATEGORY_MOVIE){
       moviesTvShows = await getTrendingMovies();
    }else{
      moviesTvShows = await getTrendingTVShows();
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
