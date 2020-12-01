import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const { overview, poster_path, title, id } = movie;
  return (
    <div className="container-movie">
      <img
        src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
        className="image-movie"
        alt="image-movie"
      />
      <div className="description">
        <div className="details truncateOverflow">
          <h2>{title}</h2>
          {overview && <p>{overview}</p>}
        </div>
        <button className="ctaDetails">
          <Link to={`details/${id}`}>en savoir plus</Link>
        </button>
      </div>
    </div>
  );
};

export default Movie;
