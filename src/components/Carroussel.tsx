import { Movie } from "../types/api";

type Input = {
  Array: Movie[];
};

export function Carroussel({ Array }: Input) {
  return (
    <div className="flex flex-row gap-8 overflow-x-auto">
      {Array.map((film) => {
        return (
          <img
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt=""
            className="w-44 h-56 rounded-lg flex-grow-0 object-cover"
            key={film.id}
          />
        );
      })}
    </div>
  );
}
