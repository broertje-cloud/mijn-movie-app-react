import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/detail/${movie.imdbID}`)}
      style={{
        cursor: "pointer",
        borderBottom: "1px solid #ccc",
        padding: "10px 0",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{ width: "80px", height: "auto" }}
      />
      <div style={{ marginLeft: "15px" }}>
        <h3 style={{ margin: 0 }}>{movie.Title}</h3>
        <p style={{ margin: 0 }}>{movie.Year}</p>
      </div>
    </div>
  );
}
