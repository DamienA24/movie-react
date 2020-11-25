import { useEffect, useState } from "react";

import Movie from "../../components/Movie";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies();
  }, []);

  async function getAllMovies() {
    try {
      const tmdbApiKey = "5aa78ab2c6dd19f4542a4b60feec6d0d";
      let movies = [];
      for (let i = 1; i <= 6; i++) {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${tmdbApiKey}&language=fr-FR&page=${i}`
        );
        const data = await res.json();
        movies = [...movies, ...data.results];
      }
      setMovies(movies);
    } catch (e) {
      console.log(e);
      return e;
    }
  }
  return (
    <main className="container-main">
      {movies.map((movie, id) => (
        <Movie movie={movie} key={id} />
      ))}
    </main>
  );
}

export default Home;
