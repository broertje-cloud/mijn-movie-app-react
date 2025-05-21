import React, { useState } from "react";
import { MovieController } from "../controllers/MovieController";
import MovieCard from "../components/MovieCard";
import MovieSearchView from "../components/MovieSearchView";	

export default function MovieSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) return;
    const movies = await MovieController.fetchMovies(query);
    setResults(movies);
  };

  return (
    <MovieSearchView
      query={query}
      setQuery={setQuery}
      onSearch={handleSearch}
      results={results}
    />
  );
}
