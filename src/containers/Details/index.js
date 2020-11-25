import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

function Details() {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getMovieData(id);

    return () => {
      setDetails({});
    };
  }, []);

  async function getMovieData(filmId) {
    const tmdbApiKey = "5aa78ab2c6dd19f4542a4b60feec6d0d";
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${filmId}?api_key=${tmdbApiKey}&language=fr-FR`
    );
    const data = await res.json();
    setDetails(data);
  }
  return (
    <article>
      {Object.entries(details).length ? (
        <div className="container-details" key={id}>
          <img
            src={`http://image.tmdb.org/t/p/w500/${details.poster_path}`}
            className="img"
          />
          <div className="details">
            <div className="title">
              <h1>{details.title}</h1>
              {details.genres.map((genre) => (
                <span key={genre.id} className="genre">
                  {genre.name}
                </span>
              ))}
            </div>
            <div>
              <p>{details.vote_average}</p>
              <p>Date de sortie : {details.release_date}</p>
            </div>
            <p className="overview">{details.overview}</p>
            <button>
              <Link to="/home">← Back to home</Link>
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </article>
  );
}

export default Details;

/* <article>
      <div className="container-details" key={id}>
        <img
          src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
          className={styles.img}
        />
        <div className="details">
          <div className="title">
            <h1>{title}</h1>
            {genres.map((genre) => (
              <span key={genre.id} className="genre">
                {genre.name}
              </span>
            ))}
          </div>
          <div>
            <p>{vote_average}</p>
            <p>Date de sortie : {release_date}</p>
          </div>
          <p className="overview">{overview}</p>
          <button>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </button>
        </div>
      </div>
    </article> */
