import { useState } from "react";
import { API } from "../components/API";
import { Transition } from "@headlessui/react";
import clsx from "clsx";
import MoviesPageButton from "../components/MoviesPageButton";
import { Movie } from "../types/api";
import { Link, useLoaderData } from "react-router-dom";

export async function moviesArrayLoader() {
  return API.fourByFour();
}
export function Movies() {
  const movies = useLoaderData() as Movie[][];
  const [number, setNumber] = useState(0);
  const [previousValue, setPreviousValue] = useState(0);
  return (
    <div className="flex flex-col justify-around">
      <div className="relative bg-dark overflow-hidden">
        {movies.map((card, index) => {
          return (
            <div className="flex flex-col ">
              <div className=" flex flex-col items-center">
                <div className="h-28 "></div>
                <div className="absolute top-4 ">
                  <Transition
                    show={number == index}
                    enter="transition transform translate-x duration-[750ms]"
                    enterFrom={clsx(
                      "opacity-5 scale-50",
                      index < previousValue
                        ? "-translate-x-60"
                        : "translate-x-60"
                    )}
                    enterTo="opacity-100 scale-100 translate-x-0"
                    leave="transition transform duration-[750ms]"
                    leaveFrom=""
                    leaveTo={clsx(
                      "opacity-5 scale-50",
                      number < previousValue
                        ? "translate-x-60"
                        : "-translate-x-60"
                    )}
                    afterEnter={() => {
                      setPreviousValue(index);
                    }}
                    afterLeave={() => {
                      setPreviousValue(index);
                    }}
                  >
                    <div className="grid grid-rows-2 grid-cols-2 gap-x-5 gap-y-5">
                      {card.map((card) => {
                        return (
                          <Link to={`/movie/${String(card.id)}`}>
                            <img
                              src={`https://image.tmdb.org/t/p/w500${card?.poster_path}`}
                              alt=""
                              className="w-40 h-60 rounded-lg flex-grow-0"
                              key={card?.id}
                            />
                          </Link>
                        );
                      })}
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          );
        })}
        <MoviesPageButton inputNumber={number} setInputNumber={setNumber} />
      </div>
    </div>
  );
}
