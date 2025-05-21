import { Link } from "react-router-dom";

export default function MovieDetailView({ movie }) {
  return (
    <div style={{ padding: 20 }}>
      <Link to="/">← Back to Search</Link>
      <h1>{movie.Title}</h1>
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <img src={movie.Poster} alt={movie.Title} style={{ maxWidth: 300 }} />
    </div>
  );
}
