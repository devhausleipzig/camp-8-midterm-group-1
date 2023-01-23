import { useFavStore } from "../stores/FavouriteStore";

export function Bookmark() {
  const { movie } = useFavStore();
  return (
    <div className="text-white">
      <h1>Bookmark</h1>
      {movie.map((item) => {
        return <p>{item}</p>;
      })}
    </div>
  );
}
