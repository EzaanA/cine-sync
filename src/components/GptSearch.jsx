import React from "react";
import GptSearchBar from "./GptSearchBar";
const GptSearch = () => {
  return (
    <div>
      <div className=" -z-10 absolute">
        <img
          src="src/assets/gpt-background.jpg"
          alt="bg-image"
          className=" h-screen w-screen"
        />
      </div>
      <GptSearchBar></GptSearchBar>
    </div>
  );
};

export default GptSearch;
