import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MovieController } from "../controllers/MovieController";

export default function MovieDetail() {
  const { imdbID } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDetail() {
      try {
        const data = await MovieController.fetchMovieDetail(imdbID);
        setMovie(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load movie details.");
      } finally {
        setLoading(false);
      }
    }

    fetchDetail();
  }, [imdbID]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return <p>No movie found.</p>;

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: 20 }}>
        ← Terug naar zoeken
      </button>

      <h1>{movie.Title}</h1>
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <img src={movie.Poster} alt={movie.Title} style={{ maxWidth: 300 }} />
    </div>
  );
}
