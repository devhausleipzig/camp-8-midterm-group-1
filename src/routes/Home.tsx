import { Carroussel } from "../components/Carroussel";
import { Emogi } from "../components/Emogi";
import { SearchBar } from "../components/SearchBar";
import { UserInfo } from "../components/UserInfo";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { API } from "../components/API";
import { Movie } from "../types/api";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export async function moviesLoader({ params }: LoaderFunctionArgs) {
  return API.buildArray();
}

export function Home() {
  const data = useLoaderData() as Movie[];

  return (
    <div className="w-screen h-full grid grid-rows-6 scrollbar-hide">
      <div className="w-full text-white text-2xl flex justify-center items-center mt-5 ">
        <UserInfo name={""} image={""}></UserInfo>
      </div>
      <div className="w-full text-white text-2xl flex justify-center items-center">
        <SearchBar></SearchBar>
      </div>

      <div className="w-full h-full flex justify-around items-center flex-col gap-4">
        <div className="flex flex-row w-full px-5 justify-between">
          <div className="text-title text-white-dimmed">Genre</div>
          <div className="">
            <a
              className="text-description text-yellow flex flex-row items-center gap-4 opacity-50"
              href=""
            >
              <div>See All</div>
              <div className="">
                <ChevronRightIcon className="h-4" />
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full px-5">
          <a href="">
            <Emogi id={10749}></Emogi>
          </a>
          <a href="">
            <Emogi id={35}></Emogi>
          </a>
          <a href="">
            <Emogi id={27}></Emogi>
          </a>
          <a href="">
            <Emogi id={18}></Emogi>
          </a>
        </div>
      </div>
      <div className="row-span-3 flex flex-col justify-around">
        <div className="flex flex-col gap-5">
          <div className="w-full flex px-5">
            <p className="text-title">Upcoming movies</p>
          </div>
          <div className="w-full text-title flex justify-start items-center flex-col">
            <div className="w-screen">
              <Carroussel selection={data}></Carroussel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
