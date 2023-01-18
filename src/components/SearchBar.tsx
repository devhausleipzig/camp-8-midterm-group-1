import { useState } from "react";
import { API } from "./API";
import { Combobox } from "@headlessui/react";
import { Link } from "react-router-dom";
import { emojiIcons } from "./Emogi";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

type APIResponce = {
  title: string;
  genre: number[];
  id: number;
};

export function SearchBar() {
  const [result, setResult] = useState<APIResponce[]>([
    {
      title: "PLaceholder",
      genre: [0],
      id: 0,
    },
  ]);

  function checkGenres(inputs: number[]) {
    const keys = Object.keys(emojiIcons);
    let returnIcon = "420";
    inputs.reverse().map((number) => {
      if (keys.includes(String(number))) {
        returnIcon = String(number);
      }
    });
    return returnIcon;
  }
  async function searchResults(event: React.ChangeEvent<HTMLInputElement>) {
    setResult(await API.searchResult(event.target.value));
  }
  return (
    <div className="text-white-dimmed relative w-screen px-5">
      <Combobox value="Search">
        <Combobox.Input
          onChange={(event) => searchResults(event)}
          className="rounded-full w-full h-12 bg-dark-light text-body text-white-dimmed px-16"
        />
        <MagnifyingGlassIcon className="text-white-dimmed h-6 top-3 left-10 absolute" />

        <Combobox.Button className="absolute top-3 left-10 flex items-center pr-2"></Combobox.Button>
        <div className="absolute">
          <Combobox.Options className="mt-1 max-h-60 w-full overflow-auto rounded-lg bg-dark-light py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col gap-1">
            {result
              .filter((_, i) => i < 5)
              .map((film) => {
                return (
                  <Combobox.Option value={""} key={film.id} className="w-full">
                    <Link
                      to={`/movie/${String(film.id)}`}
                      className="flex pl-6 gap-5 bg-dark-light w-72"
                    >
                      <p className="text-white">
                        {emojiIcons[checkGenres(film.genre)].icon}
                      </p>
                      <p>{film.title}</p>
                    </Link>
                  </Combobox.Option>
                );
              })}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  );
}
