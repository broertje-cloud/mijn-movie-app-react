import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MovieController } from "../controllers/MovieController";
import MovieDetailView from "../components/MovieDetailView";

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
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchDetail();
  }, [imdbID]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return <p>No movie found.</p>;

  return <MovieDetailView movie={movie}/>
}
