import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { MovieDetail } from "../types/api";
import { API } from "../components/API";

export async function movieLoader({ params }: LoaderFunctionArgs) {
  const result = API.movieDetail(Number(params.movieId));
  return result;
}

export function MovieDetail() {
  const mov = useLoaderData() as MovieDetail;

  return (
    <>
      <div>
        <img src={"https://image.tmdb.org/t/p/w500" + mov.poster_path} alt="" />
        <p>{mov.title}</p>
        <div>{mov.release_date}</div>
        <div>{mov.genres.map((x) => x.name)}</div>
        <div>{mov.runtime}</div>
        <div>{mov.vote_average}</div>
        <div>{mov.overview}</div>
        <div>{mov.backdrop_path}</div>
      </div>
    </>
  );
}
