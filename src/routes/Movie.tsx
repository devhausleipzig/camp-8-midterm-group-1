import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { MovieDetail } from "../types/api";
import { API } from "../components/API";

export async function movieLoader({ params }: LoaderFunctionArgs) {
  const result = API.movieDetail(Number(params.movieId));
  return result;
}

export function Movie() {
  function minutesToHours(minutes: number) {
    const hours = Math.floor(minutes / 60);
    const Minutes = minutes % 60;

    return `${hours}h + ${Minutes}m`;
  }

  const mov = useLoaderData() as MovieDetail;

  return (
    <>
      <div className="flex flex-col h-screen pl-5 pr-5 ">
        <div className="flex flex-col gap-y-6">
          <img
            className="w-80 h-52 bg-cover border rounded-lg "
            src={"https://image.tmdb.org/t/p/w500" + mov.poster_path}
          />
          <p className="text-supertitle text-white pb-3">{mov.title}</p>
        </div>

        <div className="flex items-start gap-6">
          <p className="flex text-description text-white">
            {mov.release_date.split("-")[0]}
          </p>
          <p className="text-description text-white-dimmed  ">
            {mov.genres.map((x) => x.name).join("/")}
          </p>
          <p className="  text-description text-white-dimmed pb-3 ">
            {mov.runtime}
          </p>
        </div>
        <div className="flex ">
          <p className="  test-description text-white-dimmed">
            {mov.vote_average} Score
          </p>
        </div>

        <div className=" border border-1 border-white-dimmed"> </div>
        <div className="flex flex-col pt-4 ">
          <p className="text-white text-primary">Synopsis</p>
          <p className=" text-body text-white-dimmed pt-3">{mov.overview}</p>
          <a className="text-yellow text-body underline pt-1" href="">
            Read more
          </a>
        </div>
      </div>
    </>
  );
}
