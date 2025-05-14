import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MovieController } from '../controllers/MovieController';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MovieController.fetchMovies("batman").then(setMovies);
  }, []);

  return (
    <div>
      <h1>Films</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.imdbID}>
            <Link to={`/movies/${movie.imdbID}`}>{movie.Title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
