
import OneMovie from "./OneMovie";
export default function MoviesSection({ movies, loading, error }) {
  return (
    <div>
      {loading && !error && <p>Loading movies...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && movies.length > 0 && (
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {movies.map((movie) => (
            <li key={movie.id}>
               <OneMovie movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}