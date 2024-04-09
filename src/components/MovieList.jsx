import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className=" w-screen overflow-x-scroll px-6 pb-4">
      <h1 className="text-2xl font-bold text-white">{title}</h1>
      <div className="flex">
        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
              ></MovieCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
