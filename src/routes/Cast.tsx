import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { API } from "../components/API";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import { Credits } from "../types/api";
import { CastCrewButtons } from "../components/CastCrew";
import MoviesActionButton from "../components/CreditsProfile";

export async function castLoader({ params }: LoaderFunctionArgs) {
  const result = API.castAndCrew(Number(params.movieId));
  return result;
}

export function CastCrew() {
  const data = useLoaderData() as Credits;
  const [selected, setSelected] = useState("cast");
  return (
    <div className="w-screen h-screen px-5 pb-12 overflow-hidden">
      <div className="bg-dark h-full flex flex-col gap-6 overflow-y-auto scrollbar-hide ">
        <CastCrewButtons input={selected} setInput={setSelected} />
        <div className="flex relative">
          <Transition
            className="flex flex-col gap-4 w-full absolute top-0"
            show={selected == "cast"}
            enter="transition transform translate-x duration-[600ms]"
            enterFrom="opacity-5 -translate-x-60"
            enterTo="opacity-100 scale-100 translate-x-0"
            leave="transition transform duration-[600ms]"
            leaveFrom=""
            leaveTo="opacity-0 -translate-x-60"
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
          <div
            className="flex flex-col gap-4 w-full relative top-0"
            key={"Crew"}
          >
            <Transition
              className="flex flex-col gap-4 w-full absolute top-0"
              show={selected == "crew"}
              enter="transition transform translate-x duration-[600ms]"
              enterFrom="opacity-5 translate-x-60"
              enterTo="opacity-100 scale-100 translate-x-0"
              leave="transition transform duration-[600ms]"
              leaveFrom=""
              leaveTo="opacity-5 translate-x-60"
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
    </div>
  );
}
