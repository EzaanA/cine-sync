import Header from "./Header";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { removeUser } from "../utils/userSlice";
import { auth, signOut } from "../utils/firebase";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePlayingNow from "../utils/hooks/usePlayingNow";
import usePopularMovies from "../utils/hooks/usePopularMovies";
import useTopRatedMovies from "../utils/hooks/useTopRatedMovies";
import useUpcomingMovies from "../utils/hooks/useUpcomingMovies";

const Browse = () => {
  const [click, setClick] = useState(false);
  usePlayingNow();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    setClick(!click);
  };

  return (
    <>
      <div className="absolute bg-transparent w-full z-50">
        <div className=" flex justify-between p-2">
          <Header></Header>
          <div className=" flex">
            <DropdownMenu size="lg">
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={handlesignout}>
                  logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
    </>
  );
};

export default Browse;
