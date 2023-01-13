import { MoviesType } from "./Movies";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { API } from "../components/API";

export async function movieLoader({ params }: LoaderFunctionArgs) {
  const result = API.castAndCrew(params.)
}

export function Movie() {
  const movie = useLoaderData() as MoviesType;
  return (
    <div>
      <p>Hello world, I am a movie</p>
      <h2>{movie.id}</h2>
      <p className="bg-red">{movie.id}</p>
    </div>
  );
}
