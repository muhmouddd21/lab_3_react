import { Link } from 'react-router-dom';
import "./../Styles/OneMovie.css";


export default function OneMovie({ movie }) {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const title = movie.title;
  return (
    <div className="movie-card">
      <div className="poster">

      <Link
        to={`/movies/${movie.id}`}
        state={{ title: movie.title, path: posterUrl,rateAverage:movie.vote_average,releaseDate:movie.release_date}}
      >
        <img src={posterUrl} alt={title} />
      </Link>
        <div className="menu-icon">⋯</div>
        <div className="rating-circle">
          <span>{movie.vote_average}</span>
        </div>
      </div>    
      <div className="info">
        <h3 className="title">{movie.title}</h3>
        <p className="release-date">{movie.release_date}</p>
      </div>
    </div>
  );
}