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

  async fetchMovieDetail(id) {
    try {
      return await getMovieDetail(id);
    } catch (error) {
      console.error('Fout bij ophalen details:', error);
      return null;
    }
  },
};
