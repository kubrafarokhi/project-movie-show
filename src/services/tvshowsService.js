import axios from "axios";
import {API_KEY} from '../config/config';

export const getTvshows = async (params) => {
  let url = `https://api.themoviedb.org/3/${params.category}/${params.type}?api_key=${API_KEY}&language=en-US&page=1`;
  try {
    let res = await axios.get(url, params);
    return res.data;
  } catch (err) {
    await Promise.reject(err.response.data);
  }
};


export const getTrendingTVShows = async () => {
  let url = `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}&language=en-US&page=1`;
  try {
    let res = await axios.get(url);
    return res.data;
  } catch (err) {
    await Promise.reject(err.response.data);
  }
};