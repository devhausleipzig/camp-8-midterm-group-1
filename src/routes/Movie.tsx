import { MoviesType } from "./Movies";
import axios from "axios";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

export async function movieLoader({ params }: LoaderFunctionArgs) {
  const result = await axios.get<MoviesType>(
    `http://localhost:3000/movies/${params.movieId}`
  );
  return result.data;
}

export function Movie() {
  const movie = useLoaderData() as MoviesType;
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.content}</p>
    </div>
  );
}
