import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const GptSearchBar = () => {
  return (
    <div className="z-30 absolute mt-52 left-1/2 transform -translate-x-1/2">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="search" placeholder="What are you looking for"  className=" w-11/12"/>
        <Button type="submit" className="bg-red-600 text-white hover:bg-red-700">Search</Button>
      </div>
    </div>
  );
};

export default GptSearchBar;
