import React from "react";
import { Button } from "@/components/ui/button";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" absolute bg-gradient-to-r from-black w-screen aspect-auto h-screen pt-[15%] px-20">
      <h1 className=" text-3xl font-bold m-4 text-white">{title}</h1>
      <p className=" text-lg w-1/5 p-4 text-white">{overview}</p>
      <div>
        <Button
          size="lg"
          className="mr-4 bg-white text-black hover:bg-gray-300 hover:text-gray-800"
        >
          ▷ Play
        </Button>
        <Button size="lg" className=" hover:opacity-80">
          ⓘ more info
        </Button>
      </div>
    </div>
  );
};

export default VideoTitle;
