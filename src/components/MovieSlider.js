import React from "react";
import MovieSingle from "./MovieSingle";

const MovieSlider = props => {
  const { movies, title } = props;
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {movies.map(movie => (
          <MovieSingle
            key={movie.title}
            image={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            title={movie.title}
            desc={movie.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieSlider;
