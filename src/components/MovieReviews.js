import React from "react";

const Movie = ({ display_title, critics_pick, headline }) => {
  return (
    <div className="review">
      <h2>{display_title}</h2>
      <p>{critics_pick}</p>
      <p>{headline}</p>
    </div>
  );
};

const MovieList = ({ movies }) => {
  console.log(movies);
  return (
    <div className="review-list">
      {movies.map((movie) => (
        <Movie
          display_title={movie.display_title}
          critics_pick={movie.critics_pick}
          headline={movie.headline}
        />
      ))}
    </div>
  );
};

export default MovieList;
