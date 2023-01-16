import { Movie } from "../types/api";

type InputProps = {
  selection: Movie[];
};

export function Carroussel({ selection }: InputProps) {
  return (
    <div className="flex flex-row gap-8 overflow-x-auto snap-x scrollbar-hide">
      {selection.map((film) => {
        return (
          <img
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt=""
            className="w-44 h-56 rounded-lg flex-grow-0 object-cover snap-center"
            key={film.id}
          />
        );
      })}
    </div>
  );
}
