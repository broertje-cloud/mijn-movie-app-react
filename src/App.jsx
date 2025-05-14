import { Routes, Route } from "react-router-dom";
import MovieSearch from "./pages/MovieSearch";
import MovieDetail from "./pages/MovieDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MovieSearch />} />
      <Route path="/detail/:imdbID" element={<MovieDetail />} />
    </Routes>
  );
}
