import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
function Favorite() {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorite Movies</h2>
        <div className="movies-grid">
          {favorites && Array.isArray(favorites) ? (
            favorites.map((movie) => <MovieCard movie={movie} key={movie.id} />)
          ) : (
            <p>No movies available</p>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No Favorite Movie Yet</h2>
      <p>Start adding movies to your favorites list</p>
    </div>
  );
}

export default Favorite;
