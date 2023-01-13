import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Cast, Credits } from "../types/api";
import { API } from "./API";
import { CastCrew } from "./CastCrew";
import MoviesActionButton from "./MoviesActionButton";

export async function castLoader() {
  return API.castAndCrew(500);
}
type Input = {
  id: number;
};
export function CastAndCrew({ id }: Input) {
  const data = useLoaderData() as Credits;

  const [selected, setSelected] = useState("cast");
  return (
    <div className="bg-dark h-screen flex flex-col gap-6 overflow-y-auto">
      <CastCrew input={selected} setInput={setSelected} />
      <div className="flex relative">
        <Transition
          className="flex flex-col gap-4 w-full absolute top-0"
          show={selected == "cast"}
          enter="transition transform translate-x duration-[600ms]"
          enterFrom="opacity-5 -translate-x-60"
          enterTo="opacity-100 scale-100 translate-x-0"
          leave="transition transform duration-[600ms]"
          leaveFrom=""
          leaveTo={clsx("opacity-0 -translate-x-60")}
        >
          {data.cast.map((person, index) => {
            return (
              <MoviesActionButton
                image={
                  ("https://image.tmdb.org/t/p/w500" +
                    person.profile_path) as string
                }
                name={person.name}
                role={person.character}
                key={String(person.id) + "cast" + String(index)}
              />
            );
          })}
        </Transition>
        <div className="flex flex-col gap-4 w-full relative top-0" key={"Crew"}>
          <Transition
            className="flex flex-col gap-4 w-full absolute top-0"
            show={selected == "crew"}
            enter="transition transform translate-x duration-[600ms]"
            enterFrom={clsx("opacity-5 translate-x-60")}
            enterTo="opacity-100 scale-100 translate-x-0"
            leave="transition transform duration-[600ms]"
            leaveFrom=""
            leaveTo={clsx("opacity-5 translate-x-60")}
          >
            {data.crew.map((person, index) => {
              return (
                <MoviesActionButton
                  image={
                    ("https://image.tmdb.org/t/p/w500" +
                      person.profile_path) as string
                  }
                  name={person.name}
                  role={person.job}
                  key={String(person.id) + "crew" + String(index)}
                />
              );
            })}
          </Transition>
        </div>
      </div>
    </div>
  );
}
