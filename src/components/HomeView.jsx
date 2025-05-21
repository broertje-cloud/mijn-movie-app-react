import { Link } from "react-router-dom";

export default function HomeView({ movies }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welkom bij de MovieApp</h1>
      <p>Gebruik de zoekbalk om een film te vinden.</p>

      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <Link to={`/detail/${movie.imdbID}`}>
              {movie.Title} ({movie.Year})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
