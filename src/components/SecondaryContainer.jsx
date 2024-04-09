import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black">
      <div className=" relative z-20 -mt-52">
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovies}
        ></MovieList>
        <MovieList
          title={"Trending"}
          movies={movies.nowPlayingMovies}
        ></MovieList>
        <MovieList
          title={"new releases"}
          movies={movies.nowPlayingMovies}
        ></MovieList>
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovies}
        ></MovieList>
      </div>
    </div>
  );
};

export default SecondaryContainer;
