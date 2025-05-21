import { searchMovies, getMovieDetail } from '../api/movieService.js';

export const MovieController = {
  async fetchMovies(query) {
    try {
      return await searchMovies(query);
    } catch (error) {
      console.error('Fout bij zoeken naar films:', error);
      return [];
    }
  },

async fetchMovieDetail(imdbID) {
  try {
    return await getMovieDetail(imdbID);
  } catch (error) {
    console.error('Fout bij ophalen details:', error);
    throw new Error('Failed to load movie detail');
  }
}
};