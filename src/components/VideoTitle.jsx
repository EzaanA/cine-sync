import React from "react";
import { Button } from "@/components/ui/button";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" ml-2">
      <h1 className=" text-3xl font-bold m-4">{title}</h1>
      <p className=" text-lg w-1/5 p-4">{overview}</p>
      <div>
        <Button size="lg" className=" mr-4">
          {" "}
          ▷ Play
        </Button>
        <Button variant="outline" size="lg">
          ⓘ more info
        </Button>
      </div>
    </div>
  );
};

export default VideoTitle;
