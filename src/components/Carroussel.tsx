import { useState } from "react";
import { API, DataResponce } from "../components/API";

export function Carroussel() {
  const data = new API();
  const [Array, setArray] = useState<DataResponce[]>([]);
  data.BuildArray(setArray);

  return (
    <div className="flex flex-row gap-8 overflow-x-auto super-width">
      {Array.map((film) => {
        return (
          <img
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt=""
            className="w-44 h-56 rounded-lg flex-grow-0"
            key={film.id}
          />
        );
      })}
    </div>
  );
}
