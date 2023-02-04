import { previousDay } from "date-fns";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { API } from "../components/API";
import { Carroussel } from "../components/Carroussel";
import { useFavStore } from "../stores/FavouriteStore";
import { Movie } from "../types/api";

export function Bookmark() {
  const [data, setData] = useState<Movie[]>([]);
  const { movie } = useFavStore();
  useEffect(() => {
    movie.map(async (testMovie) => {
      const res = (await API.movieDetail(testMovie)) as Movie;
      setData((rev) => [...rev, res]);
    });
  }, []);

  const uniq = data.filter(function (item, pos) {
    return data.indexOf(item) == pos;
  });
  return (
    <div className="text-white gap-5 p-5 flex flex-wrap overflow-auto">
      {uniq.map((x) => {
        return (
          <Link
            to={"/movie/" + String(x.id)}
            className="object-cover snap-center"
          >
            <div className="w-44 h-56 rounded-lg flex-grow-0">
              <img
                src={`https://image.tmdb.org/t/p/w500${x.poster_path}`}
                alt=""
                className="w-44 h-56 rounded-lg flex-grow-0 object-cover snap-center"
                key={x.id}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
