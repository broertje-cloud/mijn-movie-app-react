import MovieCard from "./MovieCard";

export default function MovieSearchView({ query, setQuery, onSearch, results }) {
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
        <button onClick={onSearch}>Search</button>
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
