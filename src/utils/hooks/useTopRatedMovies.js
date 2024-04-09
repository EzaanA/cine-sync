import { API_OPTIONS } from "../constants";
import { addTopRatedMovies } from "../movieSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getPlayingMovies = async () => {
    const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getPlayingMovies();
  }, []);
};

export default useTopRatedMovies;
