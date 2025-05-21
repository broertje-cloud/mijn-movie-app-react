import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MovieController } from '../controllers/MovieController';
import HomeView from '../components/HomeView';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MovieController.fetchMovies("batman").then(setMovies);
  }, []);

  return <HomeView movies={movies} />
}
