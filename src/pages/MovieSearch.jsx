import React, { useState } from "react";
import { MovieController } from "../controllers/MovieController";
import MovieCard from "../components/MovieCard";

export default function MovieSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) return;
    const movies = await MovieController.fetchMovies(query);
    setResults(movies);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Search Movies</h1>
      <div>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        {results.length > 0 ? (
          results.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <p>No results yet...</p>
        )}
      </div>
    </div>
  );
}
