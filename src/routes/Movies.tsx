import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

export type MoviesType = {
  id: number;
  title: string;
  content: string;
};

export async function MoviesLoader() {
  const result = await axios.get<MoviesType[]>("http://localhost:3000/movies");
  return result.data;
}

export function Movies() {
  const movies = useLoaderData() as MoviesType[];
  return (
    <div>
      <div className="flex flex-col gap-3">
        {movies.map((movie) => (
          <Link
            className="underline text-indigo-600"
            key={movie.id}
            to={`/movie/${movie.id}`}
          >
            {movie.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
