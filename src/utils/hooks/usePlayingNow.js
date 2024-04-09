import { API_OPTIONS } from "../constants";
import { addNowPlayingMovies } from "../movieSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const usePlayingNow = () => {
  const dispatch = useDispatch();
  const getPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getPlayingMovies();
  }, []);
};

export default usePlayingNow;
