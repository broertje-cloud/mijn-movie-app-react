import axios from 'axios';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

export async function searchMovies(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      s: query,
    }
  });
  return response.data.Search || [];
}

export async function getMovieDetail(imdbID) {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      i: imdbID,
    }
  });
  return response.data;
}
