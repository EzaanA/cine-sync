import { API_OPTIONS } from "../constants";
import { addPopularMovies } from "../movieSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getPlayingMovies();
  }, []);
};

export default usePopularMovies;
