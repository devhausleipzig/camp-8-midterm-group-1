import { Link } from "react-router-dom";
import { Carroussel } from "../components/Carroussel";
import { useFavStore } from "../stores/FavouriteStore";
import { Movie } from "./Movie";

export function Bookmark() {
  const { movie } = useFavStore();

  return (
    <div className="text-white flex gap-5 p-5">
      {movie.map((x) => {
        return <Link to={`/movie/${x}`}>{x}</Link>;
      })}
    </div>
  );
}
