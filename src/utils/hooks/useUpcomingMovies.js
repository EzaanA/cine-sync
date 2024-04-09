import { API_OPTIONS } from "../constants";
import { addUpcomingMovies } from "../movieSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getPlayingMovies();
  }, []);
};

export default useUpcomingMovies;
