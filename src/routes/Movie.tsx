import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { Credits, MovieDetail } from "../types/api";
import { API } from "../components/API";
import clsx from "clsx";

export async function movieLoader({ params }: LoaderFunctionArgs) {
  return API.movieDetail(Number(params.movieId));
}

export function Movie() {
  function minutesToHours(minutes: number) {
    const hours = Math.floor(minutes / 60);
    const Minutes = minutes % 60;
    return `${hours}h ${Minutes}m`;
  }

  const mov = useLoaderData() as MovieDetail;

  const score = Math.floor(mov.vote_average * 10);

  return (
    <>
      <div className="flex flex-col h-screen pl-5 pr-5 ">
        <div className="flex flex-col gap-y-6">
          <img
            className="w-full h-52 border rounded-lg image-center"
            src={"https://image.tmdb.org/t/p/w500" + mov.poster_path}
          />
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
          <div className="flex gap-3 text-secondary">
            <div className="flex flex-col gap-3 text-white-dimmed-heavy">
              <p>Director:</p>
              <p>Writer:</p>
            </div>
            <div className="flex flex-col gap-3 text-white">
              <p>{mov.director}</p>
              <p className="text-description text-white">{mov.writer}</p>
            </div>
          </div>
          <Link
            to="castcrew"
            className="w-full flex justify-center h-9 bg-dark-light text-white text-secondary rounded-lg py-3"
          >
            Cast and Crew
          </Link>
        </div>

        <div className=" border border-1 border-white-dimmed"> </div>
        <div className="flex flex-col pt-4 ">
          <p className="text-white text-primary">Synopsis</p>
          <p className=" text-body text-white-dimmed pt-3">{mov.overview}</p>
          <a
            className="text-yellow text-body underline pt-1"
            href={`https://www.imdb.com/title/${mov.imdb_id}/`}
          >
            Read more
          </a>
        </div>
      </div>
    </>
  );
}
