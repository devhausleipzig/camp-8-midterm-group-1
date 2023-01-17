import { useEffect, useState } from "react";
import { API } from "./API";
import { Combobox, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
type APIResponce = {
  title: string;
  genre: number;
  id: number;
};
export function SearchBar() {
  const [selectedPerson, setSelectedPerson] = useState("Hello World");
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<APIResponce[]>([
    {
      title: "PLaceholder",
      genre: 0,
      id: 0,
    },
  ]);
  async function searchResults(event: React.ChangeEvent<HTMLInputElement>) {
    setResult(await API.searchResult(event.target.value));
    setQuery(event.target.value);
  }
  return (
    <div className="text-white-dimmed relative">
      <Combobox value="Search" onChange={setSelectedPerson}>
        <Combobox.Input
          onChange={(event) => searchResults(event)}
          className="rounded-full w-full h-12 bg-dark-light text-body text-white-dimmed px-16"
        />
        <Combobox.Button className="absolute top-3 left-6 flex items-center pr-2">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-white-dimmed"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </Combobox.Button>
        <div className="absolute">
          <Combobox.Options className="mt-1 max-h-60 w-full overflow-auto rounded-md bg-dark-light py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm flex flex-col gap-2">
            {result
              .filter((_, i) => i < 5)
              .map((film) => {
                return (
                  <Combobox.Option value={""} key={film.id}>
                    <Link
                      to={`/movie/${String(film.id)}`}
                      className="flex pl-6 gap-5 bg-dark-light"
                    >
                      <p>Im</p>
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
