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
          title={"Top Rated"}
          movies={movies.topRatedMovies}
        ></MovieList>
        <MovieList title={"Popular"} movies={movies.popularMovies}></MovieList>
        <MovieList
          title={"Upcoming Movies"}
          movies={movies.upcomingMovies}
        ></MovieList>
      </div>
    </div>
  );
};

export default SecondaryContainer;



