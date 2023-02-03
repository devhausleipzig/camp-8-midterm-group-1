import {
  Link,
  LoaderFunctionArgs,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { MovieDetail } from "../types/api";
import { API } from "../components/API";
import clsx from "clsx";
import { Button, ButtonVariant } from "../components/Button";
import { HeartIcon as HeartOut } from "@heroicons/react/24/outline";
import { HeartIcon as HearFill } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useFavStore } from "../stores/FavouriteStore";

export async function movieLoader({ params }: LoaderFunctionArgs) {
  return API.movieDetail(Number(params.movieId));
}

export function Movie() {
  const { movie, setMovie, removeMov } = useFavStore();
  const navigate = useNavigate();
  const mov = useLoaderData() as MovieDetail;
  const [favourite, setFavourite] = useState(movie.includes(mov.id));
  const score = Math.floor(mov.vote_average * 10);

  function minutesToHours(minutes: number) {
    const hours = Math.floor(minutes / 60);
    const Minutes = minutes % 60;
    return `${hours}h ${Minutes}m`;
  }

  function onClick() {
    if (!favourite) {
      setMovie(mov.id);
    } else {
      removeMov(mov.id);
    }
    setFavourite(!favourite);
  }

  return (
    <div className="flex flex-col justify-between h-screen px-5">
      <div className="flex flex-col ">
        <div className="flex flex-col gap-y-6 relative">
          <img
            className="w-full h-52 border rounded-lg object-cover relative"
            src={"https://image.tmdb.org/t/p/w500" + mov.poster_path}
          />
          <div className="absolute bottom-16 right-2 " onClick={onClick}>
            {favourite ? (
              <HearFill className="h-10 text-pink" />
            ) : (
              <HeartOut className="h-10 text-pink" />
            )}
          </div>
          <p className="text-supertitle text-white pb-3">{mov.title}</p>
        </div>

        <div className="flex justify-between items-start">
          <div className="flex items-start gap-6">
            <p className="flex text-description text-white">
              {mov.release_date.split("-")[0]}
            </p>
            <p className="text-description text-white-dimmed  ">
              {mov.genres
                .filter((_, index) => index < 2)
                .map((x) => x.name)
                .join("/")}
            </p>
            <p className="  text-description text-white-dimmed pb-3 ">
              {String(minutesToHours(mov.runtime as number))}
            </p>
          </div>
          <p
            className={clsx(
              "text-description",
              score > 70 ? "text-green" : "text-red"
            )}
          >
            {String(score) + "%"}{" "}
            <span className="text-white-dimmed">Score</span>
          </p>
        </div>
        <div className="grid grid-cols-2 pb-4">
          <div className="flex gap-2 text-secondary">
            <div className="flex flex-col gap-2 text-white-dimmed-heavy">
              <p>Director:</p>
              <p>Writer:</p>
            </div>
            <div className="flex flex-col gap-2 text-white">
              <p>{mov.director}</p>
              <p className="text-description text-white">{mov.writer}</p>
            </div>
          </div>
          <div className="flex justify-end items-end">
            <Link
              to="castcrew"
              className="w-40 flex justify-center h-9 bg-dark-light text-white text-secondary rounded-lg py-3"
            >
              Cast & Crew
            </Link>
          </div>
        </div>

        <div className=" border border-1 border-white-dimmed"> </div>
        <div className="flex flex-col pt-4 ">
          <p className="text-white text-primary">Synopsis</p>
          <p className="leading-6 line-clamp-3 text-body text-white-dimmed pt-3">
            {mov.overview}
          </p>
          <a className="text-yellow text-body underline">Read more</a>
        </div>
      </div>
      <div className="mb-6">
        <Button
          variant={ButtonVariant.primary}
          label="Get Reservation"
          onClick={() => navigate("selecttime")}
        />
      </div>
    </div>
  );
}
