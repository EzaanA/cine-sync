import Header from "./Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  return (
    <>
      <div className="absolute bg-transparent w-full z-50">
        <div className=" flex justify-between">
          <Header></Header>
          <DropdownMenu size="lg">
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem onClick={handlesignout}>
                logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
    </>
  );
};

export default Browse;
